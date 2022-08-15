import React from "react";
import "./App.css";

const Coin = ({
  name,
  image,
  symbol,
  volume,
  id,
  mkt_cap,
  price,
  priceChange,
}) => {
  return (
    <div className="coin-wrapper">
      <div className="coin-card">
        <div className="coin-header">
          <img src={image} alt="" className="img" />
          <h1 className="coin-name">{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-details">
          <p className="coin-price">Rs. {price}</p>
          <p className="coin-volume">Rs {volume.toLocaleString()}</p>
          <p className="market-cap">Rs. {mkt_cap.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
