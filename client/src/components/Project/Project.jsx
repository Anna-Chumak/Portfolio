import styled from "styled-components";

const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  padding: 5rem 0;
  align-items: center;
  perspective: 700px;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  height: autp;
  justify-content: center;
  align-items: center;
  transition: transform 250ms ease-in-out;
  transform: ${(props) =>
    props.reverse
      ? "rotate3d(0.2, 0.566, 0, 7deg) rotateZ(1deg)"
      : "rotate3d(0.2, -0.566, 0, 7deg) rotateZ(-1deg)"};
  gap: 15px;
  &:hover {
    transition: transform 250ms ease-in-out;
    transform: initial;
  }
`;

const StyledImage = styled.img`
  max-width: 25vw;
  height: auto;
  box-shadow: var(--my-ring-offset-shadow, 0 0 #0000),
    var(--my-ring-shadow, 0 0 #0000), var(--my-shadow);
  transition: transform 250ms ease-in-out;
  /* &:hover {
    transition: transform 250ms ease-in-out;
    transform: scale(1.4);
  } */
`;

const StyledInfoSection = styled.div`
  width: 38vw;
  display: flex;
  flex-direction: column;
  height: auto;
  color: white;
  font-family: "Courier Prime", monospace;
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 20pt;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  margin-bottom: 1rem;
  line-height: 1.2;
  font-size: 14pt;
`;

const StyledProjectLink = styled.a`
  text-decoration: underline;
  color: white;
`;

export default function Project(props) {
  const { project, index } = props;
  return (
    <StyledProjectWrapper reverse={index % 2 !== 0}>
      <StyledInfoSection>
        <StyledH2>{project["title"]}</StyledH2>
        <StyledP>{project["description"]}</StyledP>
        <StyledP>
          {project["environment"][0]}: {project["environment"][1]}
        </StyledP>
        <StyledP>
          <bold>{project["link"][0]}</bold>:{" "}
          <StyledProjectLink href="{projectsInfo[0]['link'][1]}">
            {project["link"][1]}
          </StyledProjectLink>
        </StyledP>
      </StyledInfoSection>
      <StyledGrid reverse={index % 2 !== 0}>
        {project.pictures.map((picture, index) => (
          <StyledImage src={`./assets/${picture}`} key={index} />
        ))}
      </StyledGrid>
    </StyledProjectWrapper>
  );
}
