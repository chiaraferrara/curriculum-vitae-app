import styled from "@emotion/styled";
import Experience from "./Experience";
import Education from "./Education";
import { useContext } from "react";
import { Context } from "../providers/PageProvider";
import Projects from "./Project";
import SkillProgress from "./Skills";
import Contact from "./Contact";
import DownloadCVButton from "./DownloadCVButton";

const Div = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-2xl) var(--spacing-md);

  @media (max-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-md);
  }
`;

const IntroSection = styled.section`
  max-width: 800px;
  margin: var(--spacing-2xl) auto;
  padding: var(--spacing-xl);
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-text);
  margin: 0;
  padding: 0;

  a {
    color: var(--color-accent);
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-accent-hover);
    }
  }
`;

const CVDownloadSection = styled.div`
  margin-top: var(--spacing-xl);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  background-color: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-lg) 0;
  width: 100%;
  min-height: 400px;
`;

export default function MainPage() {
  const { page } = useContext(Context);
  
  return (
    <>
      <Div>
        {page === "PageOne" && (
          <IntroSection>
            <Paragraph>
              I&apos;m a  Front End Developer who is building up skills in
              both front end and back end development. I have a passion for
              learning new technologies and I am always looking for new
              opportunities to learn. I love problem solving and I am always
              looking for new challenges. I am currently working as a 
              Front End Developer at{" "}
              <a href="https://www.topnetwork.it/" target="_blank" rel="noopener noreferrer">
                TopNetwork S.p.A.
              </a>
            </Paragraph>
            <CVDownloadSection>
              <DownloadCVButton />
            </CVDownloadSection>
          </IntroSection>
        )}

        <Card>
          {page === "PageOne" && (
            <>
              <Experience />
              <Education />
            </>
          )}
          {page === "PageTwo" && <Projects />}
          {page === "PageFour" && <SkillProgress />}
          {page === "PageFive" && <Contact />}
        </Card>
      </Div>
    </>
  );
}
