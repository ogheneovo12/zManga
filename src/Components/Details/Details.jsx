import React from "react";
import "./Details.scss";
//import PropTypes from 'prop-types'

function Details({ title, synopsis, url, episodes, airing_start, genres }) {
 
  const [readMore, setReadMore] = React.useState(true);
  const toggleReadMore = () => setReadMore(!readMore);
  const className = readMore ? "shortened" : "";

  function displayGenres(){
      return (
          <ul className="genres_list">
            { genres && genres?.map( ({ name, mal_id})=> ( <li key={mal_id}>{name}</li>))}
          </ul>
      )

  }

  return (
    <div className='details'>
      <h2 className='title'>{title} </h2>
      <div className='basic_info'>
        <p>EPISODES: {episodes}, </p>{" "}
        <p>AIRED {new Date(airing_start).toLocaleDateString()} </p>
      </div>
      <p className={`synopsis ${className}`}>
        {synopsis}
      </p>
      <p  className="elipsis" onClick={toggleReadMore}>...{readMore ? "see more" : "see less" } </p>
      {/* genres */}
       { displayGenres() }
      <a className="cta" href={url}> Go To Anime </a>
    </div>
  );
}

Details.propTypes = {};

export default Details;
