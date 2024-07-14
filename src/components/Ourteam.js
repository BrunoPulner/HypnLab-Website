import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './css/Ourteam.css';
import bruno from '../img/Site/bruni.png';
import lucas from '../img/Site/lusca.pngs';
import marcela from '../img/Site/cherry.png';

function Ourteam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000

  };
  

  return (
    <section id="ourteam">
      <div className='container-team'>
        <div className='text-team'>
          <h4>Our Team</h4>
          <p>At HypnLab, our strength lies in our team—an eclectic trio of passionate gamers and innovative thinkers dedicated to pushing the boundaries of gaming. Each member brings a unique blend of expertise and vision, driving us forward in our mission to craft immersive, narrative-rich gaming experiences that captivate and inspire.</p>
        </div>
        <Slider {...settings} className='carousel-team'>

        <div className='lucas'>
            <img src={lucas} alt='Lucas'/>
            <h10>CEO</h10>
            <h9>Lucas Carrijo</h9>
            <p>Lucas guides HypnLab with a strategic vision and a deep love for gaming. His entrepreneur spirit and innovative approach fuel our mission to redefine gaming, making every experience uniquely engaging.</p>
          </div>
          
          <div className='marcela'>
            <img src={marcela} alt='Marcela'/>
            <h10>CPO</h10>
            <h9>Marcella Syrdahl</h9>
            <p>Marcella's creativity knows no bounds. As CPO, she not only crafts captivating game designs but also expertly manages our team. Her exceptional leadership ensures that our visions beautifully translate into reality.</p>
          </div>
          
          <div className='bruno'>
            <img src={bruno} alt='Bruno'/>
            <h10>DEV</h10>
            <h9>Bruno Pulner</h9>
            <p>Bruno transforms creative visions into technical realities. His expertise in programming and graphics ensures our games are not only engaging but cutting-edge, setting new standards in gaming technology.</p>
          </div>
         
        </Slider>
      </div>
    </section>
  );
}

export default Ourteam;
