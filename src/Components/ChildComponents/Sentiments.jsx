import React from "react";
import "./AnalystEstimates.css"; // Import your CSS file for styling

const AnalystEstimates = () => {
  return (
    <div className="analyst-estimates-container">
      <h2>
        <span className="circle-icon">&#9432;</span>
        Analyst Estimates
      </h2>
      <div style={{ display: 'flex' }}>
        {/* <div className="circle light-green, align item center">76%</div> */}
        <div className="circle light-green" style={{ alignItems: 'center', justifyItems: 'center' }}>
  76%
</div>

        <div className="estimates-container">
          <div className="estimate">
            <div className="estimate-text">
              <div className="buy-line">
                <span>Buy</span>
                <span>76%</span>
              </div>
            </div>
            <div className="line green-line" style={{ width: "76%" }}></div>
          </div>

          <div className="estimate">
            <div className="estimate-text">
              <div className="hold-line">
                <span>Hold</span>
                <span>8%</span>
              </div>
            </div>
            <div className="line grey-line" style={{ width: "8%" }}></div>
          </div>

          <div className="estimate">
            <div className="estimate-text">
              <div className="sell-line">
                <span>Sell</span>
                <span>16%</span>
              </div>
            </div>
            <div className="line red-line" style={{ width: "16%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystEstimates;
