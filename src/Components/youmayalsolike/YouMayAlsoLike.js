// src/components/YouMayAlsoLike/YouMayAlsoLike.js
import React from 'react';
import './YouMayAlsoLike.css';

const CoinItem = ({ coin }) => {
  const { logo, symbol, priceChange, price, sparkline } = coin;

  return (
    <div className="coin-item">
      <div className="coin-row">
        <img src={logo} alt={`${symbol} Logo`} className="coin-logo" />
        <div className="coin-info">
          <div className="symbol">{symbol}</div>
          <div className="price-change">{priceChange}%</div>
        </div>
      </div>
      <div className="coin-row">
        <div className="price">${price}</div>
      </div>
      <div className="coin-row">
        <img src={sparkline} alt={`${symbol} Sparkline`} className="sparkline" />
      </div>
    </div>
  );
};

const YouMayAlsoLike = ({ trendingCoins }) => {
  return (
    <div className="you-may-also-like">
      <h2>You May Also Like</h2>
      <div className="coin-carousel">
        {trendingCoins.map((coin, index) => (
          <CoinItem key={index} coin={coin} />
        ))}
      </div>
      {/* Repeat the same row for the carousel */}
      <div className="coin-carousel">
        {trendingCoins.map((coin, index) => (
          <CoinItem key={index} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;



