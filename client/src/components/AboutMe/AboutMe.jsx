import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: rgb(68, 117, 117);
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20pt;
  padding: 0 50px;
`;
const StyledHeader = styled.h2`
  font-size: 28pt;
  margin-bottom: 2rem;
  color: var(--clr-orange);
`;

const StyledPar = styled.p`
  color: white;
  width: 70vw;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    width: 95vw;
    padding-left: 10px;
    font-size: 20pt;
  }
`;
export default function AboutMe() {
  return (
    <StyledAbout id="aboutMe">
      <StyledHeader>About Me</StyledHeader>
      <StyledPar>
        I'm a Ukrainian-born software developer currently living in the Detroit
        Metropolitan Area.
      </StyledPar>
      <StyledPar>
        I originally started learning foreign languages, like English and
        Italian, which resulted in me pursuing Teaching English as a Second
        Language as a career path.
      </StyledPar>
      <StyledPar>
        However, I've always had an interest in technology, as well as many
        family members already in the software engineering field, and eventually
        found that this was the career path I was meant for. I still get to work
        with languages, but in a different way. I started by learning C++, but
        have also spent time becoming proficient with other languages, like C#,
        JS and PHP.
      </StyledPar>
      <StyledPar>
        When I'm not behind the computer, you'll usually find me working on
        puzzles, visiting theme parks, and hiking. 😊
      </StyledPar>
    </StyledAbout>
  );
}
