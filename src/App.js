import React, { useState } from "react";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="goods-earn">
        <span className="label">好友送你</span>
        <span className="unit">¥</span>
        <span className="value">2.45</span>
      </div>
      <div className="goods-content">
        <div className="goods-img-wrap">
          <img src="https://su.yzcdn.cn/public_files/431f06ceec0e9e6b92be0173238fbe8d.png" className="goods-img" alt="" />
        </div>
        <div className="goods-right">
          <span className="right-des">购买到手</span>
          <span className="right-price">
            <span className="unit">¥</span>
            <span className="value">282.45</span>
          </span>
        </div>
      </div>
      <img src="https://su.yzcdn.cn/public_files/431f06ceec0e9e6b92be0173238fbe8d.png" className="goods-pop-img" alt="" />
    </div>
  );
}

export default App;
