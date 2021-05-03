import React from 'react';

function Nav(props) {
 const {
     navChoice,
     setCurrentNav
 }=props;
 const navName = ['About', 'Projects', 'Resume', 'Contact']

  return (
    <header className="flex-row px-1 space-around header my-2">
    <h2>
      <a 
      className="header" href="/">
        <span role="img" aria-label="name">Adam R </span> 
      </a>
    </h2>
    <nav>
      <ul className="footer space-around mx-2">
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
