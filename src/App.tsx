import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import GlobalStyle from "globalStyles";
import { useEffect } from "react";
import { HomeCom, WorkCom, ServicesCom, AboutUsCom } from "components";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Footer, InQuirySection } from "components/common";

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <motion.div
        className="custom-cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeCom />} />
        <Route path="/work" element={<WorkCom />} />
        <Route path="/services" element={<ServicesCom />} />
        <Route path="/about-us" element={<AboutUsCom />} />
      </Routes>
      <InQuirySection />
      <Footer />
    </div>
  );
}

export default App;
