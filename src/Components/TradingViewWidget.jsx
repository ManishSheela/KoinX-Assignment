



import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({ selectedCrypto }) {
  const container = useRef();
  const selected = useRef(null);

  useEffect(() => {
    console.log('TradingViewWidget received prop update:', selectedCrypto);

    // Check if the value of selectedCrypto has changed
    if (selected.current !== selectedCrypto) {
      // Perform actions that should happen when selectedCrypto changes
        selected.current = selectedCrypto;
      // Update the selected ref to the new value
      selected.current = selectedCrypto;

      // Example: Create and append the script
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, [selectedCrypto]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "200%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
