import React from 'react';
import useCounter from './useCounter';


export default function CounterComponent() {

    const { count, increment, decrement } = useCounter(0);


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}