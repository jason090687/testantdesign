import { Card, Pagination, Typography } from 'antd'
import { FcAdvance } from "react-icons/fc";
import React from 'react'
import Data from '../Data/Data';
import { useNavigate } from 'react-router-dom';

function ClassContent({Eventname}) {

  const navigate = useNavigate();

  const handEventleListAttendees = () => {
    navigate('/class_attendees');
  }

  return (
      <Card style={{ height: 520, width: '50%' }}>
      <Typography.Title level={4}>{Eventname}</Typography.Title>
      <div style={{ maxHeight: 400, overflowX: 'auto', paddingRight: 16 }}>
        {Data.map((department, index) => (
          <Card key={index} style={{ marginBottom: 16, cursor: 'pointer'}}
          onClick={handEventleListAttendees}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography.Title level={4}>{department.eventTittle}</Typography.Title>
              <FcAdvance className='header-icon' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography.Paragraph>Total Attendees</Typography.Paragraph>
              <h1 className='total'>{department.totalAttendees}</h1>
            </div>
          </Card>
        ))}
      </div>
      <Pagination defaultCurrent={1} total={25} align='end' style={{paddingTop: '10px'}}/>
    </Card>
  )
}

export default ClassContent
