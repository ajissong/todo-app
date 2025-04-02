// Demo script for Todo App API
const todoService = require('./features/todo-service');

// Demo user credentials
const username = 'demo';
const password = 'password';

// Function to wait for a specified time
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Main demo function
async function runDemo() {
  try {
    console.log('Todo App API Demo');
    console.log('=================');
    
    // Start the API server first (in a separate terminal):
    // cd mcp-server && npm start
    
    console.log('\n1. Logging in as demo user...');
    const loginResult = await todoService.login(username, password);
    console.log('Login result:', loginResult);
    
    // Wait a moment
    await wait(1000);
    
    console.log('\n2. Getting todos...');
    const todos = await todoService.getTodos();
    console.log('Current todos:', todos);
    
    // Wait a moment
    await wait(1000);
    
    console.log('\n3. Adding a new todo...');
    const newTodo = await todoService.addTodo('Try out Smithery integration');
    console.log('New todo added:', newTodo);
    
    // Wait a moment
    await wait(1000);
    
    console.log('\n4. Getting updated todos...');
    const updatedTodos = await todoService.getTodos();
    console.log('Updated todos:', updatedTodos);
    
    // Wait a moment
    await wait(1000);
    
    // Find the ID of the todo we just added
    const todoId = newTodo.id;
    
    console.log(`\n5. Toggling todo with ID ${todoId}...`);
    const toggledTodo = await todoService.toggleTodo(todoId);
    console.log('Toggled todo:', toggledTodo);
    
    // Wait a moment
    await wait(1000);
    
    console.log('\n6. Getting final todos...');
    const finalTodos = await todoService.getTodos();
    console.log('Final todos:', finalTodos);
    
    // Wait a moment
    await wait(1000);
    
    console.log(`\n7. Deleting todo with ID ${todoId}...`);
    const deleteResult = await todoService.deleteTodo(todoId);
    console.log('Delete result:', deleteResult);
    
    // Wait a moment
    await wait(1000);
    
    console.log('\n8. Logging out...');
    const logoutResult = await todoService.logout();
    console.log('Logout result:', logoutResult);
    
    console.log('\nDemo completed successfully!');
    
  } catch (error) {
    console.error('Demo error:', error.message);
    console.error('Make sure the API server is running (cd mcp-server && npm start)');
  }
}

// Run the demo
runDemo();
