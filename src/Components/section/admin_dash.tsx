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
import { Line } from "react-chartjs-2";


 


const Admindash = ()=>{



  
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

  
        </div>
      

      </section>










    </>


)



}


export default Admindash