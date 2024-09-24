import React, { useEffect } from "react"
import { useState } from "react"


export default function UseEffectHookComponent() {
    const [count, setcount] = useState(0)

    useEffect(() => {
        console.log("hello");
        console.log(count);
    })


    return (
        <div>
            <button onClick={() => setcount(count + 1)}>increaseCount</button>
            
        </div>
    )
}