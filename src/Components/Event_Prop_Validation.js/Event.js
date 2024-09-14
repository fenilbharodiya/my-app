import React from 'react';

const handelClick = () => console.log("Clicked");


export default function EventComponent() {
    return (
        <>
            <h1>Events</h1>
            <button onClick={handelClick}>Click</button>
            <button onClick={() => alert ('Alert Clicked')}>Alert</button>
        </>
    )
}