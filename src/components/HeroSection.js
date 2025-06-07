import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>MARINE FLEET PROJECT</h1>
        <p>
          Prototype of Autonomous marine fleet with camera sensors to detect
          cracks of the objects under water, with web app system for on/off of the
          device and display of data collected.
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            START
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            VIEW PROTOTYPE <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
      {/* END OF HERO SECTION */}

      {/* PROTOTYPE DETAILS */}
      <div className="container">
        <div className="image-section">
          <div className="main-image">
            <img src="/images/img-1.jpg" alt="Cam 1" />
            <span className="label">CAM 1</span>
          </div>

          <div className="views-grid">
            <div className="view-img">
              <img src="/images/img-1.jpg" alt="Front View" />
              <span className="label">Front View</span>
            </div>
            <div className="view-img">
              <img src="/images/img-1.jpg" alt="Left Side View" />
              <span className="label">Left Side View</span>
            </div>
            <div className="view-img">
              <img src="/images/img-1.jpg" alt="Right Side View" />
              <span className="label">Right Side View</span>
            </div>
            <div className="view-img">
              <img src="/images/img-1.jpg" alt="Bottom View" />
              <span className="label">Bottom View</span>
            </div>
          </div>
        </div>

        <div className="info-section">
          <div className="description-materials">
            <div className="description">
              <h4><strong>Description:</strong></h4>
              <p>
                  The Marine Fleet Project is a prototype of an autonomous marine vehicle
                  equipped with camera sensors designed to detect underwater cracks or obstacles.
                  It includes a web-based control interface to turn the device on or off and to 
                  visualize sensor data and live camera feeds in real-time. This system enhances 
                  underwater inspection, safety, and monitoring without manual intervention.
              </p>
              </div>
              <div className="materials">
              <h4><strong>Materials Used:</strong></h4>
              <ul>
                  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END OF PROTOTYPE DETAILS */}
    </div>
  );
}

export default HeroSection;
