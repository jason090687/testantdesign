import { Card, Row, Col } from 'antd'
import React from 'react'
import { FcAdvance } from 'react-icons/fc'
import CustomTypography from './Typography'

function Cards() {
  return (
    <Card>
        <div style={{ maxHeight: 600, overflowY: 'auto', paddingRight: 16 }}>
          <Row gutter={[16, 16]}>
            {Data.map((event, index) => (
              <Col xs={24} sm={12} md={12} key={index}>
                <Card style={{ marginBottom: 16 }}>
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
  )
}

export default Cards
