import React from 'react'
import { AnimeCard, Zsearch } from '../../Components';
import "./styles.scss";

function ZManga(props) {
    return (
        <div className="zManga">
             <Zsearch />
             
             {/* Anime card list  */}
             <AnimeCard />

             {/* Full details popup */}   
             {/* scroll to top button */}
        </div>
    )
}

ZManga.propTypes = {

}

export default ZManga

