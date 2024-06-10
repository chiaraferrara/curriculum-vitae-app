import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import avatar from "../assets/avatar.png";
import styles from "../page.module.css"; // Consider removing if not used
import { TextAnimate } from "./TextAnimate"; // Check if this is used
import { MainHeading } from "./styles/style"; // Ensure consistency in importing styles
import background from "../assets/bg.png";
import Navbar from "./Navbar";
import { Text } from "@chakra-ui/react";

// Styled components for improved readability and maintainability
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1d1c1a;
  color: white;
  height: 400px;
  backdrop-filter: blur(10px); /* Frosted glass effect */

  /* Responsive design */
  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    padding-top: 10%;
    height: 400px;
  }
`;

const SubHeading = styled.div`
  font-size: 1.5em;
  margin-top: 0.5em;
`;

const Email = styled.div`
  font-size: 1.2em;
  margin-top: 0.5em;
  color: #a2a9b7; /* Consider using a variable or constant */
`;

const IconLinksContainer = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 1em;
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.5em;
  &:hover {
    color: #a2a9b7;
  }
`;

// Header component
function Header() {
  return (
    <>
      <CardContainer>
        <Text style={{ fontSize: "3em", padding: "0" }}>Chiara Ferrara</Text>
        <SubHeading>Junior Front End Developer</SubHeading>
        <Email>ferrarachiara4@gmail.com</Email>
        {/* Social media icons */}
        <IconLinksContainer>
          <IconLink
            href="https://www.linkedin.com/in/chiara-ferrara-41273a265/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink
            href="https://github.com/chiaraferrara/"
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
        </IconLinksContainer>
        {/* Navigation bar */}
        <Navbar />
      </CardContainer>
    </>
  );
}

export default Header;
