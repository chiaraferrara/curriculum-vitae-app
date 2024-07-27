import { useContext, useState } from "react";
import { Context } from "../providers/PageProvider";
import styled from "@emotion/styled";
import avatar from "../assets/avatar.jpeg";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 2em;
  position: absolute;
  bottom: -25px;
  transition: all 0.5s ease-in-out;
  box-shadow: 1px 3px 3px 0px rgb(0 0 0 / 18%);
  transform: scale(1);

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Button = styled.button<{ clicked: boolean }>`
  background-color: "transparent";
  text-transform: uppercase;
  border: none;
  color: #313234;
  cursor: pointer;
  margin-inline: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  transform: ${(props) => (props.clicked ? "scale(1.1)" : "scale(1)")};

  @media (max-width: 768px) {
    display: none;
  }
`;

const AvatarStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10000;
  }
`;

const HamburgerLine = styled.div`
  width: 20px;
  height: 1px;
  background-color: #313234;
  margin: 3px 0;
  transition: all 0.3s ease;

  z-index: 10000;
`;

const MenuContainer = styled.div<{ showMenu: boolean }>`
  background-color: #313233;
  position: fixed;
  height: 100%;
  top: -10px;
  left: 0;
  right: 0;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.showMenu ? "1" : "0")};
  transform: ${(props) =>
    props.showMenu ? "translateY(0)" : "translateY(-100%)"};
  transition: opacity 0.9s ease, transform 0.9s ease;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Menu = styled.div<{ showMenu: boolean }>`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  color: #f2e1eb;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    display: flex;
  }
`;

const Btn = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-weight: 600;
  margin-inline: 10px;
  margin: 10px 0;
`;

export default function Navbar() {
  const [clickedButton, setClickedButton] = useState("");
  const { setPage } = useContext(Context);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (pageName: string) => {
    setClickedButton(pageName);
    setPage(pageName);
    setTimeout(() => {
      setClickedButton("");
    }, 300);
  };

  return (
    <>
      <NavbarContainer>
        <IconContainer onClick={() => setShowMenu(!showMenu)}>
          <HamburgerIcon>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </HamburgerIcon>
        </IconContainer>
        <Button
          clicked={clickedButton === "PageOne"}
          onClick={() => handleClick("PageOne")}
        >
          Home
        </Button>
        <Button
          clicked={clickedButton === "PageTwo"}
          onClick={() => handleClick("PageTwo")}
        >
          Projects
        </Button>
        <AvatarStyle src={avatar.src} />
        <Button
          clicked={clickedButton === "PageFour"}
          onClick={() => handleClick("PageFour")}
        >
          Skills
        </Button>
        <Button
          clicked={clickedButton === "PageFive"}
          onClick={() => handleClick("PageFive")}
        >
          Contact
        </Button>
      </NavbarContainer>

      <MenuContainer showMenu={showMenu}>
        <Menu showMenu={showMenu}>
          <Btn onClick={() => setPage("PageOne")}>Home</Btn>
          <Btn onClick={() => setPage("PageTwo")}>Projects</Btn>
          <Btn onClick={() => setPage("PageFour")}>Certificates/Skills</Btn>
          <Btn onClick={() => setPage("PageFive")}>Contact</Btn>
        </Menu>
      </MenuContainer>
    </>
  );
}
