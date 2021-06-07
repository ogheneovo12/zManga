import React from "react";
import PropTypes from "prop-types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./Menu.scss";

function Menu({ menues, active, onChosen }) {
  return (
    <Splide
      className='menu'
      options={{ width: 300, perPage: 3, pagination: false, cover: true }}>
      {menues &&
        menues.map((menu) => (
          <SplideSlide className={menu === active ? "chosen" : ""} key={menu}>
            <span onClick={() => onChosen(menu)}> {menu}</span>
          </SplideSlide>
        ))}
    </Splide>
  );
}

Menu.propTypes = {
  menues: PropTypes.array,
  active: PropTypes.string,
};

export default Menu;
