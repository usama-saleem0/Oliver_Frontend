import React, { ChangeEvent, useState } from "react";
import profile from "../../../src/Assets/Images/profile-dp.png"
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../Features/hooks";
 
import { User } from "../../types/user";
import CloudinaryUpload from "../Cloudinary";
import { edituser, post_documents } from "../Features/userDetailSlice";



const Profile = ()=>{
   
  const [resumeurl, setresumeurl] = useState('');
  const [doc1url, setdoc1url] = useState('');
  const [doc2url, setdoc2url] = useState('');


  const storedUserData = localStorage.getItem("userData");
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  


    const dispatch = useAppDispatch();

    const handleCallbackResume=(e:any)=>{


      setresumeurl(e)
      console.log(resumeurl,"Clod")

      

      if (userData && userData.id) {
         
         
        const formData={
          id:userData.uuid,
          resume_url:e
        }
        dispatch(post_documents(formData))
        };



      


    }

    const handleCallbackDocument=(e:any)=>{


      console.log(e,"CLOUDINARy2")

      if (userData && userData.id) {
        // Add user ID to formData
         
        const formData={
          id:userData.uuid,
          documentone_url:e
        }
        dispatch(post_documents(formData))
        };

    }

    const handleCallbackDocument2=(e:any)=>{


      console.log(e,"CLOUDINARy3")

      if (userData && userData.id) {
         
         
        const formData={
          id:userData.uuid,
          documenttwo_url:e
        }
        dispatch(post_documents(formData))
        };

    }





    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",

        email: "",
        password: "",
        confirmPassword: "",
        mobile:"",
        address:"",
        city:"",
        country:"",
        about:"",
        experience:"",
        qualification:""
       
      });


        const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


      const saveUserToLocalStorage = (user: User) => {
        localStorage.setItem("userData", JSON.stringify(user));
      };



      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        // Retrieve user data from localStorage
        const storedUserData = localStorage.getItem("userData");
        const userData = storedUserData ? JSON.parse(storedUserData) : null;
    
        if (userData && userData.id) {
          // Add user ID to formData
          const updatedFormData = {
            ...formData,
            userId: userData.id,
          };
    
          dispatch(edituser(updatedFormData)).then((response) => {
            if (typeof response.payload === 'object' && 'message' in response.payload) {
              const { message, user } = response.payload as { message: string, user: User };
    
              if (message === "User updated successfully") {
                saveUserToLocalStorage(user);
              } else {
                alert(message);
              }
            } else {
              console.error("Unexpected response format", response.payload);
            }
          }).catch((error) => {
            console.error("Signup Error", error);
          });
        } else {
          alert("User ID not found in localStorage.");
        }
      };


return (

    <>

<section className="Dashboard">
                    <div className="main-Dashboard">
                    

                        <div className="Recomended-Job">

                            <div className="Recomended-part-1">
                                <div className="Recomended-box">
                                    <div className="Edit-box">
                                    <h2>Edit Profile</h2>

                                    <span><button>Cancel</button>
                                    <button onClick={handleSubmit}>Save Changes</button></span>
                                </div>  

                            
                           

                                <div className="Edit-form">

                                    <div className="Edit-form-heading">
                                        <h4>Generals</h4>
                                    </div>

                                    <div className="Edit-group">
                                        <label >First Name</label>
                                        <input type="text" placeholder="Enter your name"
                                          name="firstname"
                                         value={formData.firstname}
                                         onChange={handleChange}
                                        />
                                    </div>

                                    <div className="Edit-group">
                                        <label >Last Name</label>
                                        <input type="text" placeholder="Type Here"
                                          name="lastname"
                                          value={formData.lastname}
                                          onChange={handleChange}
                                        />
                                    </div>

                                    <div className="Edit-group">
                                        <label >Password</label>
                                        <input type="password" placeholder="Enter your password"
                                          name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="Edit-group">
                                        <label>Re-Type Password</label>
                                        <input type="password" placeholder="Enter your password" 

                                          name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="Edit-form-heading">
                                        <h4>Contact</h4>
                                    </div>
                                    
                                    <div className="Edit-group">
                                        <label>Mobile</label>
                                        <input type="number" placeholder="Enter your mobile number"
                                          name="mobile"
                                        
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="Edit-group">
                                        <label >Email</label>
                                        <input type="email" placeholder="Enter your Email"
                                          name="email"
                                         value={formData.email}
                                         onChange={handleChange}
                                        />
                                    </div>


                                    <div className="Edit-group Edit-short">
                                        <label >Address</label>
                                        <input type="text" placeholder="Enter your address"
                                          name="address"
                                         value={formData.address}
                                         onChange={handleChange}
                                        />
                                    </div>

                                    <div className="Edit-group Edit-short">
                                        <label >City</label>
                                        <input type="text" placeholder="Enter your city"
                                          name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="Edit-group Edit-short">
                                        <label >Country</label>
                                        <input type="text" placeholder="Enter your country"
                                          name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        />
                                    </div>


                                    <div className="Edit-group">
                                        <label >Qualification</label>
                                        <input type="email" placeholder="Enter your Qualification"
                                          name="qualification"
                                         value={formData.qualification}
                                         onChange={handleChange}
                                        />
                                    </div>


                                    <div className="Edit-group Edit-short">
                                        <label >Experience</label>
                                        <input type="text" placeholder="Enter your Experience in year"
                                          name="experience"
                                         value={formData.experience}
                                         onChange={handleChange}
                                        />
                                    </div>

                                    
                                    <div className="Edit-group Edit-long">
                                        <label >About Me</label>
                                      <textarea name="about" 
                                      value={formData.about}
                                      onChange={handleChange}
                                     
                                      ></textarea>
                                    </div>


                                </div>
                              
                                    
                                </div>
                            </div>

                            <div className="Recomended-part-2">

                                <div className="Complete-Profile-box">
                                    <div className="profile-card">

                               
                                    <div className="profile-dp">
                                        <img src={profile} alt=""/>
                                    </div>

                                    <h2>Alex Smith</h2>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M20.8335 4.16666H4.16683C3.021 4.16666 2.09391 5.10416 2.09391 6.24999L2.0835 18.75C2.0835 19.8958 3.021 20.8333 4.16683 20.8333H20.8335C21.9793 20.8333 22.9168 19.8958 22.9168 18.75V6.24999C22.9168 5.10416 21.9793 4.16666 20.8335 4.16666ZM20.8335 8.33332L12.5002 13.5417L4.16683 8.33332V6.24999L12.5002 11.4583L20.8335 6.24999V8.33332Z" fill="black"/>
                                      </svg> <p>Alex@example.com</p></span>

                                      
                                      <div className="profile-box-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z" fill="black"/>
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path d="M16.2847 2.5C17.691 2.50375 18.4047 2.51125 19.021 2.52875L19.2635 2.5375C19.5435 2.5475 19.8197 2.56 20.1535 2.575C21.4835 2.6375 22.391 2.8475 23.1872 3.15625C24.0122 3.47375 24.7072 3.90375 25.4022 4.5975C26.0379 5.22237 26.5297 5.97824 26.8435 6.8125C27.1522 7.60875 27.3622 8.51625 27.4247 9.8475C27.4397 10.18 27.4522 10.4563 27.4622 10.7375L27.4697 10.98C27.4885 11.595 27.496 12.3088 27.4985 13.715L27.4997 14.6475V16.285C27.5028 17.1968 27.4932 18.1085 27.471 19.02L27.4635 19.2625C27.4535 19.5438 27.441 19.82 27.426 20.1525C27.3635 21.4838 27.151 22.39 26.8435 23.1875C26.5306 24.0222 26.0387 24.7783 25.4022 25.4025C24.7772 26.0379 24.0214 26.5297 23.1872 26.8438C22.391 27.1525 21.4835 27.3625 20.1535 27.425C19.8569 27.439 19.5602 27.4515 19.2635 27.4625L19.021 27.47C18.4047 27.4875 17.691 27.4963 16.2847 27.4988L15.3522 27.5H13.716C12.8038 27.5031 11.8917 27.4936 10.9797 27.4713L10.7372 27.4638C10.4405 27.4525 10.1438 27.4396 9.84725 27.425C8.51724 27.3625 7.60975 27.1525 6.81224 26.8438C5.97808 26.5305 5.22252 26.0386 4.59849 25.4025C3.9623 24.7779 3.47003 24.022 3.15599 23.1875C2.84724 22.3913 2.63724 21.4838 2.57474 20.1525C2.56082 19.8559 2.54832 19.5592 2.53724 19.2625L2.53099 19.02C2.50796 18.1085 2.49754 17.1968 2.49974 16.285V13.715C2.49626 12.8033 2.50542 11.8915 2.52724 10.98L2.53599 10.7375C2.54599 10.4563 2.55849 10.18 2.57349 9.8475C2.63599 8.51625 2.84599 7.61 3.15474 6.8125C3.46864 5.97738 3.9619 5.22128 4.59975 4.5975C5.22361 3.96184 5.97867 3.46998 6.81224 3.15625C7.60975 2.8475 8.516 2.6375 9.84725 2.575C10.1797 2.56 10.4572 2.5475 10.7372 2.5375L10.9797 2.53C11.8912 2.50779 12.803 2.49821 13.7147 2.50125L16.2847 2.5ZM14.9997 8.75C13.3421 8.75 11.7524 9.40848 10.5803 10.5806C9.40823 11.7527 8.74975 13.3424 8.74975 15C8.74975 16.6576 9.40823 18.2473 10.5803 19.4194C11.7524 20.5915 13.3421 21.25 14.9997 21.25C16.6573 21.25 18.2471 20.5915 19.4192 19.4194C20.5913 18.2473 21.2497 16.6576 21.2497 15C21.2497 13.3424 20.5913 11.7527 19.4192 10.5806C18.2471 9.40848 16.6573 8.75 14.9997 8.75ZM14.9997 11.25C15.4922 11.2499 15.9799 11.3468 16.4349 11.5352C16.8899 11.7236 17.3033 11.9997 17.6516 12.3479C17.9999 12.6961 18.2761 13.1094 18.4647 13.5644C18.6532 14.0193 18.7503 14.5069 18.7504 14.9994C18.7505 15.4918 18.6535 15.9795 18.4652 16.4345C18.2768 16.8895 18.0006 17.3029 17.6525 17.6512C17.3043 17.9995 16.891 18.2758 16.436 18.4643C15.9811 18.6528 15.4935 18.7499 15.001 18.75C14.0064 18.75 13.0526 18.3549 12.3493 17.6517C11.6461 16.9484 11.251 15.9946 11.251 15C11.251 14.0054 11.6461 13.0516 12.3493 12.3483C13.0526 11.6451 14.0064 11.25 15.001 11.25M21.5635 6.875C21.1491 6.875 20.7517 7.03962 20.4586 7.33265C20.1656 7.62567 20.001 8.0231 20.001 8.4375C20.001 8.8519 20.1656 9.24933 20.4586 9.54236C20.7517 9.83538 21.1491 10 21.5635 10C21.9779 10 22.3753 9.83538 22.6684 9.54236C22.9614 9.24933 23.126 8.8519 23.126 8.4375C23.126 8.0231 22.9614 7.62567 22.6684 7.33265C22.3753 7.03962 21.9779 6.875 21.5635 6.875Z" fill="black"/>
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path d="M23.75 3.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75ZM23.125 23.125V16.5C23.125 15.4192 22.6957 14.3827 21.9315 13.6185C21.1672 12.8543 20.1308 12.425 19.05 12.425C17.9875 12.425 16.75 13.075 16.15 14.05V12.6625H12.6625V23.125H16.15V16.9625C16.15 16 16.925 15.2125 17.8875 15.2125C18.3516 15.2125 18.7967 15.3969 19.1249 15.7251C19.4531 16.0533 19.6375 16.4984 19.6375 16.9625V23.125H23.125ZM8.6 10.7C9.15695 10.7 9.6911 10.4788 10.0849 10.0849C10.4788 9.6911 10.7 9.15695 10.7 8.6C10.7 7.4375 9.7625 6.4875 8.6 6.4875C8.03973 6.4875 7.50241 6.71007 7.10624 7.10624C6.71007 7.50241 6.4875 8.03973 6.4875 8.6C6.4875 9.7625 7.4375 10.7 8.6 10.7ZM10.3375 23.125V12.6625H6.875V23.125H10.3375Z" fill="black"/>
                                          </svg>
                                      </div>

                                    </div>
                                </div>

                                <div className="Complete-Profile-box">
                                    <div className="Upload-box">
                                        <div className="Upload-card">
                                            {/* <div className="Upload-show">
                                                <span>+</span>
                                            </div> */}
                                                <CloudinaryUpload cloudName={handleCallbackResume} backgroundColor={"pink"}
                                                number={"1"}/>

                                            <h3>Upload Your Resume</h3>
                                        </div>

                                        <div className="Upload-card">
                                            {/* <div className="Upload-show">
                                                <span>+</span>
                                            </div> */}

                                              <CloudinaryUpload cloudName={handleCallbackDocument} backgroundColor={"red"}
                                              number={"2"}/>

                                            <h3>Upload Your Document</h3>
                                        </div>


                                        <div className="Upload-card">
                                            {/* <div className="Upload-show">
                                                <span>+</span>
                                            </div> */}

                                                        <CloudinaryUpload cloudName={handleCallbackDocument2} backgroundColor={"yellow"} number={"3"}/>

                                            <h3>Upload Your Document</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
    </>
    
)



}


export default Profile