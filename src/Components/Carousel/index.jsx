import React from "react";
import Carousel from "./Carousel";
import {  useSelector } from "react-redux";


function CarouselContainer(props) {
  const { genres, selectedGenre } = useSelector((state) => state.carousel);
  const data = genres[selectedGenre]?.animes || [];
//   const dispatch = useDispatch()

  function onActive(selectedIndex){
        // dispatch(carouselActions.pickAnime(selectedIndex))
  }
  return <Carousel data={data} onActive={onActive}/>;
}

CarouselContainer.propTypes = {};

export default CarouselContainer;
