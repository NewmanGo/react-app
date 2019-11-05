import React from "react";
import logTimeHOC from './logTimeHOC'

class InnerSetTimeComponent extends React.Component {
  render() {
    return (
      <div className="comp">
        <div>我是计时组件(HOC)</div>
        <span>{`我显示了${this.props.time}s`}</span>
      </div>
    );
  }
}
// 使用高阶组件`logTimeHOC`包裹下
export default logTimeHOC(InnerSetTimeComponent, { time: true });
