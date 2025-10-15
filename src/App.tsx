import React from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TasksPage from './pages/TasksPage';
import './App.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 6,
          },
        }}
      >
        <AntdApp>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<TasksPage />} />
                <Route path="/tasks" element={<TasksPage />} />
              </Routes>
            </div>
          </Router>
        </AntdApp>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;