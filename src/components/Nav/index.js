import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'
function Nav(props) {
    const{
        navChoice=[],
        currentNav,
        setCurrentNav
    }=props;


  return (
    <header className="flex-row px-1">
    <h2>
      <a data-testid="link" href="/">
        <span role="img" aria-label="name">AdamR </span> 
      </a>
    </h2>
    <nav>
      <ul className="flex-row space-between">
      {navChoice.map((navChoice) => (
            <li className={`mx-1 href="#${navChoice.name}" ${
                currentNav.name === navChoice.name && 'navActive'
                }`} key={navChoice.name}>
              <span
                onClick={() => {
                    setCurrentNav(navChoice)
                }}
              >
                {capitalizeFirstLetter(navChoice.name)}
              </span>
            </li>
          ))}
      
      </ul>
    </nav>
  </header>
  );
}

export default Nav;

//Below was just to view


// return (
//     <header className="flex-row px-1">
//     <h2>
//       <a data-testid="link" href="/">
//         <span role="img" aria-label="name">AdamR </span> 
//       </a>
//     </h2>
//     <nav>
//       <ul className="flex-row space-between">
//         <li className="mx-2 space-between">
//           <a  href="#about">
//             About me
//           </a>
//         </li>
//         <li className="mx-2 space-between">

//         <a  href="#projects">
//             Projects
//           </a>
//           </li>
//           <li className="mx-2 space-between">

//         <a  href="#resume">
//             Resume     
//          </a>
//         </li>
//          <li className="mx-2 space-between">

//         <a  href="#contact">
//             Contact Me
//           </a>
//         </li>          
      
//       </ul>
//     </nav>
//   </header>
//   );
// }
