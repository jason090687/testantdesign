import React, { useState, useRef } from 'react';
import { Table, Select, Button, Card } from 'antd';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Chart } from '../../Data/Chart';

const { Option } = Select;

const ClassAttendanceAnalytics = () => {
  const [selectedSection, setSelectedSection] = useState('IT1R5');
  const [selectedYear, setSelectedYear] = useState('1st Year');
  const [selectedDepartment, setSelectedDepartment] = useState('CITC');
  const analyticsRef = useRef(null); // Ref to capture the analytics section

  const classAnalyticsData = [
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

      pdf.save('class-attendance-analytics.pdf');
    });
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Select
          value={selectedYear}
          onChange={(value) => setSelectedYear(value)}
          style={{ width: '150px' }}
        >
          <Option value="1st Year">1st Year</Option>
          <Option value="2nd Year">2nd Year</Option>
          <Option value="3rd Year">3rd Year</Option>
          <Option value="4th Year">4th Year</Option>
        </Select>

        <Select
          value={selectedDepartment}
          onChange={(value) => setSelectedDepartment(value)}
          style={{ width: '150px' }}
        >
          <Option value="CITC">CITC</Option>
          <Option value="COS">COS</Option>
          <Option value="COE">COE</Option>
          <Option value="CAB">CAB</Option>
        </Select>
      </div>

      {/* Section Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <span>Select section: </span>
        <Select
          value={selectedSection}
          onChange={(value) => setSelectedSection(value)}
          style={{ width: '150px', marginLeft: '10px' }}
        >
          <Option value="IT1R5">IT1R5</Option>
          <Option value="IT1R6">IT1R6</Option>
          <Option value="IT1R7">IT1R7</Option>
          <Option value="IT1R8">IT1R8</Option>
        </Select>
      </div>

      <div ref={analyticsRef}>
        {/* Placeholder for Graph Analytics */}
        <Card style={{ width: '100%', height: '790px', textAlign: 'center', marginBottom: '20px'}}>
          <Chart/>
        </Card>

        {/* Class Attendance Table */}
        <Table
          columns={analyticsColumns}
          dataSource={classAnalyticsData}
          pagination={false}
          bordered
          style={{ marginTop: '20px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}
        />
      </div>

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
  );
};

export default ClassAttendanceAnalytics;
