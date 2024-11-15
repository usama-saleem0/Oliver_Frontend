import React from "react";

import homel from "../../src/Assets/Images/home-header-logo.png"
import { useNavigate } from "react-router-dom";
import Toggle from "./home-section/toggle";
const Header2 = ()=>{

    const navigate = useNavigate()

    const login=()=>{
        navigate("/Login")
    }
return (

    <>
    <header className="home-header">
        <div className="home-contanir">
            <nav className="home-nav">

                <div className="home-hader-logo">
                <img src={homel} alt="" />
                </div>
                
                <Toggle/>
                <div className="home-ul-list block-list">
                    <ul>
                        <li><a>Features</a></li>
                        <li><a>Centres</a></li>
                        <li><a>F&Q’s</a></li>
                        <li><a>The Team</a></li>
                        
                    </ul>
                </div>




                <div className="homne-btn-box">
                    <button className="web-btn"onClick={login}>Join Waiting List</button>
                </div>

            </nav>
        </div>
    </header>

    </>


)



}


export default Header2