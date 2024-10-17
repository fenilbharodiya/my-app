import React from 'react'
import Component_3 from './Component_3'

export default function Component_2(props) {
    return (
        <div>
            <h1>Component_2</h1>
            <h1>{props.name}</h1>
            <Component_3 name={props.name} />
        </div>
    )
}
