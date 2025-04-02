// Todo Service Implementation
const axios = require('axios');

// Base URL for the API
const baseUrl = 'http://localhost:3001';

// Authentication token
let authToken = '';

// Set authentication token
function setAuthToken(token) {
  authToken = token;
}

// Get authentication headers
function getAuthHeaders() {
  return authToken ? { Authorization: `Bearer ${authToken}` } : {};
}

// Register a new user
async function register(username, password) {
  try {
    const response = await axios.post(`${baseUrl}/api/register`, {
      username,
      password
    });
    
    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    throw error;
  }
}

// Login with existing credentials
async function login(username, password) {
  try {
    const response = await axios.post(`${baseUrl}/api/login`, {
      username,
      password
    });
    
    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
}

// Logout
async function logout() {
  try {
    const response = await axios.post(
      `${baseUrl}/api/logout`,
      {},
      { headers: getAuthHeaders() }
    );
    
    setAuthToken('');
    
    return response.data;
  } catch (error) {
    console.error('Logout error:', error.response?.data || error.message);
    throw error;
  }
}

// Get all todos
async function getTodos() {
  try {
    const response = await axios.get(
      `${baseUrl}/api/todos`,
      { headers: getAuthHeaders() }
    );
    
    return response.data;
  } catch (error) {
    console.error('Get todos error:', error.response?.data || error.message);
    throw error;
  }
}

// Add a new todo
async function addTodo(text) {
  try {
    const response = await axios.post(
      `${baseUrl}/api/todos`,
      { text },
      { headers: getAuthHeaders() }
    );
    
    return response.data;
  } catch (error) {
    console.error('Add todo error:', error.response?.data || error.message);
    throw error;
  }
}

// Toggle todo completion status
async function toggleTodo(id) {
  try {
    const response = await axios.put(
      `${baseUrl}/api/todos/${id}`,
      {},
      { headers: getAuthHeaders() }
    );
    
    return response.data;
  } catch (error) {
    console.error('Toggle todo error:', error.response?.data || error.message);
    throw error;
  }
}

// Delete a todo
async function deleteTodo(id) {
  try {
    const response = await axios.delete(
      `${baseUrl}/api/todos/${id}`,
      { headers: getAuthHeaders() }
    );
    
    return response.data;
  } catch (error) {
    console.error('Delete todo error:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = {
  register,
  login,
  logout,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo
};
