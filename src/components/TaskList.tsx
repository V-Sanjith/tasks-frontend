import React from 'react';
import { Card, Empty, Typography } from 'antd';
import type{ Task } from '../types/Task';
import { TaskTable } from './TaskTable';

const { Text } = Typography;

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  onDelete: (id: string) => void;
  onExecute: (id: string) => void;
  onViewOutput: (task: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  loading,
  onDelete,
  onExecute,
  onViewOutput,
}) => {
  if (tasks.length === 0 && !loading) {
    return (
      <Card>
        <Empty
          description={
            <div>
              <Text type="secondary">No tasks found</Text>
              <br />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                Create your first task by clicking "Add Task"
              </Text>
            </div>
          }
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          imageStyle={{ height: 60 }}
        />
      </Card>
    );
  }

  return (
    <div aria-label="Tasks list">
      <TaskTable
        tasks={tasks}
        loading={loading}
        onDelete={onDelete}
        onExecute={onExecute}
        onViewOutput={onViewOutput}
      />
    </div>
  );
};