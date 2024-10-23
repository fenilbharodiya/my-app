import React from 'react'
import Component_2 from './Component_2';

export default function Component_1() {
    const name = 'test user';
    return (
        <div>
            <h1>Component_1</h1>
            <h1>{name}</h1>
            <Component_2 name={name} />
        </div>
    )
}
