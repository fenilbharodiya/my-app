import React from "react";


const handelClick = () => console.log('On Clicked');
const handelClickwithparams = (param) => console.log(param);



export default function EventComponent1 () {
    return (
        <>
            <h1>Event</h1>
            <button onClick={handelClick}>onClick Event</button>
            <button onClick={() => handelClickwithparams('this is params of click event')}>Event With Params</button>
            <button onMouseOver={() => console.log('mouse over')}>Mouse Over</button>
            <button onClick={() => alert('clicked on alert btn')}>Alert Button</button>
            <button onMouseEnter={(event) => console.log(event)}>Mouse Enter</button>
        </>
    )
}