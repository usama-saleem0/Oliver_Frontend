import React from "react";

import stay1 from "../../../src/Assets/Images/stay-1.png"
import stay2 from "../../../src/Assets/Images/stay-2.png"
import stay3 from "../../../src/Assets/Images/stay-3.png"



import i1 from "../../../src/Assets/Images/1.png"
import i2 from "../../../src/Assets/Images/2.png"
import i3 from "../../../src/Assets/Images/3.png"


const Sec3 = ()=>{


return (

    <>
    <section className="sec3">
        <div className="home-contanir">
            <div className="main-sec3">

            <div className="sec2-tital">
            <h2>Stay Updated</h2>
            </div>


            <div className="sec3-main-box">

                <div className="sec3-card">
                    <div className="sec3-img">
                        <img src={stay1} alt="" />
                    </div>

                    <div className="sec3-tital">
                        <h2>Register To Express Yourself</h2>
                        <p>Whether you are an Instructor or Training Provider we would love to hear your feedback on our features to help building an amazing platform.  <span className="id-no">
                            {/* <img src={i1} alt="" /> */}
                            <h3>01</h3>
                          </span></p>
                       
                        <button className="web-btn">
                        Join Waiting List
                        </button>
                    </div>
                </div>


                
                <div className="sec3-card  no2" >
                 

                    <div className="sec3-tital">
                        <h2>Get Notified Of Our Progress</h2>
                        <p>Join us on the journey. We’ll keep you updated on our advancements, new features and launch date.      <span className="id-no">
                        <h3>02</h3>
                          </span></p>
                     
                        <button className="web-btn">
                        Join Waiting List
                        </button>
                    </div>

                    <div className="sec3-img">
                        <img src={stay2} alt="" />
                    </div>
                </div>


                <div className="sec3-card">
                    <div className="sec3-img">
                        <img src={stay3} alt="" />
                    </div>

                    <div className="sec3-tital">
                        <h2>Want To Be Part Of The Future?</h2>
                        <p>Help us build our platform by donating a gift. All donors will receive a special gift upon launch.<span className="id-no">
                        <h3>03</h3>
                          </span></p>
                       
                        <button className="web-btn">
                  Continue To Development - Coming Soon
                        </button>
                    </div>
                </div>

       

            </div>

            </div>
        </div>
    </section>
    </>


)



}


export default Sec3