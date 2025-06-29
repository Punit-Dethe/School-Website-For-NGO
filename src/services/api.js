// Mock API service that simulates backend behavior
// In a real app, this would make actual HTTP requests to your backend

const API_BASE_URL = '/api';

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API class
class MockAPI {
  constructor() {
    this.storage = localStorage;
  }

  async get(key) {
    await delay(300); // Simulate network delay
    
    if (key) {
      const value = this.storage.getItem(key);
      return {
        key,
        value: value ? JSON.parse(value) : null
      };
    }
    
    // Return all data if no key specified
    const allData = {};
    for (let i = 0; i < this.storage.length; i++) {
      const storageKey = this.storage.key(i);
      allData[storageKey] = JSON.parse(this.storage.getItem(storageKey));
    }
    return allData;
  }

  async post(key, value) {
    await delay(300); // Simulate network delay
    
    if (!key) {
      throw new Error('Key is required');
    }

    // Check if key already exists
    const existing = this.storage.getItem(key);
    if (existing !== null) {
      throw new Error('Key already exists. Use PUT to update.');
    }

    this.storage.setItem(key, JSON.stringify(value));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('dataUpdated', { 
      detail: { key, value, action: 'create' } 
    }));

    return { success: true, key, value };
  }

  async put(key, value) {
    await delay(300); // Simulate network delay
    
    if (!key) {
      throw new Error('Key is required');
    }

    this.storage.setItem(key, JSON.stringify(value));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('dataUpdated', { 
      detail: { key, value, action: 'update' } 
    }));

    return { success: true, key, value };
  }

  async delete(key) {
    await delay(300); // Simulate network delay
    
    if (!key) {
      throw new Error('Key is required');
    }

    const existed = this.storage.getItem(key) !== null;
    if (!existed) {
      throw new Error('Key not found');
    }

    this.storage.removeItem(key);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('dataUpdated', { 
      detail: { key, action: 'delete' } 
    }));

    return { success: true, deleted: key };
  }
}

const mockAPI = new MockAPI();

// API functions that match the expected interface
export const dataAPI = {
  // GET /api/data?key=speakers
  get: async (key) => {
    try {
      return await mockAPI.get(key);
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  },

  // POST /api/data
  create: async (key, value) => {
    try {
      return await mockAPI.post(key, value);
    } catch (error) {
      throw new Error(`Failed to create data: ${error.message}`);
    }
  },

  // PUT /api/data
  update: async (key, value) => {
    try {
      return await mockAPI.put(key, value);
    } catch (error) {
      throw new Error(`Failed to update data: ${error.message}`);
    }
  },

  // DELETE /api/data
  delete: async (key) => {
    try {
      return await mockAPI.delete(key);
    } catch (error) {
      throw new Error(`Failed to delete data: ${error.message}`);
    }
  }
};

// Custom fetcher for SWR
export const fetcher = async (url) => {
  const urlObj = new URL(url, window.location.origin);
  const key = urlObj.searchParams.get('key');
  
  if (url.includes('/api/data')) {
    return await dataAPI.get(key);
  }
  
  throw new Error(`Unknown API endpoint: ${url}`);
};

export default dataAPI;
