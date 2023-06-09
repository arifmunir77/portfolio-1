import { Tabs } from "antd";
import { TabsWrapper } from "./element";
import WorkTabContent from "./workTabContent";

const items = [
  {
    key: "1",
    label: `ALL`,
    children: <WorkTabContent />,
  },
  {
    key: "2",
    label: `UI/UX Design`,
    children: <WorkTabContent />,
  },
  {
    key: "3",
    label: `Frontend`,
    children: <WorkTabContent />,
  },
  {
    key: "4",
    label: `Full Stack`,
    children: <WorkTabContent />,
  },
];

function Worktabs() {
  return (
    <TabsWrapper>
      <Tabs defaultActiveKey="1" items={items} centered />
    </TabsWrapper>
  );
}

export default Worktabs;
