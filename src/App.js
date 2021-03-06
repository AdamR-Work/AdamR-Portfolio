import React,{useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {

  const [navChoice, setCurrentNav]= useState('About');
// ??? redo the nav bar better
 const renderPage = () => {
 // NAV CHOICE DIRECTIONS
    switch (navChoice) {
      case 'About':
        return <About setCurrentNav={setCurrentNav}/>;
      case 'Projects':
        return <Projects setCurrentNav={setCurrentNav} />;
      case 'Contact':
        return <Contact setCurrentNav={setCurrentNav}/>;
      case 'Resume':
        return <Resume setCurrentNav={setCurrentNav}/>;
      default:
        return <About setCurrentNav={setCurrentNav}/>;
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
      <footer><Footer></Footer></footer>
    </div>
  );
}

export default App;
