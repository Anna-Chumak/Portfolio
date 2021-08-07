import styled from 'styled-components';

const StyledFooter = styled.footer`
  border: none;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgb(35, 82, 82);
  font-size: 14pt;
  font-family: 'Courier Prime', monospace;
`;

export default function Footer() {
  return <StyledFooter>Anna Kuzava &copy; 2021</StyledFooter>;
}
