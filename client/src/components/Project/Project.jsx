import styled from "styled-components";

const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  padding: 5rem 0;
  align-items: center;
  perspective: 700px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
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
  @media (max-width: 700px) {
    width: 90vw;
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
  @media (max-width: 700px) {
    width: 90vw;
  }
`;

const StyledInfoSection = styled.div`
  width: 38vw;
  display: flex;
  flex-direction: column;
  height: auto;
  color: white;
  text-align: left;
  @media (max-width: 700px) {
    width: 90vw;
  }
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

const OrangeText = styled(StyledH2)`
  color: var(--clr-orange);
`;

const StyledProjectLink = styled.a`
  text-decoration: underline;
  color: white;
  display: block;
`;

const StyledSpan = styled.span`
  color: var(--clr-orange);
`;

export default function Project({ project, index }) {
  const { title, description, environment, linkTitle, links, pictures } =
    project;
  return (
    <StyledProjectWrapper reverse={index % 2 !== 0}>
      <StyledInfoSection>
        <OrangeText>{title}</OrangeText>
        <StyledP>{description}</StyledP>
        <StyledP>
          <StyledSpan>{environment[0]}</StyledSpan>: {environment[1]}
        </StyledP>
        <StyledP>
          <StyledSpan>{linkTitle}</StyledSpan>:{" "}
          {links.map((link, index) => (
            <StyledProjectLink href={link}>{link} </StyledProjectLink>
          ))}
        </StyledP>
      </StyledInfoSection>
      <StyledGrid reverse={index % 2 !== 0}>
        {pictures.map((picture, index) => (
          <StyledImage src={`./assets/${picture}`} key={index} />
        ))}
      </StyledGrid>
    </StyledProjectWrapper>
  );
}
