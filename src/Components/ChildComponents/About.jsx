import React from 'react';
import './About.css'; // Import your CSS file for styling

const BitcoinInfo = () => {
  return (
    <div className="bitcoin-container">
      <h2>About Bitcoin</h2>

      <div className="section">
        <h3>What is Bitcoin</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eu velit
          tristique venenatis.
        </p>
      </div>

      <div className="section">
        <h3>Some Content Heading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eu velit
          tristique venenatis.
        </p>
      </div>

      <div className="section">
        <h3>Already Holding Bitcoin</h3>
        <div className="info-section">
          <div className="info-div">
            <img
              src="./bitcoin.jpg.jpg"
              alt="Calculate your profits"
              width="80"
              height="80"
            />
            <div className="info-text">
              <h4>Calculate your profits</h4>
             
              <button className="cta-button">Check Now with -&gt;</button>
            </div>
          </div>

          <div className="info-div">
            <img
              src="./tax.jpg.jpg"
              alt="Calculate your tax"
              width="80"
              height="80"
            />
            <div className="info-text">
              <h4>Calculate your tax</h4>
              
              <button className="cta-button">Check Now with -&gt;</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section additional-content">
        {/* Additional content goes here */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eu velit
          tristique venenatis.
        </p>
      </div>
    </div>
  );
};

export default BitcoinInfo;
