import React from 'react'
import './Humidity.css'

function Humidity(props) {
    return (
        <div className="humidity">
            <div className="humidity-value">{props.value}%</div>
            <img alt="humidity" src="./images/humidity.svg" className="humidity-image"></img>
        </div>
    )
}

export default Humidity
