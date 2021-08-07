import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18pt;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  padding: 0.75rem;

  &:hover {
    background-color: rgb(68, 117, 117);
    transition: all 250ms ease-in-out;
  }
`;
export default function Button({ handleClick, content }) {
  return <StyledButton onClick={handleClick}>{content}</StyledButton>;
}
