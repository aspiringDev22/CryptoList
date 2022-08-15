import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=81&page=1&sparkline=false"
      )
      .then((res) => {
        setCryptos(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCrypto = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <h1 className="app-header">Search a Currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search crypto...."
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="crypto-app">
        {filterCrypto.map((crypto) => {
          return (
            <Coin
              key={crypto.id}
              name={crypto.name}
              symbol={crypto.symbol}
              image={crypto.image}
              mkt_cap={crypto.market_cap}
              volume={crypto.total_volume}
              price={crypto.current_price}
              priceChange={crypto.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
