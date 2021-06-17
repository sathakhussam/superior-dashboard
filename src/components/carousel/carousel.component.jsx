import React from 'react';
import './carousel.styles.css'

const Carousel = (props) => {
    return ( 
        <div class="slider">
               {/* Header For  */}
            {
                    props.images.map((val, idx) => {
                        return (
                            <a href={`#slide-${idx+1}`}>{idx+1}</a>
                        )
                    })
                }
            <div class="slides">

                {
                    props.images.map((val, idx) => {
                        return (
                            <div style={{background: `url(${val}) center center/cover`}} id={`slide-${idx + 1}`}>
                                {/* <img className="CarouselImages" src={val.url} alt="" /> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Carousel;