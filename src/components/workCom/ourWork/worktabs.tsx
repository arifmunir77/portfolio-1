import { Tabs } from "antd";
import { TabsWrapper } from "./element";
import WorkTabContent from "./workTabContent";
import { useState } from "react";

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
  // Your array of project data
  {
    title: "UI/Ux",
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
  {
    title: "Full stack",
    category: "full stack",
    image: "project2.jpg",
    description: "full stack description",
  },
  // Add more project objects as needed
];

function Worktabs() {
  const [activeTab, setActiveTab] = useState(items[0].key); // Set the default active tab

  const getCategoryByKey = (key) => {
    const item = items.find((item) => item.key === key);
    return item ? item.category : null;
  };

  // Filter the data based on the active tab category
  const filteredData =
    activeTab === items[0].key // If "ALL" tab is active, show all data
      ? data
      : data.filter(
          (project) => project.category === getCategoryByKey(activeTab)
        );

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
        {items.map((item) => (
          <Tabs.TabPane key={item.key} tab={item.label}>
            <WorkTabContent filteredData={filteredData} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </TabsWrapper>
  );
}

export default Worktabs;
