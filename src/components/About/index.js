import React from 'react';
import profile from '../../assets/profile.jpg'
import alita from '../../assets/alita.jpg'
import profilepic from '../../assets/profilepic.jpg'

function About({setCurrentNav}){
    
    return(
        <div className="aboutSection">
<section className="my-1">
    <h1 className="text-center " id="about">Who am I?</h1>
        <p>My name is Adam Ramos Im a Full Stack Developer </p>
    <div className="my-2 center">
        <img src={profilepic} className="my-2 rounded center" style={{ width: "50%", height: "50%" }} alt="cover" />
    </div>
    <div className="my-2 left">
          <p>Husband to an supportive and adventurous wife,</p>
        <img src={profile} className="my-2 rounded" style={{ width: "50%", height: "50%" }} alt="cover" />
    </div>
    <div className="my-2 right flex-end">
          <p className=""> Father to my smart and beautiful daughter Alita.</p>
        <img src={alita} className="my-2 rounded" style={{ width: "50%", height: "50%" }} alt="cover" />
    </div>
    <div className="my-2">
        <a   href='#Projects' 
      onClick={() => setCurrentNav("Projects")}
      >Here are some of my projects</a>  
        </div>
      </section>
     
      </div>
    )
}

export default About