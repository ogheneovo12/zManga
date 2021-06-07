import React from "react";
import "./hero.scss";
import heroImg from "./animeboys.png";

function Hero(props) {
  return (
    <div className='hero'>
      <div class='stars'></div>
      <div className='inner'>
        <div className='hero_img'>
          <img className='float' src={heroImg} alt='heroimg' />
        </div>
        <div className='hero_text float'>
          <h1>Zmanga the place for your world wide anime</h1>
          <p>sasayego, sasa yego 娯楽</p>
          <div className='cta-buttons'>
            <a href='/login'>Login</a>
            <a className='ghost' href='/login'>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {};

export default Hero;
