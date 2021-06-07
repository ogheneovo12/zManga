import React from "react";

//import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { animeActions } from "../../_factory/_actions";
import { isElementInViewport } from "../../_helpers";
import Card from "./Card";
import "./style.scss";

function AnimeCard({ children }) {
  const dispatch = useDispatch();
  const { fetched, loading, error, isLoadingMore } = useSelector(
    (state) => state.animes
  );

  const handleLoadMore = (e) => dispatch(animeActions.loadMore());
  const refs = React.useRef([]);

  function appendRef(newRef) {
    if (Array.isArray(refs.current)) {
      refs.current.push(newRef);
      return;
    }
    refs.current = [newRef];
  }

  const animateCardsInView = () => {
     if(!refs.current) return;
    refs.current.forEach(function (element) {
      if (!element) return;
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });
  };

  React.useEffect(() => {
    animateCardsInView();
    window.addEventListener("scroll", animateCardsInView);
    return () => {
      window.removeEventListener("scroll", animateCardsInView);
    };
  }, []);

  React.useEffect(() => {
    if (loading || isLoadingMore) {
      //clear refs as cards component will be destroyed
      refs.current = false;
    } else {
      animateCardsInView();
    }
  }, [loading, isLoadingMore, children]);

  function displayResult() {
    if (loading) {
      return <h1>loading...</h1>;
    }

    if (error) {
      return <h1>oops {error}...</h1>;
    }

    return fetched?.length ? (
      <>
        <div className='anime_card_grid'>
          {fetched.map((props) => (
            <Card onLoad={appendRef} key={props.mal_id} {...props} />
          ))}
        </div>
        <button disabled={isLoadingMore} onClick={handleLoadMore}>
          {isLoadingMore ? "loading" : "load more"}{" "}
        </button>
      </>
    ) : (
      <h1>
        <p>{fetched}</p>suzhou no anime was found
      </h1>
    );
  }
  return <div className='anime_card_container'>{displayResult()}</div>;
}

AnimeCard.propTypes = {};

export default AnimeCard;
