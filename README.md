

```markdown
 🚀 Task Manager - Modern Web Application

A sophisticated, responsive Task Manager web application built with React 19, TypeScript, and Ant Design. Manage and automate command-line tasks with an intuitive, accessible interface.


 ✨ Features

 🎯 Core Functionality
- ✅ Complete CRUD Operations - Create, read, update, and delete tasks
- ⚡ Command Execution - Run shell commands directly from the UI
- 📊 Output Viewing - Real-time command execution output
- 🔍 Advanced Search - Filter tasks by name, owner, or command
- 🔄 Status Tracking - Monitor task execution status (Running, Completed, Failed, Pending)

 🎨 User Experience
- 📱 Fully Responsive- Works seamlessly on desktop, tablet, and mobile
- ♿ Accessibility First - WCAG compliant with keyboard navigation and screen reader support
- 🎪 Modern UI - Clean, professional interface with Ant Design components
- ⚡ Fast Performance - Built with Vite for optimal development experience

🔧 Technical Excellence
- 🛡 Type Safety - Full TypeScript implementation
- 🎯 State Management - React Query for efficient data fetching and caching
- 📦 Component Architecture - Reusable, maintainable component structure
- 🎪 Custom Hooks - Modular business logic separation




 🚀 Quick Start

 Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

 Installation & Development

1. Clone the repository
   git clone https://github.com/V-Sanjith/tasks-frontend.git
   cd tasks-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`
<img width="1919" height="1077" alt="image" src="https://github.com/user-attachments/assets/702cd638-c2c5-4fec-9eac-a41f31265b2e" />

<img width="1919" height="915" alt="image" src="https://github.com/user-attachments/assets/2f90c0ce-b4a7-46d9-8a6a-493bbf792a18" />


### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🛠 Technology Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **React Router DOM** - Client-side routing

### UI & Styling
- **Ant Design** - Enterprise-class UI design system
- **CSS3** - Custom styles with modern features
- **Responsive Design** - Mobile-first approach

### Development Tools
- **Vite** - Next-generation frontend tooling
- **ESLint** - Code linting and quality
- **Git** - Version control

### State Management
- **React Query** - Server state management
- **React Hooks** - Local state management

## 📖 Usage Guide

### Creating a Task
1. Click **"New Task"** button
2. Fill in task details:
   - **Task Name**: Descriptive name for your task
   - **Owner**: Person responsible for the task
   - **Command**: Shell command to execute (e.g., `ls -la`, `npm start`)
3. Click **"Create Task"** to save

### Executing Tasks
1. Find your task in the table
2. Click **"Run"** to execute the command
3. View real-time output by clicking **"Output"**

### Managing Tasks
- **Search**: Use the search bar to filter tasks
- **Delete**: Remove tasks with the delete button
- **Refresh**: Sync with latest data using refresh button

## 🔧 API Integration

The application is designed to work with a RESTful backend API:

```typescript
// Example API endpoints
GET    /api/tasks           # List tasks with pagination
POST   /api/tasks           # Create new task
GET    /api/tasks/:id       # Get specific task
DELETE /api/tasks/:id       # Delete task
POST   /api/tasks/:id/execute  # Execute task command
GET    /api/tasks/:id/executions/:executionId/output  # Get command output
```

## 🎯 Key Components

### `useTasks` Hook
Centralized task management logic with React Query integration:
- Data fetching and caching
- Mutation handling (create, delete, execute)
- Error handling and loading states

### `TaskTable` Component
Feature-rich data table with:
- Sortable columns
- Responsive design
- Action buttons with tooltips
- Status indicators

### `ExecutionOutputModal`
Command output viewer with:
- Real-time output display
- Loading states
- Copy-to-clipboard functionality

## 🌟 Accessibility Features

- **Keyboard Navigation** - Full keyboard support
- **Screen Reader** - ARIA labels and semantic HTML
- **Color Contrast** - WCAG 2.1 AA compliant
- **Focus Management** - Logical focus order
- **Error Handling** - Accessible error messages

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain component modularity
- Write comprehensive documentation
- Ensure accessibility compliance


## 👥 Authors

- **Sanjith V** - [V-Sanjith](https://github.com/V-Sanjith)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Built with ❤️ using React, TypeScript, and Ant Design**

</div>
