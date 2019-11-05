import React from "react";
import logTimeHOC from "./logTimeHOC";

class InnerLogComponent extends React.Component {
//   state = { time: 0 };
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         time: this.state.time + 1
//       });
//     }, 1000);
//   }
  render() {
    return <div>我是打印日志组件</div>;
  }
}
// 使用高阶组件`logTimeHOC`包裹下
export default logTimeHOC(InnerLogComponent, { log: true });
