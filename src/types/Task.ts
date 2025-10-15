export interface Task {
  id: string;
  name: string;
  owner: string;
  command: string;
  createTime?: string;
  executions?: Execution[];
  status?: 'running' | 'completed' | 'failed' | 'pending';
}

export interface Execution {
  id: string;
  taskId: string;
  output?: string;
  status: 'success' | 'error' | 'running';
  startTime: string;
  endTime?: string;
  exitCode?: number;
}

export interface CreateTaskRequest {
  name: string;
  owner: string;
  command: string;
}

export interface TaskResponse {
  tasks: Task[];
  total: number;
}