import { Flex, Menu } from 'antd'
import { HomeOutlined, FileOutlined, CheckCircleOutlined, LineChartOutlined, CommentOutlined, TeamOutlined } from '@ant-design/icons';
import { CgEventbrite } from "react-icons/cg";
import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <Flex align='center' justify='center'>
        <div className="logo">
            <CgEventbrite />
        </div>
      </Flex>

      <Menu mode='inline' defaultSelectedKeys={[1]} className='menu-bar'>
       <Menu.Item key='1' icon={<HomeOutlined />}>
          <Link to='/'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<FileOutlined />}>
          <Link to='/event-attendance'>Event Attendance</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<CheckCircleOutlined />}>
          <Link to='/class-attendance'>Class Attendance</Link>
        </Menu.Item>
        <Menu.Item key='4' icon={<LineChartOutlined />}>
          <Link to='/analytics'>Analytics</Link>
        </Menu.Item>
        <Menu.Item key='5' icon={<CommentOutlined />}>
          <Link to='/feedbacks'>Feedbacks</Link>
        </Menu.Item>
        <Menu.Item key='6' icon={<TeamOutlined />}>
          <Link to='/about-us'>About Us</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Sidebar
