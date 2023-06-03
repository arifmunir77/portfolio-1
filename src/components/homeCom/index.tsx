import HeroSection from "./heroSection";
import ServicesSection from "./servicesSection";
import { Footer, InQuirySection } from "components/common";
import WorkSection from "./workSection";
import WorkingProcess from "./workingProcess";
import SkillsAndTools from "./skillsAndTools";

const HomeCom = () => {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <WorkingProcess />
      <SkillsAndTools />
    </div>
  );
};

export default HomeCom;
