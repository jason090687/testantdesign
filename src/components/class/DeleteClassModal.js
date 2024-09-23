import React, { useState } from 'react';
import { Modal, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text, Title } = Typography;

function ClassDeleteModal({ departmentName, onDelete}) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(); // Trigger deletion logic
    setIsModalOpen(false);
    navigate(-1); // Navigate back after deletion
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    navigate(-1); // Navigate back after cancel
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
        <Text style={{ fontSize: '16px' }}>
          Are you sure you want to delete
        </Text>

        <Title level={3} style={{ margin: '20px 0', fontWeight: 'bold' }}>
          {departmentName}
        </Title>

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

export default ClassDeleteModal;
