# Todo List App

A simple, responsive todo list web application with user authentication.

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

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- localStorage for data persistence

## Getting Started

### Local Development

1. Clone the repository
2. Open `index.html` in your browser

### Using GitHub Pages

The application is hosted on GitHub Pages and can be accessed at [https://YOUR_USERNAME.github.io/todo-app](https://YOUR_USERNAME.github.io/todo-app).

## How to Use

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

## Data Storage

All data is stored in your browser's localStorage:
- User accounts
- User sessions
- Todo items (per user)

**Note:** Clearing your browser data will remove all saved information.

## License

MIT License
