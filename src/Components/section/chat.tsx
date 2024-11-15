import React, { useEffect, useState } from "react";



import dp from "../../../src/Assets/Images/dp.png"

const Chat = ()=>{




return (

    <>
<section className="Dashboard">
<div className="main-Dashboard">
  <div className="chat-btn">
    <button>Schedule Meeting</button>
  </div>

  <div className="chat-box">

    <div className="chat-box-head">
       <div className="chat-box-head-dp">
        <img src={dp} alt="" />
       </div>

       <span className="chat-name">
        <h2>Christiana Adams</h2>
        <p>online</p>
       </span>
    </div>

    
    <div className="chat-box-body">
      
      <div className="chat-box-body-input">
        <input type="text" placeholder="Write Your Message Here"/>

        <button><svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <g clip-path="url(#clip0_144_2215)">
    <path d="M26.0001 1.0683C25.9161 1.56717 25.8245 2.06488 25.7497 2.5651C25.3973 4.9215 25.0491 7.27851 24.7001 9.63538C24.371 11.8581 24.0432 14.081 23.7136 16.3036C23.4823 17.8636 23.2536 19.4241 23.014 20.9828C22.9232 21.5733 22.4585 21.8605 21.9003 21.6697C18.1504 20.3878 14.4025 19.1 10.654 17.814C10.6463 17.8113 10.6397 17.8053 10.6003 17.7806C14.2336 13.3899 17.8637 9.00307 21.4938 4.61623C21.4783 4.60051 21.4627 4.58473 21.4471 4.56901C21.2773 4.71327 21.1069 4.85692 20.9377 5.00193C16.4553 8.84635 11.9723 12.6903 7.49309 16.5385C7.3641 16.6493 7.2588 16.6574 7.10702 16.605C4.95045 15.8606 2.79266 15.1197 0.633309 14.3833C0.268747 14.259 0.0320839 14.0309 0.00277235 13.6409C-0.026607 13.2493 0.179659 12.9926 0.519795 12.8146C6.8962 9.47744 13.2711 6.1374 19.6462 2.79797C21.3018 1.93075 22.9571 1.06293 24.6133 0.196867C25.2846 -0.154197 25.6387 -0.0470878 26.0001 0.609924C26.0001 0.762694 26.0001 0.915532 26.0001 1.0683Z" fill="black"/>
    <path d="M9.50875 19.1464C10.9644 19.6453 12.4074 20.14 13.8659 20.6398C13.8344 20.6961 13.815 20.741 13.7868 20.7794C12.857 22.0499 11.9282 23.3212 10.9949 24.5891C10.6622 25.0411 10.1265 25.1406 9.77242 24.785C9.62572 24.6377 9.49878 24.3933 9.49613 24.1913C9.47462 22.5386 9.48459 20.8856 9.48561 19.2326C9.48568 19.2165 9.49396 19.2003 9.50875 19.1464Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_144_2215">
      <rect width="26" height="25" fill="white"/>
    </clipPath>
  </defs>
</svg></button>
      </div>
    </div>
  </div>
</div>
</section>
    </>


)



}


export default Chat