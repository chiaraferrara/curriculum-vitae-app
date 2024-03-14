import { Chip, Divider } from "@mui/material";
import { Description, Title } from "../styles/globals";

export default function Experience() {
  return (
    <>
      <div
        style={{
          justifyContent: "flex-start",
          textAlign: "start",
          backgroundColor:"#ffffff",
          padding: "10px",
        }}
      >
        <Chip label="Oct 2019 - Nov 2019"/>
        <h4>Front desk receptionist, guided tours, and surveillance.</h4>
        <strong>Le vie dei tesori</strong>
        <Description>
        Palazzo Bonocore, Palermo. <br/>
        I carried out activities until the interruption due to the COVID-19 pandemic. Subsequently, I focused on translating into English for tourists eager to visit the sites once activities resumed.
        </Description>
        <Divider />
      
      </div>
    </>
  );
}