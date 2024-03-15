import { Description } from "@mui/icons-material";
import { Column, Row, Title, Tr, Table } from "../styles/globals";
import { Chip, Pagination, Stack, Typography } from "@mui/material";
import React from "react";

export default function Education() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };
  return (
    <>
    
      <Stack style={{backgroundColor: "white"}}spacing={2}>
        {page === 1 && (
            <div style={{
                justifyContent:"flex-start",
                textAlign:"start",
                backgroundColor:"#ffffff",
                width: "40vh",
            }}>
              
                <Chip label="2022 – 2024"/>
              <Title>Web and Mobile Development ITS Steve Jobs Academy</Title>
              <div>
              <p>
                Qualification: EQF level 5<br/>
              </p>
              <Table>
            <Tr>
                <th>Frameworks</th>
                <th>Programming Languages</th>
            </Tr>
            <tr>
                <td>React</td>
                <td>JavaScript</td>
            </tr>
            <tr>
                <td>Angular</td>
                <td>TypeScript</td>
            </tr>
            <tr>
                <td>Next.js</td>
                <td>Java</td>
            </tr>
            <tr>
                <td>Laravel</td>
                <td>PHP</td>
            </tr>
            <tr>
                <td>React Native</td>
                <td>C</td>
            </tr>
            <tr>
                <td>Flask</td>
                <td>Python</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </Table>
              </div>
              </div>
        )}
        
        {page === 2 && (
            <>
             <div style={{
                justifyContent:"flex-start",
                textAlign:"start",
                width: "40vh",
            }}><Chip label="2018 – 2022"/>
                <Title>Political Science & International Relations</Title>
                <div>
                <Table>
            <Tr>
                <th>Soft Skills</th>
                <th>Knowledge Areas</th>
            </Tr>
            <tr>
                <td>Critical Thinking</td>
                <td>Political Analysis</td>
            </tr>
            <tr>
                <td>Writing and Communication</td>
                <td>International Relations Theory</td>
            </tr>
            <tr>
                <td>Public Speaking</td>
                <td>Comparative Jurisprudence</td>
            </tr>
            <tr>
                <td>Cultural Understanding</td>
                <td>Research Methods</td>
            </tr>
            <tr>
                <td>Time Management</td>
                <td>International Law</td>
            </tr>
            <tr>
                <td>Adaptability</td>
                <td>Global Governance</td>
            </tr>
            <tr>
                <td>Empathy</td>
                <td>Economic Analysis</td>
            </tr>
        </Table>
        </div>
</div>
            </>
        )}


        <div style={{ display: "flex", justifyContent: "center"}}>            
      <Pagination count={2} page={page} variant="outlined" color="secondary"  onChange={handleChange}/></div>
      </Stack>
    </>


  );
}
