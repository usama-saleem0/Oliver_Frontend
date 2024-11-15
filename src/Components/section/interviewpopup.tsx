import React, { useState } from "react";
import { createschedule, edituser, savejob } from "../Features/userDetailSlice";
import { useAppDispatch } from "../Features/hooks";


interface Interviewpopup {
    close: () => void;
  }

// const Popup2= ()=>{

    const Interviewpopup: React.FC<Interviewpopup> = ({ close }) => {

        const dispatch = useAppDispatch();


        const [jobTitle, setJobTitle] = useState("");
        const [salaryRange, setSalaryRange] = useState("");
        const [location, setLocation] = useState("");
        const [jobDescription, setJobDescription] = useState("");
        const [jobType, setJobType] = useState("");
        const [interviewDate, setInterviewDate] = useState("");
        const [interviewTime, setInterviewTime] = useState("");

        // const [jobDate, setJobDate] = useState("");



        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            const jobData = {
              interviewDate,
              interviewTime
                
              };
        
            // Retrieve user data from localStorage
            const storedUserData = localStorage.getItem("jobDatas");
            const userData = storedUserData ? JSON.parse(storedUserData) : null;

            const storedUserDatas = localStorage.getItem("userData");
            const userDatas = storedUserDatas ? JSON.parse(storedUserDatas) : null;
        
            if (userData && userData.id) {
              // Add user ID to formData
              const updatedJobData = {
                ...jobData,
                jobId: userData.job_id,
                userId: userDatas.id,

              };
        
              dispatch(createschedule(updatedJobData)).then((response) => {
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
                <h2>Create Interview Schedule</h2>
            </div>
            <div className="popup-2-in-box">
                        <input 
                         type="date" 
                         placeholder="Schedule Date" 
                               value={interviewDate} 
                               onChange={(e) => setInterviewDate(e.target.value)} 
                        style={{width:'45%'}}/>


                        <input type="time" placeholder="Salary Range"
                        value={interviewTime}
                        
                        onChange={(e) => setInterviewTime(e.target.value)} style={{width:'45%'}} />
                      
                        
                     
                    </div>

                    <br/>
                    <br/>


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


export default Interviewpopup