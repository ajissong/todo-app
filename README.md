# Todo List App

A simple, responsive todo list web application with user authentication and AI assistant integration.

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

## Technologies Used

- **Frontend**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - localStorage for client-side persistence

- **Backend**
  - Node.js
  - Express
  - TypeScript
  - File-based storage

- **AI Integration**
  - Smithery configuration

## Getting Started

### Frontend (Web App)

1. Open `index.html` in your browser to use the web interface

### Backend (API Server)

1. Install dependencies:
   ```bash
   cd todo-app/mcp-server
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

### AI Assistant

Once configured with Smithery, you can ask AI assistants to:
- "Show me my todo list"
- "Add a new task to buy groceries"
- "Mark the task about groceries as complete"
- "Delete the task about groceries"

## Data Storage

- **Web App**: Data is stored in your browser's localStorage
- **API Server**: Data is stored in JSON files in the `mcp-server/data` directory

## License

MIT License
