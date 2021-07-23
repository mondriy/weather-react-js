import React from 'react'
import './Description.css'

function Description(props) {
    return (
        <div className="description">
            {props.text}
        </div>
    )
}

export default Description
