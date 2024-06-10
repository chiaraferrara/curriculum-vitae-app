import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { experienceData } from "../utils";
import { MainHeading } from "./styles/style";

const Container = styled.div`
  .example-title {
    text-align: center;
    margin-bottom: 60px;
    padding: 3em 0;
    border-bottom: 1px solid #e4eaec;
    p {
      margin: 0 auto;
      font-size: 16px;
      max-width: 400px;
    }
  }
`;

const TimelineList = styled.ul`
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TimelineItem = styled.li`
  padding-left: 40px;
  position: relative;
`;

const TimelineInfo = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
  white-space: nowrap;
`;

const TimelineMarker = styled.div<{ primaryColor?: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
  &:before {
    background: ${(props) => props.primaryColor || "#a2a9b7"};
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: -2px;
    width: 15px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  &:after {
    content: "";
    width: 3px;
    background: #ccd5db;
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 6px;
  }
  .timeline-item:last-child & {
    &:after {
      content: none;
    }
  }
`;

const TimelineContent = styled.div`
  padding-bottom: 40px;
  p:last-child {
    margin-bottom: 0;
  }
`;

// Timeline component
const Timeline = ({ items }: any) => (
  <Container>
    <MainHeading>Experience</MainHeading>
    <TimelineList>
      {experienceData.jobs.map((item: any, index: number) => (
        <TimelineItem key={index}>
          <TimelineInfo>
            <span>{item.years}</span>
          </TimelineInfo>
          <TimelineMarker />
          <TimelineContent>
            <h3>
              {item.title} at {item.company}
            </h3>
            <p>{item.description}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineList>
  </Container>
);

export default Timeline;
