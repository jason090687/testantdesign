import React, { useState, useRef } from 'react';
import { Table, Select, Button, Card, Typography } from 'antd';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Chart } from '../../Data/Chart';

const { Option } = Select;
const { Title } = Typography;

const EventAnalytics = () => {

    const [selectedEvent, setSelectedEvent] = useState('Intrams');
    const analyticsRef = useRef(null); // Ref to capture the analytics section




  const eventRankingData = [
    {
      key: '1',
      rank: 1,
      event: 'Intrams',
      attendees: 500,
    },
    {
      key: '2',
      rank: 2,
      event: 'Lycan Fest',
      attendees: 432,
    },
    {
      key: '3',
      rank: 3,
      event: 'PATHFIT',
      attendees: 324,
    },
    {
      key: '4',
      rank: 4,
      event: 'Larong Pinoy',
      attendees: 310,
    },
    {
      key: '5',
      rank: 5,
      event: 'Intrams',
      attendees: 233,
    },
  ];

  const eventAnalyticsData = [
    {
      key: '1',
      date: '05/01/2024',
      weekday: 'Monday',
      students: 345,
      professor: 10,
      totalAttendees: 355,
    },
    {
      key: '2',
      date: '05/02/2024',
      weekday: 'Tuesday',
      students: 233,
      professor: 11,
      totalAttendees: 244,
    },
    {
      key: '3',
      date: '05/03/2024',
      weekday: 'Wednesday',
      students: 153,
      professor: 8,
      totalAttendees: 161,
    },
    {
      key: '4',
      date: '05/04/2024',
      weekday: 'Thursday',
      students: 243,
      professor: 7,
      totalAttendees: 250,
    },
    {
      key: '5',
      date: '05/05/2024',
      weekday: 'Friday',
      students: 234,
      professor: 12,
      totalAttendees: 246,
    },
  ];

  const rankingColumns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Event',
      dataIndex: 'event',
      key: 'event',
    },
    {
      title: 'Attendees',
      dataIndex: 'attendees',
      key: 'attendees',
    },
  ];

  const analyticsColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Weekday',
      dataIndex: 'weekday',
      key: 'weekday',
    },
    {
      title: 'No. Students',
      dataIndex: 'students',
      key: 'students',
    },
    {
      title: 'No. Professor',
      dataIndex: 'professor',
      key: 'professor',
    },
    {
      title: 'Total attendees',
      dataIndex: 'totalAttendees',
      key: 'totalAttendees',
    },
  ];

  // Function to print the analytics section as PDF
  const printPDF = () => {
    const input = analyticsRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('analytics-report.pdf');
    });
  };

  return(
    <>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <span>Most visited events</span>
        <Select
          value={selectedEvent}
          onChange={(value) => setSelectedEvent(value)}
          style={{ width: '150px' }}
        >
          <Option value="Intrams">Intrams</Option>
          <Option value="Lycan Fest">Lycan Fest</Option>
          <Option value="PATHFIT">PATHFIT</Option>
          <Option value="Larong Pinoy">Larong Pinoy</Option>
        </Select>
      </div>

      <div ref={analyticsRef} style={{ display: 'flex', gap: '20px' }}>
        {/* Ranking Table */}
        <Card style={{ width: '30%', height: '375px' }}>
          <Table
            columns={rankingColumns}
            dataSource={eventRankingData}
            pagination={false}
            bordered
            style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}
          />
        </Card>

        {/* Placeholder for Graph Analytics */}
        <Card style={{ width: '70%', height: '550px', textAlign: 'center' }}>
          <Chart />
        </Card>
      </div>

      <Title level={5} style={{ marginTop: '30px' }}>
        Event scheduled &mdash; <strong>Monday - Friday</strong>
      </Title>

      {/* Event Schedule Table */}
      <Table
        columns={analyticsColumns}
        dataSource={eventAnalyticsData}
        pagination={false}
        bordered
        style={{ marginTop: '20px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}
      />

      {/* Print Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button
          type="primary"
          style={{ width: '200px', height: '50px', fontSize: '16px' }}
          onClick={printPDF} // Call the printPDF function
        >
          Print in PDF
        </Button>
      </div>
    </>
  )
};

export default EventAnalytics;
