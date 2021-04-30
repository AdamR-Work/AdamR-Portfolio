import React from 'react';

function Nav(props) {
 const {
     navChoice,
     setCurrentNav
 }=props;
 const navName = ['About', 'Projects', 'Contact', 'Resume']

  return (
    <header className="flex-row px-1">
    <h2>
      <a data-testid="link" href="/">
        <span role="img" aria-label="name">AdamR </span> 
      </a>
    </h2>
    <nav>
      <ul className="flex-row space-between">
      {navName.map(navName => (
        <li className="nav-item space-between" key={navName}>
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

// return (
//     <header className="flex-row px-1">
//     <h2>
//       <a data-testid="link" href="/">
//         <span role="img" aria-label="name">AdamR </span> 
//       </a>
//     </h2>
//     <nav>
//       <ul className="flex-row space-between">
//       {navChoice.map((navChoice) => (
//             <li className={`mx-1 href="#${navChoice}" ${
//                 currentNav === navChoice && 'navActive'
//                 }`} key={navChoice}>
//               <span
//                 onClick={() => {
//                     setCurrentNav(navChoice)
//                 }}
//               >
//                 {capitalizeFirstLetter(navChoice)}
//               </span>
//             </li>
//           ))}
      
//       </ul>
//     </nav>
//   </header>
//   );
// }
