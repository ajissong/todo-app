# Todo List App

A simple, responsive todo list web application with user authentication, API server, and AI assistant integration.

## Features

- **User Authentication**
  - Register new accounts
  - Login with existing accounts
  - Secure password handling
  - Automatic login persistence

- **Todo Management**
  - Add new tasks
  - Mark tasks as complete/incomplete
  - Delete tasks
  - Tasks are saved per user
  - Automatic saving to localStorage

- **User Interface**
  - Clean, responsive design
  - Task statistics (total and completed)
  - Mobile-friendly layout

- **API Server**
  - RESTful API endpoints
  - User authentication
  - Todo management
  - Persistent storage

- **AI Assistant Integration**
  - Smithery configuration for AI assistants
  - Tools for managing todos through AI

## Components

This project consists of three main components:

1. **Web Frontend** (`index.html`): Browser-based UI with localStorage persistence
2. **API Server** (`mcp-server/`): Express server with RESTful endpoints
3. **Smithery Integration** (`model.xml`, `features/`, etc.): AI assistant integration

## Getting Started

### Frontend (Web App)

1. Open `index.html` in your browser to use the web interface

### Backend (API Server)

1. Install dependencies:
   ```bash
   cd mcp-server
   npm install
   ```

2. Build the TypeScript code:
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The server will run on http://localhost:3001

### Demo Script

To test the API service without using the web interface:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the demo script:
   ```bash
   node demo.js
   ```

   This will demonstrate the full functionality of the todo service.

### AI Integration (Smithery)

See [SMITHERY_README.md](SMITHERY_README.md) for detailed instructions on setting up and using the Smithery integration.

## How to Use

### Web Interface

1. **Register/Login**
   - Create a new account or login with existing credentials
   - Your session will be remembered until you logout

2. **Managing Tasks**
   - Add tasks using the input field at the top
   - Mark tasks as complete by clicking the "Complete" button
   - Undo completed tasks by clicking the "Undo" button
   - Remove tasks by clicking the "Delete" button

3. **Logout**
   - Click the "Logout" button to end your session

### API Endpoints

The API server provides endpoints for:
- User registration and authentication
- Todo management (get, add, toggle, delete)

See the [API Server README](mcp-server/README.md) for detailed documentation.

### API Service

The JavaScript service provides the following operations:
- `register(username, password)` - Register a new user account
- `login(username, password)` - Log in with existing credentials
- `logout()` - Log out from the current session
- `getTodos()` - Get the list of todos for the current user
- `addTodo(text)` - Add a new todo
- `toggleTodo(id)` - Toggle the completion status of a todo
- `deleteTodo(id)` - Delete a todo

### AI Assistant

Once configured with Smithery, you can ask AI assistants to:
- "Show me my todo list"
- "Add a new task to buy groceries"
- "Mark the task about groceries as complete"
- "Delete the task about groceries"

## Data Storage

- **Web App**: Data is stored in your browser's localStorage
- **API Server**: Data is stored in JSON files in the `mcp-server/data` directory

## Demo Account

For testing purposes, a demo account is pre-configured:

- Username: `demo`
- Password: `password`

This account comes with some sample todos.

## License

MIT License
