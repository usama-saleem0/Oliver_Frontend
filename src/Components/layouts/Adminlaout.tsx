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
import Header from '../header';
import Sidebar3 from '../sidebar3';



interface Props {
  children?: ReactNode;
}

export const Adminlaout = (props: Props) => {
  return (
    <div className="main-layout">
      <Sidebar3 />
      <div className="content">
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Adminlaout;
