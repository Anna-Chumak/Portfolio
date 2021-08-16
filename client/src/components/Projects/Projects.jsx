import styled from "styled-components";
import Project from "../Project/Project";
import { projectsInfo } from "../../utilities/data";

const StyledProjects = styled.section`
  background-color: rgb(68, 117, 117);
  padding: 0 100px 50px 50px;
  text-align: center;

  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

const StyledHeader = styled.h2`
  font-size: 28pt;
  color: var(--clr-orange);
`;

export default function Projects() {
  return (
    <StyledProjects id="projects">
      <StyledHeader>My Projects</StyledHeader>
      {projectsInfo.map((project, index) => (
        <Project project={project} index={index} key={index} />
      ))}
    </StyledProjects>
  );
}
