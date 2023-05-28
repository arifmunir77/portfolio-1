import {
  OurWorkHeading,
  OurWorkText,
  OurWorkWrapper,
  TabWrapper,
} from "./element";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { MainContainer } from "components/common";

const OurWork = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `All`,
      children: "",
    },
    {
      key: "2",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <OurWorkWrapper>
      <MainContainer>
        <div className="ourContainer">
          <OurWorkHeading>Our Works</OurWorkHeading>
          <OurWorkText>SEE ALL OUR WORKS</OurWorkText>

          <TabWrapper>
            <Tabs defaultActiveKey="1" centered items={items} />
          </TabWrapper>
        </div>
      </MainContainer>
    </OurWorkWrapper>
  );
};

export default OurWork;
