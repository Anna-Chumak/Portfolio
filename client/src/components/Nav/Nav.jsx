import styled from 'styled-components';

const StyledNav = styled.nav`
  border: none;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: rgb(35, 82, 82);
  font-size: 14pt;
  font-family: 'Courier Prime', monospace;
  padding: 0 1rem;
  .menu {
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 0.25rem;
  padding: 0.75rem;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: rgb(68, 117, 117);
    transition: all 250ms ease-in-out;
  }
`;

const SocialLink = styled(StyledLink)``;

const menuItems = {
  Home: '#home',
  'About Me': '#aboutMe',
  Projects: '#projects',
  Resume: '#',
};

const socialLinks = {
  LI: 'https://www.linkedin.com/in/anna-kuzava/',
  '@': 'mailto: annutack@gmail.com',
  GH: 'https://github.com/Anna-Chumak',
};

export default function Nav() {
  return (
    <StyledNav>
      <div className='menu'>
        {Object.keys(menuItems).map((item, index) => (
          <StyledLink href={menuItems[item]} key={index}>
            {item}
          </StyledLink>
        ))}
      </div>
      <div className='contacts'>
        {Object.keys(socialLinks).map((item, index) => (
          <SocialLink href={socialLinks[item]} key={index}>
            {item}
          </SocialLink>
        ))}
      </div>
    </StyledNav>
  );
}
