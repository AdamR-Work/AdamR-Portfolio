import React from 'react';

function Resume(props) {
  const {setCurrentNav}=props;

  return (
    <section className="my-5 ">
      <h1 id="about">Resume</h1>

      <a   href='#Contact' 
      onClick={() => setCurrentNav("Contact")}
      >Contact me</a>
    </section>
  );
}

export default Resume;
