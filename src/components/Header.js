import { Avatar, Typography, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IoIosNotifications } from 'react-icons/io';
import React from 'react';

function CustomHeader() {
  // Define menu items for the dropdown using `items` attribute
  const menuItems = [
    {
      key: '1',
      label: 'Analytics',
    },
    {
      key: '2',
      label: 'Feedbacks',
    },
    {
      key: '3',
      label: 'About Us',
    },
    {
      key: '4',
      label: 'Logout',
    },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography.Title level={3}>
        Welcome Back, Jason
      </Typography.Title>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Dropdown for the avatar */}
        <Dropdown 
          className='dropdown'
          menu={{ items: menuItems }} // Use `menu` with `items`
          placement="bottomRight" 
          trigger={['click']}
        >
          <Avatar size={40} icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
        </Dropdown>


        {/* Notification icon */}
        <IoIosNotifications className='header-icon' />
      </div>
    </div>
  );
}

export default CustomHeader;
