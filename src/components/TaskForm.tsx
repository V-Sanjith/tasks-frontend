import React from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import type { CreateTaskRequest } from '../types/Task';

interface TaskFormProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (taskData: CreateTaskRequest) => Promise<boolean>;
  loading?: boolean;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  visible,
  onCancel,
  onSubmit,
  loading = false,
}) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSubmitting(true);
      
      const success = await onSubmit(values);
      if (success) {
        form.resetFields();
        onCancel();
        message.success('Task created successfully!');
      } else {
        message.error('Failed to create task. Please try again.');
      }
    } catch (error) {
      console.error('Form validation failed:', error);
      // Validation errors are automatically shown by Ant Design
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  // Reset form when modal opens/closes
  React.useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [visible, form]);

  return (
    <Modal
      title="Create New Task"
      open={visible}
      onCancel={handleCancel}
      onOk={handleSubmit}
      footer={[
        <Button key="cancel" onClick={handleCancel} disabled={submitting}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={submitting}
          onClick={handleSubmit}
        >
          Create Task
        </Button>,
      ]}
      aria-labelledby="task-form-title"
      aria-describedby="task-form-description"
    >
      <Form
        form={form}
        layout="vertical"
        name="taskForm"
        requiredMark="optional"
        disabled={submitting}
      >
        <Form.Item
          label="Task Name"
          name="name"
          rules={[
            { required: true, message: 'Please enter a task name' },
            { min: 2, message: 'Task name must be at least 2 characters' },
            { max: 50, message: 'Task name must be less than 50 characters' },
          ]}
        >
          <Input 
            placeholder="Enter task name" 
            aria-required="true"
            aria-describedby="task-name-help"
            disabled={submitting}
          />
        </Form.Item>

        <Form.Item
          label="Owner"
          name="owner"
          rules={[
            { required: true, message: 'Please enter an owner name' },
            { min: 2, message: 'Owner name must be at least 2 characters' },
            { max: 50, message: 'Owner name must be less than 50 characters' },
          ]}
        >
          <Input 
            placeholder="Enter owner name" 
            aria-required="true"
            disabled={submitting}
          />
        </Form.Item>

        <Form.Item
          label="Command"
          name="command"
          rules={[
            { required: true, message: 'Please enter a command' },
            { min: 1, message: 'Command cannot be empty' },
            { max: 500, message: 'Command must be less than 500 characters' },
          ]}
          extra="Enter the command to be executed"
        >
          <Input.TextArea
            rows={4}
            placeholder="Enter command (e.g., ls -la, npm start, echo 'Hello World', etc.)"
            aria-required="true"
            aria-describedby="command-help"
            disabled={submitting}
            showCount
            maxLength={500}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};