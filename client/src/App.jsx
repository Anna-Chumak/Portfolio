import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import ModalMenu from './components/ModalMenu/ModalMenu';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import { useState } from 'react';

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <main className='App'>
        {toggleModal && <ModalMenu />}
        <Nav setToggleModal={setToggleModal} />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
