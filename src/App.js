import React, { useState } from "react";
import "./App.css";
import LogTimeComponent from "./test/LogTimeComponent";
import LogComponentHoc from "./test/HOC/LogComponent";
import SetTimeComponentHoc from "./test/HOC/SetTimeComponent";
import LogComponentHooks from "./test/HOOK/LogComponent";
import SetTimeComponentHooks from "./test/HOOK/SetTimeComponent";
import EffectBug from "./test/BUG/EffectBug";
import "antd/dist/antd.css";

import { Tabs } from "antd";

const { TabPane } = Tabs;

function App() {
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div className="App">
      <Tabs
        defaultActiveKey="1"
        animated={false}
        activeKey={activeKey}
        onChange={setActiveKey}
      >
        <TabPane tab="待复用组件" key="0"></TabPane>
        <TabPane tab="hoc" key="1"></TabPane>
        <TabPane tab="hooks" key="2"></TabPane>
        <TabPane tab="常见错误" key="3"></TabPane>
      </Tabs>
      {activeKey == 0 && (
        <div>
          <LogTimeComponent/>
        </div>
      )}
      {activeKey == 1 && (
        <div>
          <LogComponentHoc />
          <SetTimeComponentHoc />
        </div>
      )}
      {activeKey == 2 && (
        <div>
          <LogComponentHooks />
          <SetTimeComponentHooks />
        </div>
      )}
      {activeKey == 3 && <EffectBug />}
    </div>
  );
}

export default App;
