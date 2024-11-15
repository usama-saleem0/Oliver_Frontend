import React, { useState } from 'react';

import homel from "../../Assets/Images/home-header-logo.png"
const Toggle = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>

<div className='main-her0-toggle'>
      {/* Sidebar */}
      <div className="main-toggle" style={{ display: isSidebarOpen ? 'block' : 'none' }} id="mySidebar">
  <div className="toggle-top">
  <button onClick={closeSidebar} className="cloce-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <g clip-path="url(#clip0_64_53)">
    <path d="M10.4119 12.9733C10.2236 12.8334 10.0894 12.7569 9.98385 12.6516C6.87758 9.55022 3.77656 6.44372 0.668172 3.34447C0.115418 2.79343 -0.134047 2.15913 0.0709675 1.39538C0.428988 0.0621456 2.02516 -0.438888 3.09005 0.438273C3.22552 0.549872 3.34727 0.678608 3.47176 0.80301C6.53166 3.86183 9.59126 6.92086 12.6494 9.9814C12.7551 10.0871 12.8454 10.2082 13.065 10.4651C13.177 10.2681 13.2272 10.1116 13.3304 10.008C16.4387 6.89092 19.5514 3.77826 22.6656 0.667116C23.478 -0.144518 24.5947 -0.217002 25.3693 0.48253C26.0992 1.14153 26.2107 2.2184 25.6236 3.00856C25.5119 3.15898 25.3776 3.29406 25.2446 3.42713C22.1595 6.51398 19.0729 9.59962 15.9871 12.6859C15.891 12.782 15.7992 12.8823 15.6864 13.0007C15.8017 13.1217 15.9013 13.2306 16.0056 13.3349C19.109 16.4391 22.2101 19.5457 25.3194 22.6438C25.8608 23.1833 26.1218 23.8021 25.943 24.5534C25.6199 25.9113 24.0103 26.4493 22.9222 25.5741C22.7953 25.4721 22.6819 25.3526 22.5663 25.2371C19.4976 22.1693 16.4291 19.1013 13.3624 16.0316C13.256 15.9251 13.1666 15.8019 13.0387 15.6501C12.894 15.7881 12.7872 15.8857 12.685 15.9878C9.56293 19.1089 6.44266 22.2318 3.31845 25.3508C2.4999 26.168 1.35569 26.2154 0.586327 25.4789C-0.131225 24.7919 -0.199765 23.6818 0.432213 22.9153C0.535628 22.7899 0.654464 22.6769 0.769671 22.5617C3.83754 19.4931 6.9057 16.4248 9.97508 13.3577C10.0813 13.2515 10.2006 13.1585 10.4119 12.9733Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_64_53">
      <rect width="26" height="26" fill="white"/>
    </clipPath>
  </defs>
</svg></button>
  <nav className="home-nav">


  <div className="home-hader-logo">
                <img src={homel} alt="" />
                </div>
<div className="home-ul-list">
    <ul className='toggle-side'>
        <li><a>Features</a></li>
        <li><a>Centres</a></li>
        <li><a>F&Q’s</a></li>
        <li><a>The Team</a></li>
        
    </ul>
</div>





</nav>
  </div>
      </div>

      {/* Page Content */}
      <div className="w3-teal">
        <button className="w3-button w3-teal w3-xlarge" onClick={openSidebar}><svg xmlns="http://www.w3.org/2000/svg" width="51" height="31" viewBox="0 0 51 31" fill="none">
  <path d="M3 3L48 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
  <path d="M20 15.5L48 15.5" stroke="white" stroke-width="5" stroke-linecap="round"/>
  <path d="M3 28L48 28" stroke="white" stroke-width="5" stroke-linecap="round"/>
</svg></button>
   
      </div>

      
      </div>
    </>
  );
};

export default Toggle;
