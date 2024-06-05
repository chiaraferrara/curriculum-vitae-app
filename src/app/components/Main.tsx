import styled from "@emotion/styled";
import Experience from "./Experience";
import Education from "./Education";
const Div = styled.div`
  width: 50%;
  background-color: #ffffff;
  color: black;
  padding-top: 120px;
  padding-inline: 2%;

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

export default function Main() {
  return (
    <Div>
      <Paragraph>
        <i>I am a passionate coding student</i>{" "}
        <b>who is building skills in both</b>
        <u>front-end</u>{" "}
        <b>
          <i>and</i>
        </b>{" "}
        <u>back-end development</u>.<i>Creative</i> <b>and</b> detail-oriented,{" "}
        I strive to create engaging digital experiences. With a fervent
        curiosity <b>and</b> <i>a commitment to continuous learning</i>,
        <i>I am constantly expanding my knowledge in both areas</i>.
        <i>I am excited to contribute to projects</i>{" "}
        <b>that blend aesthetics and functionality</b>.
      </Paragraph>

      <Card>
        <Experience />

        <Education />
      </Card>
    </Div>
  );
}
