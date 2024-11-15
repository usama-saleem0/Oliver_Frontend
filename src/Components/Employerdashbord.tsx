import React, { useEffect } from "react";


import Sidebar from "./sidebar";
import Header from "./header";
import Dashboardp from "./section/Dashboardp";
import Profile from "./section/Profile";
import Account from "./section/Account";
import Contact from "./section/Contact";
import Map from "./section/Map";
import FAQ from "./section/FAQ";
import DashboardRoutes from "./section/DashboardRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getemails } from "./Features/userDetailSlice";



import { useAppDispatch } from './Features/hooks';





const Employerdashbord = ()=>{

    const dispatch = useAppDispatch();
    const { loading, users, error } = useSelector((state:any) => state.userDetail);

    useEffect(() => {

        console.log('Dispatching getemails...');
        dispatch(getemails());
         
    
      }, [dispatch]);


return (

    <>

    
{/* <div className="main-Did"> */}
  
  {/* <Sidebar/> */}

        {/* <div className="content"> */}
        {/* <Header/> */}
   <div>

    <DashboardRoutes />
   </div>

 
     
    
        {/* </div> */}
          

{/* </div> */}

    </>


)



}


export default Employerdashbord