import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { experienceData } from "../utils";
import { MainHeading } from "./styles/style";
import {
  Container,
  TimelineContent,
  TimelineInfo,
  TimelineItem,
  TimelineList,
  TimelineMarker,
} from "../styles";

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
