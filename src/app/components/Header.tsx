import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
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
  padding-bottom: 50px;
  height: fit-content;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  /* Responsive design */
  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    padding-top: 10%;
    height: 400px;
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin: 0;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

const SubHeading = styled.div`
  font-size: 1.5em;
  margin-top: 0.5em;
  color: #555;
`;

const Email = styled.div`
  font-size: 1.2em;
  margin-top: 0.5em;
  color: #222;
`;

const IconLinksContainer = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 1em;
`;

const IconLink = styled.a`
  color: #000;
  font-size: 1.5em;
  &:hover {
    color: #313233;
  }
`;

const InfoContainer = styled.div`
  text-align: center;
  margin-top: 1em;
`;

const AboutMe = styled.p`
  font-size: 1em;
  margin-top: 1em;
  color: #666;
  line-height: 1.5;
  max-width: 600px;
`;

function Header() {
  return (
    <>
      <CardContainer>
        <Title className={styles.title}>Chiara Ferrara</Title>
        <SubHeading>Junior Front End Developer</SubHeading>
        <Email>ferrarachiara4@gmail.com</Email>
        <InfoContainer>
          <div>Palermo, Italy</div>
        </InfoContainer>
        <IconLinksContainer>
          <IconLink
            href="https://www.linkedin.com/in/chiara-ferrara-41273a265/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink
            href="https://github.com/chiaraferrara"
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
        </IconLinksContainer>

        <Navbar />
      </CardContainer>
    </>
  );
}

export default Header;
