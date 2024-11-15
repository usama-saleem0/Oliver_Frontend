import React, { useState } from "react";
import { edituser, savejob } from "../Features/userDetailSlice";
import { useAppDispatch } from "../Features/hooks";


interface Popup2 {
    close: () => void;
  }

// const Popup2= ()=>{

    const Popup2: React.FC<Popup2> = ({ close }) => {

        const dispatch = useAppDispatch();


        const [jobTitle, setJobTitle] = useState("");
        const [salaryRange, setSalaryRange] = useState("");
        const [location, setLocation] = useState("");
        const [jobDescription, setJobDescription] = useState("");
        const [jobType, setJobType] = useState("");


        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            const jobData = {
                jobTitle,
                salaryRange,
                location,
                jobDescription,
                jobType,
              };
        
            // Retrieve user data from localStorage
            const storedUserData = localStorage.getItem("userData");
            const userData = storedUserData ? JSON.parse(storedUserData) : null;
        
            if (userData && userData.id) {
              // Add user ID to formData
              const updatedJobData = {
                ...jobData,
                userId: userData.id,
              };
        
              dispatch(savejob(updatedJobData)).then((response) => {
                // if (typeof response.payload === 'object' && 'message' in response.payload) {
                  const { message } = response.payload as { message: string };
                  console.log('message' , message)
        
                  if (message === "Successfully") {
                    close()
                    
                   
                  } else {
                    alert(message);
                  }
                // } else {
                  console.error("Unexpected response format", response.payload);
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
    <section className="popup2">
        <div className="main-popup2">
            <div className="popup-2-head">
                <h2>Post A Job</h2>
            </div>
            <div className="popup-2-in-box">
                        <input type="text" placeholder="Job Title" 
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}/>
                        <input type="text" placeholder="Salary Range"
                        value={salaryRange}
                        
                        onChange={(e) => setSalaryRange(e.target.value)}/>
                        <input type="text" placeholder="Location" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}/>
                        
                        
                        <textarea name="" id="" placeholder="Job Description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="Remote-btn-box">

                        <button className="Full Time" onClick={() => setJobType("Remote")}>Remote</button>
                        <button className="Full Time" onClick={() => setJobType("Full Time")}>Full Time</button>
                    </div>


                    <div className="Create-btn-box">
                        <button onClick={handleSubmit}>
                        Create
                        </button>
                    </div>
                    <br/>
                    <br/>


                    
                <div className="close-btn-Intern">
                    <button onClick={close}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1L14.5 14.5" stroke="black" stroke-width="2"/>
            <path d="M1 14.5L14.5 1" stroke="black" stroke-width="2"/>
            </svg>Get Back To Main Screen</button>
                </div>
        </div>

    </section>
    </>


)



}


export default Popup2