import React from "react";


import center from "../../../src/Assets/Images/inst-icon.png"

import inst from "../../../src/Assets/Images/center-icon.png"

const Sec1 = ()=>{


return (

    <>
    <section className="Sec1">
        <div className="home-contanir">

            <div className="long-sec1">
            <div className="main-sec1">
            <div className="loader"></div>
            
                <div className="sec1-card">
                    <span className="sec1-icon">
                        <img src={center} alt="" />
                    </span>
                    <span className="sec1-tital">
                        <h2>2400+</h2>
                        <p>CENTERS</p>
                    </span>
                </div>

                <div className="sec1-card">
                    <span className="sec1-icon">
                        <img src={inst} alt="" />
                    </span>
                    <span className="sec1-tital">
                        <h2>24000+</h2>
                        <p>INSTRUCTORS  </p>
                    </span>
                </div>

                <div className="sec1-h3">
                    <h3>Exclusive Access For Water Sports Industry</h3>
                </div>

            </div>
            </div>
        </div>
    </section>
    </>


)



}


export default Sec1