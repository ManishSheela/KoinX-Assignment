// import React, { useState, useEffect } from "react";
// import LeftColumn from "./Components/LeftColumn";
// import RightColumn from "./Components/RightColumn";
// import Navbar from "./Components/Navbar";
// import TradingViewWidget from "./Components/TradingViewWidget";
// import Left2 from "./Components/Left2";
// import LastComponent from "./Components/LastComponent";

// function App() {
//   const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
//   const [trendingCoins, setTrendingCoins] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchTrendingCoins = async () => {
//       try {
//         const response = await fetch('api/https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/search/trending');
//         const data = await response.json();
//         const top7TrendingCoins = data.coins.slice(0, 7);
//         console.log(")))))))))))))))) ))))))))))))))))))))");
//         console.log(top7TrendingCoins);
//         console.log(")))))))))))))))) ))))))))))))))))))))");

//         const coinDetailsPromises = top7TrendingCoins.map(async (coin) => {
//           // const coinResponse = await fetch(`api/https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/${coin.item.id}`);
//           const coinData=fetch("https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/search/trending")
//           .then(response => response.json())
//           .then(data => console.log(data))
//           .catch(error => console.error("Error fetching trending coins:", error));
// ;        
//           // const coinData = await coinResponse.json();
//           return { ...coin.item, details: coinData };
//         });

//         const coinsWithDetails = await Promise.all(coinDetailsPromises);

//         console.log("////////////////////////////////////////////////////////////////");
//         console.log(coinsWithDetails);
//         console.log("////////////////////////////////////////////////////////////////");
//         setTrendingCoins(coinsWithDetails);
//         setIsLoading(false);
//       } 
//       catch (error) {
//         console.log("///////////////////////// error rorororo ror ororor  ///////////////////////////////////////");
//         // console.log(coinsWithDetails);
//         console.log("///////////////////////// erororor ro roro ro ororor o///////////////////////////////////////");
//         console.error('Error fetching trending coins:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchTrendingCoins();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <ul style={{ listStyleType: "none", marginLeft: "20px", marginTop: "10px" }} className="breadcrumb">
//         <li className="breadcrumb-item">Cryptocurrency >> {selectedCrypto}</li>
//       </ul>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-lg-8">
//             <LeftColumn selectedCrypto={selectedCrypto} />
//             <TradingViewWidget selectedCrypto={selectedCrypto} />
//             <Left2 />
//           </div>

//           <div className="col-lg-4">
//             <RightColumn setSelectedCrypto={setSelectedCrypto}  />
//           </div>
//         </div>
//       </div>

//       <LastComponent/>
//     </>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import LeftColumn from "./Components/LeftColumn";
import RightColumn from "./Components/RightColumn";
import Navbar from "./Components/Navbar";
import TradingViewWidget from "./Components/TradingViewWidget";
import Left2 from "./Components/Left2";
import LastComponent from "./Components/LastComponent";

function App() {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  return (
    <>
      <Navbar />
      <ul style={{ listStyleType: "none", marginLeft: "20px", marginTop: "10px" }} className="breadcrumb">
        <li className="breadcrumb-item">Cryptocurrency >> {selectedCrypto}</li>
      </ul>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div style={{ overflow: 'hidden' }}>
              <LeftColumn selectedCrypto={selectedCrypto} />
              {/* <p>hey I am chart-----------------------</p> */}
              <TradingViewWidget selectedCrypto={selectedCrypto} />
              <Left2 />
            </div>
          </div>

          <div className="col-lg-4">
            <RightColumn setSelectedCrypto={setSelectedCrypto}  />
          </div>
        </div>
      </div>

      <LastComponent/>
    </>
  );
}

export default App;
