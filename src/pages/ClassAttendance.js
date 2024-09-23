import { Card, Typography, Row, Col, Divider, Flex, Button, Select } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTypography from '../components/Typography';
import { MdOutlineTune } from 'react-icons/md';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FcAdvance } from 'react-icons/fc';
import SearchInput from '../components/SearchInput';
import Data from '../Data/ClassListData';

const { Option } = Select;

function ClassAttendance() {
  // Navigations
  const navigate = useNavigate();

  const handleCreateDepartment = () => {
    navigate('/create_class');
  };

  const handleEditDepartment = () => {
    navigate('/edit_class');
  };

  const handleDeleteDepartment = () => {
    navigate('/delete_class');
  };

  const handleAddSectionDepartment = () => {
    navigate('/add_section');
  }

  return (
    <div style={{ padding: '20px', maxWidth: '95%'}}>
      {/* Title */}
      <CustomTypography level={2}>Class Attendance</CustomTypography>

      {/* Filter & Search Input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '300px', marginBottom: '20px' }}>
        <MdOutlineTune className='banner-icon' />
        <SearchInput placeholder='Search by department name' />
      </div>

      {/* Year Level Filter */}
      <div style={{ marginBottom: '20px' }}>
        <p>Select year level:</p>
        <Select defaultValue="1st Year College" style={{ width: 200 }}>
          <Option value="1st Year College">1st Year College</Option>
          <Option value="2nd Year College">2nd Year College</Option>
          <Option value="3rd Year College">3rd Year College</Option>
          <Option value="4th Year College">4th Year College</Option>
        </Select>
      </div>

      {/* Department Selection */}
      <div style={{ marginBottom: '20px' }}>
        <p>Select department:</p>
        <Select defaultValue="CITC" style={{ width: 200 }}>
          <Option value="CITC">CITC</Option>
          <Option value="IT">Information Technology</Option>
          <Option value="CS">Computer Science</Option>
        </Select>
      </div>

      <Divider />

      {/* Class Attendance List of Records */}
      <Card>
        <div style={{ maxHeight: 600, overflowY: 'auto', paddingRight: 16 }}>
          <Row gutter={[16, 16]}>
            {Data.map((department, index) => (
              <Col xs={24} sm={12} md={12} key={index}>
                <Card style={{ marginBottom: 16, cursor: 'pointer'}}
                onClick={handleAddSectionDepartment}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CustomTypography level={4}>{department.departmentName}</CustomTypography>
                    <FcAdvance className='header-icon' />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Paragraph>Total Attendees</Typography.Paragraph>
                    <h1 className='total'>{department.totalAttendees}</h1>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Card>

      {/* Button for Create Department, View, Edit, Delete */}
      <Flex style={{ display: 'flex', paddingTop: '30px', justifyContent: 'space-between' }}>
        {/* Create Department */}
        <Button type="primary" className='buttons' onClick={handleCreateDepartment}>
          Create Department
        </Button>
        {/* View Department */}
        <Flex style={{ gap: '10px' }}>
          <Button type='primary' className='buttons'>
            View
          </Button>
          {/* Edit */}
          <Button type='primary' className='buttons' onClick={handleEditDepartment}>
            <FaPen size={25} />
          </Button>
          {/* Delete */}
          <Button type='primary' className='buttons' onClick={handleDeleteDepartment}>
            <FaRegTrashAlt size={25} />
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default ClassAttendance;
