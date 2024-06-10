import { useContext, useEffect, useState } from "react";
import { Context } from "../providers/PageProvider";
import styled from "@emotion/styled";
import avatar from "../assets/avatar.png";
import { Text } from "@chakra-ui/react";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a2a9b7;
  padding: 10px;
  color: white;
  border-radius: 2em;
  position: absolute;
  bottom: -50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  border: none;
  color: white;
  cursor: pointer;
  margin-inline: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AvatarStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;

  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  width: 20px;
  background-color: white;
  transition: all 0.3s ease;
  margin-top: 10px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
  }

  &:before {
    top: -8px;
  }

  &:after {
    top: 8px;
  }

  @media (max-width: 768px) {
    display: block; /* Displayed on responsive screens */
  }
`;

const MenuContainer = styled.div<{ showMenu: boolean }>`
  background-color: ${(props) => (props.showMenu ? "#a2a9b7" : "transparent")};
  position: fixed;
  display: none;
  height: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
  }
  @media (max-width: 480px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
  }
`;

const Menu = styled.div<{ showMenu: boolean }>`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  align-items: center;
  position: absolute;
  color: black;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
  }

  @media (max-width: 480px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
  }
`;

const Btn = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  color: black;
  font-weight: 600;
  margin-inline: 10px;
`;
export default function Navbar() {
  const { setPage, page } = useContext(Context);
  const [rotate, setRotate] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    console.log(page);
    console.log(showMenu);
  }, [page, showMenu]);

  return (
    <>
      <NavbarContainer>
        {" "}
        <div
          onClick={() => setShowMenu(!showMenu)}
          style={{ cursor: "pointer" }}
        >
          <HamburgerIcon />
        </div>
        <Button
          onPointerUp={() => console.log("Pointer released")}
          onClick={() => setPage("PageOne")}
        >
          Home
        </Button>
        <Button onClick={() => setPage("PageTwo")}>Projects</Button>
        <AvatarStyle src={avatar.src} />
        <Button onClick={() => setPage("PageFour")}>Certificates</Button>
        <Button onClick={() => setPage("PageFive")}>Contact</Button>
        {/* Hamburger menu icon */}
        {/* Dropdown menu */}
      </NavbarContainer>

      <MenuContainer showMenu={showMenu}>
        <Menu showMenu={showMenu}>
          <Btn onClick={() => setPage("PageOne")}>Home</Btn>
          <Btn onClick={() => setPage("PageTwo")}>Projects</Btn>
          <Btn onClick={() => setPage("PageFour")}>Certificates</Btn>
          <Btn onClick={() => setPage("PageFive")}>Contact</Btn>
        </Menu>
      </MenuContainer>
    </>
  );
}
