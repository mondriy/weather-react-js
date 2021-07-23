import React from 'react'
import './Windy.css'

function Windy(props) {
    return (
        <div className="windy">
            <div className="windy-value">{props.value}M/S</div>
            <img alt="windy" src="./images/windy.svg" className="windy-image"></img>
        </div>
    )
}

export default Windy
