import React from "react";

import mobile from "../../../src/Assets/Images/mobile.png"
import p1 from "../../../src/Assets/Images/Check-icon-1.png"
import p2 from "../../../src/Assets/Images/Check-icon-2.png"
import p3 from "../../../src/Assets/Images/Check-icon-3.png"
import p4 from "../../../src/Assets/Images/Check-icon-4.png"
import p5 from "../../../src/Assets/Images/Check-icon-5.png"


const Sec2 = ()=>{


return (

    <>
<section className="sec2">
<div className="home-contanir">
    <div className="main-sec2">
        <div className="sec2-tital">
            <h2>Check Out Our Features</h2>
        </div>

        <div className="sec2-box">
            <div className="sec2-part">


                <div className="sec2-card">
                    <span className="Check-icon">
                    <img src={p1} alt="" />
                    </span>

                    <span className="Check-tital">
                        <h3>Interactive Job Map</h3>
                        <p>Save time navigating through endless job boards using interactive job map</p>
                    </span>
                </div>


                <div className="sec2-card">
                    <span className="Check-icon">
                    <img src={p2} alt="" />
                    </span>

                    <span className="Check-tital">
                        <h3>Networking database</h3>
                        <p>Enhance your professional visibility in the job market by leveraging our comprehensive database</p>
                    </span>
                </div>



                <div className="sec2-card">
                    <span className="Check-icon">
                    <img src={p3} alt="" />
                    </span>

                    <span className="Check-tital">
                        <h3>instructor feedback</h3>
                        <p>Establish your professional reputation by gaining feedback from both students and training providers</p>
                    </span>
                </div>



                <div className="sec2-card">
                    <span className="Check-icon">
                    <img src={p4} alt="" />
                    </span>

                    <span className="Check-tital">
                        <h3>Certificate locker</h3>
                        <p>Securely store your certificates online for instant access</p>
                    </span>
                </div>


                <div className="sec2-card">
                    <span className="Check-icon">
                    <img src={p5} alt="" />
                    </span>

                    <span className="Check-tital">
                        <h3>notifications</h3>
                        <p>Never forget to renew a certificate and never miss a potential job opportunity</p>
                    </span>
                </div>

            </div>

            <div className="sec2-imger">
                <img src={mobile} alt="" />
            </div>
        </div>
    </div>
</div>
</section>
    </>


)



}


export default Sec2