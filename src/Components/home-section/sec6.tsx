import React from "react";

import last1 from "../../../src/Assets/Images/last1 (1).png"
import last2 from "../../../src/Assets/Images/last1 (2).png"
import last3 from "../../../src/Assets/Images/last1 (3).png"
import last4 from "../../../src/Assets/Images/last1 (4).png"




const Sec6 = ()=>{


return (

    <>
<section className="sec6">
<div className="home-contanir">
    <div className="main-sec6">
        
    <div className="sec2-tital">
            <h2>Meet Our Team</h2>
            </div>



           

            <div className="sec6-box">
                {/* <div className="sec6-card">
                    <img src={last1} alt="" />
                </div> */}


            <div className="card sec6-card">
            <img src={last1} alt="" />
            <span> <h2>Founder </h2>
            <h2> Oliver Patterson</h2></span>
            </div>



            <div className="card sec6-card">
            <img src={last2} alt="" />
            <span> <h2>Founder </h2>
            <h2> Oliver Patterson</h2></span>
            </div>



            <div className="card sec6-card">
            <img src={last3} alt="" />
            <span> <h2>Founder </h2>
            <h2> Oliver Patterson</h2></span>
            </div>


            

            <div className="card sec6-card">
            <img src={last4} alt="" />
            <span> <h2>Founder </h2>
            <h2> Oliver Patterson</h2></span>
            </div>




                
            </div>
    </div>
</div>
</section>
    </>


)



}


export default Sec6