import styled from 'styled-components';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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

  .mobileMenuButton {
    display: none;
  }
  @media (max-width: 500px) {
    .menu {
      display: none;
    }
    .mobileMenuButton {
      display: block;
    }
    justify-content: space-between;
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

const SocialLink = styled(StyledLink)`
  color: white;
  font-size: 24pt;
`;

const menuItems = {
  Home: '#home',
  'About Me': '#aboutMe',
  Projects: '#projects',
  Resume: '#',
};

const socialLinks = [
  [faLinkedin, 'https://www.linkedin.com/in/anna-kuzava/'],
  [faEnvelopeSquare, 'mailto: annutack@gmail.com'],
  [faGithubSquare, 'https://github.com/Anna-Chumak'],
];

export default function Nav({ setToggleModal, stateModal }) {
  const handleClick = () => {
    setToggleModal((prev) => !prev);
  };

  return (
    <StyledNav>
      <div className='mobileMenuButton'>
        <Button
          handleClick={handleClick}
          content={
            <FontAwesomeIcon icon={stateModal ? faArrowLeft : faArrowRight} />
          }
        />
      </div>
      <div className='menu'>
        {Object.keys(menuItems).map((item, index) => (
          <StyledLink href={menuItems[item]} key={index}>
            {item}
          </StyledLink>
        ))}
      </div>
      <div className='contacts'>
        {socialLinks.map((link, index) => (
          <SocialLink href={link[1]} target='_blank' key={index}>
            <FontAwesomeIcon icon={link[0]} />
          </SocialLink>
        ))}
      </div>
    </StyledNav>
  );
}
