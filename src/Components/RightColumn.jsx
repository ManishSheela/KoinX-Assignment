// RightColumn.jsx
import React, { useState, useEffect } from "react";

const RightColumn = ({ setSelectedCrypto }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        // const response = await fetch('api/https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/search/trending');
        const data = fetch("https://api.coingecko.com/api/v3/search/trending")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) =>
            console.error("Error fetching trending coins:", error)
          );

        // const data = await response.json();

        const top3TrendingCoins = data.coins.slice(0, 3);

        const coinDetailsPromises = top3TrendingCoins.map(async (coin) => {
          const coinResponse = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coin.item.id}`
          );
          const coinData = await coinResponse.json();
          return { ...coin.item, details: coinData };
        });

        const coinsWithDetails = await Promise.all(coinDetailsPromises);

        setTrendingCoins(coinsWithDetails);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setIsLoading(false);
      }
    };

    fetchTrendingCoins();
  }, [setSelectedCrypto]); // Include the dependency to prevent unnecessary re-renders

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* right1 div */}
      <div
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "30px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ margin: "0" }}>Get Started with KoinX</h2>
          <h2 style={{ margin: "0" }}>For Free</h2>
        </div>
        <p>Some content here...</p>
        {/* Adjusted styling for the image */}
        <img
          src="./trading_screen.jpg"
          alt="Random"
          style={{
            width: "80%",
            maxWidth: "300px",
            height: "auto",
            marginBottom: "20px",
          }}
        />
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Get Started for Free
          <span style={{ marginLeft: "10px", fontSize: "20px" }}>→</span>
        </button>
      </div>

      {/* right2 */}
      <div style={{ backgroundColor: "white", padding: "20px", width: "100%" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Trending Coins (24H)
        </h2>
        {trendingCoins.map((coin) => (
          <div
            key={coin.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              padding: "10px",
            }}
          >
            {/* Left part - Logo, Name, Symbol */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={coin.large}
                alt={coin.name}
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              <p style={{ color: "black", margin: "0" }}>
                <a
                  href="#"
                  onClick={() => setSelectedCrypto(coin.id)}
                  style={{ color: "black", textDecoration: "underline" }}
                >
                  {coin.name}
                </a>{" "}
                ({coin.symbol})
              </p>
            </div>

            {/* Right part - Price Change, Value, Percentage */}
            <div
              style={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <div
                style={{
                  color:
                    coin.details.market_data.price_change_percentage_24h.inr > 0
                      ? "green"
                      : "red",
                  marginRight: "5px",
                  fontSize: "20px",
                }}
              >
                {/* Upper triangular icon for profit, lower triangular icon for loss */}
                {coin.details.market_data.price_change_percentage_24h.inr > 0
                  ? "▲"
                  : "▼"}
              </div>
              <p
                style={{
                  color:
                    coin.details.market_data.price_change_percentage_24h.inr > 0
                      ? "green"
                      : "red",
                  margin: "0",
                  marginRight: "10px",
                  fontSize: "16px",
                }}
              >
                {coin.details.market_data.price_change_percentage_24h.inr}%
              </p>
              <p
                style={{
                  color: "black",
                  margin: "0",
                  marginRight: "10px",
                  fontSize: "16px",
                }}
              >
                {coin.details.market_data.current_price.inr} INR
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightColumn;
