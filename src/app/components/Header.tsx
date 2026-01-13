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
  background-color: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-2xl) var(--spacing-md) var(--spacing-xl);
  position: relative;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-md) var(--spacing-lg);
  }
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-family: var(--font-outfit), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
`;

const SubHeading = styled.div`
  margin-top: var(--spacing-xs);
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--color-text-light);
  letter-spacing: 0.01em;
`;

const Email = styled.a`
  font-size: 0.9375rem;
  margin-top: var(--spacing-md);
  color: var(--color-text-light);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-accent-hover);
  }
`;

const IconLinksContainer = styled.div`
  margin-top: var(--spacing-md);
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
`;

const IconLink = styled.a`
  color: var(--color-text-light);
  font-size: 1.25rem;
  transition: color var(--transition-fast), transform var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--color-accent-hover);
    transform: translateY(-2px);
  }
`;

const InfoContainer = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin-top: var(--spacing-xs);
`;

function Header() {
  return (
    <>
      <CardContainer>
        <Title className={styles.title}>Chiara Ferrara</Title>
        <SubHeading> Front End Developer</SubHeading>
        <Email href="mailto:ferrarachiara4@gmail.com">ferrarachiara4@gmail.com</Email>
        <InfoContainer>
          Palermo, Italy
        </InfoContainer>
        <IconLinksContainer>
          <IconLink
            href="https://www.linkedin.com/in/chiara-ferrara-41273a265/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink
            href="https://github.com/chiaraferrara"
            target="_blank"
            rel="noopener noreferrer"
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
