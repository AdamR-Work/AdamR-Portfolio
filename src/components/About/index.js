import React from 'react';
// imported pictures for profile
import profile from '../../assets/profiles/profile.jpg'
import alita from '../../assets/profiles/alita.jpg'
import profilepic from '../../assets/profiles/profilepic.jpg'

//about section
function About({setCurrentNav}){
    // Generated about section html
    return(
        <div className="aboutSection">
<section className="my-2 mx-2">
    <h1 className="text-center my-2 mx-2 " id="about">Who am I?</h1>
        <p>My name is Adam Ramos Im a Full Stack Developer </p>
    <div className="my-2 mx-2 center">
        <img src={profilepic} className="my-2 mx-2 rounded center" style={{ width: "50%", height: "50%" }} alt="cover" />
    </div>
    <div className="my-2 mx-2 left">
          <p>Husband to an supportive and adventurous wife,</p>
        <img src={profile} className="my-2 mx-2 rounded" style={{ width: "50%", height: "50%" }} alt="cover" />
    </div>
    <div className="my-2 mx-2 right flex-end">
          <p className=""> Father to my smart and beautiful daughter Alita.</p>
        <img src={alita} className="my-2 rounded" style={{ width: "50%", height: "50%" }} alt="cover" />
    </div>
    <div className="my-2 center">
      {/* gives them the option once they get to the bottom to redirect  instead of scrolling up */}
        <a   href='#Projects' 
      onClick={() => setCurrentNav("Projects")}
      >Here are some of my projects</a>  
        </div>
      </section>
     
      </div>
    )
}

export default About