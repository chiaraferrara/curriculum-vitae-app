import { Chip, Divider } from "@mui/material";
import { Description, Title } from "../styles/globals";

export default function Certificates() {
  return (
    <>
      <div
        style={{
          justifyContent: "flex-start",
          textAlign: "start",
          backgroundColor:"#ffffff",
          padding: "10px",
          width: "40vh",
        }}
      >
        <h4>Boolean Data Week November 2023</h4>
        <Description>
          Boolean Data Week is a week of training on data analysis, data
          visualization and data science using Python, Pandas and Tableau.
        </Description>
        <Divider />
        <h4>
          A.I.F.E.S. - Italian Association of Trainers and Experts in Safety
          <br />
        </h4>
        <Description>
          Worker training general part and specific part - low risk (e-learning
          mode)
        </Description>
      </div>
    </>
  );
}
