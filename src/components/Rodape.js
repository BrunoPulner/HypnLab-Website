import React from 'react';
import './css/Rodape.css';
import FacebookIcon from '../img/icons-media/Icons/facebook.svg';
import InstagramIcon from '../img/icons-media/Icons/instagram.svg';
import WhatsAppIcon from '../img/icons-media/Icons/whatsapp.svg';
import DiscordIcon from '../img/icons-media/Icons/discord.svg';
import Reddit from '../img/icons-media/Icons/reddit.svg';
import XIcon from '../img/icons-media/Icons/x.svg';
import ThreadsIcon from '../img/icons-media/Icons/Threads.svg';
import TiktokIcon from '../img/icons-media/Icons/tik-tok.svg';
import YoutubeIcon from '../img/icons-media/Icons/youtube.svg';
import TwitchIcon from '../img/icons-media/Icons/twitch.svg';
import GithubIcon from '../img/icons-media/Icons/github.svg';
import LinkedinIcon from '../img/icons-media/Icons/linkedin.svg';




function Rodape() {
  return (
    <section id="rodape">
      <div className='rodape-content'>
        <h5>© 2024 by HypnLab</h5>


        <div className='icons-media'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/hypnlab/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={WhatsAppIcon} alt="WhatsApp" />
          </a>

          <a href="https://discord.gg/kjzf9ua7nY" target="_blank" rel="noopener noreferrer">
            <img src={DiscordIcon} alt="Discord" />
          </a>

          <a href="https://www.reddit.com/r/HypnLab/" target="_blank" rel="noopener noreferrer">
            <img src={Reddit} alt="Reddit" />
          </a>

          <a href="https://x.com/hypnlab" target="_blank" rel="noopener noreferrer">
            <img src={XIcon} alt="X" />
          </a>

          <a href="https://www.threads.net/@hypnlab" target="_blank" rel="noopener noreferrer">
            <img src={ThreadsIcon} alt="Threads" />
          </a>

          <a href="https://www.tiktok.com/@hypnlab" target="_blank" rel="noopener noreferrer">
            <img src={TiktokIcon} alt="TikTok" />
          </a>

          <a href="https://www.youtube.com/@HypnLab" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeIcon} alt="Youtube" />
          </a>

          <a href="https://www.twitch.tv/hypnlab" target="_blank" rel="noopener noreferrer">
            <img src={TwitchIcon} alt="Twitch" />
          </a>

          <a href="https://github.com/HypnLab" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="Github" />
          </a>

          <a href="https://www.linkedin.com/company/hypnlab" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="Github" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Rodape;
