import React from 'react';
import { Table, Button, Tag, Space, Popconfirm, Tooltip, Typography, Badge } from 'antd';
import { DeleteOutlined, PlayCircleOutlined, EyeOutlined, RocketOutlined } from '@ant-design/icons';
import type { Task } from '../types/Task';

const { Text } = Typography;

interface TaskTableProps {
  tasks: Task[];
  loading: boolean;
  onDelete: (id: string) => void;
  onExecute: (id: string) => void;
  onViewOutput: (task: Task) => void;
}

export const TaskTable: React.FC<TaskTableProps> = ({
  tasks,
  loading,
  onDelete,
  onExecute,
  onViewOutput,
}) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      render: (id: string) => (
        <Badge count={id.slice(0, 6)} style={{ 
          backgroundColor: '#667eea',
          fontSize: '10px'
        }} />
      ),
    },
    {
      title: 'TASK NAME',
      dataIndex: 'name',
      key: 'name',
      width: 180,
      sorter: (a: Task, b: Task) => a.name.localeCompare(b.name),
      render: (name: string, record: Task) => (
        <div>
          <Text strong style={{ color: '#2d3748', fontSize: '14px' }}>
            {name}
          </Text>
          <br />
          <Text type="secondary" style={{ fontSize: '12px' }}>
            by {record.owner}
          </Text>
        </div>
      ),
    },
    {
      title: 'COMMAND',
      dataIndex: 'command',
      key: 'command',
      width: 250,
      render: (command: string) => (
        <Tooltip title={<pre style={{ margin: 0, background: 'transparent' }}>{command}</pre>} placement="topLeft">
          <div className="command-preview">
            {command}
          </div>
        </Tooltip>
      ),
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: Task['status']) => {
        const statusConfig = {
          running: { className: 'status-running', text: 'RUNNING' },
          completed: { className: 'status-completed', text: 'DONE' },
          failed: { className: 'status-failed', text: 'FAILED' },
          pending: { className: 'status-pending', text: 'PENDING' },
        };
        
        const config = statusConfig[status || 'pending'];
        return <span className={`status-badge ${config.className}`}>{config.text}</span>;
      },
    },
    {
      title: 'EXECUTIONS',
      dataIndex: 'executions',
      key: 'executions',
      width: 100,
      render: (executions: any[] = []) => (
        <div style={{ textAlign: 'center' }}>
          <Text strong style={{ color: '#667eea', fontSize: '16px' }}>
            {executions.length}
          </Text>
          <br />
          <Text type="secondary" style={{ fontSize: '11px' }}>
            runs
          </Text>
        </div>
      ),
    },
    {
      title: 'ACTIONS',
      key: 'actions',
      width: 200,
      render: (_: any, record: Task) => (
        <div className="action-buttons">
          <Tooltip title="Execute this task">
            <Button
              className="action-btn primary"
              icon={<RocketOutlined />}
              onClick={() => onExecute(record.id)}
              size="small"
            >
              Run
            </Button>
          </Tooltip>
          
          <Tooltip title="View execution output">
            <Button
              className="action-btn success"
              icon={<EyeOutlined />}
              onClick={() => onViewOutput(record)}
              size="small"
            >
              Output
            </Button>
          </Tooltip>

          <Popconfirm
            title="Delete Task"
            description="Are you sure you want to delete this task?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes, Delete"
            cancelText="Cancel"
            okType="danger"
          >
            <Tooltip title="Delete task">
              <Button
                className="action-btn danger"
                icon={<DeleteOutlined />}
                size="small"
              >
                Delete
              </Button>
            </Tooltip>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={tasks.map(task => ({ ...task, key: task.id }))}
      loading={loading}
      className="enhanced-table"
      pagination={{
        total: tasks.length,
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) => 
          `${range[0]}-${range[1]} of ${total} tasks`,
        size: 'default',
      }}
      scroll={{ x: 800 }}
      size="middle"
    />
  );
};