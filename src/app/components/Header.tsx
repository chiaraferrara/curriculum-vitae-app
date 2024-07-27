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

  // background-image: url("https://i.ibb.co/yQwNMPp/White-Simple-Marketing-Agency-Twitter-Header-9.png");
  background-size: cover;
  background-position: center;
  background-position-y: 80%;
  background-position-x: 40%;
  background-repeat: no-repeat;
  background-color: #313234;
  color: #f5f6ee;
  padding-bottom: 50px;
  height: fit-content;
  backdrop-filter: blur(10px);

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
  // font-size: 3.5em;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const SubHeading = styled.div`
  margin-top: 0.5em;
`;

const Email = styled.div`
  font-size: 1.2em;
  margin-top: 0em;
  color: #e4e6e7;
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
            <FontAwesomeIcon icon={faLinkedin} color="#e4e6e7" />
          </IconLink>
          <IconLink
            href="https://github.com/chiaraferrara"
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} color="#e4e6e7" />
          </IconLink>
        </IconLinksContainer>

        <Navbar />
      </CardContainer>
    </>
  );
}

export default Header;
