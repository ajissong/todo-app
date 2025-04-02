# Todo App REST API Server

This is a REST API server for the Todo List application. It provides backend functionality for the todo app, including user authentication and todo management.

## Features

- User authentication (login/register)
- Todo management (add, toggle, delete)
- Persistent storage of todos per user
- RESTful API endpoints

## Installation

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

The server will run on http://localhost:3001 by default.

## API Endpoints

### Authentication

- **POST /api/register** - Register a new user
  - Request body: `{ "username": "user", "password": "pass" }`
  - Response: `{ "message": "User registered successfully", "token": "auth_token" }`

- **POST /api/login** - Login with existing credentials
  - Request body: `{ "username": "user", "password": "pass" }`
  - Response: `{ "message": "Login successful", "token": "auth_token" }`

- **POST /api/logout** - Logout (requires authentication)
  - Headers: `Authorization: Bearer auth_token`
  - Response: `{ "message": "Logout successful" }`

### Todo Management

- **GET /api/todos** - Get all todos for the current user
  - Headers: `Authorization: Bearer auth_token`
  - Response: Array of todo objects

- **POST /api/todos** - Add a new todo
  - Headers: `Authorization: Bearer auth_token`
  - Request body: `{ "text": "Todo text" }`
  - Response: The created todo object

- **PUT /api/todos/:id** - Toggle todo completion status
  - Headers: `Authorization: Bearer auth_token`
  - Response: The updated todo object

- **DELETE /api/todos/:id** - Delete a todo
  - Headers: `Authorization: Bearer auth_token`
  - Response: `{ "message": "Todo deleted successfully", "todo": deleted_todo_object }`

## Integration with Smithery

To integrate this API with Smithery for AI assistants:

1. Create a Smithery configuration that connects to this API
2. Define tools that interact with the API endpoints
3. Configure the tools to handle authentication and data formatting

## Development

To make changes to the API server:

1. Edit the files in the `src` directory
2. Rebuild and restart the server:

```bash
npm run build
npm start
```

## Demo Account

For testing purposes, a demo account is pre-configured:

- Username: `demo`
- Password: `password`

This account comes with some sample todos.

## Data Storage

The server stores data in JSON files in the `data` directory:
- `users.json` - User accounts
- `todos.json` - Todo items for each user

In a production environment, you would typically use a database instead.
