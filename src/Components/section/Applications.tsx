import React, { useEffect, useState } from "react";
import intel from "../../../src/Assets/Images/intel.png";
import { useAppDispatch } from "../Features/hooks";
import { getapplication, getjob } from "../Features/userDetailSlice";
import Chat from "../Chat";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const [show_chat , set_show_chat] = useState(false)

  const [show_chat1 , set_show_chat1] = useState(false)

  const [reciever_id,setreciever_id]  = useState()

  const navigate = useNavigate()



  const dispatch = useAppDispatch();
  // const { loading, users, error } = useSelector((state:any) => state.userDetail);
  const [allapplication, setApplication] = useState<any[]>([]);

  const storedUserData = localStorage.getItem("userData");
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

const Handle_Tracking=( JobID:any)=>{

console.log( JobID.id,userData.id)

navigate(`/Tracking/${userData.id}/${JobID.id}`)

}


  useEffect(() => {
    console.log('Dispatching getjobsssss...');

    dispatch(getapplication()).then((response) => {
        if (Array.isArray(response?.payload)) {
            
          const applications = response.payload; 
          setApplication(applications);// Assuming response.payload is directly an array of Job objects
          console.log('Jobsssssss', applications);
          
        }
      });
    }, [dispatch]);

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
          <div className="Applications-box">
            {allapplication.map((application) => (
              <div className="Applications-card" key={application.id}>
                <div className="intel-part-1">
                  <div className="intel-dp">
                    {/* <img src={application.image} alt="" /> */}
                  </div>
                  <div className="inter-ux">
                    <h3>{application.title}</h3>
                    <p>{application.description}</p>
                  </div>
                </div>
                <div className="intel-part-2">
                  <button onClick={()=>{Handle_chat(application.instructor_id)}}>Contact Provider</button>
                  <button className="Application" onClick={()=>{Handle_Tracking(application)}}>Track Application</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {
      show_chat &&
     <Chat rc_id={reciever_id} pp={show_chat} callback_chat={handle_chat_Callback}/>
     }
     
    </>
  );
};

export default Applications;
