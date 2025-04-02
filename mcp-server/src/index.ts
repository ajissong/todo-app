import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface User {
  username: string;
  password: string;
}

interface Session {
  username: string;
  token: string;
}

// In-memory storage (in a real app, this would be a database)
let users: User[] = [];
let todos: Record<string, Todo[]> = {};
let sessions: Session[] = [];

// Data file paths
const dataDir = join(__dirname, '..', 'data');
const usersFile = join(dataDir, 'users.json');
const todosFile = join(dataDir, 'todos.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Load data from files if they exist
function loadData() {
  try {
    if (fs.existsSync(usersFile)) {
      users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
    }
    if (fs.existsSync(todosFile)) {
      todos = JSON.parse(fs.readFileSync(todosFile, 'utf8'));
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

// Save data to files
function saveData() {
  try {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Initialize with demo data if no data exists
function initializeData() {
  if (users.length === 0) {
    users.push({ username: 'demo', password: 'password' });
    todos['demo'] = [
      { id: 1, text: 'Learn about REST APIs', completed: true },
      { id: 2, text: 'Build a todo app', completed: false }
    ];
    saveData();
  }
}

// Load data at startup
loadData();
initializeData();

// Create Express app
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Authentication middleware
function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  
  const session = sessions.find(s => s.token === token);
  if (!session) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  // Add user to request
  (req as any).user = { username: session.username };
  next();
}

// Routes

// Register
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  
  if (users.some(u => u.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }
  
  users.push({ username, password });
  todos[username] = [];
  saveData();
  
  // Create session
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  sessions.push({ username, token });
  
  res.status(201).json({ message: 'User registered successfully', token });
});

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  
  // Create session
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  sessions.push({ username, token });
  
  res.json({ message: 'Login successful', token });
});

// Logout
app.post('/api/logout', authenticate, (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  sessions = sessions.filter(s => s.token !== token);
  
  res.json({ message: 'Logout successful' });
});

// Get todos
app.get('/api/todos', authenticate, (req, res) => {
  const username = (req as any).user.username;
  res.json(todos[username] || []);
});

// Add todo
app.post('/api/todos', authenticate, (req, res) => {
  const username = (req as any).user.username;
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Todo text is required' });
  }
  
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false
  };
  
  if (!todos[username]) {
    todos[username] = [];
  }
  
  todos[username].push(newTodo);
  saveData();
  
  res.status(201).json(newTodo);
});

// Toggle todo
app.put('/api/todos/:id', authenticate, (req, res) => {
  const username = (req as any).user.username;
  const id = parseInt(req.params.id);
  
  if (!todos[username]) {
    return res.status(404).json({ error: 'No todos found' });
  }
  
  const todoIndex = todos[username].findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  todos[username][todoIndex].completed = !todos[username][todoIndex].completed;
  saveData();
  
  res.json(todos[username][todoIndex]);
});

// Delete todo
app.delete('/api/todos/:id', authenticate, (req, res) => {
  const username = (req as any).user.username;
  const id = parseInt(req.params.id);
  
  if (!todos[username]) {
    return res.status(404).json({ error: 'No todos found' });
  }
  
  const todoIndex = todos[username].findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  const deletedTodo = todos[username][todoIndex];
  todos[username].splice(todoIndex, 1);
  saveData();
  
  res.json({ message: 'Todo deleted successfully', todo: deletedTodo });
});

// Start server
app.listen(PORT, () => {
  console.log(`Todo API server running on http://localhost:${PORT}`);
});
