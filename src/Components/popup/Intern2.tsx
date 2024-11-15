import React, { ChangeEvent, useState } from "react";

import icon from "../../../src/Assets/Images/icon-list.png"
import intel from "../../../src/Assets/Images/intel.png"
import Intern3 from "./Intern3";
import { useAppDispatch } from "../Features/hooks";
import { appliedjob, savejob } from "../Features/userDetailSlice";


interface Intern2Props {
    close: () => void;
  }

// const Intern2 = ()=>{
    const Intern2: React.FC<Intern2Props> = ({ close }) => {

        const [pop3 , setPop3] = useState(true)
        const dispatch = useAppDispatch();
        const [formData, setFormData] = useState({
            fullname: "",
            email: "",
            phonenumber: "",
          });


          const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
        
           
              setFormData({
                ...formData,
                [name]: value,
              });
           
          };
          


        const Popup3 = () => {
            console.log('hhhhh');
    
            setPop3(false)
        }


        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
           
            
            const storedUserData = localStorage.getItem("userData");
            const userData = storedUserData ? JSON.parse(storedUserData) : null;
        
            const storedJobData = localStorage.getItem("jobDetail");
            const jobData = storedJobData ? JSON.parse(storedJobData) : null;
            if (userData && jobData) {
              // Add user ID to formData
              const updatedJobData = {
                ...formData,
                userId: userData.id,
                jobId: jobData.id,

              };
        
              dispatch(appliedjob(updatedJobData)).then((response) => {
                // if (typeof response.payload === 'object' && 'message' in response.payload) {
                  const { message } = response.payload as { message: string };
                  console.log('message' , message)
        
                  if (message === "Successfully") {
                    setPop3(false)

                    
                   
                  } else {
                    alert(message);
                  }
                // } else {
                  console.error("Unexpected response format", response.payload);
                //   setPop3(false)
                // }
              }).catch((error) => {
                console.error("Signup Error", error);
              });
            } else {
              alert("User ID not found in localStorage.");
            }
          };
    
       


return (

    <>
    {
            pop3  && (
    <section className="Intern">
        <div className="main-Intern">

            <div className="Intern-head">
                <div className="Intern-head-logo">
                    <img src={intel} alt="" />
                </div>

                <div className="Intern-btn-box">
                    <span>
                        <button>
                        Full Time
                        </button>
                        <img src={icon} alt="" />
                    </span>

                    <p>London , England</p>
                </div>
            </div>
            
            <div className="Intern-body">
                
                <div className="Intern-h2">
                    <h2>Provide Your Initials</h2>
                </div>

                <div className="Intern-box-input">
                    <div className="Intern-inut-group">
                        <label htmlFor="">Full Name</label>

                        <input type="text"placeholder="Enter your name" 
                        name='fullname'
                         value={formData.fullname}
                         onChange={handleChange}
                        />
                    </div>


                    <div className="Intern-inut-group">
                        <label htmlFor="">Email</label>

                        <input type="Email"placeholder="Email Address *"
                        
                        name='email'
                        value={formData.email}
                        onChange={handleChange}/>
                    </div>



                    <div className="Intern-inut-group">
                        <label htmlFor="">Phone Number</label>

                        <input type="Number"placeholder="Phone Number *" 
                         name='phonenumber'
                         value={formData.phonenumber}
                         onChange={handleChange}/>
                    </div>
                </div>

                <div className="Intern-sub-btn">
                    <button onClick={handleSubmit}>Submit</button>
                </div>

                <div className="close-btn-Intern">
                    <button onClick={close}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M1 1L14.5 14.5" stroke="black" stroke-width="2"/>
  <path d="M1 14.5L14.5 1" stroke="black" stroke-width="2"/>
</svg>Get Back To Job Profile</button>
                </div>

            </div>

        </div>
    </section>
            )}

            {
                pop3 === false && (
                    <Intern3  close={() => setPop3(true)}/>
                )
            }
    
    
    </>


)



}


export default Intern2