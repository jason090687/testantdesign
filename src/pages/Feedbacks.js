import React, { useState } from 'react';
import { Input, Button, Card, Select, Typography, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;
const { Title, Text } = Typography;

const Feedback = () => {
  const [selectedEvent, setSelectedEvent] = useState('Intrams');
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([
    {
      name: 'Juan Dela Cruz',
      email: 'juandelacruz@gmail.com',
      content: 'This is a great event! I enjoyed every moment.',
      timestamp: '5 days ago',
    },
    {
      name: 'Juan Dela Cruz',
      email: 'juandelacruz@gmail.com',
      content: 'Amazing event, can’t wait for the next one.',
      timestamp: '25 minutes ago',
    },
  ]);

  const handleAddFeedback = () => {
    if (feedback.trim()) {
      const newFeedback = {
        name: 'You - Juan Dela Cruz',
        email: 'juandelacruz@gmail.com',
        content: feedback,
        timestamp: 'Now',
      };
      setFeedbacks([newFeedback, ...feedbacks]);
      setFeedback(''); // Clear the input field
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '95%'}}>
      <Title level={3}>Feedbacks</Title>

      {/* Select Event */}
      <div style={{ marginBottom: '20px' }}>
        <span>Select event: </span>
        <Select
          value={selectedEvent}
          onChange={(value) => setSelectedEvent(value)}
          style={{ width: '200px', marginLeft: '10px' }}
        >
          <Option value="Intrams">Intrams</Option>
          <Option value="Lycan Fest">Lycan Fest</Option>
          <Option value="PATHFIT">PATHFIT</Option>
        </Select>
      </div>

      {/* Google Form Links */}
      <div style={{ marginBottom: '30px' }}>
        <Text strong>Google form link: </Text>
        <br />
        <Text>
          <a href="https://www.google.com/forms/23dytdaysduiag" target="_blank" rel="noopener noreferrer">
            https://www.google.com/forms/23dytdaysduiag
          </a>
        </Text>
        <br />
        <Text type="secondary">Open link to view feedbacks from this event.</Text>
      </div>

      <Title level={4}>System feedbacks</Title>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Feedback Input */}
        <Card style={{ width: '40%', height: '400px' }}>
          <TextArea
            rows={6}
            placeholder="Type your feedback here . . ."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            style={{ height: '300px' }}
          />
          <div style={{justifyContent: 'end', display: 'flex'}}>
            <Button
            type="primary"
            style={{ marginTop: '10px', width: '50%', height: '50px'}}
            onClick={handleAddFeedback}
          >
            Add feedback
          </Button>
          </div>
        </Card>

        {/* Feedback List */}
        <Card style={{ width: '60%', height: '600px', overflowY: 'scroll'}}>
          <List
            itemLayout="vertical"
            dataSource={feedbacks}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={`${item.name} - ${item.email}`}
                  description={item.timestamp}
                />
                <Text>{item.content}</Text>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
