import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import the components for each page
import EventAttendance from '../pages/EventAttendance';
import ClassAttendance from '../pages/ClassAttendance';
import Feedbacks from '../pages/Feedbacks';
import Analytics from '../pages/Analytics';
import AboutUs from '../pages/AboutUs';
import MainContent from '../components/MainContent';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainContent />} />
      <Route path='/event-attendance' element={<EventAttendance />} />
      <Route path='/class-attendance' element={<ClassAttendance />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/feedbacks' element={<Feedbacks />} />
      <Route path='/about-us' element={<AboutUs />} />
    </Routes>
  );
};

export default AppRoutes;
