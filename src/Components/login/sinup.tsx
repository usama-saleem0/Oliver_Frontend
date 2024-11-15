// import React from "react";


// import map from "../../../src/Assets/Images/map.png"
// import forml from "../../../src/Assets/Images/form-logo.png"
// import google from "../../../src/Assets/Images/google.png"
// import facebook from "../../../src/Assets/Images/facebook.png"
// import Login from "./login";
// import { useNavigate } from "react-router-dom";

// const Singup = ()=>{

//     const navigate = useNavigate()

//     const login=()=>{
//         navigate("/Login")
//     }

//     const Dashbord=()=>{
//         navigate("/Dashbord")
//     }
// return (

//     <>

// <section className="login">
//         <div className="main-login">
//             <div className="login-map">

//             <iframe 
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093797!2d144.9630576153134!3d-37.816279179751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f9d5f48a8c4c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1618395049999!5m2!1sen!2sau" 
//         width="100%" 
//         height="100%" 
          
//         style={{ border: 0}} 
  
//         loading="lazy">
//             </iframe>

//             </div>

//             <div className="login-tital">


//                 <div className="login-form">


//                     <div className="login-form-head">
//                         <img src={forml} alt=""/>
//                     </div>

//                     <div className="login-form-body">

//                     <div className="login-h2-tital">
//                             <h2>Sign In Into Your Account</h2>
//                             <p>Please enter the details to sign in.</p>
//                     </div>

//                     <div className="check-box-main-box">
//                         <div className="check-box">
//                             <label className="custom-checkbox">
//                                 <input name="dummy" type="checkbox"/>
//                                 <span className="checkmark"></span>
//                               </label>
//                                 <h3>As Trainer</h3>
//                         </div>

//                         <div className="check-box">
//                             <label className="custom-checkbox">
//                                 <input name="dummy" type="checkbox"/>
//                                 <span className="checkmark"></span>
//                               </label>

//                     <h3>As Instructor</h3>
//                         </div>
//                     </div>

//                     <div className="input-box-side">


//                         <div className="input-group-box">
//                             <label >User Name</label>
//                             <input type="text" placeholder="Enter your Name "/>
//                         </div>


//                         <div className="input-group-box">
//                             <label >Email </label>
//                             <input type="email" placeholder="Enter your Email"/>
//                         </div>

//                         <div className="input-group-box">
//                             <label >Password</label>
//                             <input type="password" placeholder="Enter your password..."/>
//                         </div>

//                         <div className="input-group-box">
//                             <label >Re-Enter Password</label>
//                             <input type="password" placeholder="Re-Enter your password..."/>
//                         </div>

//                     </div>
                       
                    

//                     <div className="SUBMINT-BTN-BOX">
//                  <a  onClick={Dashbord}>       <button>
//                     Sign in
//                 </button></a>
//                     </div>

//                     <div className="short-box-group">
                  

                      


//                         <div className="out-form">
//                             <h2> Already have an account?<a onClick={login}> Login</a></h2>
                           
//                         </div>

                        
//                     </div>

//                     </div>

//                 </div>

           




             
//             </div>
//         </div>
//     </section>
//     </>


// )



// }


// export default Singup





import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Features/hooks";// Adjust the path if necessary
import { signup } from "../Features/userDetailSlice"; // Adjust the path if necessary

import map from "../../../src/Assets/Images/map.png";
import forml from "../../../src/Assets/Images/form-logo.png";
import google from "../../../src/Assets/Images/google.png";
import facebook from "../../../src/Assets/Images/facebook.png";
import {User} from "../../types/user"

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "", 
  });


  const saveUserToLocalStorage = (user: User) => {
    localStorage.setItem("userData", JSON.stringify(user));
  };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked ? value : "", // Set 'value' when checked, empty string otherwise
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Confirm Passwords do not match!");
      return;
    }
    
    dispatch(signup(formData)).then((response) => {
      if (typeof response.payload === 'object' && 'message' in response.payload) {
        const { message, user } = response.payload as { message: string, user: User };

        // Save user data to localStorage
        saveUserToLocalStorage(user);

        // Navigate to dashboard if signup was successful
        if (message === "successfully") {
          navigate("/Dashbord");
        } else {
          alert(message);
        }
      } else {
        console.error("Unexpected response format", response.payload);
      }
    }).catch((error) => {
      console.error("Signup Error", error);
    });
  };
  

  const login = () => {
    navigate("/login");
  };

  return (
    <section className="login">
      <div className="main-login">
        <div className="login-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093797!2d144.9630576153134!3d-37.816279179751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f9d5f48a8c4c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1618395049999!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="login-tital">
          <div className="login-form">
            <div className="login-form-head">
              <img src={forml} alt="" />
            </div>

            <div className="login-form-body">
              <div className="login-h2-tital">
                <h2>Sign In Into Your Account</h2>
                <p>Please enter the details to sign in.</p>
              </div>

              <div className="check-box-main-box">
                <div className="check-box">
                  <label className="custom-checkbox">
                    <input name="type"
                    value="Trainer"
                     type="checkbox"
                    checked={formData.type === "Trainer"}
                    onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <h3>As Trainer</h3>
                </div>

                <div className="check-box">
                  <label className="custom-checkbox">
                    <input name="type" 
                    value="Instructor"
                     type="checkbox"
                    
                    checked={formData.type === "Instructor"}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <h3>As Instructor</h3>
                </div>
              </div>

              <div className="input-box-side">
                <div className="input-group-box">
                  <label>User Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group-box">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group-box">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password..."
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group-box">
                  <label>Re-Enter Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-Enter your password..."
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="SUBMINT-BTN-BOX">
                <button onClick={handleSubmit}>Sign in</button>
              </div>

              <div className="short-box-group">
                <div className="out-form">
                  <h2>
                    Already have an account?
                    <a onClick={login}> Login</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
