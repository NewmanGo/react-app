import React from "react";
import useLogTime from './useLogTime'

export default function SetTimeComponent (){
  const {count} = useLogTime({time:true})
  return(
      <div className="comp">
          <div>我是计时组件</div>
          <span>{`我显示了${count}s`}</span>
      </div>
  )
}