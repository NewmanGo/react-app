import React from "react";
import logTimeHOC from "./logTimeHOC";

class InnerLogComponent extends React.Component {
  render() {
    return <div className="comp">我是打印日志组件(HOC)</div>;
  }
}
// 使用高阶组件`logTimeHOC`包裹下
export default logTimeHOC(InnerLogComponent, { log: true });
