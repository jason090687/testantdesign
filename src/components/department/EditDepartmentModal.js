import CustomDepartmentModal from "../ClassModal";

function ClassDepartmentEdit() {
  const handleEditSection = (values) => {
    console.log('Event edited:', values);
    // You can handle event edit logic here
  };


   const initialDepartmentValues = {
    departmentName: 'College of Science',
    abbreviation: 'COS',
  };

  const fields = [
    {
      label: 'Section Name',
      name: 'sectionName',
      rules: [{ required: true, message: 'Please enter the section name' }],
      placeholder: 'e.g. IT4R8'
    },
    {
      label: 'Limit Total Number of Student',
      name: 'numberOfStudent',
      rules: [{ required: true, message: 'Please enter the Number of Student' }],
      placeholder: 'e.g. 40'
    }
  ];

  return (
    <CustomDepartmentModal 
        title="Edit Event"
        initialValues={initialDepartmentValues}
        onSubmit={handleEditSection}
        formFields={fields}
    />
  );
}

export default ClassDepartmentEdit;


