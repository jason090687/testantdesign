import React, { useState } from 'react';
import { Modal, Form, Input, Button, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs'; // Assuming you're using dayjs for dates

const { RangePicker } = DatePicker;

// Reusable modal component for both Create and Edit event
function CustomModals({ title, initialValues, onSubmit }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Function to handle modal submission (Ok button)
  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onSubmit(values);
        form.resetFields();
        setIsModalOpen(false);
        navigate(-1); // After submission, redirect to another page (e.g., home or events list)
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  // Function to handle cancel (close the modal)
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate(-1); // Navigate back after cancel
  };

  return (
    <Modal
      title={title} // Use the passed title prop
      open={isModalOpen} 
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}
      centered 
      footer={null} // Custom footer
    >
      <Form
        form={form}
        layout="vertical"
        style={{ padding: '10px' }}
        initialValues={initialValues} // Set initial form values for edit mode
      >
        {/* Event Name */}
        <Form.Item
          label="Event Name"
          name="eventName"
          rules={[{ required: true, message: 'Please enter the event name' }]}
          style={{ marginBottom: '24px' }}
        >
          <Input
            placeholder="e.g. Intramurals"
            style={{
              height: '50px',
              fontSize: '18px',
              padding: '10px',
            }}
          />
        </Form.Item>

        {/* Schedule Date (Range Picker) */}
        <Form.Item
          label="Schedule Date"
          name="scheduleDate"
          rules={[{ required: true, message: 'Please select a date range' }]}
        >
          <RangePicker
            style={{
              width: '100%',
              height: '50px',
              fontSize: '18px',
              padding: '10px',
            }}
            placeholder={['Start Date', 'End Date']}
            format="YYYY-MM-DD"
            defaultPickerValue={[dayjs(), dayjs().add(7, 'day')]}
          />
        </Form.Item>

        {/* Confirm Button */}
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleOk}
              style={{
                width: '300px',
                fontWeight: 700,
                padding: '20px',
                fontSize: '20px',
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              Confirm
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CustomModals;
