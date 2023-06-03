import { MainCol, MainContainer, MainRow } from "components/common";
import {
  FlexBorderDiv,
  FlexDiv,
  IconContainer,
  IconHolder,
  IconText,
  MainHeading,
  SkillsAndToolsContainer,
  SubText,
} from "./element";
import {
  AiFillDatabase,
  AiFillGithub,
  AiFillHtml5,
  AiFillSetting,
} from "react-icons/ai";
import {
  FaCss3Alt,
  FaFigma,
  FaPhoenixFramework,
  FaReact,
} from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoServerOutline,
} from "react-icons/io5";
import { BsGit } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { vscode } from "assets";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

const skillsData = [
  {
    id: 1,
    icon: <AiFillHtml5 className="icon" />,
    text: "HTML 5",
  },
  {
    id: 11,
    icon: <FaFigma className="icon" />,
    text: "Figma",
  },
  {
    id: 2,
    icon: <FaCss3Alt className="icon" />,
    text: "CSS 3",
  },
  {
    id: 3,
    icon: <FaPhoenixFramework className="icon" />,
    text: "CSS Frameworks",
  },

  {
    id: 10,
    icon: <MdDevices className="icon" />,
    text: "Responsive Design",
  },
  {
    id: 4,
    icon: <IoLogoJavascript className="icon" />,
    text: "JavaScript",
  },
  {
    id: 5,
    icon: <FaReact className="icon" />,
    text: "React JS",
  },
  {
    id: 8,
    icon: <AiFillSetting className="icon" />,
    text: "RESTful APIs",
  },
  {
    id: 6,
    icon: <AiFillDatabase className="icon" />,
    text: "Mongo DB",
  },
  {
    id: 9,
    icon: <IoServerOutline className="icon" />,
    text: "Express JS",
  },
  {
    id: 11,
    icon: <IoLogoNodejs className="icon" />,
    text: "Node JS",
  },
  {
    id: 7,
    icon: <AiFillGithub className="icon" />,
    text: "Github",
  },
];

function SkillsAndTools() {
  return (
    <SkillsAndToolsContainer>
      <MainContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <FlexDiv>
            <FlexBorderDiv />
            <MainHeading>SKILLS & TOOLS</MainHeading>
          </FlexDiv>

          <SubText>
            The skills, tools and technologies I use to bring your products to
            life
          </SubText>
        </motion.div>
        <IconContainer>
          <MainRow>
            {skillsData.map((item, index) => (
              <MainCol sm={6} lg={3}>
                <motion.div
                  className="main-col"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  drag
                >
                  <IconHolder>{item.icon}</IconHolder>
                  <IconText>{item.text}</IconText>
                </motion.div>
              </MainCol>
            ))}
          </MainRow>
        </IconContainer>
      </MainContainer>
    </SkillsAndToolsContainer>
  );
}

export default SkillsAndTools;
