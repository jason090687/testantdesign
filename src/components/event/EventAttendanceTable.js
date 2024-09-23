import React, { useState } from 'react';
import { Table, Input, Button, Space, Tag, DatePicker, Modal, Form, Input as AntInput, message } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import attendanceData from '../../Data/Event_attendanceListData';
import dayjs from 'dayjs';

const { confirm } = Modal;

const EventAttendanceTable = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredData, setFilteredData] = useState(attendanceData); // Data for the table
  const [searchTerm, setSearchTerm] = useState(''); // Search term for ID or Name
  const [editModalVisible, setEditModalVisible] = useState(false); // Control edit modal visibility
  const [editRecord, setEditRecord] = useState(null); // Record to edit

  // Handle date change for filtering
  const handleDateChange = (date) => {
    setSelectedDate(date);

    if (date) {
      // Filter attendance data by the selected date
      const formattedDate = dayjs(date).format('MM/DD/YYYY');
      const filteredAttendance = attendanceData.filter((entry) => entry.date === formattedDate);
      setFilteredData(filteredAttendance);
    } else {
      // If no date selected, show all data
      setFilteredData(attendanceData);
    }
  };

  // Handle Edit button click
  const handleEdit = (record) => {
    setEditRecord(record);
    setEditModalVisible(true);
  };

  // Handle Delete button click with confirmation
  const handleDelete = (record) => {
    confirm({
      title: 'Are you sure you want to delete this record?',
      icon: <ExclamationCircleOutlined />,
      content: `${record.name} - ${record.role}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        const updatedData = filteredData.filter((item) => item.key !== record.key);
        setFilteredData(updatedData);
        message.success('Record deleted successfully');
      },
      onCancel() {
        console.log('Delete action cancelled');
      },
    });
  };

  // Save the edited record
  const handleSaveEdit = (values) => {
    const updatedData = filteredData.map((item) => (item.key === editRecord.key ? { ...editRecord, ...values } : item));
    setFilteredData(updatedData);
    setEditModalVisible(false);
    message.success('Record updated successfully');
  };

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Convert input to lowercase
    setSearchTerm(value);

    // Filter the data by matching ID or Name (case-insensitive)
    const filteredAttendance = attendanceData.filter(
      (entry) =>
        entry.id.toLowerCase().includes(value) || entry.name.toLowerCase().includes(value)
    );

    setFilteredData(filteredAttendance);
  };

  // Table columns
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Present' ? 'green' : status === 'Late' ? 'volcano' : 'geekblue';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'In',
      dataIndex: 'in',
      key: 'in',
    },
    {
      title: 'Out',
      dataIndex: 'out',
      key: 'out',
    },
    {
      title: 'Manage',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Button shape="circle" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button shape="circle" icon={<DeleteOutlined />} danger onClick={() => handleDelete(record)} />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Intrams Attendance</h2>

      {/* Search and Filter Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Input
          placeholder="Search by Name or ID number"
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: '300px' }}
        />

        {/* Date Picker */}
        <DatePicker
          onChange={handleDateChange}
          format="MM/DD/YYYY"
          value={selectedDate}
          style={{ width: '300px' }}
          placeholder="Select date"
        />
      </div>

      {/* Attendance Table */}
      <Table
        columns={columns}
        dataSource={filteredData} // Use filtered data for the table
        pagination={false}
        bordered
        style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}
      />

      {/* Edit Modal */}
      <Modal
        title="Edit Record"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
      >
        {editRecord && (
          <Form
            initialValues={editRecord}
            onFinish={handleSaveEdit}
            layout="vertical"
          >
            <Form.Item name="name" label="Name">
              <AntInput />
            </Form.Item>
            <Form.Item name="role" label="Role">
              <AntInput />
            </Form.Item>
            <Form.Item name="status" label="Status">
              <AntInput />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default EventAttendanceTable;
