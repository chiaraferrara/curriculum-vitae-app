"use client";
import styled from "@emotion/styled";
import { educationData } from "../utils";
import Chip from "./Chip";

const Container = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
`;

const MainHeading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const SchoolContainer = styled.div`
  background: #ffffff;
  color: #000;
  padding: 20px;
  border-radius: 2em;
  margin-bottom: 20px;
  border: 2px solid #000000;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #6394b7;
    color: #ffffff;
  }
`;

const SchoolHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const YearHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Degree = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0;
`;

const Skills = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export default function Education() {
  return (
    <Container>
      <MainHeading>Education</MainHeading>
      {educationData.schools.map((school, index) => (
        <SchoolContainer key={index}>
          <Chip label={index + 1}></Chip>
          <YearHeading>{school.years}</YearHeading>
          <SchoolHeading>{school.name}</SchoolHeading>
          <Degree>{school.degree}</Degree>
          <Skills>{school.skills}</Skills>
        </SchoolContainer>
      ))}
    </Container>
  );
}
