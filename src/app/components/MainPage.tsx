import styled from "@emotion/styled";
import Experience from "./Experience";
import Education from "./Education";
import { useContext, useEffect } from "react";
import { Context } from "../providers/PageProvider";
import Projects from "./Project";
import SkillProgress from "./Skills";
import QRCode from "../assets/CV.png";
import Arrow from "../assets/arrow.png";
import Contact from "./Contact";
const Div = styled.div`
  width: 60%;
  background-color: #ffffff;
  color: black;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  padding-inline: 20px;
  margin: 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: black;
  padding: 8%;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export default function MainPage() {
  const { setPage, page } = useContext(Context);
  useEffect(() => {}, [page]);
  return (
    <>
      <Div>
        {page === "PageOne" ? (
          <>
            <Paragraph style={{ margin: "10%", marginTop: "15%" }}>
              I'm a Junior Front End Developer who is building up skills in both
              front end and back end developement. I have a passion for learning
              new technologies and I am always looking for new opportunities to
              learn. I love problem solving and I am always looking for new
              challenges. I am currently working as a Junior Front End Developer
              at <a href="https://www.topnetwork.it/">TopNetwork S.p.A.</a>
            </Paragraph>
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <img
                style={{ width: "120px", height: "120px" }}
                src={QRCode.src}
                alt="QR Code"
              />{" "}
              <img src={Arrow.src} alt="Arrow" />{" "}
            </div>
          </>
        ) : null}

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
