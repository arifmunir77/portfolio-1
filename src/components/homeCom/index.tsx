import ContacUs from "./contactUs";
import HeroSection from "./heroSection";
import ServicesSection from "./servicesSection";
import { Footer } from "components/common";
import WorkSection from "./workSection";

const HomeCom = () => {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <ContacUs />
      <Footer />
    </div>
  );
};

export default HomeCom;
