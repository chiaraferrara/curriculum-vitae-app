import styled from "@emotion/styled";

const ChipStyle = styled.div`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  margin: var(--spacing-xs) var(--spacing-xs) var(--spacing-xs) 0;
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-accent-hover);
    color: white;
    border-color: var(--color-accent-hover);
  }
`;

export default function Chip({ label }: { label: any }) {
  return <ChipStyle>{label}</ChipStyle>;
}
