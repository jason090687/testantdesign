import { Avatar, Typography, Dropdown, Button, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IoIosNotifications } from 'react-icons/io';
import React from 'react';
import CustomTypography from './Typography';

function CustomHeader() {

  const fullName = 'Juan Dela Cruz';
  const email = 'juandelacruz@gmail.com';


  // Define menu items for the dropdown using `items` attribute
  const menuItems = [
    {
      key: '1',
      label: (
        <div style={{ padding: '10px' }}>
          <strong>{fullName}</strong>
          <br />
          <Typography.Text type="secondary">{email}</Typography.Text>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <Button style={{ width: '100%', backgroundColor: 'black', color: 'white', textAlign: 'end' }}>
          Edit Profile
        </Button>
      ),
    },
    // Add a Divider here
    {
      key: 'divider',
      type: 'divider',
    },
    {
      key: '3',
      label: 'Analytics',
    },
    {
      key: '4',
      label: 'Feedbacks',
    },
    {
      key: '5',
      label: 'About Us',
    },
    {
      key: '6',
      label: 'Logout',
    },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <CustomTypography>
        Welcome Back, Jason
      </CustomTypography>

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
        <Badge count={99}>
          <IoIosNotifications className='header-icon' />
        </Badge>
      </div>
    </div>
  );
}

export default CustomHeader;
