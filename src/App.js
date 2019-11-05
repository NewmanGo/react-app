import React from "react";
import "./App.css";
import LogTimeComponent from "./test/LogTimeComponent";
import LogComponent from "./test/HOOK/LogComponent";
import SetTimeComponent from "./test/HOOK/SetTimeComponent";
import EffectBug from "./test/BUG/EffectBug";

import { Tabs } from "antd";

const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="hooks" key="2">
          <div>
            <LogComponent />
            <SetTimeComponent />
          </div>
        </TabPane>
        <TabPane tab="常见错误" key="3">
          <EffectBug />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
