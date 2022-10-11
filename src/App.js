import "./App.css";
import { Card } from "./components/card";

function App() {
  const assetsData = [
    {
      name: "Bitcoin (BTC)",
      currentPrice: "31,812.80",
      dailyChange: 10,
      tlv: "60,000",
      popularPairs: ["solana", "ethereum", "binance"],
      imageName: "bitcoin",
    },
    {
      name: "Solana (SOL)",
      currentPrice: "32.83",
      dailyChange: -12.32,
      tlv: "60,000",
      popularPairs: ["binance", "ethereum", "binance"],
      imageName: "solana",
    },
    {
      name: "Ethereum (ETH)",
      currentPrice: "1,466.45",
      dailyChange: -11.93,
      tlv: "60,000",
      popularPairs: ["solana", "bitcoin", "binance"],
      imageName: "ethereum",
    },
    {
      name: "Binance USD (BUSD)",
      currentPrice: "1",
      dailyChange: 0.25,
      tlv: "60,000",
      popularPairs: ["solana", "ethereum", "binance"],
      imageName: "binance",
    },
    {
      name: "Shiba Inu (SHIBA)",
      currentPrice: "0.00000001948",
      dailyChange: -8.1,
      tlv: "60,000",
      popularPairs: ["solana", "ethereum", "binance"],
      imageName: "shiba",
    },
  ];

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <img src="assets/activityactivity.svg" alt="trading-asset" />
        </div>
        <div>
          <span> Trading Assets </span>
        </div>
      </header>
      <main className="card-container">
        {assetsData.map((asset, index) => (
          <Card key={index} asset={asset} />
        ))}
      </main>
    </>
  );
}

export default App;
