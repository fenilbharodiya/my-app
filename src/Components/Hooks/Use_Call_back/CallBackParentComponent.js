import React, { useState, useCallback } from 'react';
import CallBackChildComponent from './CallBackChildComponent';


export default function CallBackParentComponent() {

    const [count, setCount] = useState(0);


    const increment = useCallback(() => {

        setCount((prevCount) => prevCount + 1);

    }, []);

    return (

        <div>

            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <CallBackChildComponent increment={increment} />

        </div>

    );
}
