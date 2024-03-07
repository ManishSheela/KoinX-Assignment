import React from 'react';
import './Fundamentals.css'; // Import your CSS file for styling

const Fundamentals = () => {
  // Dummy data (replace with actual data)
  const data = {
    bitcoinPrice: {
      price: 50000,
      currency: 'USD',
    },
    day24: {
      low: 48000,
      high: 52000,
    },
    week7: {
      low: 47000,
      high: 53000,
    },
    marketCapRank: {
      rank: 1,
      value: '1,000,000,000,000',
      currency: 'USD',
    },
    marketCap: {
      value: '900,000,000,000',
      currency: 'USD',
    },
    marketCapDominance: {
      value: '42.5',
      percentage: '%',
    },
    volumeMarketCap: {
      value: '1.5',
      unit: 'B',
    },
    allTimeHigh: {
      value: '60000',
      netChange: '+15%',
    },
    allTimeLow: {
      value: '30000',
      netChange: '-10%',
    },
  };

  return (
    <>
    <div className='row'>
         <h2>
         Fundamentals
          <span className="circle-icon">&#9432;</span>
        </h2>
        </div>
    <div className="fundamentals-container">
         
      <div className="left-column">
       
        <table>
          <tbody>
            <tr>
              <td>Bitcoin Price</td>
              <td>{`${data.bitcoinPrice.price} ${data.bitcoinPrice.currency}`}</td>
            </tr>
            <tr>
              <td>24h Low/High</td>
              <td>{`${data.day24.low} / ${data.day24.high}`}</td>
            </tr>
            <tr>
              <td>7d Low/High</td>
              <td>{`${data.week7.low} / ${data.week7.high}`}</td>
            </tr>
            <tr>
              <td>Market Cap Rank</td>
              <td>{`#${data.marketCapRank.rank} - ${data.marketCapRank.value} ${data.marketCapRank.currency}`}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="right-column">
        <table>
          <tbody>
            <tr>
              <td>Market Cap</td>
              <td>{`${data.marketCap.value} ${data.marketCap.currency}`}</td>
            </tr>
            <tr>
              <td>Market Cap Dominance</td>
              <td>{`${data.marketCapDominance.value}${data.marketCapDominance.percentage}`}</td>
            </tr>
            <tr>
              <td>Volume/Market Cap</td>
              <td>{`${data.volumeMarketCap.value} ${data.volumeMarketCap.unit}`}</td>
            </tr>
            <tr>
              <td>All Time High</td>
              <td className="green-text">{`${data.allTimeHigh.value} ${data.allTimeHigh.netChange}`}</td>
            </tr>
            <tr>
              <td>All Time Low</td>
              <td className="red-text">{`${data.allTimeLow.value} ${data.allTimeLow.netChange}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Fundamentals;
