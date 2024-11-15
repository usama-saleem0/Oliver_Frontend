import React, { useState } from "react";

import slogo from "../../src/Assets/Images/side-logo.png"
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from "./Features/userDetailSlice";




const Sidebar3 = ()=>{
    const navigate = useNavigate()

    const dispatch = useDispatch();

    // const logout=()=>{
    //     navigate("/Login")
    // }


    // const handleLogout = () => {
    //   dispatch(logoutSuccess());
    //   // Redirect or handle logout actions as needed (clear session, redirect to login, etc.)
    //   return <Navigate to="/Login" />;
    // };


    const handleLogout = () => {
        // dispatch(logoutSuccess());
        // Redirect or handle logout actions as needed (clear session, redirect to login, etc.)
        console.log("LOGOUR")
        localStorage.removeItem('userData');
        navigate('/Login')
        // return <Navigate to="/Login" />;
      };
      
    const [indexes, setIndexes] = useState<number>(0);



    const indexing = (value: number) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      
        setIndexes(value);
      };
  

return (

    <>

<div  className="sidebar mobile" >

<div className="sidebar-logo">
<img src={slogo} alt=""/>
</div>

<div className="sidebar-box">

    <div className="sidebar-site-1">
        <Link   className={indexes === 1 ? 'active' : ''} to="" onClick={indexing(1)}>

       
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z" fill="white"/>
              </svg>Dashboard
        
        </Link>

        <Link  className={indexes === 2 ? 'active' : ''} to="/Adminlaout/admin1" onClick={indexing(2)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.09 6.98002C20.24 6.04002 18.82 5.57002 16.76 5.57002H16.52V5.53002C16.52 3.85002 16.52 1.77002 12.76 1.77002H11.24C7.48004 1.77002 7.48004 3.86002 7.48004 5.53002V5.58002H7.24004C5.17004 5.58002 3.76004 6.05002 2.91004 6.99002C1.92004 8.09002 1.95004 9.57002 2.05004 10.58L2.06004 10.65L2.13749 11.4633C2.15176 11.6131 2.23242 11.7484 2.35831 11.8307C2.59812 11.9877 2.99946 12.2464 3.24004 12.38C3.38004 12.47 3.53004 12.55 3.68004 12.63C5.39004 13.57 7.27004 14.2 9.18004 14.51C9.27004 15.45 9.68004 16.55 11.87 16.55C14.06 16.55 14.49 15.46 14.56 14.49C16.6 14.16 18.57 13.45 20.35 12.41C20.41 12.38 20.45 12.35 20.5 12.32C20.8968 12.0958 21.3083 11.8195 21.6835 11.5489C21.7965 11.4673 21.8688 11.3413 21.8842 11.2028L21.9 11.06L21.95 10.59C21.96 10.53 21.96 10.48 21.97 10.41C22.05 9.40002 22.03 8.02002 21.09 6.98002ZM13.09 13.83C13.09 14.89 13.09 15.05 11.86 15.05C10.63 15.05 10.63 14.86 10.63 13.84V12.58H13.09V13.83ZM8.91004 5.57002V5.53002C8.91004 3.83002 8.91004 3.20002 11.24 3.20002H12.76C15.09 3.20002 15.09 3.84002 15.09 5.53002V5.58002H8.91004V5.57002Z" fill="white" />
              <path d="M20.8736 13.7342C21.2272 13.5659 21.6344 13.8462 21.599 14.2362L21.2401 18.19C21.0301 20.19 20.2101 22.23 15.8101 22.23H8.19009C3.79009 22.23 2.97009 20.19 2.76009 18.2L2.41938 14.4522C2.38433 14.0667 2.78229 13.7868 3.13493 13.9463C4.27434 14.4618 6.37748 15.3764 7.67666 15.7167C7.84097 15.7597 7.97386 15.8773 8.0458 16.0312C8.65277 17.3293 9.9692 18.02 11.8701 18.02C13.7522 18.02 15.0852 17.3027 15.6942 16.0014C15.7663 15.8474 15.8993 15.7299 16.0637 15.6866C17.4433 15.3236 19.6819 14.3013 20.8736 13.7342Z" fill="white" />
            </svg>
            Job Listing
        </Link>

        <Link  className={indexes === 3 ? 'active' : ''} to="/Adminlaout/admin2" onClick={indexing(3)}>


       
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 2H8C4.5 2 3 4 3 7V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2ZM8 12.25H12C12.41 12.25 12.75 12.59 12.75 13C12.75 13.41 12.41 13.75 12 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25ZM16 17.75H8C7.59 17.75 7.25 17.41 7.25 17C7.25 16.59 7.59 16.25 8 16.25H16C16.41 16.25 16.75 16.59 16.75 17C16.75 17.41 16.41 17.75 16 17.75ZM18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z" fill="white"/>
              </svg>
            Applications
            
        
        </Link>

       

    </div>

    <div className="sidebar-site-1">

        <a onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="no-fill">
                <path d="M15.1001 16.44C14.7901 20.04 12.9401 21.51 8.8901 21.51L8.7601 21.51C4.2901 21.51 2.5001 19.72 2.5001 15.25L2.5001 8.73C2.5001 4.26 4.2901 2.47 8.7601 2.47L8.8901 2.47C12.9101 2.47 14.7601 3.92 15.0901 7.46" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <path d="M22 12L9.12 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <path d="M11.3501 15.35L8.0001 12L11.3501 8.65" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>Logout
        </a>
    
    </div>

</div>


</div>

    </>


)



}


export default Sidebar3