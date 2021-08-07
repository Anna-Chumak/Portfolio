import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <main className='App'>
        <Nav />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
