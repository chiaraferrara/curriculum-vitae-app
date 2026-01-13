import React from "react";
import styled from "@emotion/styled";
import { projects } from "../utils";
import Chip from "./Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { MainHeading } from "../styles";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
  background: var(--color-background);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
`;

const ProjectCard = styled.div`
  background: var(--color-surface);
  color: var(--color-text);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  max-height: 800px;
  &:hover {
    border-color: var(--color-accent-hover);
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }
`;

const ScrollableContent = styled.div`
  flex: 1;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: var(--spacing-xs);
  margin-right: calc(-1 * var(--spacing-xs));

  /* Styled Scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-surface);
    border-radius: var(--radius-sm);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: var(--radius-sm);
    transition: background var(--transition-fast);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent);
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) var(--color-surface);
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-sm);
`;

const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
  flex: 1;
  line-height: 1.3;
`;

const ProjectLink = styled(Link)`
  color: var(--color-text-light);
  font-size: 1.125rem;
  transition: color var(--transition-fast), transform var(--transition-fast);
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:hover {
    color: var(--color-accent-hover);
    transform: translate(2px, -2px);
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md) 0;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  border: 1px solid var(--color-border);
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  flex-shrink: 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--spacing-md) 0 0 0;

  li {
    font-size: 0.875rem;
    color: var(--color-text-light);
    padding: var(--spacing-xs) 0;
    padding-left: var(--spacing-md);
    position: relative;
    line-height: 1.5;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--color-accent-hover);
      font-weight: bold;
    }
  }
`;

const DateChip = styled.div`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  background: var(--color-surface);
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Projects = () => {
  return (
    <Container>
      <MainHeading>Projects</MainHeading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <DateChip>{project.date}</DateChip>
            <ProjectHeader>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </ProjectLink>
            </ProjectHeader>
            {project.image && (
              <ProjectImage
                src={project.image}
                alt={project.name}
              />
            )}
            <ScrollableContent>
              <ProjectDescription>{project.description}</ProjectDescription>
              {project.features && project.features.length > 0 && (
                <FeaturesList>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </FeaturesList>
              )}
            </ScrollableContent>
            <TechnologiesContainer>
              {project.technologies?.map((tech, techIndex) => (
                <Chip key={techIndex} label={tech} />
              ))}
            </TechnologiesContainer>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;
