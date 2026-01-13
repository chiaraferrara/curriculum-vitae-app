import styled from "@emotion/styled";

export const Container = styled.div`
  background: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  max-width: 900px;
  margin: var(--spacing-xl) auto;
`;

export const MainHeading = styled.h1`
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 600;
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
  letter-spacing: -0.02em;
`;
