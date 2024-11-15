import React, { useEffect, useState } from "react";

import icon from "../../../src/Assets/Images/icon-list.png"
import intel from "../../../src/Assets/Images/intel.png"
import Intern2 from "./Intern2";
import { useAppDispatch } from "../Features/hooks";
import { update_job_details } from "../Features/userDetailSlice";


interface JobData {
    id: number;
    title: string;
    description: string;
    location: string;
    type: string;
    budget: string;
    
}


interface EditJob {
    close: () => void;
    update_callback: any
  }

const EditJob: React.FC<EditJob> = ({ close, update_callback }) => {

    const dispatch = useAppDispatch();
    const [pop2 , setPop2] = useState(true)
    const [pop1 , setPop1] = useState(true)
    const [jobdata, setJobData] = useState<JobData | null>(null);

    const[change_stack,setchange_stack]=useState()
    const[change_description,setchange_description]=useState()
    const[changelocation,setchangelocation]=useState()
    const[changebudget,setchangebudget]=useState()
    const[changetype,setchangetype]=useState()




    const Popup2 = () => {
        console.log('hhhhh');

     

        setPop2(false)
    }

    useEffect(() => {
        const storedJobData = localStorage.getItem("jobDetail");
        const jobData = storedJobData ? JSON.parse(storedJobData) : null;
        console.log('jobDataedit', jobData);
        setJobData(jobData);
    }, []);
         
    

    const handleUpdateDetails=()=>{

        console.log(change_description)


        const formData={
            stack:change_stack,
            description:change_description,
            location:changelocation,
            budget:changebudget,
            type: changetype,
            job:jobdata
        }

        // dispatch(update_job_details(formData))

        dispatch(update_job_details(formData)).then((response) => {
            if (typeof response.payload === 'object' && 'message' in response.payload) {
              const { message } = response.payload as { message: Boolean };
                
              console.log(message)
              if(message===true)
              {
                update_callback(true)
                   close()
              }
        
            } else {
              console.error("Unexpected response format", response.payload);
            }
          }).catch((error) => {
          
            console.error("Signup Error", error);
          });
        
    }
      

    



return (

    <>
          {
            pop2  && (
    <section className="Intern">

  
<div className="main-Intern">

<div className="Intern-head">
    <div className="Intern-head-logo">
        <img src={intel} alt="" />
    </div>

    {/* <div className="Intern-btn-box">
        <span>
            <button>
            {jobdata? jobdata.type :''}
            </button>
            <img src={icon} alt="" />
        </span>

        <p>{jobdata? jobdata.location :''}</p>
        
    </div> */}
</div>

<div className="Intern-body"

style={{
  display:'flex',
  flexDirection:'column',
  gap:"10px",
  alignItems:'center'

}}

>
    <h1>
        Update Job Details
    </h1>
    
    <div style={{display:'flex',justifyContent:"flex-start",gap:"10px"}} >
        <h3 className="Intern-h3" >Stack:</h3>
        <h3> {jobdata? jobdata.title :''}</h3>
    </div>

        <div>
            <input onChange={(e:any)=>{setchange_stack(e.target.value)}}></input>
        </div>


    <div style={{display:'flex',justifyContent:"flex-start",gap:"10px"}} >
        <h3 className="Intern-h3"  >Description:</h3>
        <h3> {jobdata? jobdata.description :''}</h3>
    </div>
    <div>
    <input onChange={(e:any)=>{setchange_description(e.target.value)}}></input>
        </div>

    <div style={{display:'flex',justifyContent:"flex-start",gap:"10px"}} >
        <h3 className="Intern-h3"  >Location:</h3>
        <h3> {jobdata? jobdata.location :''}</h3>
    </div>
    <div>
    <input onChange={(e:any)=>{setchangelocation(e.target.value)}}></input>
        </div>
    <div style={{display:'flex',justifyContent:"flex-start",gap:"10px"}} >
        <h3 className="Intern-h3" >Budget:</h3>
        <h3> {jobdata? jobdata.budget :''}</h3>
    </div>
    <div>
    <input onChange={(e:any)=>{setchangebudget(e.target.value)}}></input>
        </div>
    <div style={{display:'flex',justifyContent:"flex-start",gap:"10px"}} >
        <h3 className="Intern-h3"  >Type:</h3>
        <h3> {jobdata? jobdata.type :''}</h3>
    </div>
    <div>
    <input onChange={(e:any)=>{setchangetype(e.target.value)}}></input>
        </div>

        <div className="Intern-btn-box">
        <span>
            <button onClick={handleUpdateDetails}>
      Update
            </button>
             
        </span>
 
        
    </div>

    

  

    <div className="close-btn-Intern">
        <button onClick={close}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M1 1L14.5 14.5" stroke="black" stroke-width="2"/>
<path d="M1 14.5L14.5 1" stroke="black" stroke-width="2"/>
</svg>Get Back To Main Screen</button>
    </div>

</div>

</div>

          
        
    </section>
      )
            
    }

    
    
    </>


)



}


export default EditJob