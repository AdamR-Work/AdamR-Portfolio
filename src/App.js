import React,{useState} from 'react';
import Nav from './components/Nav';
// import About from './components/About';
// import Projects from './components/Projects';
// import ContactForm from './components/Contact';
// import Resume from './components/Resume';


function App() {

  const [navChoice] = useState([
    {name:'about'},
    {name:'Projects'},
    {name:'Resume'},
    {name:'ContactForm'}
  ]);

  const [currentNav, setCurrentNav]=useState(navChoice[0]);

  return (
    <div className="mainapp"> 
         <Nav
           navChoice={navChoice}
           setCurrentNav={setCurrentNav}
           currentNav={currentNav}
           >
      </Nav>
      <main>
        {/* <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <ContactForm></ContactForm> */}
      </main>
    </div>
  );
}

export default App;
