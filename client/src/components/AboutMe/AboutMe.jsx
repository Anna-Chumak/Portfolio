import styled from 'styled-components';

const StyledAbout = styled.div`
  background-color: rgb(68, 117, 117);
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24pt;
  padding: 0 50px;
`;

export default function AboutMe() {
  return <StyledAbout></StyledAbout>;
}
