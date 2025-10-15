import { api } from './axios';
import type{ Task, CreateTaskRequest, TaskResponse, Execution } from '../types/Task';

// Mock data for development
const mockTasks: Task[] = [
  {
    id: '1',
    name: 'List Files',
    owner: 'John Doe',
    command: 'ls -la',
    createTime: new Date().toISOString(),
    status: 'completed',
    executions: [
      {
        id: 'exec-1',
        taskId: '1',
        status: 'success',
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        exitCode: 0
      }
    ]
  },
  {
    id: '2', 
    name: 'Start Server',
    owner: 'Jane Smith',
    command: 'npm start',
    createTime: new Date().toISOString(),
    status: 'pending',
    executions: []
  }
];

let tasks = [...mockTasks]; // Clone for mutability

export const tasksApi = {
  // Get all tasks with pagination and search
  getTasks: async (page: number = 1, limit: number = 10, search?: string): Promise<TaskResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredTasks = tasks;
    
    // Apply search filter
    if (search && search.trim()) {
      const searchLower = search.toLowerCase();
      filteredTasks = tasks.filter(task => 
        task.name.toLowerCase().includes(searchLower) ||
        task.owner.toLowerCase().includes(searchLower) ||
        task.command.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply pagination
    const startIndex = (page - 1) * limit;
    const paginatedTasks = filteredTasks.slice(startIndex, startIndex + limit);
    
    return {
      tasks: paginatedTasks,
      total: filteredTasks.length
    };
  },

  // Get task by ID
  getTaskById: async (id: string): Promise<Task> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const task = tasks.find(t => t.id === id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  },

  // Create new task
  createTask: async (taskData: CreateTaskRequest): Promise<Task> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      ...taskData,
      createTime: new Date().toISOString(),
      status: 'pending',
      executions: []
    };
    
    tasks.unshift(newTask); // Add to beginning of array
    return newTask;
  },

  // Delete task
  deleteTask: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = tasks.findIndex(task => task.id === id);
    if (index > -1) {
      tasks.splice(index, 1);
    }
  },

  // Execute task
  executeTask: async (id: string): Promise<Execution> => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }
    
    const execution: Execution = {
      id: 'exec-' + Math.random().toString(36).substr(2, 9),
      taskId: id,
      status: 'success',
      startTime: new Date().toISOString(),
      endTime: new Date(Date.now() + 2000).toISOString(),
      exitCode: 0
    };
    
    if (!tasks[taskIndex].executions) {
      tasks[taskIndex].executions = [];
    }
    tasks[taskIndex].executions!.push(execution);
    tasks[taskIndex].status = 'completed';
    
    return execution;
  },

  // Get execution output
  getExecutionOutput: async (taskId: string, executionId: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
      return 'Task not found';
    }
    
    // Return mock output based on command
    if (task.command.includes('ls -la')) {
      return `total 64
drwxr-xr-x  12 user  staff   384 Jan 15 10:30 .
drwxr-xr-x   5 user  staff   160 Jan 10 14:22 ..
-rw-r--r--   1 user  staff   284 Jan 15 10:25 package.json
-rw-r--r--   1 user  staff   102 Jan 15 10:26 README.md
drwxr-xr-x   4 user  staff   128 Jan 15 10:28 src
drwxr-xr-x   3 user  staff    96 Jan 15 10:29 public

Command executed successfully!`;
    } else if (task.command.includes('npm start')) {
      return `> my-app@1.0.0 start
> node server.js

Server started on port 3000
Database connected successfully
Ready for requests...

Command executed successfully!`;
    }
    
    return `Command: ${task.command}\n\nOutput:\nTask "${task.name}" executed successfully!\nExecution completed at ${new Date().toLocaleString()}\n\nExit Code: 0`;
  },

  // Get task executions
  getTaskExecutions: async (taskId: string): Promise<Execution[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const task = tasks.find(t => t.id === taskId);
    return task?.executions || [];
  },
};