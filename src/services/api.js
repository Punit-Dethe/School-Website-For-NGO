const API_BASE_URL = '/api';

class GitHubAPI {
  static async getContent() {
    const response = await fetch(`${API_BASE_URL}/github`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
  }

  static async updateContent(content, message) {
    const response = await fetch(`${API_BASE_URL}/github`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, message })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to update data: ${errorData.error}`);
    }

    return response.json();
  }
}

export const dataAPI = {
  get: GitHubAPI.getContent,
  update: GitHubAPI.updateContent
};
