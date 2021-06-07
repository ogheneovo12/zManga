import React from "react";
//import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { animeActions } from "../../_factory/_actions";
import "./Search.scss"
function Search() {

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.animes.searchTerm);

  const onchange = ( e ) =>{
      dispatch( animeActions.onSearchTermChange( e.target.value) )
  }

  const handleSearch = ( e ) =>{
     e.preventDefault();
     dispatch( animeActions.fetchAnime() )
  }
  

  return (
    <div className='zmanga_search'>
      <input
        value={searchTerm}
        type='text'
        className='zSearch'
        placeholder='search for your best'
        onChange={ onchange }
      />
      <button onClick={ handleSearch } >GO</button>
    </div>
  );
}

Search.propTypes = {};

export default Search;
