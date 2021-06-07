import React from "react";
import { useDispatch } from "react-redux";
import { Background, Details, Menu, SmoothCarousel } from "../../Components";
import { carouselActions } from "../../_factory/_actions";
import "./Carousel.scss";

function Carousel(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    //alert("hello")
    dispatch(carouselActions.fetchAllGenres());
  }, [dispatch]);

  return (
    <div className='carousel_page'>
      <Background />
      <div className='main'>
        <Details />
        <div>
          <Menu />
         <SmoothCarousel />
         </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {};

export default Carousel;
