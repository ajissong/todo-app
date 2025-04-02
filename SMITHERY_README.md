# Todo App Smithery Integration

This document explains how to use the Smithery integration with the Todo App to enable AI assistants to interact with your todo list.

## Project Structure

The Smithery integration consists of the following components:

- **Model Definition**: `model.xml` - Defines the data model and service operations
- **API Configuration**: `configurations/todo-api.json` - Configures the API endpoints
- **Service Implementation**: `features/todo-service.js` - Implements the service operations
- **Demo Script**: `demo.js` - Demonstrates how to use the service

## Setup

### 1. Start the Todo App API Server

```bash
cd todo-app/mcp-server
npm install
npm run build
npm start
```

This will start the API server on http://localhost:3001.

### 2. Install Dependencies

```bash
cd todo-app
npm install
```

### 3. Run the Demo

To test the integration without Smithery, you can run the demo script:

```bash
cd todo-app
node demo.js
```

This will demonstrate the full functionality of the todo service, including:
- Logging in
- Getting todos
- Adding a new todo
- Toggling a todo's completion status
- Deleting a todo
- Logging out

## Smithery Integration

### Installing Smithery

```bash
npm install -g smithery-cli
```

### Building the Smithery Project

```bash
cd todo-app
npx smith build
```

Note: The Smithery build process is still in development. If you encounter issues, you can use the service implementation directly as shown in the demo script.

## API Service

The todo service provides the following operations:

- **register(username, password)** - Register a new user account
- **login(username, password)** - Log in with existing credentials
- **logout()** - Log out from the current session
- **getTodos()** - Get the list of todos for the current user
- **addTodo(text)** - Add a new todo
- **toggleTodo(id)** - Toggle the completion status of a todo
- **deleteTodo(id)** - Delete a todo

## Authentication

The service handles authentication automatically:

1. When you register or log in, the authentication token is stored
2. Subsequent requests use this token for authentication
3. When you log out, the token is cleared

## Demo Account

For testing purposes, a demo account is pre-configured:

- Username: `demo`
- Password: `password`

This account comes with some sample todos.

## Troubleshooting

- **Authentication errors**: Make sure you've logged in before trying to access, add, or modify todos
- **Server connection issues**: Ensure the API server is running on http://localhost:3001
- **Module not found errors**: Make sure you've run `npm install` in both the `todo-app` and `todo-app/mcp-server` directories
