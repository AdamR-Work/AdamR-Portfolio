import React from 'react';
import ResumePDF from '../../assets/resume/Adam-Ramos-Resume.pdf';
import ResumePic from '../../assets/resume/resume.png';
function Resume(props) {
  const {setCurrentNav}=props;

  return (
    <section className="my-5 flex-row">
      {/* Left bar */}
      <div className="leftsidebar">
        <ul className="center flex-column">
          <li className="my-2"> Mongo </li>
          <li className="my-2"> Express </li>
          <li className="my-2"> React </li>
          <li className="my-2"> Node </li>
    
        </ul>
      </div>
      {/* middle */}
      <div className="middlebar flex-column center">
          <h1 id="Resume">Resume</h1>
          <a href={ResumePDF}  ><img src={ResumePic} alt=" of a resume"></img></a>
         <a   href='#Contact' 
      onClick={() => setCurrentNav("Contact")}
      >Contact me</a> 
      </div>
      {/* right bar  */}
      <div className="rightsidebar">
      <ul className="center flex-column">
          <li className="my-2"> Sequelize </li>
          <li className="my-2"> Handlebars </li>
          <li className="my-2"> Javascript </li>
          <li className="my-2"> Css/Html </li>
        </ul>
      </div>

      

    </section>
  );
}

export default Resume;
