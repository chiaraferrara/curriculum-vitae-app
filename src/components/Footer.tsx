import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import FirebaseLogo from "../assets/firebase.png";
import ReactLogo from "../assets/react.png";
import TypescriptLogo from "../assets/typescript.png";
import { Button, ButtonGroup, ButtonGroupButtonContext, ButtonGroupContext, Divider } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Chiara Ferrara
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "40vh",
          backgroundColor: "#887a96",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
       
          <Typography variant="h2" component="h1" gutterBottom>
         
          </Typography>

          <Divider />
          <Typography variant="h2" component="h1" gutterBottom>
            Thanks for the visit.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom>
            {"Technologies used in this project"}
          </Typography>
          <img src={FirebaseLogo} alt="Firebase Logo" />
          <img src={ReactLogo} alt="React Logo" />
          <img src={TypescriptLogo} alt="Typescript Logo" />
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
