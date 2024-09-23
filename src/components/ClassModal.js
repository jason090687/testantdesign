import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function CustomDepartmentModal({ title, initialValues, onSubmit, formFields }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onSubmit(values);
        form.resetFields();
        setIsModalOpen(false);
        navigate(-1); // Redirect back to class attendance after submission
      })
      .catch(info => {
        console.log('Validation Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    navigate(-1); // Redirect back after cancel
  };

  return (
    <Modal
      title={title}
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
        initialValues={initialValues}
      >
        {/* Dynamically render form fields from props */}
        {formFields.map((field, index) => (
          <Form.Item
            key={index}
            label={field.label}
            name={field.name}
            rules={field.rules}
            style={{ marginBottom: '24px' }}
          >
            <Input
              placeholder={field.placeholder}
              style={{
                height: '50px',
                fontSize: '18px',
                padding: '10px'
              }}
            />
          </Form.Item>
        ))}

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
              {title}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CustomDepartmentModal;
