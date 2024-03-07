import React from 'react';
import './Tokenomics.css'; // Import your CSS file for styling

const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <h2>Tokenomics</h2>

      <div className="section">
        <h3>Initial Distribution</h3>

        <div className="chart-container">
          <div className="semi-circle1 blue"></div>
          <div className="semi-circle2 orange"></div>

          <div className="labels">
            <div className="label blue-point">
              <p>Crowdside Investors: 80%</p>
            </div>
            <div className="label orange-point">
              <p>Foundation: 20%</p>
            </div>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eu velit
          tristique venenatis.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
