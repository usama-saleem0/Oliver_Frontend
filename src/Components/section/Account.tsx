import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../Features/hooks";
import { useSelector } from "react-redux";
import { getprofile } from "../Features/userDetailSlice";
import { User } from "../../types/user";



const Account = ()=>{


  const dispatch = useAppDispatch();
    // const { loading, users, error } = useSelector((state:any) => state.userDetail);
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {

        console.log('Dispatching ...');
        // dispatch(getprofile());
        dispatch(getprofile()).then((response) => {
          if (typeof response.payload === 'object' && !Array.isArray(response.payload)) {
            const user = response.payload as User; // Cast payload to User type
            console.log('User profile:', user);
            setUser(user); // Update the local state with the user profile
          }
        });
         
    
      }, [dispatch]);


return (

    <>

<section className="Dashboard">
                    <div className="main-Dashboard">
                        

                        <div className="Recomended-Job">

                            <div className="Recomended-part-1">
                                <div className="Recomended-box">
                                    <h2>Profile Incomplete</h2>
                                  

                                    <div className="Personal-Profile-box">


                                       <div className="Personal-Profile-card">
                                           <div className="span-head">
                                           {user && (
                                            <div className="span-h-1">
                                                <div className="checks_container">
                                                  <label className="custom-checkbox part-check2">
                                                    <input name="dummy" type="checkbox" 
                                                    checked={user.country !== null && user.country !== ''}/>
                                                    <span className="checkmark cheack-my"></span>
                                                  </label>
                                                  </div>
                                                  
                                                  <p>Personal Information</p>
                                            </div>
                                           )}

                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <g opacity="0.6">
                                                      <path d="M8 2.00003H3.33333C2.97971 2.00003 2.64057 2.1405 2.39052 2.39055C2.14048 2.6406 2 2.97974 2 3.33336V12.6667C2 13.0203 2.14048 13.3595 2.39052 13.6095C2.64057 13.8596 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8596 13.6095 13.6095C13.8595 13.3595 14 13.0203 14 12.6667V8.00003M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8 10L5.33333 10.6667L6 8.00003L12.25 1.75003Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                  </svg>
                                                  Edit
                                            </a>
                                           </div>
                                           {user && (
                                                <div className="span-btn">
                                                  {user.country !== null && user.country !== '' ? (
                                                    <button className="complete-button">Complete</button>
                                                  ) : (
                                                    <button>incomplete</button>
                                                  )}
                                                </div>
                                              )}
                                       </div>

                                       <div className="Personal-Profile-card">
                                            <div className="span-head">
                                            {user && (
                                             <div className="span-h-1">
                                                 <div className="checks_container">
                                                  <label className="custom-checkbox part-check2">
                                                    <input name="dummy" type="checkbox"
                                                      checked={user.about !== null && user.about !== ''}
                                                      />
                                                    <span className="checkmark cheack-my"></span>
                                                  </label>
                                                   </div>
                                                   
                                                   <p>About Me</p>
                                             </div>
                                            )}
 
                                             <a href="#">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                     <g opacity="0.6">
                                                       <path d="M8 2.00003H3.33333C2.97971 2.00003 2.64057 2.1405 2.39052 2.39055C2.14048 2.6406 2 2.97974 2 3.33336V12.6667C2 13.0203 2.14048 13.3595 2.39052 13.6095C2.64057 13.8596 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8596 13.6095 13.6095C13.8595 13.3595 14 13.0203 14 12.6667V8.00003M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8 10L5.33333 10.6667L6 8.00003L12.25 1.75003Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                     </g>
                                                   </svg>
                                                   Edit
                                             </a>
                                            </div>
                                            {user && (
                                                <div className="span-btn">
                                                  {user.about !== null && user.about !== '' ? (
                                                    <button className="complete-button">Complete</button>
                                                  ) : (
                                                    <button>incomplete</button>
                                                  )}
                                                </div>
                                              )}
                                       </div>

                                       <div className="Personal-Profile-card">
                                            <div className="span-head">
                                             <div className="span-h-1">
                                                 <div className="checks_container">
                                                  <label className="custom-checkbox part-check2">
                                                    <input name="dummy" type="checkbox"
                                                    
                                                    />
                                                    <span className="checkmark cheack-my"></span>
                                                  </label>
                                                   </div>
                                                   
                                                   <p>Availability</p>
                                             </div>
 
                                             <a href="#">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                     <g opacity="0.6">
                                                       <path d="M8 2.00003H3.33333C2.97971 2.00003 2.64057 2.1405 2.39052 2.39055C2.14048 2.6406 2 2.97974 2 3.33336V12.6667C2 13.0203 2.14048 13.3595 2.39052 13.6095C2.64057 13.8596 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8596 13.6095 13.6095C13.8595 13.3595 14 13.0203 14 12.6667V8.00003M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8 10L5.33333 10.6667L6 8.00003L12.25 1.75003Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                     </g>
                                                   </svg>
                                                   Edit
                                             </a>
                                            </div>
                                            <div className="span-btn">
                                             <button>incomplete</button>
                                            </div>
                                       </div>

                                       <div className="Personal-Profile-card">
                                            <div className="span-head">
                                              {user &&(

                                             
                                             <div className="span-h-1">
                                                 <div className="checks_container">
                                                  <label className="custom-checkbox part-check2">
                                                    <input name="dummy" type="checkbox"
                                                    checked={user.qualification !== null && user.qualification !== ''}/>
                                                    <span className="checkmark cheack-my"></span>
                                                  </label>
                                                   </div>
                                                   
                                                   <p>Qualifications</p>
                                             </div>
                                              )

                                            }
 
                                             <a href="#">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                     <g opacity="0.6">
                                                       <path d="M8 2.00003H3.33333C2.97971 2.00003 2.64057 2.1405 2.39052 2.39055C2.14048 2.6406 2 2.97974 2 3.33336V12.6667C2 13.0203 2.14048 13.3595 2.39052 13.6095C2.64057 13.8596 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8596 13.6095 13.6095C13.8595 13.3595 14 13.0203 14 12.6667V8.00003M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8 10L5.33333 10.6667L6 8.00003L12.25 1.75003Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                     </g>
                                                   </svg>
                                                   Edit
                                             </a>
                                            </div>
                                            {user && (
                                                <div className="span-btn">
                                                  {user.qualification !== null && user.qualification !== '' ? (
                                                    <button className="complete-button">Complete</button>
                                                  ) : (
                                                    <button>incomplete</button>
                                                  )}
                                                </div>
                                              )}
                                       </div>

                                       <div className="Personal-Profile-card">
                                            <div className="span-head">
                                              { user && (

                                              
                                             <div className="span-h-1">
                                                 <div className="checks_container">
                                                  <label className="custom-checkbox part-check2">
                                                    <input name="dummy" type="checkbox"
                                                     checked={user.experience !== null && user.experience !== ''}
                                                    
                                                    />
                                                    <span className="checkmark cheack-my"></span>
                                                  </label>
                                                   </div>
                                                   
                                                   <p>Experience</p>
                                             </div>

                                                  )

                                                  }
                                                  
                                             <a href="#">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                     <g opacity="0.6">
                                                       <path d="M8 2.00003H3.33333C2.97971 2.00003 2.64057 2.1405 2.39052 2.39055C2.14048 2.6406 2 2.97974 2 3.33336V12.6667C2 13.0203 2.14048 13.3595 2.39052 13.6095C2.64057 13.8596 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8596 13.6095 13.6095C13.8595 13.3595 14 13.0203 14 12.6667V8.00003M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8 10L5.33333 10.6667L6 8.00003L12.25 1.75003Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                     </g>
                                                   </svg>
                                                   Edit
                                             </a>
                                            </div>
                                            {user && (
                                                <div className="span-btn">
                                                  {user.experience !== null && user.experience !== '' ? (
                                                    <button className="complete-button">Complete</button>
                                                  ) : (
                                                    <button>incomplete</button>
                                                  )}
                                                </div>
                                              )}
                                       </div>
                                         
                                       <div className="Personal-Profile-card">
                                            <div className="span-head">
                                             <div className="span-h-1">
                                                 <div className="checks_container">
                                                  <label className="custom-checkbox part-check2">
                                                    <input name="dummy" type="checkbox"/>
                                                    <span className="checkmark cheack-my"></span>
                                                  </label>
                                                   </div>
                                                   
                                                   <p>My CV/Resume</p>
                                             </div>
 
                                             <a href="#">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                     <g opacity="0.6">
                                                       <path d="M8 2.00003H3.33333C2.97971 2.00003 2.64057 2.1405 2.39052 2.39055C2.14048 2.6406 2 2.97974 2 3.33336V12.6667C2 13.0203 2.14048 13.3595 2.39052 13.6095C2.64057 13.8596 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8596 13.6095 13.6095C13.8595 13.3595 14 13.0203 14 12.6667V8.00003M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8 10L5.33333 10.6667L6 8.00003L12.25 1.75003Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                     </g>
                                                   </svg>
                                                   Edit
                                             </a>
                                            </div>
                                            <div className="span-btn">
                                             <button>incomplete</button>
                                            </div>
                                       </div>
                                     
                                       <div className="Personal-Profile-card">
                                            <div className="span-head">
                                             <div className="span-h-1">
                                                 <div className="checks_container">
                                                  <label className="custom-checkbox part-check2">
                                                    <input name="dummy" type="checkbox"/>
                                                    <span className="checkmark cheack-my"></span>
                                                  </label>
                                                   </div>
                                                   
                                                   <p>Certificates</p>
                                             </div>
 
                                             <a href="#">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                     <g opacity="0.6">
                                                       <path d="M8 2.00003H3.33333C2.97971 2.00003 2.64057 2.1405 2.39052 2.39055C2.14048 2.6406 2 2.97974 2 3.33336V12.6667C2 13.0203 2.14048 13.3595 2.39052 13.6095C2.64057 13.8596 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8596 13.6095 13.6095C13.8595 13.3595 14 13.0203 14 12.6667V8.00003M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8 10L5.33333 10.6667L6 8.00003L12.25 1.75003Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                     </g>
                                                   </svg>
                                                   Edit
                                             </a>
                                            </div>
                                            <div className="span-btn">
                                             <button>incomplete</button>
                                            </div>
                                       </div>
                                    

                                       <div className="Personal-Profile-card">
                                            <div className="span-head">
                                             <div className="span-h-1">
                                                 <div className="checks_container">
                                                  <label className="custom-checkbox part-check2">
                                                    <input name="dummy" type="checkbox"/>
                                                    <span className="checkmark cheack-my"></span>
                                                  </label>
                                                   </div>
                                                   
                                                   <p>My Uploads</p>
                                             </div>
 
                                             <a href="#">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                     <g opacity="0.6">
                                                       <path d="M8 2.00003H3.33333C2.97971 2.00003 2.64057 2.1405 2.39052 2.39055C2.14048 2.6406 2 2.97974 2 3.33336V12.6667C2 13.0203 2.14048 13.3595 2.39052 13.6095C2.64057 13.8596 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8596 13.6095 13.6095C13.8595 13.3595 14 13.0203 14 12.6667V8.00003M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8 10L5.33333 10.6667L6 8.00003L12.25 1.75003Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                     </g>
                                                   </svg>
                                                   Edit
                                             </a>
                                            </div>
                                            <div className="span-btn">
                                             <button>incomplete</button>
                                            </div>
                                       </div>
                                        
                                      
                                        

                                    </div>
                                
                                </div>
                            </div>

                            <div className="Recomended-part-2">
                                <div className="Complete-Profile-box">
                                    <h3>Profile Incomplete</h3>

                                    <div className="Profile-box-change">


                                        
                                        <div className="Profile-card-list-icon">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                <g opacity="0.6">
                                                  <path d="M1.5835 9.49998C1.5835 9.49998 3.9585 3.95831 9.50016 3.95831C15.0418 3.95831 17.4168 9.49998 17.4168 9.49998C17.4168 9.49998 15.0418 15.0416 9.50016 15.0416C3.9585 15.0416 1.5835 9.49998 1.5835 9.49998Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <path d="M9.50016 11.875C10.8118 11.875 11.8752 10.8117 11.8752 9.49998C11.8752 8.1883 10.8118 7.12498 9.50016 7.12498C8.18849 7.12498 7.12516 8.1883 7.12516 9.49998C7.12516 10.8117 8.18849 11.875 9.50016 11.875Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                              </svg>
                                            <p>Profile Visibility</p></span>


                                            <label className="switch">
                                                <input type="checkbox"/>
                                                <span className="slider"></span>
                                              </label>
                                        </div>


                                        <div className="Profile-card-list-icon">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                <g opacity="0.6" clip-path="url(#clip0_142_1201)">
                                                  <path d="M5.54167 7.91672V5.54172C5.54171 4.67039 5.82924 3.82341 6.35969 3.13215C6.89014 2.44088 7.63385 1.94396 8.4755 1.71844C9.31714 1.49292 10.2097 1.55141 11.0147 1.88483C11.8197 2.21825 12.4922 2.80798 12.9279 3.56255M10.2917 12.6667C10.2917 13.1039 9.93723 13.4584 9.5 13.4584C9.06277 13.4584 8.70833 13.1039 8.70833 12.6667C8.70833 12.2295 9.06277 11.8751 9.5 11.8751C9.93723 11.8751 10.2917 12.2295 10.2917 12.6667ZM3.95833 7.91672H15.0417C15.9161 7.91672 16.625 8.6256 16.625 9.50005V15.8334C16.625 16.7078 15.9161 17.4167 15.0417 17.4167H3.95833C3.08388 17.4167 2.375 16.7078 2.375 15.8334V9.50005C2.375 8.6256 3.08388 7.91672 3.95833 7.91672Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_142_1201">
                                                    <rect width="19" height="19" fill="white"/>
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            <p>Change Password</p></span>


                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                <g opacity="0.2">
                                                  <path d="M6.75 14.0001L11.25 9.50006L6.75 5.00006" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                              </svg>
                                        </div>


                                        <div className="Profile-card-list-icon">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                <g opacity="0.6" clip-path="url(#clip0_142_1209)">
                                                  <path d="M14.2502 15.8334C14.2502 14.5736 13.7497 13.3654 12.8589 12.4746C11.9681 11.5838 10.7599 11.0834 9.50016 11.0834M9.50016 11.0834C8.24038 11.0834 7.0322 11.5838 6.14141 12.4746C5.25061 13.3654 4.75016 14.5736 4.75016 15.8334M9.50016 11.0834C11.2491 11.0834 12.6668 9.66564 12.6668 7.91674C12.6668 6.16784 11.2491 4.75007 9.50016 4.75007C7.75126 4.75007 6.3335 6.16784 6.3335 7.91674C6.3335 9.66564 7.75126 11.0834 9.50016 11.0834ZM17.4168 9.50007C17.4168 13.8723 13.8724 17.4167 9.50016 17.4167C5.12791 17.4167 1.5835 13.8723 1.5835 9.50007C1.5835 5.12782 5.12791 1.5834 9.50016 1.5834C13.8724 1.5834 17.4168 5.12782 17.4168 9.50007Z" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_142_1209">
                                                    <rect width="19" height="19" fill="white"/>
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            <p>Preview Profile</p></span>


                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                <g opacity="0.2">
                                                  <path d="M6.75 14.0001L11.25 9.50006L6.75 5.00006" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                              </svg>
                                        </div>

                                        <div className="Profile-card-list-icon">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                <g opacity="0.6">
                                                  <path d="M16.625 10.2918V15.0418C16.625 15.4617 16.4582 15.8644 16.1613 16.1614C15.8643 16.4583 15.4616 16.6251 15.0417 16.6251H3.95833C3.53841 16.6251 3.13568 16.4583 2.83875 16.1614C2.54181 15.8644 2.375 15.4617 2.375 15.0418V3.95846C2.375 3.53853 2.54181 3.1358 2.83875 2.83887C3.13568 2.54194 3.53841 2.37512 3.95833 2.37512H8.70833M16.625 2.37512L9.5 9.50012M16.625 2.37512H11.875M16.625 2.37512V7.12512" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                              </svg>
                                            <p>Share profile</p></span>


                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                <g opacity="0.2">
                                                  <path d="M6.75 14.0001L11.25 9.50006L6.75 5.00006" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                              </svg>
                                        </div>


                                        <div className="Profile-card-list-icon">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                <g opacity="0.6">
                                                  <path d="M3.16673 11.795C2.57856 11.1941 2.13485 10.4672 1.86922 9.66936C1.60359 8.87154 1.523 8.02373 1.63356 7.19015C1.74412 6.35657 2.04293 5.55908 2.50735 4.85809C2.97177 4.15709 3.58963 3.57098 4.31412 3.14414C5.03861 2.7173 5.85074 2.46093 6.68899 2.39445C7.52724 2.32797 8.36962 2.45312 9.15234 2.76043C9.93506 3.06773 10.6376 3.54912 11.2067 4.16815C11.7758 4.78718 12.1966 5.5276 12.4371 6.33333H13.8542C14.6186 6.33324 15.3627 6.579 15.9767 7.0343C16.5906 7.4896 17.0419 8.1303 17.2638 8.86176C17.4856 9.59321 17.4664 10.3766 17.2088 11.0963C16.9512 11.816 16.469 12.4337 15.8334 12.8582M9.50006 9.49999V16.625M9.50006 16.625L6.3334 13.4583M9.50006 16.625L12.6667 13.4583" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                              </svg>
                                            <p>Download Profile</p></span>


                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                <g opacity="0.2">
                                                  <path d="M6.75 14.0001L11.25 9.50006L6.75 5.00006" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                              </svg>
                                        </div>


                                        <div className="Profile-card-list-icon">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                <g opacity="0.6" clip-path="url(#clip0_142_1241)">
                                                  <path d="M2.375 4.75004H16.625M15.0417 4.75004V15.8334C15.0417 16.625 14.25 17.4167 13.4583 17.4167H5.54167C4.75 17.4167 3.95833 16.625 3.95833 15.8334V4.75004M6.33333 4.75004V3.16671C6.33333 2.37504 7.125 1.58337 7.91667 1.58337H11.0833C11.875 1.58337 12.6667 2.37504 12.6667 3.16671V4.75004M7.91667 8.70837V13.4584M11.0833 8.70837V13.4584" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_142_1241">
                                                    <rect width="19" height="19" fill="white"/>
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            <p>Delete Account</p></span>


                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                <g opacity="0.2">
                                                  <path d="M6.75 14.0001L11.25 9.50006L6.75 5.00006" stroke="#1A1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                              </svg>
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


export default Account