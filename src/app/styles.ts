import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
`;

export const TimelineList = styled.ul`
  line-height: 1.6;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const TimelineItem = styled.li`
  padding-left: 3rem;
  position: relative;
  margin-bottom: var(--spacing-lg);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TimelineInfo = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 0 0 var(--spacing-xs) 0;
  text-transform: uppercase;
  color: var(--color-text-light);
  white-space: nowrap;
`;

export const TimelineMarker = styled.div<{ primaryColor?: string; isLast?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  background: var(--color-border);

  &:before {
    background: ${(props) => props.primaryColor || "var(--color-accent)"};
    border: 3px solid var(--color-background);
    border-radius: 50%;
    content: "";
    display: block;
    height: 12px;
    position: absolute;
    top: 4px;
    left: -5px;
    width: 12px;
    transition: all var(--transition-base);
    box-shadow: 0 0 0 2px var(--color-background);
  }

  &:after {
    content: "";
    width: 2px;
    background: var(--color-border);
    display: block;
    position: absolute;
    top: 20px;
    bottom: 0;
    left: 0;
    ${(props) => (props.isLast ? "display: none;" : "")}
  }
`;

export const TimelineContent = styled.div`
  padding-bottom: var(--spacing-md);

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-primary);
    margin: 0 0 var(--spacing-xs) 0;
    line-height: 1.4;
  }

  p {
    font-size: 0.9375rem;
    color: var(--color-text-light);
    line-height: 1.6;
    margin: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 600;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--color-primary);
  letter-spacing: -0.02em;
`;

export const SchoolContainer = styled.div`
  background: var(--color-surface);
  color: var(--color-text);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-md);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--color-accent);
    transform: scaleY(0);
    transition: transform var(--transition-base);
  }

  &:hover {
    border-color: var(--color-accent-hover);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);

    &::before {
      transform: scaleY(1);
    }
  }
`;

export const SchoolHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
`;

export const YearHeading = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Degree = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: var(--spacing-xs) 0;
  color: var(--color-text);
`;

export const Skills = styled.p`
  font-size: 0.875rem;
  margin: var(--spacing-xs) 0 0 0;
  color: var(--color-text-light);
  line-height: 1.6;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
`;

export const Skill = styled.div`
  margin-bottom: var(--spacing-lg);
  position: relative;
`;

export const SkillP = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 var(--spacing-xs) 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--color-border);
  position: relative;
  border-radius: var(--radius-sm);
  overflow: hidden;

  span {
    position: absolute;
    right: 0;
    top: -24px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-light);
  }
`;

export const Bar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-hover));
  position: relative;
  border-radius: var(--radius-sm);
  transition: width var(--transition-slow);
`;
