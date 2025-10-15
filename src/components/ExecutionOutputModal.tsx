import React from 'react';
import { Modal, Typography, Spin, Tag, Space, Button } from 'antd';
import type{ Task } from '../types/Task';

const { Title, Text } = Typography;

interface ExecutionOutputModalProps {
  visible: boolean;
  task: Task | null;
  output: string;
  loading: boolean;
  onClose: () => void;
}

export const ExecutionOutputModal: React.FC<ExecutionOutputModalProps> = ({
  visible,
  task,
  output,
  loading,
  onClose,
}) => {
  return (
    <Modal
      title={
        <Space>
          <span>Command Execution Output</span>
          {task && (
            <Tag color="blue" style={{ marginLeft: '8px' }}>
              {task.name}
            </Tag>
          )}
        </Space>
      }
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
      width="80%"
      style={{ top: 20 }}
      aria-labelledby="output-modal-title"
    >
      {task && (
        <div style={{ marginBottom: '16px' }}>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Text strong>Task: </Text>
            <Text>{task.name}</Text>
            
            <Text strong>Command: </Text>
            <Text code>{task.command}</Text>
            
            <Text strong>Owner: </Text>
            <Text>{task.owner}</Text>
          </Space>
        </div>
      )}
      
      <Title level={5} id="output-modal-title">
        Execution Output
      </Title>
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <Spin size="large" />
          <div style={{ marginTop: '16px' }}>Loading output...</div>
        </div>
      ) : (
        <pre
          style={{
            background: '#f5f5f5',
            padding: '16px',
            borderRadius: '6px',
            maxHeight: '400px',
            overflow: 'auto',
            fontSize: '12px',
            lineHeight: '1.4',
            border: '1px solid #d9d9d9',
            margin: 0,
          }}
          aria-live="polite"
          aria-label="Command execution output"
        >
          {output || 'No output available'}
        </pre>
      )}
    </Modal>
  );
};