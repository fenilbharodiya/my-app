import PropTypes from 'prop-types';
import React from 'react';


export default function ChildComponent (props) {
    return (

        <>
            <h1>Child Component</h1>
            <p>{props.name}</p>
            <p>{props.count}</p>
        </>
    )
}


ChildComponent.propType = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number,
}