import React from 'react';
import './Icon.css'

const iconVals = {
    incomplete: "!",
    complete: "\u2713",
    exported: "→"
}

const Icon = ( props ) => {
    return <div className={`icon ${props.status}`}><span>{props.content ? props.content : iconVals[props.status]}</span></div>
}

export default Icon;