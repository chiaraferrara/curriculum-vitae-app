import { useContext, useEffect, useState } from "react";
import { Context } from "../providers/PageProvider";
import styled from "@emotion/styled";
import avatar from "../assets/avatar.jpeg";
import { Text } from "@chakra-ui/react";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #313233;
  padding: 10px;
  color: #;
  border-radius: 2em;
  position: absolute;
  bottom: -45px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 19px 5px rgb(0 0 0 / 18%);
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Button = styled.button<{ clicked: boolean }>`
  background-color: ${(props) => (props.clicked ? "#f2e1eb" : "transparent")};
  text-transform: uppercase;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-inline: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.2s ease;
  transform: ${(props) => (props.clicked ? "scale(1.1)" : "scale(1)")};
  box-shadow: ${(props) =>
    props.clicked ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none"};

  &:hover {
    background-color: #e1d5dd;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const AvatarStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ##000000;

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
  }
`;

const HamburgerLine = styled.div`
  width: 20px;
  height: 1px;
  background-color: #f2e1eb;
  margin: 3px 0;
  transition: all 0.3s ease;
`;

const MenuContainer = styled.div<{ showMenu: boolean }>`
  background-color: #313233;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
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
  display: "none";
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
  color: ##000000;
  font-weight: 600;
  margin-inline: 10px;
  margin: 10px 0;
`;

export default function Navbar() {
  const [clickedButton, setClickedButton] = useState("");
  const { setPage, page } = useContext(Context);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (pageName: string) => {
    setClickedButton(pageName);
    setPage(pageName);
    setTimeout(() => {
      setClickedButton("");
    }, 300);
  };
  useEffect(() => {
    console.log(page);
    console.log(showMenu);
  }, [page, showMenu]);

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