import React from 'react'
//import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Background from './Background'

function BgContainer(props) {
     const background = React.useRef(null);
    const { genres, selectedGenre } = useSelector(state => state.carousel )
    
    const style = {
        backgroundImage:`linear-gradient( to right, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.1) 100%), url(${genres[selectedGenre]?.wallPaperUrl})`
    }

    React.useEffect(()=>{
        if (background.current?.classList.contains("zoom")) {
            background.current?.classList.remove("zoom");
          }
          setTimeout(() => {
            background.current?.classList.add("zoom");
          }, 100);
    },[selectedGenre, genres])

    return (
        <div>
            <Background style={ style } background={background} />
        </div>
    )
}

BgContainer.propTypes = {

}

export default  BgContainer;

