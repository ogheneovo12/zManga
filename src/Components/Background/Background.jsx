import React from "react";
//import PropTypes from "prop-types";
import "./Background.scss";


function Background({ background, style }) {
  return (
    <div className='background_wrapper'>
      <div ref={background} className='background_container zoom' style={style}></div>
    </div>
  );
}

Background.propTypes = {};

export default Background;
