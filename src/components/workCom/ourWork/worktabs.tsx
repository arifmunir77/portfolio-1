import { Tabs } from "antd";
import { TabsWrapper } from "./element";
import WorkTabContent from "./workTabContent";
import { useState } from "react";
import { NoDataCom } from "components";

const items = [
  {
    key: "1",
    label: `ALL`,
    category: null, // No specific category filter for "ALL" tab
  },
  {
    key: "2",
    label: `UI/UX Design`,
    category: "ui/ux",
  },
  {
    key: "3",
    label: `Frontend`,
    category: "frontend",
  },
  {
    key: "4",
    label: `Full Stack`,
    category: "full stack",
  },
];

const data = [
  {
    title: "UI/Ux",
    category: "ui/ux",
    image: "project1.jpg",
    description: "UI/UX description",
  },
  {
    title: "UI/Ux 2",
    category: "ui/ux",
    image: "project1.jpg",
    description: "UI/UX description",
  },
  {
    title: "Frontend",
    category: "frontend",
    image: "project2.jpg",
    description: "frontend description",
  },
];

function Worktabs() {
  const [activeTab, setActiveTab] = useState(items[0].key); // Set the default active tab

  const getCategoryByKey = (key) => {
    const item = items.find((item) => item.key === key);
    return item ? item.category : null;
  };

  // Handle tab change event
  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <TabsWrapper>
      <Tabs
        defaultActiveKey={items[0].key}
        activeKey={activeTab}
        onChange={handleTabChange}
        centered
      >
        {items?.map((item) => {
          const tabData =
            item.key === items[0].key
              ? data // For "ALL" tab, show all data
              : data.filter(
                  (project) => project.category === getCategoryByKey(item.key)
                );

          return (
            <Tabs.TabPane key={item.key} tab={item.label}>
              {tabData.length > 0 ? (
                <WorkTabContent filteredData={tabData} />
              ) : (
                <NoDataCom />
              )}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </TabsWrapper>
  );
}

export default Worktabs;
