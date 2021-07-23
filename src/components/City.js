import React from 'react'
import './City.css'

function City(props) {
    return (
        <div className="city">
            {props.name}
        </div>
    )
}

export default City
