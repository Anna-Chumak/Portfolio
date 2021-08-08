import styled from "styled-components";
import Project from "../Project/Project";
import { projectsInfo } from "../../utilities/data";

const StyledProjects = styled.section`
  background-color: rgb(68, 117, 117);
  padding: 0 100px 50px 50px;
`;

export default function Projects() {
  return (
    <StyledProjects>
      {projectsInfo.map((project, index) => (
        <Project project={project} index={index} key={index} />
      ))}
    </StyledProjects>
  );
}
