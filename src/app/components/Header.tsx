"use client";
import styled from "@emotion/styled";
import avatar from "../assets/avatar.png";
import styles from "../page.module.css";
import { TextAnimate } from "./TextAnimate";
import { MainHeading } from "./styles/style";
const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: black;
  border-radius: 0px 0px 20px 20px;
  border: 2px solid #000000;
  padding: 8%;
  width: 70%;
  height: 200px;
  position: relative;

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`;

const AvatarStyle = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  bottom: -50px;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    bottom: -40px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    bottom: -30px;
  }
`;

const ContactStyle = styled.p`
  font-size: 16px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

function Header() {
  return (
    <>
      <CardStyle>
        <MainHeading style={{ fontSize: "3em" }}>Chiara Ferrara</MainHeading>
        <AvatarStyle src={avatar.src} />
      </CardStyle>
    </>
  );
}

export default Header;
