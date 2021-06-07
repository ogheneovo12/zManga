import React from "react";
//mport PropTypes from 'prop-types'

function Card({ url, image_url, title, index, onLoad }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    onLoad(ref.current);
  }, [onLoad]);
  
  return (
    <div className='anime_card' ref={ref}>
      <div className='image_region'>
        <img src={image_url} alt='manga card' />
      </div>
      <div className='info_region'>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
