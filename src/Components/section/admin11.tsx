import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../Features/hooks";
import { delete_job_details, instructorjobs } from "../Features/userDetailSlice";
import Viewjob from "../popup/viewjob";
import EditJob from "../popup/EditJob";
 



const Admin11 = ()=>{


    const dispatch = useAppDispatch();
    // const { loading, users, error } = useSelector((state:any) => state.userDetail);
    const [jobs, setJobs] = useState<any[]>([]);
  

    const [pop2 , setPop2] = useState(false)
    const [jobdata,setjobdata]=useState()

    const Singlejobs = (job: any) => {
      console.log('here TS');
      localStorage.setItem("jobDetail", JSON.stringify(job));
      setPop2(true);
  }

  const [pop3 , setPop3] = useState(false)

    const EditJobs = (job: any) => {
      console.log('here TS');
      localStorage.setItem("jobDetail", JSON.stringify(job));
      setPop3(true);
  }
    
  const Delete_Jobs = (job: any) => {
    console.log('here Deleye');
     

     



    const formData={
       job:job
    }

    // dispatch(update_job_details(formData))

    dispatch(delete_job_details(formData)).then((response) => {
        if (typeof response.payload === 'object' && 'message' in response.payload) {
          const { message } = response.payload as { message: Boolean };
            
          console.log(message)
          if(message===true)
          {
            GetInstructorJobs()
          }
    
        } else {
          console.error("Unexpected response format", response.payload);
        }
      }).catch((error) => {
      
        console.error("Signup Error", error);
      });



    
}
    
  const handleEditJobCallback=(e:any)=>{

    console.log(e,"handleEditJobCallback")

    if(e===true)
    {
        GetInstructorJobs()
    }
  
  }
  
    
  
  
    useEffect(() => {
      console.log('Dispatching getjobsssss...');
      GetInstructorJobs()
      
      }, [dispatch]);


      const GetInstructorJobs=()=>{
        dispatch(instructorjobs()).then((response) => {
            if (Array.isArray(response?.payload)) {
                
              const jobs = response.payload; 
              setJobs(jobs);
              console.log('Jobsssssss', jobs);
              
            }
          });
      }

      const formatDate = (dateString: string): string => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' } as const;
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };


return (

    <>
            <section className="Dashboard">
                <div className="main-Dashboard">

                    <table className="table-cont__h table-cont__h-alt-2">

                        <tr>
                            <th>No</th>
                            <th>Stack</th>
                            <th>location</th>
                            <th>Budget</th>
                            <th>Type</th>
                            <th>Upload On</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        {jobs.map((job , index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{job.title}</td>
                            <td>{job.location}</td>
                            <td>{job.budget}</td>
                            <td>{job.type}</td>
                            <td>{formatDate(job.createdAt)}</td>
                            <td><a href="#" className="table-active__link">Active</a></td>
                            <td>
                                <div onClick={()=>{Singlejobs(job)}}>

                                <svg width="30" height="30" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z" fill="#2ADB7B"/>
                                </svg>
                                </div>

 

                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{EditJobs(job)}}>
                            <circle cx="15" cy="15" r="15" fill="#E7EBFF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 23H22C22.2652 23 22.5196 23.1054 22.7071 23.2929C22.8946 23.4804 23 23.7348 23 24C23 24.2652 22.8946 24.5196 22.7071 24.7071C22.5196 24.8946 22.2652 25 22 25H8C7.73478 25 7.48043 24.8946 7.29289 24.7071C7.10536 24.5196 7 24.2652 7 24C7 23.7348 7.10536 23.4804 7.29289 23.2929C7.48043 23.1054 7.73478 23 8 23ZM7 18L17 8L20 11L10 21H7V18ZM18 7L20 5L23 8L20.999 10.001L18 7Z" fill="#89A0FF"/>
                            </svg>
 


                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none" onClick={()=>{Delete_Jobs(job)}}>
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>
                        ))}

                      
                    </table>
                </div>

                {pop2 && (
                            <div className="popss">

                                <Viewjob close={() => setPop2(false)}/>
                                


                            </div>
                            )}


{pop3 && (
                            <div className="popss">

                                <EditJob close={() => setPop3(false)} update_callback={handleEditJobCallback}/>
                                


                            </div>
                            )}
            </section>
    </>


)



}


export default Admin11