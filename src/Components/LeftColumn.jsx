// LeftColumn.jsx
import React, { useState, useEffect } from "react";
import TradingViewWidget from "./TradingViewWidget";

const LeftColumn = ({ selectedCrypto }) => {
  const [cryptoData, setCryptoData] = useState({});
  const [cryptoData2, setCryptoData2] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCrypto}`
        );
        const data = await response.json();
        setCryptoData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error fetching ${selectedCrypto} data:`, error);
      }
    };

    fetchCryptoData();
  }, [selectedCrypto]);

  useEffect(() => {
    const fetchCryptoData2 = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`
        );
        const data = await response.json();
        setCryptoData2(data);
      } catch (error) {
        console.error(`Error fetching ${selectedCrypto} data:`, error);
      }
    };

    fetchCryptoData2();
  }, [selectedCrypto]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const { inr, inr_24h_change, usd, usd_24h_change } = cryptoData2.bitcoin;

  console.log(cryptoData2.bitcoin);
  console.log("jjjjjjjjjjjjjjjjjjjjjjjj");

  const {
    name,
    symbol,
    market_cap_rank,
    image: { thumb },
  } = cryptoData;

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        borderRight: "1px solid #ccc",
        boxSizing: "border-box",
      }}
    >
      {/* 1st Row */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <img
          src={thumb}
          alt={`${name} Icon`}
          style={{ width: "32px", height: "32px", marginRight: "10px" }}
        />
        <div>
          <h3 style={{ margin: "0", fontSize: "1.2rem" }}>{name}</h3>
          <p style={{ margin: "0", fontSize: "0.9rem" }}>
            {symbol.toUpperCase()}
          </p>
        </div>
        <button style={{ marginLeft: "2rem", fontSize: "0.8rem" }}>
          Rank #{market_cap_rank}
        </button>
      </div>

      {/* 2nd Row */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <p style={{ margin: "0", marginRight: "10px", fontSize: "1.2rem" }}>
          $ {usd}
        </p>
        <div
          style={{
            color: usd_24h_change > 0 ? "green" : "red",
            fontSize: "1.2rem",
          }}
        >
          {usd_24h_change > 0 ? "▲" : "▼"}
        </div>
        <p
          style={{
            color: usd_24h_change > 0 ? "green" : "red",
            margin: "0",
            marginLeft: "5px",
            fontSize: "1rem",
          }}
        >
          {usd_24h_change.toFixed(2)}%
        </p>
      </div>

      {/* 3rd Row */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <p style={{ margin: "0", marginRight: "10px", fontSize: "1.2rem" }}>
          <span role="img" aria-label="INR">
            ₹
          </span>{" "}
          {inr}
        </p>
      </div>

      {/* TradingView Chart */}
    </div>
  );
};

export default LeftColumn;
