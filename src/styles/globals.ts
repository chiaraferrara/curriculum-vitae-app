import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Img = styled.img`
  border-radius: 50%;
  margin: 0 auto;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  margin: 0px;
  ;
`;

export const Paragraph = styled.div`
  font-size: 16px;
  width: fit-content;
`;

export const Description = styled.div`
  font-size: 12px;
  width: fit-content;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start
    text-align: center;
    justify-content: center
    `;

export const Title = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const Tr = styled.tr`
  background-color: #d6d2d9;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 13px;
  padding: 20px;
  margin: 0px;
  background-color: #f5f5f5;
`;

export const GlobalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  background-color: #f5f5f5;
  margin: auto;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(243, 253, 255, 1) 75%,
    rgba(228, 230, 230, 1) 85%,
    rgba(224, 224, 224, 1) 85%,
    rgba(136, 122, 150, 1) 85%,
    rgba(168, 152, 185, 1) 100%
  );
  min-height: 100vh;
  justify-content: center;
`;

export const ProjectImg = styled.img`
  width: 500px;
`;

export const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;


export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start
  padding: 1px;
  text-align: left;
  width: 60%;
  margin: auto;
`;

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#887a96',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


export const Paragr = styled.div`
  font-size: 16px;
  margin:0;
  width: fit-content;
`;

export const Caption = styled.div`
  font-size: 10px;
  margin:0;
  width: fit-content;
`;

export const PTitle = styled.h4`
text-align: center;
  font-size: 22px;
  font-weight: bold;
`;