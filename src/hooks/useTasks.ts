import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type{ Task, CreateTaskRequest, Execution } from '../types/Task';
import { tasksApi } from '../api/tasksApi';
import { message } from 'antd';

export const useTasks = () => {
  const [executions, setExecutions] = useState<Record<string, Execution[]>>({});
  const queryClient = useQueryClient();

  // Using React Query for tasks
  const { 
    data: tasksData, 
    isLoading: loading, 
    refetch,
    error 
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => tasksApi.getTasks(1, 10),
    initialData: { tasks: [], total: 0 },
  });

  const tasks = tasksData?.tasks || [];
  const total = tasksData?.total || 0;

  // Create task mutation
  const createTaskMutation = useMutation({
    mutationFn: tasksApi.createTask,
    onSuccess: (newTask) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      message.success(`Task "${newTask.name}" created successfully!`);
    },
    onError: (error: any) => {
      console.error('Create task error:', error);
      message.error('Failed to create task. Please try again.');
    },
  });

  // Delete task mutation
  const deleteTaskMutation = useMutation({
    mutationFn: tasksApi.deleteTask,
    onSuccess: (_, taskId) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      message.success('Task deleted successfully!');
    },
    onError: (error: any) => {
      console.error('Delete task error:', error);
      message.error('Failed to delete task. Please try again.');
    },
  });

  // Execute task mutation
  const executeTaskMutation = useMutation({
    mutationFn: tasksApi.executeTask,
    onSuccess: (execution, taskId) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      message.success('Task execution started successfully!');
    },
    onError: (error: any, taskId) => {
      console.error('Execute task error:', error);
      message.error('Failed to execute task. Please try again.');
    },
  });

  const fetchTasks = useCallback(async (page: number = 1, limit: number = 10, search?: string) => {
    try {
      await refetch();
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }, [refetch]);

  const createTask = useCallback(async (taskData: CreateTaskRequest): Promise<boolean> => {
    try {
      await createTaskMutation.mutateAsync(taskData);
      return true;
    } catch (error) {
      console.error('Error in createTask:', error);
      return false;
    }
  }, [createTaskMutation]);

  const deleteTask = useCallback(async (id: string): Promise<boolean> => {
    try {
      await deleteTaskMutation.mutateAsync(id);
      return true;
    } catch (error) {
      console.error('Error in deleteTask:', error);
      return false;
    }
  }, [deleteTaskMutation]);

  const executeTask = useCallback(async (id: string): Promise<Execution | null> => {
    try {
      const result = await executeTaskMutation.mutateAsync(id);
      return result;
    } catch (error) {
      console.error('Error in executeTask:', error);
      return null;
    }
  }, [executeTaskMutation]);

  const fetchExecutions = useCallback(async (taskId: string) => {
    try {
      const taskExecutions = await tasksApi.getTaskExecutions(taskId);
      setExecutions(prev => ({
        ...prev,
        [taskId]: taskExecutions,
      }));
    } catch (error) {
      console.error('Error fetching executions:', error);
    }
  }, []);

  const getExecutionOutput = useCallback(async (taskId: string, executionId: string): Promise<string> => {
    try {
      const output = await tasksApi.getExecutionOutput(taskId, executionId);
      return output;
    } catch (error) {
      console.error('Error fetching execution output:', error);
      return 'Failed to load output. Please try again.';
    }
  }, []);

  return {
    tasks,
    loading: loading || createTaskMutation.isPending,
    total,
    executions,
    error,
    fetchTasks,
    createTask,
    deleteTask,
    executeTask,
    fetchExecutions,
    getExecutionOutput,
  };
};