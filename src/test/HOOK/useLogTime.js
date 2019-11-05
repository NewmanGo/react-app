import { useState, useEffect } from "react";

function useLogTime(option = { log: true, time: true }) {
  const [count, setCount] = useState(0);

  //日志相关
  useEffect(() => {
    option.log && console.log("HOOKS组件渲染完成~");
    return () => {
      option.log && console.log("HOOKS组件即将卸载~");
    };
  },[]);

  // 计时相关
  useEffect(() => {
    let timer = null;
    if (option.time) {
      timer = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }
    return () => {
      option.time && clearInterval(timer);
    };
  },[]);

  return { count };
}
export default useLogTime;
