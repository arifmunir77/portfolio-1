import HeroSection from "./heroSection";
import ServicesSection from "./servicesSection";
import { Footer, InQuirySection } from "components/common";
import WorkSection from "./workSection";

const HomeCom = () => {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <ServicesSection />
    </div>
  );
};

export default HomeCom;
