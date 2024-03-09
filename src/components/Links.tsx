import { Chip, Divider, Link } from "@mui/material";
import GithubLogo from "../assets/github.svg";
import LinkedinLogo from "../assets/linkedin.svg";
export default function Links() {

    const redirectToEmail = () => {
        window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=ferrarachiara4@gmail.com&su=Your%20subject%20here&body=+"
    }
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginInline: "auto",
          justifyContent: "flex-start",
          padding: "10px",
        }}
      >
        Links: &nbsp;
        <Link
          color="inherit"
          underline="none"
          href="https://www.linkedin.com/in/chiara-ferrara-41273a265/"
        >
          <img
            style={{ width: "25px" }}
            src={LinkedinLogo}
            alt="Linkedin Logo"
          />
        </Link>
        <Link color="inherit" underline="none" href="">
          <img style={{ width: "25px" }} src={GithubLogo} alt="Github Logo" />{" "}
        </Link>
        <Chip onClick={() =>{
            redirectToEmail()
        }} label="ferrarachiara4@gmail.com" />
      </div><br/><br/>
    </>
  );
}
