import React from "react";
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import "./navigation.scss";
function Navigations(props) {
  const [scrolled, setScr] = React.useState(false);

  React.useEffect(() => {
    const changeBg = () => {
      if (window.scrollY > 20) {
        setScr(true);
      } else {
        setScr(false);
      }
    };

    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);
  return (
    <div className={`navigations ${scrolled ? "bgblack" : ""}`}>
      <div className='nav_wrapper'>
        <div className='logo'>
          <h1>Zmanga</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/zfind'>zsearch</Link>
            </li>
            <li>
              <Link to='/categories'>categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

Navigations.propTypes = {};

export default Navigations;
