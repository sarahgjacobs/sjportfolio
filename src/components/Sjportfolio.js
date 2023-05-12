import React from 'react';


function About() {
  const showSecondSection = () => {
    const secondSection = document.getElementById('welcome-page');
    secondSection.style.display = 'block';
  }

  return (
    <section>
      <h1 id="falling-welcome" onAnimationEnd={showSecondSection}></h1>

      <section id="welcome-page">
        <h1>Welcome to My Portfolio!</h1>
        <h2>I'm Sarah Jacobs, a <i>Software Engineer</i> based in Atlanta, GA. I have a strong background in communication, digital media, and leadership which I've combined with a Coding certification from Georgia Tech Bootcamps. Now I am currently seeking roles in the tech industry ranging from Development to Databases. Click <a href="/about">here</a> to see more of my experience and languages, then head over to the <a href="/projects">projects</a> tab to see it all in action.</h2>
        {/* <div id="picture-container">
          <img src="../img/profilepic.jpg" alt="Profile picture" />
          
        </div> */}
      </section>

    </section>
  );
}

export default About;

