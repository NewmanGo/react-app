import React from "react";

function logTimeHOC(WrappedComponent, options = { time: true, log: true }) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: 0
      };
    }
    componentDidMount() {
      // 计时相关
      options.time &&
        (this.timer = setInterval(() => {
          this.setState({
            time: this.state.time + 1
          });
        }, 1000));

      options.log && console.log("组件被渲染了~"); //日志相关
    }
    componentDidUpdate() {
      options.log && console.log("组件被渲染了~"); //日志相关
    }
    componentWillUnmount() {
      clearInterval(this.timer); // 计时相关
      options.log && console.log("组件即将卸载~"); //日志相关
    }
    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}

export default logTimeHOC;
