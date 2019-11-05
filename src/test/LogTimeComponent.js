import React, { useState, useCallback, useEffect, memo } from "react";

class LogTimeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }
  componentDidMount() {
    // 计时相关
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);

    console.log("组件被渲染了~"); //日志相关
  }
  componentDidUpdate() {
    console.log("组件被渲染了~"); //日志相关
  }
  componentWillUnmount() {
    clearInterval(this.timer); // 计时相关
    console.log("组件即将卸载~"); //日志相关
  }
  render() {
    return (
      <div>
        <span>{`我已经显示了：${this.state.time}s`}</span>
      </div>
    );
  }
}

export default LogTimeComponent;
