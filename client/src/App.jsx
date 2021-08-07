import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import ModalMenu from './components/ModalMenu/ModalMenu';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import { useState } from 'react';
import Home from './components/Home/Home';

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <main className='App'>
        {toggleModal && <ModalMenu />}

        <Nav setToggleModal={setToggleModal} stateModal={toggleModal} />
        <Home />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
