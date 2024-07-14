// src/components/About.js
import React from 'react';
import './css/About.css';


function About() {
  return (
    <section id="about">
      <div className='container-about'>
        <div className='about-text'>
          <h2>About Us</h2>
          <p>Founded by visionaries and built by passioned dreamers, HypnLab is a place where imagination meets reality. Founded by gaming friends that turned into real life besties,
          our team is dedicated on the art of forging creative and immersive experiences. We grew tired of games that never listened to the community, at HypnLab, we're not just making games; 
          we're crafting worlds where every player's dream can become reality.</p>
        </div>

        <div className='about-img'>
          <div className='vision'>
            <h3>VISION</h3>
            <p>To revolutionize gaming by infusing every game with innovation, imagination, and interactivity.
            We aspire to lead the evolution of gaming, making HypnLab synonymous with groundbreaking experiences that push the boundaries of what games can be.</p>
          </div>

          <div className='mission'>
            <h3>MISSION</h3>
            <p>Our mission is to create immersive games that not only entertain but also engage and inspire players around the world. We aim to blend storytelling, technology,
            and art in unique ways to foster meaningful connections and memorable experiences.</p>
          </div>

          <div className='values'>
            <h3>VALUES</h3>
            <p>Driven by Innovation, Community, and Integrity. We pioneer advanced gaming technologies and creative storytelling to offer unprecedented experiences.
            Our community is our foundation, and we strive to foster an inclusive, responsive environment that empowers players.
            Integrity guides our actions, ensuring transparency and honesty in every interaction. We are committed to making a positive impact both in the virtual and real world,
            believing that our games can inspire change and promote a greater good.</p>
          </div>

          <div className='goals'>
            <h3>GOALS</h3>
            <p>Looking ahead, we aim to diversify our game portfolio, fostering a robust community of players who are not just entertained but also engaged in making a positive impact. 
            Our ultimate ambition is to leverage our platform and innovations to contribute meaningfully to social and environmental causes, promoting a better real world alongside 
            our visionary digital worlds.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;
