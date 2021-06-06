import React from 'react';
import './card.styles.css'

function Card(props) {
    return (
        <div className={`Custom-card ${props.customClass}`}>
            {props.children}
        </div>
    );
}

export default Card;