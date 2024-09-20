import { Card, Pagination, Typography } from 'antd'
import { FcAdvance } from "react-icons/fc";
import React from 'react'
import Data from '../Data/Data';

function EventContent({Eventname}) {
  return (
      <Card style={{ height: 520, width: '50%' }}>
      <Typography.Title level={4}>{Eventname}</Typography.Title>
      <div style={{ maxHeight: 400, overflowX: 'auto', paddingRight: 16 }}>
        {Data.map((event, index) => (
          <Card key={index} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography.Title level={4}>{event.eventTittle}</Typography.Title>
              <FcAdvance className='header-icon' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography.Paragraph>Total Attendees</Typography.Paragraph>
              <h1 className='total'>{event.totalAttendees}</h1>
            </div>
          </Card>
        ))}
      </div>
      <Pagination defaultCurrent={1} total={25} align='end' style={{paddingTop: '10px'}}/>
    </Card>
  )
}

export default EventContent
