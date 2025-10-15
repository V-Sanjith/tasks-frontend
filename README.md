# 🚀 Task Manager - Modern Web Application

A sophisticated, responsive Task Manager web application built with **React 19**, **TypeScript**, and **Ant Design**. Manage and automate command-line tasks with an intuitive, accessible interface.

![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Ant Design](https://img.shields.io/badge/Ant%20Design-5.0+-orange)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple)

## ✨ Features

### 🎯 Core Functionality
- **✅ Complete CRUD Operations** - Create, read, update, and delete tasks
- **⚡ Command Execution** - Run shell commands directly from the UI
- **📊 Output Viewing** - Real-time command execution output
- **🔍 Advanced Search** - Filter tasks by name, owner, or command
- **🔄 Status Tracking** - Monitor task execution status (Running, Completed, Failed, Pending)

### 🎨 User Experience
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **♿ Accessibility First** - WCAG compliant with keyboard navigation and screen reader support
- **🎪 Modern UI** - Clean, professional interface with Ant Design components
- **⚡ Fast Performance** - Built with Vite for optimal development experience

### 🔧 Technical Excellence
- **🛡 Type Safety** - Full TypeScript implementation
- **🎯 State Management** - React Query for efficient data fetching and caching
- **📦 Component Architecture** - Reusable, maintainable component structure
- **🎪 Custom Hooks** - Modular business logic separation

## 🏗 Project Structure
tasks-frontend/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── TaskForm.tsx # Task creation/editing form
│ │ ├── TaskList.tsx # Tasks display component
│ │ ├── TaskTable.tsx # Main tasks table
│ │ └── ExecutionOutputModal.tsx # Command output viewer
│ ├── pages/ # Page components
│ │ └── TasksPage/ # Main application page
│ ├── hooks/ # Custom React hooks
│ │ └── useTasks.ts # Task management logic
│ ├── types/ # TypeScript definitions
│ │ └── Task.ts # Task and Execution interfaces
│ ├── api/ # API layer
│ │ ├── axios.ts # HTTP client configuration
│ │ └── tasksApi.ts # Task-related API calls
│ ├── utils/ # Utility functions
│ └── styles/ # Global styles
├── package.json # Dependencies and scripts
├── vite.config.ts # Vite configuration
└── tsconfig.json # TypeScript configuration


## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation & Development

1. **Clone the repository**
   git clone https://github.com/V-Sanjith/tasks-frontend.git
   cd tasks-frontend
2.**Install dependencies**
  npm install
3.**Start development server**
  npm run dev
4.**Open your browser**
  Navigate to http://localhost:3000
**Available Scripts**
  npm run dev          # Start development server
  npm run build        # Build for production
  npm run preview      # Preview production build
  npm run lint         # Run ESLint
**🛠 Technology Stack**
  **Frontend Framework**
    React 19 - Latest React with concurrent features
    TypeScript - Type-safe JavaScript
    React Router DOM - Client-side routing
  **UI & Styling**
  Ant Design - Enterprise-class UI design system
  CSS3 - Custom styles with modern features
  Responsive Design - Mobile-first approach
  **Development Tools**
  Vite - Next-generation frontend tooling
  ESLint - Code linting and quality
  Git - Version control
  **State Management**
  React Query - Server state management
  React Hooks - Local state management

**📖 Usage Guide**
**Creating a Task**
Click "New Task" button
Fill in task details:
Task Name: Descriptive name for your task
Owner: Person responsible for the task
Command: Shell command to execute (e.g., ls -la, npm start)
Click "Create Task" to save
Executing Tasks
Find your task in the table
Click "Run" to execute the command
View real-time output by clicking "Output"
Managing Tasks
Search: Use the search bar to filter tasks
Delete: Remove tasks with the delete button
Refresh: Sync with latest data using refresh button
**🔧 API Integration**
The application is designed to work with a RESTful backend API:
typescript
// Example API endpoints
GET    /api/tasks           # List tasks with pagination
POST   /api/tasks           # Create new task
GET    /api/tasks/:id       # Get specific task
DELETE /api/tasks/:id       # Delete task
POST   /api/tasks/:id/execute  # Execute task command
GET    /api/tasks/:id/executions/:executionId/output  # Get command output
**🎯 Key Components**
**useTasks Hook**
Centralized task management logic with React Query integration:
Data fetching and caching
Mutation handling (create, delete, execute)
Error handling and loading states
**TaskTable Component**
Feature-rich data table with:
Sortable columns
Responsive design
Action buttons with tooltips
Status indicators
**ExecutionOutputModal**
Command output viewer with:
Real-time output display
Loading states
Copy-to-clipboard functionality
**🌟 Accessibility Features**
Keyboard Navigation - Full keyboard support
Screen Reader - ARIA labels and semantic HTML
Color Contrast - WCAG 2.1 AA compliant
Focus Management - Logical focus order
Error Handling - Accessible error messages
**🤝 Contributing**
We welcome contributions! Please follow these steps:
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
Development Guidelines
Follow TypeScript best practices
Maintain component modularity
Write comprehensive documentation
Ensure accessibility compliance
**📝 License**
This project is licensed under the MIT License - see the LICENSE file for details.

**👥 Authors**
Sanjith V - V-Sanjith

<div align="center">
**⭐ Star this repository if you find it helpful!**
Built with ❤️ using React, TypeScript, and Ant Design

</div> ```
To add this README to your project:
Create the file in your project root as README.md

Add and commit it:

cmd
git add README.md
git commit -m "Add comprehensive project README"
git push origin main
Features of this README:
🎨 Professional Design - Badges, emojis, and clean formatting

📊 Comprehensive Coverage - All project aspects explained

🖼 Visual Structure - Placeholder images and clear sections

🚀 Quick Start Guide - Easy setup instructions

🔧 Technical Details - Architecture and component explanations

📱 Mobile-Friendly - Responsive markdown design

🎯 Feature Highlights - Clear value proposition
