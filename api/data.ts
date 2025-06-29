import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        return await handleGet(req, res);
      case 'POST':
        return await handlePost(req, res);
      case 'PUT':
        return await handlePut(req, res);
      case 'DELETE':
        return await handleDelete(req, res);
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Helper function to verify admin authentication
function verifyAdmin(req) {
  return req.cookies.admin === 'true';
}

// GET handler - Read data
async function handleGet(req, res) {
  const { key, pattern } = req.query;

  try {
    if (key) {
      // Get specific key
      const value = await kv.get(key);
      return res.status(200).json({ key, value });
    } else if (pattern) {
      // Get keys matching pattern
      const keys = await kv.keys(pattern);
      const data = {};
      for (const k of keys) {
        data[k] = await kv.get(k);
      }
      return res.status(200).json(data);
    } else {
      // Get all keys (be careful with this in production)
      const keys = await kv.keys('*');
      const data = {};
      for (const k of keys) {
        data[k] = await kv.get(k);
      }
      return res.status(200).json(data);
    }
  } catch (error) {
    console.error('GET Error:', error);
    return res.status(500).json({ error: 'Failed to retrieve data' });
  }
}

// POST handler - Create new data
async function handlePost(req, res) {
  // Verify admin authentication
  if (!verifyAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized. Admin access required.' });
  }

  const { key, value, ttl } = JSON.parse(req.body ?? '{}');

  if (!key) {
    return res.status(400).json({ error: 'Key is required' });
  }

  try {
    // Check if key already exists
    const existing = await kv.get(key);
    if (existing !== null) {
      return res.status(409).json({ error: 'Key already exists. Use PUT to update.' });
    }

    // Set the key with optional TTL
    if (ttl) {
      await kv.set(key, value, { ex: ttl });
    } else {
      await kv.set(key, value);
    }

    return res.status(201).json({ success: true, key, value });
  } catch (error) {
    console.error('POST Error:', error);
    return res.status(500).json({ error: 'Failed to create data' });
  }
}

// PUT handler - Update existing data
async function handlePut(req, res) {
  // Verify admin authentication
  if (!verifyAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized. Admin access required.' });
  }

  const { key, value, ttl } = JSON.parse(req.body ?? '{}');

  if (!key) {
    return res.status(400).json({ error: 'Key is required' });
  }

  try {
    // Set the key (this will create or update)
    if (ttl) {
      await kv.set(key, value, { ex: ttl });
    } else {
      await kv.set(key, value);
    }

    return res.status(200).json({ success: true, key, value });
  } catch (error) {
    console.error('PUT Error:', error);
    return res.status(500).json({ error: 'Failed to update data' });
  }
}

// DELETE handler - Delete data
async function handleDelete(req, res) {
  // Verify admin authentication
  if (!verifyAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized. Admin access required.' });
  }

  const { key, pattern } = req.query;

  if (!key && !pattern) {
    return res.status(400).json({ error: 'Key or pattern is required' });
  }

  try {
    if (key) {
      // Delete specific key
      const result = await kv.del(key);
      if (result === 0) {
        return res.status(404).json({ error: 'Key not found' });
      }
      return res.status(200).json({ success: true, deleted: key });
    } else if (pattern) {
      // Delete keys matching pattern
      const keys = await kv.keys(pattern);
      if (keys.length === 0) {
        return res.status(404).json({ error: 'No keys found matching pattern' });
      }
      
      const deletedCount = await kv.del(...keys);
      return res.status(200).json({ 
        success: true, 
        deleted: keys, 
        count: deletedCount 
      });
    }
  } catch (error) {
    console.error('DELETE Error:', error);
    return res.status(500).json({ error: 'Failed to delete data' });
  }
}
