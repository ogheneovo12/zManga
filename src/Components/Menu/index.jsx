import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { carouselActions } from "../../_factory/_actions";

import Menu from "./Menu";

function MenuContainer(props) {
  const { genres, selectedGenre } = useSelector((state) => state.carousel);
  const dispatch = useDispatch();

  function onChosen(genre) {
    dispatch(carouselActions.selectGenre(genre));
  }
  return (
    <Menu
      active={selectedGenre}
      menues={Object.keys(genres)}
      onChosen={onChosen}
    />
  );
}

MenuContainer.propTypes = {};

export default MenuContainer;
