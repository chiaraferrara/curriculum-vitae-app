import React from "react";
import { Column, Description, FlexColumn, FlexRow, Img, Paragraph, Title } from "../styles/globals";
import { Chip } from "@mui/material";
import Divider from '@mui/material/Divider';

export default function Infos() {
  return (
    
        <>
      <Column><img style={
        {
        borderRadius: "100%",
      width:"130px"}
      
      } src="https://i.ibb.co/zGwJLk3/image.png"/> <Paragraph>
        <br/>
        <Chip label="Junior Front End Developer"></Chip>
        <br/>
        <br/>
        <Divider/>
        <Description style={{width:"200px"}}>I am a passionate coding student who is building skills in both front-end and back-end development. 
          Creative and detail-oriented, I strive to create engaging digital experiences. 
          With a fervent curiosity and a commitment to continuous learning, 
          I am constantly expanding my knowledge in both areas. 
          I am excited to contribute to projects that blend aesthetics and functionality.</Description>
          <Divider/>
        </Paragraph>
        <Description style={{width:"200px"}}>
          <Title>My interests</Title>
          <Chip label="Front End Development"/>
          <Chip label="Graphic Design"/>
          <Chip label="Art"/>
          <Chip label="Traveling"/>
          <br/>
        </Description>
        </Column>
      </>
  );
}