// GitHub API integration for content management
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;
  
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    return res.status(500).json({ 
      error: 'Missing GitHub configuration. Please set GITHUB_TOKEN, GITHUB_OWNER, and GITHUB_REPO environment variables.' 
    });
  }

  const github = new GitHubAPI(GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO);

  try {
    switch (req.method) {
      case 'GET':
        const data = await github.getContent();
        return res.status(200).json(data);

      case 'PUT':
        const { content, message } = req.body;
        if (!content) {
          return res.status(400).json({ error: 'Content is required' });
        }
        
        const result = await github.updateContent(content, message || 'Update content via admin panel');
        return res.status(200).json(result);

      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('GitHub API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to interact with GitHub API',
      details: error.message 
    });
  }
}

class GitHubAPI {
  constructor(token, owner, repo) {
    this.token = token;
    this.owner = owner;
    this.repo = repo;
    this.apiBase = 'https://api.github.com';
    this.filePath = 'data/content.json';
  }

  async makeRequest(url, options = {}) {
    const response = await fetch(`${this.apiBase}${url}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`GitHub API Error: ${response.status} - ${errorData.message || response.statusText}`);
    }

    return response.json();
  }

  async getContent() {
    try {
      const data = await this.makeRequest(`/repos/${this.owner}/${this.repo}/contents/${this.filePath}`);
      
      // Decode base64 content
      const content = Buffer.from(data.content, 'base64').toString('utf8');
      return {
        content: JSON.parse(content),
        sha: data.sha,
        lastModified: data.download_url ? new Date().toISOString() : null
      };
    } catch (error) {
      if (error.message.includes('404')) {
        // File doesn't exist, return default structure
        return {
          content: {
            speakers: [],
            events: [],
            testimonials: [],
            lastUpdated: new Date().toISOString()
          },
          sha: null,
          lastModified: null
        };
      }
      throw error;
    }
  }

  async updateContent(newContent, commitMessage) {
    // First, get the current file to get its SHA (required for updates)
    let currentSha = null;
    try {
      const current = await this.makeRequest(`/repos/${this.owner}/${this.repo}/contents/${this.filePath}`);
      currentSha = current.sha;
    } catch (error) {
      // File might not exist yet, that's okay
      if (!error.message.includes('404')) {
        throw error;
      }
    }

    // Add timestamp to content
    const contentWithTimestamp = {
      ...newContent,
      lastUpdated: new Date().toISOString()
    };

    // Encode content as base64
    const encodedContent = Buffer.from(JSON.stringify(contentWithTimestamp, null, 2)).toString('base64');

    const updateData = {
      message: commitMessage,
      content: encodedContent,
      branch: 'main' // or 'master' depending on your default branch
    };

    if (currentSha) {
      updateData.sha = currentSha;
    }

    const result = await this.makeRequest(`/repos/${this.owner}/${this.repo}/contents/${this.filePath}`, {
      method: 'PUT',
      body: JSON.stringify(updateData)
    });

    return {
      success: true,
      commit: result.commit,
      content: contentWithTimestamp
    };
  }
}
