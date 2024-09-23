
import CustomDepartmentModal from "../ClassModal";

function ClassDepartmentCreate() {
  const handleCreateSection = (values) => {
    console.log('New event created:', values);
    // You can handle event creation logic here
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
        title="Adding Department Section"
        initialValues={{}}
        onSubmit={handleCreateSection}
        formFields={fields}
    />
  );
}

export default ClassDepartmentCreate;
