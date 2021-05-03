import React from 'react';
//NAV Bar
function Nav(props) {
  // variables 
 const {
     navChoice,
     setCurrentNav
 }=props;
 const navName = ['About', 'Projects', 'Resume', 'Contact']

// Generated code
  return (
    <header className="flex-row px-1 space-around header my-2">
    <h2>
      <a  className="header" href='#About' 
      onClick={() => setCurrentNav("About")}
      >Adam R</a> 
    </h2>
    <nav>
      <ul className="footer space-around mx-2">
        {/* Maps the Nav options */}
      {navName.map(navName => (
        <li className="nav-item space-around mx-2" key={navName}>
          <a
            href={'#' + navName}
            onClick={() => setCurrentNav(navName)}
            className={
              navChoice === navName ? 'nav-link navActive' : 'nav-link'
            }
          >
            {navName}
          </a>
        </li>
      ))}
      
      </ul>
    </nav>
  </header>
  );
}

export default Nav;
