import React, { useState } from 'react';
import { Modal, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text, Title } = Typography;

function CustomModalsDelete({ eventName, onDelete, onCancel }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(); // Trigger the deletion logic
    setIsModalOpen(false);
    navigate('/event-attendance')
  };

  const handleCancel = () => {
    onCancel(); // Trigger the cancellation logic
    setIsModalOpen(false);
    navigate('/event-attendance')
  };

  return (
    <Modal
      title={null}
      open={isModalOpen}
      onCancel={handleCancel}
      centered
      footer={null}
      closable={true}
      width={500}
    >
      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* Message */}
        <Text style={{ fontSize: '16px' }}>
          Are you sure you want to delete
        </Text>

        {/* Event Name */}
        <Title level={3} style={{ margin: '20px 0', fontWeight: 'bold' }}>
          {eventName}
        </Title>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {/* Confirm Deletion */}
          <Button
            type="primary"
            danger
            onClick={handleDelete}
            style={{
              width: '150px',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '10px 0',
            }}
          >
            Confirm Deletion
          </Button>

          {/* Cancel */}
          <Button
            type="default"
            onClick={handleCancel}
            style={{
              width: '150px',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '10px 0',
              backgroundColor: 'black',
              color: 'white',
              borderColor: 'black',
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CustomModalsDelete;
