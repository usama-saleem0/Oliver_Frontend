import React, { useEffect, useState } from "react";


import map from "../../../src/Assets/Images/map.png"
import forml from "../../../src/Assets/Images/form-logo.png"
import google from "../../../src/Assets/Images/google.png"
import facebook from "../../../src/Assets/Images/facebook.png"
import Singup from "./sinup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Features/hooks";
import { useSelector } from "react-redux";
import { getemails, login, loginSuccess } from "../Features/userDetailSlice";
import { User } from "../../types/user";
import { jwtDecode } from "jwt-decode";
import GoogleLogin from "react-google-login";

const Login = ()=>{



    const dispatch = useAppDispatch();
    const { loading, users, error } = useSelector((state:any) => state.userDetail);

    // useEffect(() => {

    //     console.log('Dispatching getemails...');
    //     dispatch(getemails());
         
    
    //   }, [dispatch]);

    const saveUserToLocalStorage = (user: User) => {
        localStorage.setItem("userData", JSON.stringify(user));
      };
    



      const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(formData)).then((response) => {
        if (typeof response.payload === 'object' && 'message' in response.payload) {
          const { message, user } = response.payload as { message: string, user: User };
  
       
         
  
          saveUserToLocalStorage(user);

          console.log("TS")
          if (message === "Login successful") {
            dispatch(loginSuccess(response.payload));
            console.log('type', user.type)
            if(user.type === 'Trainer'){
                navigate("/Dashbord");

            }
            else{
                navigate("/Employerdashbord");


            }
            // navigate("/Dashbord");
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



  const navigate = useNavigate()

  const singup=()=>{
      navigate("/Singup")
  }

  const Dashbord=()=>{
    navigate("/Dashbord")

}



const [googleLoaded, setGoogleLoaded] = useState(false);
// useEffect(() => {
//     // Check if 'google' is defined and 'google.accounts' exists
//     if (typeof google !== 'undefined' && google.accounts) {
//       google.accounts.id.initialize({
//         client_id: "908977573799-5d32tvsej91ipptrunk5orilqn3l02qk.apps.googleusercontent.com",
//         callback: handleCallbackResponse // Make sure handleCallbackResponse is defined
//       });
//       setGoogleLoaded(true);
//     }
//   }, []);

return (

    <>
     {/* <div className='google-login-box'>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              // @ts-ignore
              var userobj = jwtDecode(credentialResponse.credential);
                console.log(userobj,"TS");
               
                 
            }}
            // @ts-ignore
            onError={() => {
              console.log('Login Failed');
            }}  />
               
        </div> */}

<section className="login">
        <div className="main-login">
        <div className="login-map">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093797!2d144.9630576153134!3d-37.816279179751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f9d5f48a8c4c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1618395049999!5m2!1sen!2sau" 
        width="100%" 
        height="100%" 
                
        style={{ border: 0 }} 
  
        loading="lazy">
    </iframe>
</div>

            <div className="login-tital">

                <div className="login-form">
                    <div className="login-form-head">
                        <img src={forml} alt=""/>
                    </div>

                    <div className="login-form-body">

                    <div className="login-h2-tital">
                            <h2>Sign In Into Your Account</h2>
                            <p>Please enter the details to sign in.</p>
                    </div>

                    {/* <div className="check-box-main-box">
                        <div className="check-box">
                            <label className="custom-checkbox">
                                <input name="dummy" type="checkbox"/>
                                <span className="checkmark"></span>
                              </label>
                                <h3>As Trainer</h3>
                        </div>

                        <div className="check-box">
                            <label className="custom-checkbox">
                                <input name="dummy" type="checkbox"/>
                                <span className="checkmark"></span>
                              </label>

                    <h3>As Instructor</h3>
                        </div>
                    </div> */}

                    <br/>
                    <br/>
                    <br/>

                    <div className="input-box-side">
                        <div className="input-group-box">
                            <label>Email Address</label>
                            <input type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            
                            />
                        </div>

                        <div className="input-group-box">
                            <label>Password</label>
                            <input type="password"
                             value={formData.password}
                             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            /> 
                        </div>
                    </div>
                       
                    <div className="cheack-box-group">
                        <div className="check-box">
                            <label className="custom-checkbox">
                                <input name="dummy" type="checkbox"/>
                                <span className="checkmark"></span>
                              </label>

                              <p>Remember me</p>
                        </div>

                        <a href="#">Forget Password?</a>
                    </div>

                    <div className="SUBMINT-BTN-BOX">
                        <button onClick={handleSubmit}>
                            Sign in
                        </button>
                    </div>

                    <div className="short-box-group">
                        <div className="or-list">
                        <span className="or">
                            <p>OR</p>
                        </span>
                        </div>

                        <div className="sing-in-btn-boxz">
                            <button>
                                <img src={google} alt=""/>
                                Sign in with Google
                            </button>
        
                            <button>
                                <img src={facebook} alt=""/>
                                Sign in with Facebook
                            </button>
                        </div>


                        <div className="out-form">
                            <h2> Doesn’t have an account yet?<a onClick={singup} > Sign Up</a></h2>
                           
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


export default Login