import React, { useState, useEffect } from "react";

export default function SetTimeComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      setCount(count + 1)
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="comp">
      <div>我是计时组件</div>
      <span>{`我显示了${count}s`}</span>
    </div>
  );
}
