import React, { useState } from "react";
import "./Display.css";

function Display() {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="display-container">

      {/* VIDEO DISPLAY */}
      <div className="camera-section">
        <div className="camera-view">
          <img src="/images/img-1.jpg" alt="Camera 1" />    {/* Placeholder image, replace with actual camera feed */}
          <div className="cam-label">CAM 1</div>
        </div>
        <div className="camera-view">
          <img src="/images/img-1.jpg" alt="Camera 1" />    {/* Placeholder image, replace with actual camera feed */}
          <div className="cam-label">CAM 2</div>
        </div>
      </div>

      {/* ON & OFF Button */}
      <div className="dashboard-container">
        <div className="dashboard-section">
          <div className="control-section">
            <div className="toggle-section">
              <label className="switch">
                <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
                <span className="slider round"></span>
              </label>
              <span className="toggle-label">{isOn ? "ON" : "OFF"}</span>
            </div>
            <p className="instruction">
                Turn the boat ON or OFF. When powered on, the boat begins to scan autonomously.
            </p>
          </div>

          {/* DASHBOARD DISPLAY */}
          <div className="status-section">
            <h2>Dashboard</h2>
            <div className="status-item">
              <strong>Status:</strong>
            </div>
            <div className="status-item">
              <strong>Speed:</strong> <span className="value"></span>      {/*fetch speed number */}
              <strong>Number of Cracks:</strong> <span className="value"></span>   {/*fetch cracks number */}
            </div>
            <div className="status-item">
              <strong>Front Distance:</strong> <span className="value"></span>   {/*fetch front distance */}
              <strong>Left Distance:</strong> <span className="value"></span>   {/*fetch left distance */}
            </div>  
            <div className="status-item">
              <strong>Right Distance:</strong> <span className="value"></span>  {/*fetch right distance */}
            </div>
            <div className="status-item bottom">
              <span><strong>Battery:</strong> 78%</span>    {/*fetch battery status */}
              <span><strong>Signal:</strong> Strong</span>  {/*fetch signal strength */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
