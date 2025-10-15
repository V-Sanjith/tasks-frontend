import React from "react";
import type { Task } from "../../types/Task"; // <- fixed path
import { List, Card } from "antd";

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => (
  <List
    grid={{ gutter: 16, column: 2 }}
    dataSource={tasks}
    renderItem={(task) => (
      <List.Item key={task.id}>
        <Card title={task.name}>
          <p><strong>Owner:</strong> {task.owner}</p>
          <p><strong>Command:</strong> {task.command}</p>
          <p><strong>Executions:</strong> {task.executions?.length || 0}</p>
        </Card>
      </List.Item>
    )}
  />
);

export default TaskList;
