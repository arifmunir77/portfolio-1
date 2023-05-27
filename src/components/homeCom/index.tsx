import ContacUs from "./contactUs";
import HeroSection from "./heroSection";
import ServicesSection from "./servicesSection";
import { Footer } from "components/common";

const HomeCom = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ContacUs />
      <Footer />
    </div>
  );
};

export default HomeCom;
