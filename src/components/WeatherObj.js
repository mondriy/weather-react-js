import React from 'react'
import './WeatherObj.css'

function WeatherObj(props) {
    return (
        <div className="weather__object">
            <div className="weather__object-value">{props.value}°</div>
        </div>
    )
}

export default WeatherObj
