import React,{useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {

  const [navChoice, setCurrentNav]= useState('About');

 const renderPage = () => {
 
    switch (navChoice) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
    
  };
  return (
    <div className="mainapp"> 
      <Nav
           navChoice={navChoice}
           setCurrentNav={setCurrentNav}
      >
      </Nav> 
      <main>
       {renderPage(navChoice)}
      </main>
      <footer> Github linkedIn 3App</footer>
    </div>
  );
}

export default App;
