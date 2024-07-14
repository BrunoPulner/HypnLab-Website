import React from 'react';
import './css/Home.css';

function Home() {
    return (
        <section id="home">
            <img src="../../img/Site/fundo2.png" alt="Background" className="background-image"/>
            <div className='Home-content'>
                <div className='text-home'>
                    <h1>Hyping dreams</h1>
                    <p>Explore the frontier of gaming where your deepest dreams shape reality. 
                        At HypnLab, we're not just developing games; we're crafting experiences, immersive worlds that respond to your imagination and choices, 
                        where every decision opens a realm of possibilities, and every player's journey is uniquely their own. Join us in redefining what it means to game with groundbreaking 
                        creativity and a community-driven approach, and let's make our dreams come true together.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;
