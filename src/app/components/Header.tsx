import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./Navbar";
import { Text } from "@chakra-ui/react";
import styles from "../page.module.css";

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 237, 237, 1) 50%,
    rgba(237, 237, 237, 1) 99%,
    rgba(224, 224, 224, 1) 100%,
    rgba(208, 208, 208, 1) 100%
  );
  color: #000000;
  height: 400px;
  backdrop-filter: blur(10px);

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
  color: #222222;
`;

const IconLinksContainer = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 1em;
`;

const IconLink = styled.a`
  color: ##000000;
  font-size: 1.5em;
  &:hover {
    color: #313233;
  }
`;

// Header component
function Header() {
  return (
    <>
      <CardContainer>
        <h1 className={styles.title}>Chiara Ferrara</h1>
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
