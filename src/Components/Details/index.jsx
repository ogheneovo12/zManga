import React from 'react'
import Details from './Details'
import { useSelector } from 'react-redux'

function DetailsContainer(props) {
    const { genres, selectedGenre, selectedIndex } = useSelector( state => state.carousel );
    const picked = genres[selectedGenre]?.animes[selectedIndex] || {}

    return (
        <div className="DetailsContainer">
            <Details {...picked } />
        </div>
    )
}

DetailsContainer.propTypes = {

}

export default DetailsContainer

