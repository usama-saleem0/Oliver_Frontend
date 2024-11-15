import React from "react";


import hero from "../../../src/Assets/Images/hero-img.png"
import { useNavigate } from "react-router-dom";

const Hero = ()=>{

    const navigate = useNavigate()

    const login=()=>{
        navigate("/Login")
    }
return (

    <>
    <section className="hero">
        <div className="home-contanir">
            <div className="hero-main">
                <div className="hero-tital">
                    <p>#1 INSTRUCTOR RESOURCE</p>
                    <h2>Networking Made Simple For Watersports Professional</h2>
                    <h3>We help you make effortless connections creating endless possibilities</h3>
                    <button className="web-btn"onClick={login} > Join Waiting List</button>
                </div>

                <div className="hero-imger">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>


)



}


export default Hero