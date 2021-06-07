import React from "react";
//import PropTypes from "prop-types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import "./style.scss";

function Carousel({ data, onActive }) {

    function handleonActive(activeSlide){
        onActive(activeSlide.index)
    }
    function onClick(clickedSlide){
        console.log(clickedSlide.index)
    }
    
  return (
    <div className='carousel'>
      <Splide
        className="carousel_slide"
        onActive={ handleonActive }
        onClick = { onClick }
        options={{
          rewind: true,
          width: 600,
          gap: "5px",
          perPage : 2,
          pagination: false,
          lazyLoad:true,
          perMove:1,
          breakpoints:{
              540:{
                perPage : 1,
              }
          }
        }}>
          { data && data.map(  ({ title, mal_id, image_url})=>(
              <SplideSlide key={mal_id} >
                  <CarouselCard  img={image_url} />
              </SplideSlide>
          ))}
      </Splide>
    </div>
  );
}

function CarouselCard({ img }) {
  // const style = { backgroundImage: `url(${img})` };
  return (
    <div className='carousel_card'>
      <img className='image' src={img} alt='carousel_image' />
      <h4>title</h4>
    </div>
  );
}

Carousel.propTypes = {};

export default Carousel;
