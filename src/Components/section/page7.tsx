import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../Features/hooks";
import { Rejected, getapplication, getpitch, shortlist } from "../Features/userDetailSlice";
import Popup2 from "./popup2";
import Interviewpopup from "./interviewpopup";
import Viewjob from "../popup/viewjob";



const Page7 = ()=>{


  
  const dispatch = useAppDispatch();
  // const { loading, users, error } = useSelector((state:any) => state.userDetail);
  const [allapplication, setApplication] = useState<any[]>([]);


  const [defaults , setDefault] = useState('Applied')
  const [pop1 , setPop1] = useState(false)




  useEffect(() => {
    console.log('Dispatching getjobsssss...');

    dispatch(getpitch()).then((response) => {
        if (Array.isArray(response?.payload)) {
            
          const applications = response.payload; 
          setApplication(applications);// Assuming response.payload is directly an array of Job objects
          console.log('Jobsssssss', applications);
          
        }
      });
    }, [dispatch]);


    const formatDate = (dateString: string): string => {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' } as const;
      return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const [indexes, setIndexes] = useState<number>(0);


  const indexing = (value: any) => (event: React.MouseEvent) => {
    console.log(value)
    localStorage.setItem("jobDatas", JSON.stringify(value));

    dispatch(shortlist()).then((response) => {
      if (Array.isArray(response?.payload)) {
          
        const applications = response.payload; 
        setApplication(applications);
        console.log('Jobssssssszzzzzzz', applications);
        
      }
    });


 

    
      
    // setIndexes(value);
  };


  const Getjobs = () => {
    console.log('here')
    dispatch(getpitch()).then((response) => {
      if (Array.isArray(response?.payload)) {
          
        const applications = response.payload; 
        setApplication(applications);// Assuming response.payload is directly an array of Job objects
        console.log('Jobsssssss', applications);
        
      }
    });
  }


  const rejecting = (value: any) => (event: React.MouseEvent) => {
    console.log(value)
    localStorage.setItem("jobDatas", JSON.stringify(value));

    dispatch(Rejected()).then((response) => {
      if (Array.isArray(response?.payload)) {
          
        const applications = response.payload; 
        setApplication(applications);
        console.log('Jobssssssszzzzzzz', applications);
        
      }
    });


 

    
      
    // setIndexes(value);
  };


  const Tabs = (value: any) => (event: React.MouseEvent) => {

    setDefault(value)

    
      
  }

  const ShowJobsPop = (value: any) => (event: React.MouseEvent) => {
    console.log('hhhhhhhhhhhhhhhhhhh')
    localStorage.setItem("jobDatas", JSON.stringify(value));
    setPop1(true)

  }






return (

    <>

<section className="Dashboard">
        <div className="main-Dashboard">
          <div className="main-job__title">
            <div className="interview-links__container">
              <a onClick={Tabs('Applied')}>Applied</a>
              <a onClick={Tabs('Rejected')}>Rejected</a>
              <a onClick={Tabs('Shortlisted')}>Shortlisted</a>
              <a onClick={Tabs('Completed')}>Completed</a>
            </div>
          </div>
          {defaults === 'Applied' && (
          <table className="table-cont__h table-cont__h__alt">


            <tr>
              <th>No</th>
              <th>Position</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Applied On</th>
              <th>Submitted By</th>

              <th>Action</th>
            </tr>

           
            {allapplication.filter(allapplication => allapplication.applied === 1) .map((application , index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{application.title}</td>
              <td>{application.fullname}</td>
              <td>{application.email}</td>
              <td>{application.phonenumber}</td>
              <td>{formatDate(application.createdAt)}</td>
              <td>{application.fullname}</td>

              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                  <path
                    d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                    stroke="#FF9D0B" stroke-width="1.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"  onClick={indexing(application)}>
                  <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" onClick={rejecting(application)}>
                  <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

                
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                    fill="#F72B50" />
                </svg>
              </td>
            </tr>
            ))}
       
            
          </table>
          )}




{defaults === 'Rejected' && (
          <table className="table-cont__h table-cont__h__alt">


            <tr>
              <th>No</th>
              <th>Position</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Applied On</th>
              <th>Submitted By</th>

              <th>Action</th>
            </tr>

           
            {allapplication.filter(allapplication => allapplication.rejected === 1) .map((application , index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{application.title}</td>
              <td>{application.fullname}</td>
              <td>{application.email}</td>
              <td>{application.phonenumber}</td>
              <td>{formatDate(application.createdAt)}</td>
              <td>{application.fullname}</td>

              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                  <path
                    d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                    stroke="#FF9D0B" stroke-width="1.5" />
                </svg>
              

               
                
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                    fill="#F72B50" />
                </svg>
              </td>
            </tr>
            ))}
       
            
          </table>
          )}



{defaults === 'Shortlisted' && (
          <table className="table-cont__h table-cont__h__alt">


            <tr>
              <th>No</th>
              <th>Position</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Applied On</th>
              <th>Submitted By</th>

              <th>Action</th>
            </tr>

           
            {allapplication.filter(allapplication => allapplication.shortlisted === 1) .map((application , index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{application.title}</td>
              <td>{application.fullname}</td>
              <td>{application.email}</td>
              <td>{application.phonenumber}</td>
              <td>{formatDate(application.createdAt)}</td>
              <td>{application.fullname}</td>

              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                  <path
                    d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                    stroke="#FF9D0B" stroke-width="1.5" />
                </svg>
               
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12V17.09C20 17.938 20 18.36 19.874 18.699C19.7738 18.9676 19.617 19.2116 19.4143 19.4143C19.2116 19.617 18.9676 19.7738 18.699 19.874C18.36 20 17.937 20 17.09 20H12C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12Z"
                    stroke="#89A0FF" stroke-width="1.5" />
                  <path d="M9 11H15M12 15H15" stroke="#89A0FF" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="30" height="30" fill="#2ADB7B"
                  viewBox="0 0 20 20" onClick={ShowJobsPop(application)}>
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" >
                  <path
                    d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                    fill="#F72B50" />
                </svg>
              </td>
            </tr>
            ))}
       
            
          </table>
          )}


{defaults === 'Completed' && (
          <table className="table-cont__h table-cont__h__alt">


            <tr>
              <th>No</th>
              <th>Position</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Applied On</th>
              <th>Submitted By</th>

              <th>Action</th>
            </tr>

           
            {allapplication.filter(allapplication => allapplication.completed === 1) .map((application , index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{application.title}</td>
              <td>{application.fullname}</td>
              <td>{application.email}</td>
              <td>{application.phonenumber}</td>
              <td>{formatDate(application.createdAt)}</td>
              <td>{application.fullname}</td>

              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                  <path
                    d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                    stroke="#FF9D0B" stroke-width="1.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"  onClick={indexing(application)}>
                  <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12V17.09C20 17.938 20 18.36 19.874 18.699C19.7738 18.9676 19.617 19.2116 19.4143 19.4143C19.2116 19.617 18.9676 19.7738 18.699 19.874C18.36 20 17.937 20 17.09 20H12C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12Z"
                    stroke="#89A0FF" stroke-width="1.5" />
                  <path d="M9 11H15M12 15H15" stroke="#89A0FF" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="30" height="30" fill="#2ADB7B"
                  viewBox="0 0 20 20" >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                    fill="#F72B50" />
                </svg>
              </td>
            </tr>
            ))}
       
            
          </table>
          )}






        </div>

        {pop1 && (
                            <div className="popss">
                                <Interviewpopup close={() => { setPop1(false); Getjobs(); }} />

                               
                                


                            </div>
                            )}




     
      </section>
    </>


)



}


export default Page7