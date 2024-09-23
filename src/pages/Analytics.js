import React, { useState } from 'react';
import { Select, Typography } from 'antd';
import ClassAttendanceAnalytics from '../components/class/ClassAnalytics';
import EventAnalytics from '../components/event/EventAnalytics';


const { Option } = Select;
const { Title } = Typography;

const AnalyticsPage = () => {
  const [attendanceType, setAttendanceType] = useState('Class attendance'); // Initial value

  // Function to handle attendance type switch
  const handleAttendanceTypeChange = (value) => {
    setAttendanceType(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={3}>Analytics</Title>

      {/* Attendance Type Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <span>Select attendance type: </span>
        <Select
          value={attendanceType}
          onChange={handleAttendanceTypeChange} // Handle change in attendance type
          style={{ width: '200px', marginLeft: '10px' }}
        >
          <Option value="Class attendance">Class attendance</Option>
          <Option value="Event attendance">Event attendance</Option>
        </Select>
      </div>

      {/* Conditionally Render the Analytics Component */}
      {attendanceType === 'Class attendance' ? (
        <ClassAttendanceAnalytics />
      ) : (
        <EventAnalytics />
      )}
    </div>
  );
};

export default AnalyticsPage;
