import React from "react";


import intel from "../../../src/Assets/Images/intel.png"
import { useNavigate } from "react-router-dom";

// const Intern3 = ()=>{


interface Intern3Props {
    close: () => void;
  }

    const Intern3: React.FC<Intern3Props> = ({ close }) => {


        const navigate = useNavigate()


        const gotoapp = () => {
            console.log('hhhhh');
            navigate("/Dashbord/Applications")
    
            
        }
    


return (

    <>

   
    <section className="Intern">
        <div className="main-Intern">

            
            <div className="Intern-body">
                
            <div className="Intern-last-box">
                <div className="span-logo">
                    <img src={intel} alt="" />
                </div>
                <h2>Thanks for Applying</h2>
                <p>We Will Get Back To You Shortly !!</p>
            </div>

                <div className="Intern-sub-btn">
                    <button onClick={gotoapp}>Track Your Application</button>
                </div>

                <div className="close-btn-Intern">
                    {/* <button onClick={close}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M1 1L14.5 14.5" stroke="black" stroke-width="2"/>
  <path d="M1 14.5L14.5 1" stroke="black" stroke-width="2"/>
</svg>Get Back To Main Screen</button> */}
                </div>

            </div>

        </div>
    </section>
    
    
    </>


)



}


export default Intern3