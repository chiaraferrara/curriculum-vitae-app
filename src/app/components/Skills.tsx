import React from "react";
import styled from "@emotion/styled";
import { Bar, Skill, SkillBar, SkillP, Wrapper, MainHeading } from "../styles";

const skills = [
  { name: "HTML5", percentage: "95%" },
  { name: "CSS", percentage: "95%" },
  { name: "REACT", percentage: "95%" },
  { name: "NEXT.JS", percentage: "85%" },
  { name: "TYPESCRIPT", percentage: "85%" },
  { name: "SQL", percentage: "85%" },
  {
    name: "POSTGRESQL",
    percentage: "85%",
    certificate: "/certificates/postgresql.pdf",
  },
  {
    name: "JAVASCRIPT",
    percentage: "85%",
    certificate: "/certificates/js.pdf",
  },
  { name: "ANGULAR", percentage: "75%" },
  {
    name: "DOCKER",
    percentage: "70%",
    certificate: "/certificates/docker.pdf",
  },
  { name: "MONGODB", percentage: "65%" },
  { name: "PHP", percentage: "60%" },
  { name: "JAVA", percentage: "55%" },
  { name: "PYTHON", percentage: "50%" },
];

const Disclaimer = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CertificateLink = styled.a`
  margin-left: var(--spacing-sm);
  font-size: 0.75rem;
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-accent-hover);
  }
`;

const SkillProgress = () => (
  <Wrapper>
    <MainHeading>Skills & Certificates</MainHeading>
    <Disclaimer>
      Disclaimer: the percentages show my comfort level and not my level of
      knowledge. Always developing my skills.
    </Disclaimer>
    {skills.map((skill, index) => (
      <Skill key={index}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "var(--spacing-xs)" }}>
          <SkillP>{skill.name}</SkillP>
          {skill.certificate && (
            <CertificateLink
              href={skill.certificate}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate
            </CertificateLink>
          )}
        </div>
        <SkillBar>
          <Bar
            style={{
              width: skill.percentage,
            }}
          />
          <span>{skill.percentage}</span>
        </SkillBar>
      </Skill>
    ))}
  </Wrapper>
);

export default SkillProgress;
