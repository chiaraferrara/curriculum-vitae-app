import styled from "@emotion/styled"

export const Container = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
`;

export const MainHeading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const SchoolContainer = styled.div`
  background: #6394b7;
  color: #000;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  border-left: 5px solid #000000;
`;

const SchoolHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

const YearHeading = styled.h3`
  font-size: 20px;
  color: #000000;
  margin-bottom: 10px;
`;

const Degree = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  margin: 5px 0;
`;

const Skills = styled.p`
  font-size: 16px;
  color: #000000;
  margin: 5px 0;
`;



const Div = styled.div`
  width: 50%;
  background-color: #ffffff;
  color: black;
  padding-top: 120px;
  padding-inline: 2%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  padding-inline: 20px;
  margin: 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 20px 20px 0px 0px;
  color: black;
  padding: 8%;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;
