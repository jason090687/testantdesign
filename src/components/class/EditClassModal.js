import CustomDepartmentModal from "../ClassModal";

function ClassModalsEdit() {
  const handleEditClass = (values) => {
    console.log('Event edited:', values);
    // You can handle event edit logic here
  };


   const initialDepartmentValues = {
    departmentName: 'College of Science',
    abbreviation: 'COS',
  };

  const fields = [
    {
      label: 'Department Name',
      name: 'departmentName',
      rules: [{ required: true, message: 'Please enter the department name' }],
      placeholder: 'e.g. College of Information Technology and Computing'
    },
    {
      label: 'Abbreviation',
      name: 'abbreviation',
      rules: [{ required: true, message: 'Please enter the abbreviation' }],
      placeholder: 'e.g. CITC'
    }
  ];

  return (
    <CustomDepartmentModal 
        title="Edit Event"
        initialValues={initialDepartmentValues}
        onSubmit={handleEditClass}
        formFields={fields}
    />
  );
}

export default ClassModalsEdit;


