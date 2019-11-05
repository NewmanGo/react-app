import React, { useState, useEffect } from "react";
import useLogTime from "./useLogTime";

export default function LogComponent() {
  useLogTime({ log: true });

  return <div className="comp">我是打印日志组件(HOOKS)</div>;
}
