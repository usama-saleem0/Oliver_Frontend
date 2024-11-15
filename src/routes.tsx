import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import Dashbord from './Components/Dashbord';
import Login from './Components/login/login';
import Singup from './Components/login/sinup';
import Home from './Components/Home';
import MainLayouts from './Components/layouts/Mainlayouts';
import Dashboardp from './Components/section/Dashboardp';
import Profile from './Components/section/Profile';
import Account from './Components/section/Account';
import Contact from './Components/section/Contact';
import FAQ from './Components/section/FAQ';
import Map from './Components/section/Map';
import PrivateRoute from './PrivateRoute';
import { RootState } from './Components/Features/store';
import { useSelector } from 'react-redux';
import Sidetoggle from './Components/home-section/Sidetoggle';
import Page7 from './Components/section/page7';
import Page8 from './Components/section/page8';
import Page9 from './Components/section/page9';
import Intern1 from './Components/popup/Intern1';
import Intern2 from './Components/popup/Intern2';
import Intern3 from './Components/popup/Intern3';
import Applications from './Components/section/Applications';
import Tracking from './Components/section/Tracking';
import Employerdashbord from './Components/Employerdashbord';
import Instructor from './Components/layouts/Instructor';
import Chat from './Components/Chat';
import Adminlaout from './Components/layouts/Adminlaout';
import Admin11 from './Components/section/admin11';
import Admin12 from './Components/section/admin12';
import Admindash from './Components/section/admin_dash';
const AppRoutes: React.FC = () => {
  const storedUserData = localStorage.getItem("userData");
  // const isLoggedIn = useSelector((state: RootState) => state.userDetail.isLoggedIn);
 // Assuming storedUserData is declared somewhere with type inference or explicitly typed
const isLoggedIn = storedUserData?.length ?? 0 > 0;
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Singup" element={<Singup />} />
        <Route path="/Dashbordss" element={<Dashbord />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Page7" element={<Page7 />} />
        <Route path="/Page8" element={<Page8 />} />
        <Route path="/Page9" element={<Page9 />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Sidetoggle" element={<Sidetoggle />} />
        {/* <Route path="/Intern1" element={<Intern1 />} /> */}
        {/* <Route path="/Intern2" element={<Intern2 />} /> */}
        {/* <Route path="/Intern3" element={<Intern3 />} /> */}
        {/* <Route path="/Applications" element={<Applications />} /> */}
        <Route path="/Tracking/:userID/:JobID" element={<Tracking />} />
        {/* {isLoggedIn ? (
        <Route path="/Dashboard" element={<MainLayouts />}>
          <Route index element={<Dashboardp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="contact" element={<Contact />} />
          <Route path="map" element={<Map />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
         ) : (
          <Navigate to="/Login" />
        )} */}
        
<Route path="/Dashbord" element={isLoggedIn ? <MainLayouts /> : <Navigate to="/Login" />}>
          <Route index element={<Dashboardp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="contact" element={<Contact />} />
          <Route path="map" element={<Map />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="Applications" element={<Applications />} />
        </Route>

        <Route path="/Employerdashbord" element={isLoggedIn ? <Instructor /> : <Navigate to="/Login" />}>
          <Route index  element={<Page8 />} />
          <Route path="Page7" element={<Page9 />} />
          <Route path="Page9" element={<Page7 />} />
        </Route>


        <Route path="/Adminlaout" element={isLoggedIn ? <Adminlaout /> : <Navigate to="/Login" />}>
          <Route index  element={<Admindash />} />
          <Route path="admin1" element={<Admin11 />} />
          <Route path="admin2" element={<Admin12 />} />
        </Route>



      </Routes>
    </Router>
  );
};
export default AppRoutes;