import React from 'react';
import gitIcon from '../../assets/github/GitHub-Mark-Light-64px.png';
import linkIcon from '../../assets/linkedIn/In-White-59px-TM.png';
import stackIcon from '../../assets/stack/stack.png';
function Footer() {

  return (
    <section className="footer">
      
      <div className="my-2">
        <a   href='#github' 
        onClick={() =>  window.location.href='https://github.com/AdamR-Work'}
        >
        <img src={gitIcon} alt="Github Logo"></img>
        </a>
      </div>
      <div className="my-2">
        <a   href='#linkedIn' 
        onClick={() =>  window.location.href='https://www.linkedin.com/in/adamr-work/'}
        >
        <img src={linkIcon} alt="linkedIn Logo"></img>
        </a>
      </div>
      <div className="my-2">
        <a   href='#github' 
        onClick={() =>  window.location.href='https://stackexchange.com/users/19935818/wicca'}
        >
       <img src={stackIcon} alt="stack overflow logo"></img>

        </a>
      </div>
    </section>
  );
}

export default Footer;