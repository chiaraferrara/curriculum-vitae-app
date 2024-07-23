import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Masonry from "react-masonry-css";
import { projects } from "../utils";
import Chip from "./Chip";
import { Box, ChakraProvider, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  background: #ffffff;
  flex-direction: row;
  border-radius: 10px;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  color: #262527;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  height: fit-content;
  width: 100%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;

  &:hover {
    transform: scale(2.05);
    transition: all 0.3s ease-in-out;
  }
`;

const Projects = () => {
  const [margins, setMargins] = useState<any>([]);

  useEffect(() => {
    const newMargins = projects.map(() => {
      const randomValue = (Math.random() - 0.5) * 70;
      const isTop = Math.random() > 0.5;

      return {
        top: isTop ? randomValue : 0,
        bottom: isTop ? 0 : randomValue,
      };
    });
    setMargins(newMargins);
  }, [projects]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <ChakraProvider>
        <Container>
          {" "}
          <Box
            padding={4}
            w="100%"
            maxW="900px"
            mx="auto"
            sx={{ columnCount: [1, 2], columnGap: "12px" }}
          >
            {" "}
            <Text fontSize="6xl" color={"##000000 "}>
              Projects
            </Text>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <h2>{project.name}</h2>

                <hr />
                <Chip label={project.date} />
                <Link href={project.link}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
                <p>
                  <br />
                  {project.description}
                  <br />
                </p>
                {project.technologies?.map((tech, techIndex) => (
                  <Chip key={techIndex} label={tech} />
                ))}
                {project.image ? (
                  <Image
                    key={project.image}
                    w="100%"
                    borderRadius="xl"
                    mb={2}
                    src={project.image}
                    alt={project.name}
                  />
                ) : null}

                {project.features?.map((feature, featureIndex) => (
                  <ul key={featureIndex}>
                    {" "}
                    <li>{feature}</li>
                  </ul>
                ))}
              </ProjectCard>
            ))}
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default Projects;
