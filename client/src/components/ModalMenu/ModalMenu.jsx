import styled from 'styled-components';
const StyledModal = styled.div`
  font-family: 'Courier Prime', monospace;
  position: absolute;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 2rem;
  top: 4rem;
  left: 0;
  min-height: calc(100vh - 7rem);
  min-width: 100vw;
  background-color: rgba(35, 82, 82, 0.9);
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 0.25rem;
  padding: 0.75rem;
  font-size: 24pt;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: rgb(68, 117, 117);
    transition: all 250ms ease-in-out;
  }
`;
const menuItems = {
  Home: '#home',
  'About Me': '#aboutMe',
  Projects: '#projects',
  Resume: '#',
};

export default function ModalMenu() {
  return (
    <StyledModal>
      {Object.keys(menuItems).map((item, index) => (
        <StyledLink href={menuItems[item]} key={index}>
          {item}
        </StyledLink>
      ))}
    </StyledModal>
  );
}
