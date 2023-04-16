import React from 'react';
import fam from '../assets/images/fam.jpeg';
const About = () => {
  return (
    <div id='aboutContainer'>
      <h1 className='about'>About Us</h1>
      <img id='famImg' className='about' src={fam}></img>
      <p className='about aboutText' id='aboutText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor.</p>
    </div>
  );
};

export default About;