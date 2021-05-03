import React from 'react';
import project1 from '../../assets/repos/Movie-Streaming-Search.png'
import project2 from '../../assets/repos/that-one-answer.png'
import project3 from '../../assets/repos/offline.png'
import project4 from '../../assets/repos/run-buddy.png'
import project5 from '../../assets/repos/inventory.png'


function Projects(props) {
  const {setCurrentNav}=props;

  return (
    <section className="my-5">
      <h1 className="center my-5 mx-5" id="about">Projects I've Worked On From The Last 6 Months</h1>
      <p className="mx-5">What these projects taught me most about Coding is nothing rarely works the first try. You have to not give and keep troubleshooting till you get it. Then it turns out to be rewarding when you get it. That is if it didnt take too long for something so simple</p>
      <div className="my-2 ">
        <div className="flex-column center space-around ">

           {/* proj 1 */}
          <div className="mx-2 my-2 flex-column  fit">    
            <span className=" project-title">A Movie Database Search Site</span>  
                <a className="flex-row" href="https://mwpx777.github.io/Movie-Database-Search/">
                    <img className="rounded borderimg flex-row" style={{width:"50%",height:"50%"}} alt="project 1 Movie Database search"src={project1}></img></a>
          <div className="eachproject project-link flex-row ">
              <a className="one mx-1 project-link " href="https://github.com/mwpx777/Movie-Database-Search">GitHub</a>
              <a className="one mx-1 project-link" href="https://mwpx777.github.io/Movie-Database-Search/">Deployed Website</a>
         </div></div>

         {/* proj 2 */}
         <div className="flex-column mx-2 my-2">
            <span className=" project-title right">...That One Answer</span>     
                <a className="right" href="https://salty-spire-96574.herokuapp.com/">
                     <img className="rounded right borderimg" style={{width:"55%", height:"55%"}} alt="project 2 That one answer for your questions website"src={project2}></img></a>
          <div className="eachproject project-link flex-row right ">
              <a className="one mx-1 project-link right" href="https://github.com/AdamR-Work/That-One-Answer">GitHub</a>
              <a className="one mx-1 project-link right" href="https://salty-spire-96574.herokuapp.com/">Deployed Website</a>
         </div></div></div>
        
         {/* 3 */}
         <div className="flex-column mx-2 my-2 fit">      
              <span className=" project-title2">PWA Travel Checkbook</span>     
                <a className="" href="https://guarded-stream-98230.herokuapp.com/">
                  <img className="rounded borderimg" style={{width:"50%",height:"50%"}} alt="PWA, works offline and online"src={project3}></img></a>
          <div className="eachproject project-link flex-row ">
              <a className="one mx-1 project-link " href="https://github.com/AdamR-Work/mobile-budget">GitHub</a>
              <a className="one mx-1 project-link" href="https://guarded-stream-98230.herokuapp.com/">Deployed Website</a>
         </div></div>

        {/* 4 */}
      <div className="flex-column mx-2 my-2">      
          <span className=" project-title right">Run Buddy</span>     
            <a className="right" href="https://adamr-work.github.io/run-buddy/">
              <img className="rounded right borderimg" style={{width:"55%", height:"55%"}} alt="Website for people to contact other runners"src={project4}></img></a>
          <div className="eachproject project-link flex-row right ">
              <a className="one mx-1 project-link right" href="https://github.com/AdamR-Work/run-buddy">GitHub</a>
              <a className="one mx-1 project-link right" href="https://adamr-work.github.io/run-buddy/">Deployed Website</a>
         </div></div>

         {/* 5 */}
         <div className="flex-column mx-2 my-2 fit">     
            <span className=" project-title2">Inventory-Server using Sequelize</span>  
                <a className="" href="https://drive.google.com/file/d/1RnvnqjPsiBK0WTfHrOkGSNBnl6IQBCWh/view">
                  <img className="rounded borderimg" style={{width:"50%",height:"50%"}} alt="inventory server using sequelize to access and make changes"src={project5}></img></a>
          <div className="eachproject project-link flex-row ">
              <a className="one mx-1 project-link " href="https://github.com/AdamR-Work/inventory-server-sql">GitHub</a>
              <a className="one mx-1 project-link" href="https://drive.google.com/file/d/1RnvnqjPsiBK0WTfHrOkGSNBnl6IQBCWh/view">Deployed Website</a>
         </div></div>

         {/* 6 */}
         <div className="flex-column mx-2 my-2 fit">  
              <span className=" project-title2 right">Timed Javascript Test</span>      
                  <a className="right" href="https://adamr-work.github.io/java-quiz/">
                    <img className="rounded right borderimg" style={{width:"55%", height:"55%"}} alt="project 2 That one answer for your questions website"src={project2}></img></a>
          <div className="eachproject project-link flex-row right ">
              <a className="one mx-1 project-link right" href="https://github.com/AdamR-Work/java-quiz">GitHub</a>
              <a className="one mx-1 project-link right" href="https://adamr-work.github.io/java-quiz/">Deployed Website</a>
         </div></div>
         
        </div>
        <a   className="center" href='#Resume' 
      onClick={() => setCurrentNav("Resume")}
      >To the Resume</a>
    </section>
  );
}

export default Projects;
