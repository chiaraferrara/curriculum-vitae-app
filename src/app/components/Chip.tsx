import styled from "@emotion/styled";

const ChipStyle = styled.div`
  display: inline-block;
  padding: 0.5em 1em;
  margin: 0.5em;
  background: #a2a9b7;
  color: #ffffff;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

export default function Chip({ label }: { label: any }) {
  return <ChipStyle>{label}</ChipStyle>;
}
