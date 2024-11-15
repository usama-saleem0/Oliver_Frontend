import React from "react";




import newm from "../../../src/Assets/Images/new-map.png"
const Map = ()=>{


return (

    <>
           <section className="Dashboard">
                    <div className="main-Dashboard">
                        <div className="map-box">

                            <div className="map-box-1">
                            <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093797!2d144.9630576153134!3d-37.816279179751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f9d5f48a8c4c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1618395049999!5m2!1sen!2sau" 
        width="100%" 
        height="100%"
        
        style={{ border: 0, borderRadius:20 }} 
  
        loading="lazy">
    </iframe>
                            </div>


                            <div className="map-list">
                                <h2>Filter</h2>
                                <div className="main-Availability-box">

                             
                                <div className="Availability-box">
                                    <h3>Availability</h3>

                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>Urgent</p>
                                    </div>

                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>Remote</p>
                                    </div>


                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>Full-Time</p>
                                    </div>



                                </div>

                                <div className="Availability-box">
                                    <h3>Rating</h3>
                                    <div className="rating">
                                        <span>4.0</span>
                                        <div className="radio-input">
                                            <input
                                              className="star s1"
                                              type="radio"
                                              id="value-1"
                                              name="value-radio"
                                              value="value-1"
                                            />
                                            <input
                                              className="star s2"
                                              type="radio"
                                              id="value-2"
                                              name="value-radio"
                                              value="value-2"
                                            />
                                            <input
                                              className="star s3"
                                              type="radio"
                                              id="value-3"
                                              name="value-radio"
                                              value="value-3"
                                            />
                                            <input
                                              className="star s4"
                                              type="radio"
                                              id="value-4"
                                              name="value-radio"
                                              value="value-4"
                                            />
                                            <input
                                              className="star s5"
                                              type="radio"
                                              id="value-5"
                                              name="value-radio"
                                              value="value-5"
                                            />
                                          </div>
                                          
                                    </div>

                                </div>

                                <div className="Availability-box">
                                    <h3>Experience</h3>

                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>UI UX</p>
                                    </div>

                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>Graphic</p>
                                    </div>


                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>Developer</p>
                                    </div>

                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>UI UX</p>
                                    </div>

                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>Graphic</p>
                                    </div>


                                    <div className="Filter-cheack-box">
                                        <label className="custom-checkbox">
                                            <input name="dummy" type="checkbox"/>
                                            <span className="checkmark"></span>
                                          </label>

                                          <p>Developer</p>
                                    </div>




                                </div>
                                
                                <div className="Location-input">
                                    <label >Location</label>
                                    <input type="text" placeholder="Select Location"/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>


)



}


export default Map