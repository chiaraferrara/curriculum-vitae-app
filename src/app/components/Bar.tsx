import styled from "@emotion/styled";

const Bar = styled.div`
  position: fixed;
  width: 100%;
  height: 30px;
  background-color: #262527;
  z-index: 1000;
`;

const TopBar = styled(Bar)`
  top: 0;
`;

const BottomBar = styled(Bar)`
  bottom: 0;
`;

const Content = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

interface Props {
  children: React.ReactNode;
}
const BarComponent = ({ children }: Props) => {
  return (
    <div>
      <TopBar />

      <Content>{children}</Content>
      <BottomBar />
    </div>
  );
};

export default BarComponent;
