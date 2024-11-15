// src/section/DashboardRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboardp from './Dashboardp';
import Profile from './Profile';
import Account from './Account';
import Contact from './Contact';
import Map from './Map';
import FAQ from './FAQ';

const DashboardRoutes: React.FC = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Dashboardp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="account" element={<Account />} />
      <Route path="contact" element={<Contact />} />
      <Route path="map" element={<Map />} />
      <Route path="faq" element={<FAQ />} />
    </Routes>
  );


};

export default DashboardRoutes;
