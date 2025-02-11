// 基础导入
import React from 'react';
import { useState } from 'react';
// 类型定义
interface TabsProps {
  // 组件props定义
  tabs: string[];
  currentTab: number;
  setCurrentTab: (index: number) => void;
}

// 组件主体
const Tabs: React.FC<TabsProps> = () => {
  // 组件逻辑
  let [currentTab] = useState(0);

  return (
    <div className="tabs-container">{currentTab}
    </div>
  );
};

// 模块导出
export default Tabs;
