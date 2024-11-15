import React, { useEffect, useState } from "react";


import Activityh from "../../../src/Assets/Images/active-job-h.png"
import shortlisted from "../../../src/Assets/Images/shortlisted-review-h.png"
import shortlistedc from "../../../src/Assets/Images/shortlisted-candidate-h.png"
import applicant from "../../../src/Assets/Images/applicant-h.png"
import search from "../../../src/Assets/Images/search.png"
import person_h from "../../../src/Assets/Images/person_h.png"
import { useAppDispatch } from "../Features/hooks";
import { get_instructors_upcoming_requests, getjob, getprofile, instructorjobs } from "../Features/userDetailSlice";
import Intern1 from "../popup/Intern1";
import Viewjob from "../popup/viewjob";

import Popup2 from "./popup2";
import { AppliedJob } from "../../types/AppliedJob";
import Chat from "../Chat";


 


const Page8 = ()=>{



  
  const dispatch = useAppDispatch();
  // const { loading, users, error } = useSelector((state:any) => state.userDetail);
  const [jobs, setJobs] = useState<any[]>([]);
  const [upcoming_request, setupcoming_request] = useState<any[]>([]);


  const [pop1 , setPop1] = useState(false)
  const [pop2 , setPop2] = useState(false)

  const [show_chat , set_show_chat] = useState(false)

  const [reciever_id,setreciever_id]  = useState()


  


  useEffect(() => {
    console.log('Dispatching getjobsssss...');

    dispatch(instructorjobs()).then((response) => {
        if (Array.isArray(response?.payload)) {
            
          const jobs = response.payload; 
          setJobs(jobs);
          console.log('Jobsssssss', jobs);
          
        }
      });



      Upcoming_Requests()


    }, [dispatch]);

    const ShowJobsPop = () => {
      setPop1(true)

    }



    const Getjobs = () => {
      console.log('here')
      dispatch(instructorjobs()).then((response) => {
        if (Array.isArray(response?.payload)) {
            
          const jobs = response.payload; 
          setJobs(jobs);
          console.log('Jobsssssss', jobs);
          
        }
      });

    }


    const Upcoming_Requests = () => {
      console.log('here')
      dispatch(get_instructors_upcoming_requests()).then((response) => {
        if (Array.isArray(response?.payload)) {
            
          const jobs = response.payload; 
          if(jobs.length>0)
          {

            setupcoming_request(jobs);
            console.log('Jobsssssssreq', jobs[0]);
          }
          else
          {
            setupcoming_request([])
          }
          
        }
      });

    }

 
  
    const Singlejobs = (job: any) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('here');
      localStorage.setItem("jobDetail", JSON.stringify(job));
      setPop2(true);
  }


 
  const Handle_chat=(e:any)=>{

    console.log("RC_ID",e)
    setreciever_id(e)

    set_show_chat(true)
   
  }
  const handle_chat_Callback=(e:any)=>{
    console.log(e,"call PArent")
    set_show_chat(false)
  }


return (

    <>
    <section className="Dashboard">
        <div className="main-Dashboard">
          <div className="Dashboard-card-box">
            <div className="Dashboard-card Dashboard-card__alt">
              <img src={Activityh} alt="" />
              <span>
                <p>Active Job</p>
                <h3>20</h3>
              </span>
            </div>

            <div className="Dashboard-card Dashboard-card__alt color-change">
              <img src={applicant} alt="" />
              <span>
                <p>New Applicants</p>
                <h3>50</h3>
              </span>
            </div>

            <div className="Dashboard-card Dashboard-card__alt">
              <img src= {shortlisted}alt="" />
              <span>
                <p>Shortlisted Reviewed</p>
                <h3>50</h3>
              </span>
            </div>

            <div className="Dashboard-card Dashboard-card__alt color-change">
              <img src={shortlistedc} alt="" />
              <span>
                <p>Shortlisted Candidates</p>
                <h3>50</h3>
              </span>
            </div>
          </div>

          <div className="Recomended-Job">
            <div className="Recomended-part-1 Recomended-part-1__alt">
              <div className="Recomended-box Recomended-box__alt">
                <div className="recent-job__cont">
                  <h2>Recently Posted Jobs</h2>
                  <a href="#" onClick={ShowJobsPop}>Post A Job</a>
                </div>
                <div className="Recommended-card__container">
                {jobs.map((job) => (
                  <div className="Recomended-card Recommend-card__alt">
                    <div className="Recomended-icon-box">
                      <img src={search} alt="" className="logo-icon" />
                    </div>
                    <span>
                      <h2>{job.title}</h2>
                      <h2>{job.location}</h2>
                    </span>
                    <h3>${job.budget}</h3>

                    <p>
                      {job.description}
                    </p>
                    <button style={{backgroundColor:"black" , border:"none" , marginRight:"20px"}} onClick={Singlejobs(job)}>View</button>
                    <button>{job.type}</button>
                  </div>
                     ))}

                 
                </div>
              </div>
            </div>

            <div className="Recomended-part-2 Recomended-part-2__alt">
              <div className="Complete-Profile-box Complete-Profile-box__alt">
                <h3>Upcoming Requests</h3>
                <div className="interview-links__container">
                  <a href="">Today</a>
                  <a href="">Shortlisted</a>
                  <a href="">Reviewed</a>
                  <a href="">Completed</a>
                </div>
                <div className="interview-details-cont__parent">
                  {
                    upcoming_request.filter(e => e !== null).map((e,i)=>(



                  <div className="interview-details__cont" key={i}>
                    <div className="interview-detail">
                      <div className="interview-detail-img">
                        <img src={person_h} alt="" />
                      </div>
                      <div className="interview-detail-text">
                        <div className="interview-detail-top-text">
                          <p>{e.fullname?e.fullname:" "}</p>
                          <p>At 9:45 AM</p>
                        </div>
                        <div className="interview-detail-bottom-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path opacity="0.2"
                              d="M17.5 9.24298V15.625C17.5 15.7908 17.4342 15.9497 17.3169 16.067C17.1997 16.1842 17.0408 16.25 16.875 16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.067C2.56585 15.9497 2.5 15.7908 2.5 15.625V9.24298C4.77931 10.5616 7.36677 11.254 10 11.25C12.6333 11.2541 15.2207 10.5617 17.5 9.24298Z"
                              fill="black" />
                            <path
                              d="M8.125 8.75C8.125 8.58424 8.19085 8.42527 8.30806 8.30806C8.42527 8.19085 8.58424 8.125 8.75 8.125H11.25C11.4158 8.125 11.5747 8.19085 11.6919 8.30806C11.8092 8.42527 11.875 8.58424 11.875 8.75C11.875 8.91576 11.8092 9.07473 11.6919 9.19194C11.5747 9.30915 11.4158 9.375 11.25 9.375H8.75C8.58424 9.375 8.42527 9.30915 8.30806 9.19194C8.19085 9.07473 8.125 8.91576 8.125 8.75ZM18.125 5.625V15.625C18.125 15.9565 17.9933 16.2745 17.7589 16.5089C17.5245 16.7433 17.2065 16.875 16.875 16.875H3.125C2.79348 16.875 2.47554 16.7433 2.24112 16.5089C2.0067 16.2745 1.875 15.9565 1.875 15.625V5.625C1.875 5.29348 2.0067 4.97554 2.24112 4.74112C2.47554 4.5067 2.79348 4.375 3.125 4.375H6.25V3.75C6.25 3.25272 6.44754 2.77581 6.79917 2.42417C7.15081 2.07254 7.62772 1.875 8.125 1.875H11.875C12.3723 1.875 12.8492 2.07254 13.2008 2.42417C13.5525 2.77581 13.75 3.25272 13.75 3.75V4.375H16.875C17.2065 4.375 17.5245 4.5067 17.7589 4.74112C17.9933 4.97554 18.125 5.29348 18.125 5.625ZM7.5 4.375H12.5V3.75C12.5 3.58424 12.4342 3.42527 12.3169 3.30806C12.1997 3.19085 12.0408 3.125 11.875 3.125H8.125C7.95924 3.125 7.80027 3.19085 7.68306 3.30806C7.56585 3.42527 7.5 3.58424 7.5 3.75V4.375ZM3.125 5.625V8.87656C5.23474 10.0242 7.5983 10.6253 10 10.625C12.4018 10.6254 14.7655 10.024 16.875 8.87578V5.625H3.125ZM16.875 15.625V10.2836C14.7344 11.3307 12.383 11.8751 10 11.875C7.61709 11.8754 5.26558 11.3314 3.125 10.2844V15.625H16.875Z"
                              fill="black" />
                          </svg>
                          <div>{e.email?e.email:" "}</div>

                          <button onClick={()=>Handle_chat(e.user_id)}>
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                    ))

                  }
                
                </div>
              </div>
            </div>
          </div>
        </div>

        {pop1 && (
                            <div className="popss">
                                <Popup2 close={() => { setPop1(false); Getjobs(); }} />

                               
                                


                            </div>
                            )}


{pop2 && (
                            <div className="popss">

                                <Viewjob close={() => setPop2(false)}/>
                                


                            </div>
                            )}
     
     
     {
      show_chat &&
      <>
      
      <Chat rc_id={reciever_id} pp={show_chat} callback_chat={handle_chat_Callback}/>
      </>
     }
     
      </section>
    </>


)



}


export default Page8