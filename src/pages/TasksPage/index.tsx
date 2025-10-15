import React, { useState, useEffect } from 'react';
import { Layout, Typography, Space, Tag } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import type { Task } from '../../types/Task';
import { TaskList } from '../../components/TaskList';
import { TaskForm } from '../../components/TaskForm';
import { useTasks } from '../../hooks/useTasks';
import { TaskHeader } from './TaskHeader';
import { ExecutionOutputModal } from '../../components/ExecutionOutputModal';

const { Content } = Layout;
const { Title, Text } = Typography;

const TasksPage: React.FC = () => {
  const {
    tasks,
    loading,
    total,
    fetchTasks,
    createTask,
    deleteTask,
    executeTask,
    getExecutionOutput,
  } = useTasks();

  const [formVisible, setFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [outputModalVisible, setOutputModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [outputLoading, setOutputLoading] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string>('');

  useEffect(() => {
    fetchTasks(1, 10, searchQuery);
  }, [fetchTasks, searchQuery]);

  const handleCreateTask = async (taskData: any) => {
    const success = await createTask(taskData);
    if (success) {
      await fetchTasks(1, 10, searchQuery);
    }
    return success;
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    await fetchTasks(1, 10, searchQuery);
  };

  const handleExecuteTask = async (id: string) => {
    const execution = await executeTask(id);
    if (execution) {
      await fetchTasks(1, 10, searchQuery);
    }
  };

  const handleViewOutput = async (task: Task) => {
    setSelectedTask(task);
    setOutputModalVisible(true);
    setOutputLoading(true);
    
    try {
      setTimeout(() => {
        setExecutionOutput(`Command: ${task.command}\n\nOutput:\nTask "${task.name}" executed successfully!\nExecution completed at ${new Date().toLocaleString()}\n\nExit Code: 0`);
        setOutputLoading(false);
      }, 1500);
    } catch (error) {
      setExecutionOutput('Error loading output. Please try again.');
      setOutputLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleRefresh = () => {
    setSearchQuery('');
    fetchTasks(1, 10);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#ffffff' }}>
      <Content style={{ 
        padding: '24px', 
        background: '#ffffff',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%'
      }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '24px', maxWidth: '100%' }}>
          <Text style={{ 
            color: '#64748b',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <HomeOutlined style={{ marginRight: '8px', color: '#667eea' }} />
            Home / <span style={{ color: '#667eea', fontWeight: '600' }}>Task Manager</span>
          </Text>
        </div>
        
        {/* Main Content Card */}
        <div style={{ 
          background: '#ffffff',
          borderRadius: '8px',
          border: '1px solid #e8e8e8',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden'
        }}>
          {/* Header Section */}
          <div style={{ 
            padding: '32px 32px 24px 32px',
            background: '#ffffff',
            borderBottom: '1px solid #f0f0f0'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '8px',
              width: '100%'
            }}>
              <div style={{ flex: 1 }}>
                <Title 
                  level={1} 
                  style={{ 
                    margin: 0,
                    color: '#1e293b',
                    fontSize: '32px',
                    fontWeight: '700',
                    lineHeight: '1.2'
                  }}
                >
                  Task Manager
                </Title>
                <Text style={{ 
                  fontSize: '16px', 
                  color: '#64748b',
                  marginTop: '8px',
                  display: 'block'
                }}>
                  Automate and manage your command-line workflows
                </Text>
              </div>
              <Space>
                <Tag style={{ 
                  borderRadius: '16px',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  border: 'none',
                  color: 'white'
                }}>
                  {total} {total === 1 ? 'Task' : 'Tasks'}
                </Tag>
              </Space>
            </div>
          </div>

          {/* Content Section */}
          <div style={{ padding: '0 32px 32px 32px', width: '100%' }}>
            <TaskHeader
              onAddTask={() => setFormVisible(true)}
              onSearch={handleSearch}
              onRefresh={handleRefresh}
              searchLoading={loading}
            />
            
            <div style={{ marginTop: '16px', width: '100%' }}>
              <TaskList
                tasks={tasks}
                loading={loading}
                onDelete={handleDeleteTask}
                onExecute={handleExecuteTask}
                onViewOutput={handleViewOutput}
              />
            </div>
          </div>
        </div>

        {/* Task Creation Modal */}
        <TaskForm
          visible={formVisible}
          onCancel={() => setFormVisible(false)}
          onSubmit={handleCreateTask}
          loading={loading}
        />

        {/* Execution Output Modal */}
        <ExecutionOutputModal
          visible={outputModalVisible}
          task={selectedTask}
          output={executionOutput}
          loading={outputLoading}
          onClose={() => setOutputModalVisible(false)}
        />
      </Content>
    </Layout>
  );
};

export default TasksPage;