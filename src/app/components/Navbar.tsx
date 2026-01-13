import { useContext, useState } from "react";
import { Context } from "../providers/PageProvider";
import styled from "@emotion/styled";
import avatar from "../assets/avatar.jpeg";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-surface);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-xl);
  position: absolute;
  bottom: -2rem;
  gap: var(--spacing-xs);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);

  @media (max-width: 768px) {
    padding: var(--spacing-xs);
    gap: 0;
  }
`;

const Button = styled.button<{ active: boolean }>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.active ? "var(--color-accent)" : "var(--color-text)")};
  cursor: pointer;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.875rem;
  font-weight: ${(props) => (props.active ? "500" : "400")};
  transition: color var(--transition-fast), background-color var(--transition-fast);
  border-radius: var(--radius-md);
  position: relative;
  white-space: nowrap;

  &:hover {
    color: var(--color-accent-hover);
    background-color: var(--color-hover);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.active ? "60%" : "0")};
    height: 2px;
    background-color: var(--color-accent);
    transition: width var(--transition-base);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const AvatarStyle = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--color-border);
  filter: grayscale(100%);
  transition: transform var(--transition-fast), border-color var(--transition-fast);
  margin: 0 var(--spacing-sm);

  &:hover {
    transform: scale(1.05);
    border-color: var(--color-accent-hover);
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
    padding: var(--spacing-xs);
  }
`;

const HamburgerLine = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 2px;
  background-color: var(--color-text);
  margin: 3px 0;
  transition: all var(--transition-base);
  transform: ${(props) => (props.isOpen ? "rotate(45deg) translate(5px, 5px)" : "none")};

  &:nth-of-type(2) {
    opacity: ${(props) => (props.isOpen ? "0" : "1")};
  }

  &:nth-of-type(3) {
    transform: ${(props) => (props.isOpen ? "rotate(-45deg) translate(7px, -6px)" : "none")};
  }
`;

const MenuContainer = styled.div<{ showMenu: boolean }>`
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.showMenu ? "1" : "0")};
  visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
  transform: ${(props) => (props.showMenu ? "translateY(0)" : "translateY(-20px)")};
  transition: opacity var(--transition-base), transform var(--transition-base), visibility var(--transition-base);
  border-bottom: 1px solid var(--color-border);
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-text);
  font-weight: 500;
  font-size: 1.125rem;
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  border-radius: var(--radius-md);
  width: 200px;
  text-align: center;

  &:hover {
    color: var(--color-accent-hover);
    background-color: var(--color-hover);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default function Navbar() {
  const { setPage, page } = useContext(Context);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (pageName: string) => {
    setPage(pageName);
    setShowMenu(false);
  };

  return (
    <>
      <NavbarContainer>
        <IconContainer onClick={() => setShowMenu(!showMenu)}>
          <HamburgerIcon>
            <HamburgerLine isOpen={showMenu} />
            <HamburgerLine isOpen={showMenu} />
            <HamburgerLine isOpen={showMenu} />
          </HamburgerIcon>
        </IconContainer>
        <Button
          active={page === "PageOne"}
          onClick={() => handleClick("PageOne")}
        >
          Home
        </Button>
        <Button
          active={page === "PageTwo"}
          onClick={() => handleClick("PageTwo")}
        >
          Projects
        </Button>
        <AvatarStyle src={avatar.src} alt="Avatar" />
        <Button
          active={page === "PageFour"}
          onClick={() => handleClick("PageFour")}
        >
          Skills
        </Button>
        <Button
          active={page === "PageFive"}
          onClick={() => handleClick("PageFive")}
        >
          Contact
        </Button>
      </NavbarContainer>

      <MenuContainer showMenu={showMenu} onClick={() => setShowMenu(false)}>
        <Menu onClick={(e) => e.stopPropagation()}>
          <Btn onClick={() => handleClick("PageOne")}>Home</Btn>
          <Btn onClick={() => handleClick("PageTwo")}>Projects</Btn>
          <Btn onClick={() => handleClick("PageFour")}>Skills</Btn>
          <Btn onClick={() => handleClick("PageFive")}>Contact</Btn>
        </Menu>
      </MenuContainer>
    </>
  );
}
