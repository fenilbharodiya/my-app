import React from 'react';


export default function CallBackChildComponent({ increment }) {

    console.log('ChildComponent rendered');

    return (

        <div>
            
            <h2>Child Component</h2>
            <button onClick={increment}>Increment from Child</button>

        </div>

    );
}
