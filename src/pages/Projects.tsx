import { ProjectImg, ProjectsDiv, Row, Title } from "../styles/globals";
import GifVinili from "../assets/vinili.gif";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from "@mui/material";



export default function Projects() {
  return (
    <>

  <ProjectsDiv>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="I vinili di Maurizio"
        height="140"
        image={GifVinili}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          I Vinili Di Maurizio
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Virtual Vinyl Collection Manager is a user-friendly CRUD web application designed for organizing vinyl records. With features including user registration, login, adding, editing, and deleting records, along with a dashboard for user management, it offers a seamless experience for vinyl enthusiasts to curate their collections effortlessly.
        <Divider/>
        <Chip label="Angular"/> <Chip label="Firebase"/> <Chip label="Typescript"/> 
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() =>{
          window.open("https://github.com/chiaraferrara/I_Vinili_Di_Maurizio")
        }}size="small">Repository</Button>
      </CardActions>
    </Card>
    </ProjectsDiv>

    
    </>
  );
}