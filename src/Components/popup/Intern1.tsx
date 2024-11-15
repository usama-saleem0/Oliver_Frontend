import React, { useEffect, useState } from "react";

import icon from "../../../src/Assets/Images/icon-list.png"
import intel from "../../../src/Assets/Images/intel.png"
import Intern2 from "./Intern2";


interface JobData {
    id: number;
    title: string;
    description: string;
    location: string;
    type: string;
    budget: string;
    
}


interface Intern1Props {
    close: () => void;
  }

const Intern1: React.FC<Intern1Props> = ({ close }) => {

    const [pop2 , setPop2] = useState(true)
    const [pop1 , setPop1] = useState(true)
    const [jobdata, setJobData] = useState<JobData | null>(null);





    const Popup2 = () => {
        console.log('hhhhh');

     

        setPop2(false)
    }

    useEffect(() => {
        const storedJobData = localStorage.getItem("jobDetail");
        const jobData = storedJobData ? JSON.parse(storedJobData) : null;
        console.log('jobData', jobData);
        setJobData(jobData);
    }, []);
         
    
      

    



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

    <div className="Intern-btn-box">
        <span>
            <button>
            {jobdata? jobdata.type :''}
            </button>
            <img src={icon} alt="" />
        </span>

        <p>{jobdata? jobdata.location :''}</p>
    </div>
</div>

<div className="Intern-body">
    
    <div className="Intern-h2">
        <h2>{jobdata? jobdata.title :''}</h2>
    </div>

    <div className="Intern-box-p">
        <p>{jobdata? jobdata.description :''}</p>      
        
    </div>

    <div className="Intern-sub-btn">
        <button onClick={Popup2}>Apply Now</button>
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

    {
        pop2 === false &&  (
            <Intern2  close={() => setPop2(true)}/>
        )
    }
    
    
    </>


)



}


export default Intern1