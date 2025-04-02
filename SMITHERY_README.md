# Todo App Smithery Integration

This document explains how to use the Smithery integration with the Todo App to enable AI assistants to interact with your todo list.

## What is Smithery?

Smithery is a tool that allows AI assistants like Claude to interact with APIs and services. It provides a way to define tools that the AI can use to perform actions on your behalf.

## Setup

1. **Start the Todo App API Server**

   ```bash
   cd todo-app/mcp-server
   npm install
   npm run build
   npm start
   ```

   This will start the API server on http://localhost:3001.

2. **Install Smithery**

   Follow the installation instructions for Smithery from the official documentation.

3. **Configure Smithery**

   Use the provided `smithery.json` file to configure Smithery:

   ```bash
   smithery load todo-app/smithery.json
   ```

## Using with AI Assistants

Once Smithery is configured with the todo app, you can ask AI assistants to interact with your todo list. Here are some example prompts:

- "Register a new account for me with username 'user123' and password 'securepass'"
- "Log in to my todo app with username 'demo' and password 'password'"
- "Show me my todo list"
- "Add a new task to buy groceries"
- "Mark the task about groceries as complete"
- "Delete the task about groceries"
- "Log out from my todo app"

## Available Tools

The Smithery configuration provides the following tools:

- **register** - Register a new user account
- **login** - Log in with existing credentials
- **logout** - Log out from the current session
- **get_todos** - Get the list of todos for the current user
- **add_todo** - Add a new todo
- **toggle_todo** - Toggle the completion status of a todo
- **delete_todo** - Delete a todo

## Authentication

The Smithery configuration handles authentication automatically:

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
- **Tool execution failures**: Check the error messages for details on what went wrong
