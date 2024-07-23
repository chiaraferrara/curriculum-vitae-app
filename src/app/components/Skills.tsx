/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import WOW from "react-wow";
import { Text } from "@chakra-ui/react";
import { Bar, Skill, SkillBar, SkillP, Wrapper } from "../styles";

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

const SkillProgress = () => (
  <>
    <Wrapper>
      <br />
      <h1 style={{ fontSize: "2em" }}>Skills & Certificates</h1>

      <p>
        Disclaimer: the percentages show my comfort level and not my level of
        knowledge. <br />
        Always developing my skills.{" "}
      </p>
      <br />
      {skills.map((skill, index) => (
        <Skill key={index}>
          <SkillP>{skill.name}</SkillP>
          {skill.certificate && (
            <a
              href={skill.certificate}
              download
              css={css`
                margin-left: 10px;
                font-size: 14px;
                color: #c08f89;
              `}
            >
              Download Certificate
            </a>
          )}
          <WOW animation="slideInLeft">
            <SkillBar>
              <Bar
                css={css`
                  width: ${skill.percentage};
                `}
              />
              <span>{skill.percentage}</span>
            </SkillBar>
          </WOW>
        </Skill>
      ))}
    </Wrapper>
  </>
);

export default SkillProgress;
