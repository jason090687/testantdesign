import React from 'react';
import { Button, Flex, Select } from 'antd';
import { MdOutlineTune } from 'react-icons/md';
import { Card, Row, Col, Typography } from 'antd';
import { FcAdvance } from 'react-icons/fc';
import SearchInput from '../SearchInput'; // Assuming you have a reusable search input
import SectionData from '../../Data/SectionData';
import CustomTypography from '../Typography';
import { FaPen, FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const { Option } = Select;

function DepartmentAddSection() {
  const navigate = useNavigate();

  const handleSectionCreate = () => {
    navigate('/create_section');
  }

  const handleSectionEdit = () => {
    navigate('/edit_section');
  }

  const handleSectionDelete = () => {
    navigate('/delete_section');
  }

  const handleClassAttendeesList = () => {
    navigate('/class_attendees');
  }

  return (
    <div style={{ padding: '20px', maxWidth: '95%' }}>
      {/* Title */}
      <CustomTypography>Class Attendance</CustomTypography>

      {/* Filter & Search Input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '300px', marginBottom: '20px' }}>
        <MdOutlineTune className='banner-icon' />
        <SearchInput placeholder='Search by department name' />
      </div>

      {/* Section Filter */}
      <div style={{ marginBottom: '20px' }}>
        <p>Select section:</p>
        <Select defaultValue="IT1R1" style={{ width: 200 }}>
          <Option value="IT1R1">IT1R1</Option>
          <Option value="IT1R2">IT1R2</Option>
          <Option value="IT1R3">IT1R3</Option>
          <Option value="IT1R4">IT1R4</Option>
          <Option value="IT1R5">IT1R5</Option>
          <Option value="IT1R6">IT1R6</Option>
        </Select>
      </div>

      {/* Section Attendance Cards */}
      <Card>
        <div style={{ maxHeight: 600, overflowY: 'auto', paddingRight: 16 }}>
          <Row gutter={[16, 16]}>
            {SectionData.map((section, index) => (
              <Col xs={24} sm={12} md={12} key={index}>
                <Card style={{ marginBottom: 16, cursor: 'pointer'}}
                onClick={handleClassAttendeesList}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CustomTypography level={4}>{section.sectionName}</CustomTypography>
                    <FcAdvance className='header-icon' />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Paragraph>Total Attendees</Typography.Paragraph>
                    <h1 className='total'>{section.totalAttendees}</h1>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Card>

      {/* Button for Create Section, View, Edit, Delete */}
      <Flex style={{ display: 'flex', paddingTop: '30px', justifyContent: 'space-between' }}>
        {/* Create Section */}
        <Button type="primary" className='buttons' onClick={handleSectionCreate}>
          Add Section
        </Button>
        {/* View Department */}
        <Flex style={{ gap: '10px' }}>
          <Button type='primary' className='buttons'>
            View
          </Button>
          {/* Edit */}
          <Button type='primary' className='buttons' onClick={handleSectionEdit}>
            <FaPen size={25} />
          </Button>
          {/* Delete */}
          <Button type='primary' className='buttons' onClick={handleSectionDelete}>
            <FaRegTrashAlt size={25} />
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default DepartmentAddSection;
