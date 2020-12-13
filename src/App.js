import './styles/main.scss';
import './styles/layout/App.scss';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Snow from './Components/Snow';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;