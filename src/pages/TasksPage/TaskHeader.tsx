import React from 'react';
import { Button, Input, Space, Tooltip, Typography } from 'antd';
import { PlusOutlined, SearchOutlined, ReloadOutlined, FilterOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Text } = Typography;

interface TaskHeaderProps {
  onAddTask: () => void;
  onSearch: (value: string) => void;
  onRefresh: () => void;
  searchLoading?: boolean;
}

export const TaskHeader: React.FC<TaskHeaderProps> = ({
  onAddTask,
  onSearch,
  onRefresh,
  searchLoading = false,
}) => {
  const handleSearch = (value: string) => {
    onSearch(value);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
      padding: '20px 0',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Tooltip title="Create a new automation task" placement="bottom">
          <Button
            className="glow-button"
            icon={<PlusOutlined />}
            onClick={onAddTask}
            size="large"
            style={{
              padding: '0 24px',
              height: '44px',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            New Task
          </Button>
        </Tooltip>
        
        <Text type="secondary" style={{ fontSize: '12px', marginLeft: '8px' }}>
          Automate your workflows
        </Text>
      </div>

      <Space wrap size="middle">
        <Search
          placeholder="Search tasks, commands, or owners..."
          allowClear
          enterButton={
            <Button 
              className="glow-button"
              icon={<SearchOutlined />}
              loading={searchLoading}
              style={{ height: '40px' }}
            >
              Search
            </Button>
          }
          onSearch={handleSearch}
          style={{ width: 320 }}
          className="enhanced-search"
          size="large"
        />
        
        <Tooltip title="Refresh and sync tasks" placement="bottom">
          <Button
            className="secondary-button"
            icon={<ReloadOutlined />}
            onClick={onRefresh}
            size="large"
            style={{ height: '40px', padding: '0 16px' }}
          >
            Refresh
          </Button>
        </Tooltip>
        
        <Tooltip title="Filter tasks" placement="bottom">
          <Button
            className="secondary-button"
            icon={<FilterOutlined />}
            size="large"
            style={{ height: '40px', padding: '0 16px' }}
          >
            Filter
          </Button>
        </Tooltip>
      </Space>
    </div>
  );
};