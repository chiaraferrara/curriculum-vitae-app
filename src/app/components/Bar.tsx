import styled from "@emotion/styled";

const Bar = styled.div`
  position: fixed;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-accent), transparent);
  z-index: 1000;
`;

const TopBar = styled(Bar)`
  top: 0;
`;

const BottomBar = styled(Bar)`
  bottom: 0;
  background: linear-gradient(90deg, transparent, var(--color-accent));
`;

const Content = styled.div`
  padding-top: 2px;
  padding-bottom: 2px;
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
