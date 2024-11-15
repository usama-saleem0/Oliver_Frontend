
import React, { useEffect, useState } from "react";
import intel from "../../../src/Assets/Images/intel.png";
import { useParams } from "react-router-dom";
import { get_tracking_status } from "../Features/userDetailSlice";
import { useAppDispatch } from "../Features/hooks";

interface TrackingDetails {
  applied: string;
  shortlisted: string
  completed: string
  rejected: string
  
}

interface JobDetails {
 
  title: string;
  
}

const Tracking: React.FC = () => {
  const { JobID, userID } = useParams();

  const dispatch = useAppDispatch();

  const [jobDetails, setJobDetails] = useState<JobDetails| null>(null);
  const [trackingDetails, setTrackingDetails] = useState<TrackingDetails | null>(null);

  useEffect(() => {
    console.log("TRACKING", JobID, userID);
    getTracking();
  }, []);

  const getTracking = () => {
    const formData = {
      userID: userID,
      JobID: JobID
    };

    dispatch(get_tracking_status(formData)).then((response) => {
      if (typeof response.payload === 'object' && 'TrackStatus' in response.payload && "JobDetails" in response.payload) {
        const { TrackStatus } = response.payload as { TrackStatus: TrackingDetails };
        const { JobDetails } = response.payload as { JobDetails: JobDetails };

        console.log(TrackStatus, JobDetails);
        setTrackingDetails(TrackStatus);
        setJobDetails(JobDetails);

      } else {
        console.error("Unexpected response format", response.payload);
      }
    }).catch((error) => {
      console.error("Signup Error", error);
    });
  }

  return (
    <>
      <section className="Dashboard">
        <div className="main-Dashboard">
          <div className="Tracking-box">
            <div className="Tracking-header">
              <div className="Applications-card no-border">
                <div className="intel-part-1">
                  <div className="intel-dp">
                    <img src={intel} alt="" />
                  </div>
                  <div className="inter-ux">
                    <h3>{jobDetails?.title || " "}</h3>
                  </div>
                </div>
                <div className="intel-part-2">
                  <button>Contact Provider</button>
                  <button className="Application">See All Applications</button>
                </div>
              </div>
            </div>

            <div className="Tracking-body">
              <div className="Tracking-body-box">
                <div className="Tracking-body-card">
                  <span className="potion">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#89A0FF" />
                    </svg>
                  </span>
                    {
                  trackingDetails?.applied !="0"  &&
                  <div className="h2-body-box">
                    <h2>Application Submitted</h2>
                    <p>Submitted on {trackingDetails?.applied || " "}</p>
                  </div>
}

                 
                </div>
            {    trackingDetails?.shortlisted !="0"  &&
                <div className="h2-body-box">
                    <h2>Application Shortlisted</h2>
                    <p>Submitted on {trackingDetails?.shortlisted || " "}</p>
                  </div>
}

               {
                  trackingDetails?.completed !="0"  &&
                  <div className="h2-body-box">
                    <h2>Application Accepted</h2>
                    <p>Submitted on {trackingDetails?.completed || " "}</p>
                  </div>
}
                

      {     
      trackingDetails?.rejected !="0"  &&
                  <div className="h2-body-box">
                    <h2>Application Rejected</h2>
                    <p>Submitted on {trackingDetails?.rejected || " "}</p>
                  </div>

      }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tracking;
