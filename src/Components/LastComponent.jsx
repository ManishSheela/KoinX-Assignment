// src/App.js
import React, { useEffect, useState } from 'react';
import YouMayAlsoLike from './youmayalsolike/YouMayAlsoLike';

const LastComponent = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/search/trending'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch trending coins');
        }

        const data = await response.json();

        const coins = data.coins.map((coin) => ({
          logo: coin.item.small,
          symbol: coin.item.symbol,
          priceChange: coin.item.price_change_percentage_24h,
          price: coin.item.current_price,
          sparkline: coin.item.sparkline_url,
        }));

        setTrendingCoins(coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div>
      {/* Other components or content */}
      <YouMayAlsoLike trendingCoins={trendingCoins} />
      {/* Other components or content */}
    </div>
  );
};

export default LastComponent;
