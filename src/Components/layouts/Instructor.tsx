// import React, { ReactNode } from "react";


// import Sidebar from "../../Components/sidebar";
// import Header from "../../Components/header";

// import Routes from "../../routes";








// interface Props {
//     children: ReactNode;
//   }



// export const MainLayouts = (props: Props) => {
//     const { children } = props;
//     return (
//       <div className="main-layout">
//         {/* <Header>
//           <AppHeader />
//         </Header> */}
//         <div className="layout-children">
        
//           {children}
//         </div>
        
//       </div>
//     );
//   };


// export default MainLayouts


import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import Header from '../header';
import Sidebar2 from '../sidebar2';

interface Props {
  children?: ReactNode;
}

export const Instructor = (props: Props) => {
  return (
    <div className="main-layout">
      <Sidebar2 />
      <div className="content">
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
