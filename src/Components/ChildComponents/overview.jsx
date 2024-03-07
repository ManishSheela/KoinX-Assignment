import React, { useState, useEffect } from 'react';

const Overview = ({ selectedCryptoId }) => {
  const [performanceData, setPerformanceData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedCryptoId}&vs_currencies=usd`);
        const data = await response.json();

        // Assuming the API response structure includes today's low, today's high, and current price
        const todayLow = 100; // Replace with the actual API response property for today's low
        const todayHigh = 150; // Replace with the actual API response property for today's high
        const currentPrice = data[selectedCryptoId]?.usd || 120; // Replace with the actual API response property for current price

        setPerformanceData({ todayLow, todayHigh, currentPrice });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchPerformanceData();
  }, [selectedCryptoId]);

  if (isLoading) {
    return <p>Loading performance data...</p>;
  }

  return (
    <div>
      <h2>Performance</h2>

      {/* Today's Performance */}
      <div style={{ marginBottom: '20px' }}>
        <p>Today's Low to High</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, height: '10px', background: 'linear-gradient(to right, red, yellow, green)', position: 'relative' }}>
            {/* Upper triangular icon */}
            <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid white' }}></div>
          </div>
          {/* Current Price Indicator */}
          <div style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 'bold' }}>
            ${performanceData.currentPrice}
          </div>
        </div>
      </div>

      {/* 52-week Performance */}
      <div>
        <p>52-Week Low to High</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, height: '10px', background: 'linear-gradient(to right, blue, purple, pink)', position: 'relative' }}>
            {/* Upper triangular icon */}
            <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid white' }}></div>
          </div>
          {/* Current Price Indicator */}
          <div style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 'bold' }}>
            ${performanceData.currentPrice}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
