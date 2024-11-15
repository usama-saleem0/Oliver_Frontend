import React from "react";

import alex from "../../../src/Assets/Images/alexprofile.png"

const Popup1 = ()=>{


return (

    <>
    <section className="popup1">

        <div className="main-popup1">
        <span className="close-icon"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
  <path d="M28.7996 9.6004L9.59961 28.8004M9.59961 9.6004L28.7996 28.8004" stroke="#89A0FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            <div className="alex-profile">
                <span className="alex-dp"> <img src={alex} alt="" /></span>
                <span className="alex-tital">
                    <h2>Alex Smith</h2>
                    <p>Creative UI/UX Designer</p>
                </span>
            </div>

            <div className="about-alex">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam.</p>
            </div>




            <div className="about-alex">
                <h2>Qualifications</h2>
               


                <div className="about-alex-box">

<div className="about-alex-card">
    <h2>PHD In Computer Science</h2>
    <p>University of Techlandia</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>
<div className="about-alex-card">
    <h2>MS In Information Technology</h2>
    <p>University of Techlandia</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>
<div className="about-alex-card">
    <h2>Certified Scrum Master (CSM)</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra,</p>

</div>

</div>
            </div>











            <div className="about-alex">
                <h2>Past Experience</h2>
               


                <div className="about-alex-box">

<div className="about-alex-card">
    <h2>Senior Lecturer, University of Techlandia  -  2022-Present</h2>
    <ul>
        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
    </ul>
</div>

<div className="about-alex-card">
    <h2>Visting Professor, Global Tech Institute   2020-2021</h2>
    <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
    </ul>
</div>

<div className="about-alex-card">
    <h2>Visting Professor, Global Tech Institute   2020-2021</h2>
    <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. </li>
    </ul>
</div>

</div>
            </div>

        </div>
    </section>
    </>


)



}


export default Popup1