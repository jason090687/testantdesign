import CustomModals from "./Modal";

function CustomModalsEdit() {
  const handleEditEvent = (values) => {
    console.log('Event edited:', values);
    // You can handle event edit logic here
  };

  const initialEventValues = {
    eventName: 'Intramurals',
    scheduleDate: [dayjs(), dayjs().add(7, 'day')],
  };

  return (
    <CustomModals
      title="Edit Event"
      initialValues={initialEventValues} // Pass the event data for editing
      onSubmit={handleEditEvent}
    />
  );
}

export default CustomModalsEdit;
