
import CustomDepartmentModal from "../ClassModal";

function ClassModalsCreate() {
  const handleCreateEvent = (values) => {
    console.log('New event created:', values);
    // You can handle event creation logic here
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
        title="Create Department Name"
        initialValues={{}}
        onSubmit={handleCreateEvent}
        formFields={fields}
    />
  );
}

export default ClassModalsCreate;
