import React from "react";
import {
  Column,
  Description,
  FlexColumn,
  FlexRow,
  Img,
  Paragraph,
  Row,
  Title,
} from "../styles/globals";
import { Chip } from "@mui/material";
import Divider from "@mui/material/Divider";

const interests = ["front end development", "graphic design", "art", "traveling", "programming"];

export default function Infos() {
  return (
    <>
    <Column style={{
      alignItems: "flex-end",
      alignSelf: "baseline", 
      flexDirection: "column",
      justifyContent: "flex-start"   }}>
      <Row style={{
        alignItems: "flex-end",
        alignSelf: "flex-end", 
        flexDirection: "row-reverse",
        justifyContent: "center"   }}>
        <img
          style={{
            borderRadius: "100%",
            width: "80px",
            padding: "2%",
          }}
          src="https://i.ibb.co/zGwJLk3/image.png"
        />{" "}
        <Paragraph>
          <br />
          <Chip label="Junior Front End Developer"></Chip>
          <br />
          <br />
          <Divider />
          <Description style={{ width: "360px" }}>
            I am a passionate coding student from Italy who is building skills in both
            front-end and back-end development. Creative and detail-oriented, I
            strive to create engaging digital experiences. With a fervent
            curiosity and a commitment to continuous learning, I am constantly
            expanding my knowledge in both areas. I am excited to contribute to
            projects that blend aesthetics and functionality.
          </Description>
          <Divider />
        </Paragraph>
        
      </Row><Description style={{ padding: "4px" ,  alignSelf: "center", textAlign: "center", width: '80%' }}>
          <Title style={{textAlign: 'center'}}>My interests</Title>

          {interests.map((interest) => (
            <Chip style={{margin: "2px"}} label={interest} />
          
          ))}
        </Description></Column>
    </>
  );
}
