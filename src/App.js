import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: 1,
      });
      this.setState({
        a: 1,
      });
      this.setState({
        a: 1,
      });
      this.setState({
        a: 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div className="container">
        {/* <div className="goods-earn">官方补贴 低过直播价</div>
        <div className="goods-content">
          <div className="goods-img-wrap">
            <img
              src="https://su.yzcdn.cn/public_files/431f06ceec0e9e6b92be0173238fbe8d.png"
              className="goods-img"
              alt=""
            />
          </div>
          <div className="goods-right">
            <span className="right-des">补贴价</span>
            <span className="right-price">
              <span className="unit">¥</span>
              <span className="value">282.45</span>
            </span>
            <span className="right-bo mb14">直播价¥340.34</span>
            <span className="right-shen mb14">
              <span className="label">共省</span>
              <span className="value">¥2.45</span>
            </span>
            <span className="right-qiang">立即抢</span>
          </div>
        </div> */}
        <input type="text"/>
      </div>
    );
  }
}

export default App;
