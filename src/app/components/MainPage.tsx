import styled from "@emotion/styled";
import Experience from "./Experience";
import Education from "./Education";
import { useContext, useEffect } from "react";
import { Context } from "../providers/PageProvider";
import Projects from "./Project";
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
  border-radius: 20px 20px 0px 0px;
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
          <Paragraph style={{ margin: "10%" }}>
            <i>I am a passionate software developer</i>{" "}
            <b>who is building skills in both</b>
            <u> front-end</u>{" "}
            <b>
              <i>and</i>
            </b>{" "}
            <u>back-end development</u>.<i>Creative</i> <b>and</b>{" "}
            detail-oriented, I strive to create engaging digital experiences. I
            am committed to continuous learning and growth.
            <i>I am constantly expanding my knowledge in both areas</i>.
            <i>I am excited to contribute to projects</i>{" "}
            <b>that blend aesthetics and functionality</b>.
          </Paragraph>
        ) : null}

        <Card>
          {page === "PageOne" && (
            <>
              <Experience />

              <Education />
            </>
          )}
          {page === "PageTwo" ? <Projects /> : null}
        </Card>
      </Div>
    </>
  );
}
