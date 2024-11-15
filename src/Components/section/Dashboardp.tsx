import React, { useEffect, useState } from "react";


import dash from "../../../src/Assets/Images/dash-icon.png"
import dash1 from "../../../src/Assets/Images/dash-icon1.png"
import dash2 from "../../../src/Assets/Images/dash-icon2.png"
import dash3 from "../../../src/Assets/Images/dash-icon3.png"
import intel from "../../../src/Assets/Images/intel.png"
import iconl from "../../../src/Assets/Images/icon-list.png"
import search from "../../../src/Assets/Images/search.png"
import Activity from "../../../src/Assets/Images/Activity-icon.png"
import { useAppDispatch } from "../Features/hooks";
import { Job } from "../../types/job";
import { getjob } from "../Features/userDetailSlice";
import Intern1 from "../popup/Intern1";


const Dashboardp = ()=>{

    
  const dispatch = useAppDispatch();
  // const { loading, users, error } = useSelector((state:any) => state.userDetail);
  const [jobs, setJobs] = useState<any[]>([]);

  const [pop1 , setPop1] = useState(false)



  useEffect(() => {
    console.log('Dispatching getjobsssss...');

    dispatch(getjob()).then((response) => {
        if (Array.isArray(response?.payload)) {
            
          const jobs = response.payload; 
          setJobs(jobs);// Assuming response.payload is directly an array of Job objects
          console.log('Jobsssssss', jobs);
          
        }
      });
    }, [dispatch]);


    

    const Singlejobs = (job: any) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('here');
        localStorage.setItem("jobDetail", JSON.stringify(job));
        setPop1(true);
    }


  


return (

    <>
    <section className="Dashboard">
                    <div className="main-Dashboard">
                        <div className="Dashboard-card-box">

                            <div className="Dashboard-card">
                                <img src={dash} alt=""/>
                                <span>
                                    <p>Interviews</p>
                                    <h3>50</h3>
                                </span>
                            </div>

                            <div className="Dashboard-card color-change">
                            <img src={dash1} alt=""/>
                                <span>
                                    <p>Apply</p>
                                    <h3>50</h3>
                                </span>
                            </div>

                            <div className="Dashboard-card">
                            <img src={dash2} alt=""/>
                                <span>
                                    <p>Profile</p>
                                    <h3>50</h3>
                                </span>
                            </div>

                            <div className="Dashboard-card color-change">
                            <img src={dash3} alt=""/>
                                <span>
                                    <p>Message </p>
                                    <h3>50</h3>
                                </span>
                            </div>


                        </div>

                        <div className="Recomended-Job">

                            <div className="Recomended-part-1">
                                <div className="Recomended-box">
                                    <h2>Recomended Jobs</h2>
                                    
                                    {jobs.map((job) => (
                                    <div className="Recomended-card">
                                        <div className="Recomended-icon-box">
                                            <img src={intel} alt="" className="logo-icon"/>

                                            <img src={iconl} alt=""/>
                                        </div>
                                        <span>
                                            <h2>{job.title}</h2>
                                        <h2>{job.location}</h2>
                                        </span>
                                        <h3>${job.budget}</h3>

                                        <p>{job.description}</p>
                                        <button style={{backgroundColor:"black" , border:"none" , marginRight:"20px"}} onClick={Singlejobs(job)}>Apply Now</button>

                                        <button>{job.type}</button>
                                    </div>
                                    ))}

                              
                                    
                                
                                </div>
                            </div>

                            <div className="Recomended-part-2">
                                <div className="Complete-Profile-box">
                                    <h3>Complete Your Profile</h3>
                                    <div className="pogras-bar">
                                        <div className="tiny">
                                            <div className="green" style={{width:'50%'}}></div>
                                        
                                        </div>
                                        <p>70%</p>
                                    </div>
                                   
                                    <span>
                                        <p>Add a profile picture</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M10.5 16.0605L6.75 12.3098L7.80975 11.25L10.5 13.9395L16.1887 8.25L17.25 9.31125L10.5 16.0605Z" fill="#53BD00"/>
                                            <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z" fill="#53BD00"/>
                                          </svg>
                                    </span>

                                    <span>
                                        <p>Add a contact information</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M10.5 16.0605L6.75 12.3098L7.80975 11.25L10.5 13.9395L16.1887 8.25L17.25 9.31125L10.5 16.0605Z" fill="#757575"/>
                                            <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z" fill="#757575"/>
                                          </svg>
                                    </span>
                                </div>

                                <div className="Complete-Profile-box">
                                    <h3>Recent Activity</h3>

                                    <div className="Activity-box">
                                        <div className="Activity-card">
                                            <div className="Activity-logo">
                                                <img src={Activity} alt=""/>
                                            </div>
                                            <div className="Activity-para">
                                                <h3>Your application has accepted and viewed</h3>
                                                <h3>12h ago</h3>
                                            </div>
                                        </div>
                                        <div className="Activity-card">
                                            <div className="Activity-logo">
                                                 <img src={Activity} alt=""/>
                                            </div>
                                            <div className="Activity-para">
                                                <h3>Your application has accepted and viewed</h3>
                                                <h3>12h ago</h3>
                                            </div>
                                        </div>
                                        <div className="Activity-card">
                                            <div className="Activity-logo">
                                                 <img src={Activity} alt=""/>
                                            </div>
                                            <div className="Activity-para">
                                                <h3>Your application has accepted and viewed</h3>
                                                <h3>12h ago</h3>
                                            </div>
                                        </div>
                                        <div className="Activity-card">
                                            <div className="Activity-logo">
                                                 <img src={Activity} alt=""/>
                                            </div>
                                            <div className="Activity-para">
                                                <h3>Your application has accepted and viewed</h3>
                                                <h3>12h ago</h3>
                                            </div>
                                        </div>
                                        <div className="Activity-card">
                                            <div className="Activity-logo">
                                                 <img src={Activity} alt=""/>
                                            </div>
                                            <div className="Activity-para">
                                                <h3>Your application has accepted and viewed</h3>
                                                <h3>12h ago</h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {pop1 && (
                            <div className="popss">

                                <Intern1 close={() => setPop1(false)}/>
                                


                            </div>
                            )}


                           

                        </div>
                    </div>
                </section>

    </>


)



}


export default Dashboardp