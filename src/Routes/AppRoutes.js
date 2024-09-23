import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import the components for each page
import EventAttendance from '../pages/EventAttendance';
import ClassAttendance from '../pages/ClassAttendance';
import Feedbacks from '../pages/Feedbacks';
import Analytics from '../pages/Analytics';
import AboutUs from '../pages/AboutUs';
import MainContent from '../components/MainContent';
import CustomeModalsEdit from '../components/event/EventModal';
import CustomModalsCreate from '../components/event/CreateEventModal';
import CustomModalsDelete from '../components/event/DeleteEventModal';
import ClassModalsCreate from '../components/class/CreateClassModal';
import ClassModalsEdit from '../components/class/EditClassModal';
import ClassDeleteModal from '../components/class/DeleteClassModal';
import DepartmentAddSection from '../components/department/DepartmentAddSection';
import ClassDepartmentCreate from '../components/department/CreateDepartmenModal';
import ClassDepartmentEdit from '../components/department/EditDepartmentModal';
import ClassDepartmentDelete from '../components/department/DeleteDepartmentModal';
import EventAttendees from '../components/event/EventAttendanceTable';
import ClassAttendanceTable from '../components/class/ClassAttendanceTable';
import ClassAttendanceAnalytics from '../components/class/ClassAnalytics';

const AppRoutes = () => {

  const handleDelete = () => {
    console.log('Event deleted');
    // Add your deletion logic here
  };

  const handleCancel = () => {
    console.log('Deletion cancelled');
    // Add your cancellation logic here
  };

  return (
    <Routes>
      <Route path='/' element={<MainContent />} />
      <Route path='/event-attendance' element={<EventAttendance />} />
      <Route path='/class-attendance' element={<ClassAttendance />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/feedbacks' element={<Feedbacks />} />
      <Route path='/about-us' element={<AboutUs />} />

      {/* Event_Attendance: Create & edit event */}
      <Route path='/create_event' element={<CustomModalsCreate />} />
      <Route path='/edit_event' element={<CustomeModalsEdit />} />
      <Route path='/delete_event' element={<CustomModalsDelete eventName="Intrams" onDelete={handleDelete} onCancel={handleCancel}/>} />

      <Route path='/event_attendees' element={<EventAttendees />} />


      {/* Class_Attendance: Create & edit department */}
      <Route path='/create_class' element={<ClassModalsCreate />} />
      <Route path='/edit_class' element={<ClassModalsEdit />} />
      <Route path='/delete_class' element={<ClassDeleteModal departmentName="CITC" onDelete={handleDelete} onCancel={handleCancel}/>} />

      {/* Class Analytics */}
      <Route path='/class_analytics' element={<ClassAttendanceAnalytics />} />
      

      {/* Department Section: Create & edit section */}
      <Route path='/add_section' element={<DepartmentAddSection />} />
      <Route path='/create_section' element={<ClassDepartmentCreate />} />
      <Route path='/edit_section' element={<ClassDepartmentEdit />} />
      <Route path='/delete_section' element={<ClassDepartmentDelete departmentName="IT1R1" onDelete={handleDelete} onCancel={handleCancel}/>} />

      <Route path='/class_attendees' element={<ClassAttendanceTable />} />





    </Routes>
  );
};

export default AppRoutes;
