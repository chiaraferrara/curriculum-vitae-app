"use client";
import styled from "@emotion/styled";
import { educationData } from "../utils";
import Chip from "./Chip";
import {
  Container,
  Degree,
  MainHeading,
  SchoolContainer,
  SchoolHeading,
  Skills,
  YearHeading,
} from "../styles";

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
