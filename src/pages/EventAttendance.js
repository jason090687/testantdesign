import { Card, Typography, Row, Col, Divider, Flex, Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTypography from '../components/Typography';
import { MdOutlineTune } from 'react-icons/md';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FcAdvance } from 'react-icons/fc';
import SearchInput from '../components/SearchInput';
import Data from '../Data/Data';

function EventAttendance() {
  // Navigations
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate('/create_event');
  }

  const handleEditEvent = () => {
    navigate('/edit_event');
  }

  const handleDeleteEvent = () => {
    navigate('/delete_event');
  }

  const handEventleListAttendees = () => {
    navigate('/event_attendees');
  }

  return (
    <div style={{ padding: '20px', maxWidth: '95%'}}>
      {/* Title */}
      <CustomTypography level={2}>Event Attendance</CustomTypography>

      {/* Filter & Search Input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '300px', marginBottom: '20px' }}>
        <MdOutlineTune className='banner-icon' />
        <SearchInput placeholder='Search by event name' />
      </div>

      {/* Subtitle */}
      <p style={{ paddingTop: '20px' }}>Select Event</p>

      <Divider/>


      {/* Event Attendance List of Records */}
      <Card>
        <div style={{ maxHeight: 600, overflowY: 'auto', paddingRight: 16 }}>
          <Row gutter={[16, 16]}>
            {Data.map((event, index) => (
              <Col xs={24} sm={12} md={12} key={index}>
                <Card style={{ marginBottom: 16, cursor: 'pointer'}}
                onClick={handEventleListAttendees}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CustomTypography level={4}>{event.eventTittle}</CustomTypography>
                    <FcAdvance className='header-icon' />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Paragraph>Total Attendees</Typography.Paragraph>
                    <h1 className='total'>{event.totalAttendees}</h1>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Card>

      {/* Button for Create Event, View, Edit, Delete */}
      <Flex style={{display: 'flex', paddingTop: '30px', justifyContent: 'space-between'}}>
        {/* Create Event */}
        <Button type="primary" className='buttons' onClick={handleCreateEvent}>
          Create Event
        </Button>
        {/* View Event */}
        <Flex style={{gap: '10px'}}>
          <Button type='primary' className='buttons'>
          View
        </Button>
        {/* Edit */}
        <Button type='primary' className='buttons' onClick={handleEditEvent}>
          <FaPen size={25}/>
        </Button>
        {/* Delete */}
        <Button type='primary' className='buttons' onClick={handleDeleteEvent}>
          <FaRegTrashAlt size={25}/>
        </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default EventAttendance;
