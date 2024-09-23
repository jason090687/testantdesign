
import CustomModals from "./EventModal";

function CustomModalsCreate() {
  const handleCreateEvent = (values) => {
    console.log('New event created:', values);
    // You can handle event creation logic here
  };

  return (
    <CustomModals
      title="Create Event"
      initialValues={{}} // No initial values for create mode
      onSubmit={handleCreateEvent}
    />
  );
}

export default CustomModalsCreate;
