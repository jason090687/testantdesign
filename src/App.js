import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CustomHeader from './components/Header';
import AppRoutes from './Routes/AppRoutes';
import './App.css';

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout>
        <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'>
          <Sidebar />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='trigger-btn'
          />
        </Sider>
        <Layout>
          <Header className='header'>
            <CustomHeader />
          </Header>
          <Content className='content'>
            {/* Use the separated AppRoutes component */}
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
