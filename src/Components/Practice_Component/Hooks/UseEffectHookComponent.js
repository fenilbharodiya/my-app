import React, { useEffect } from "react"
import { useState } from "react"


export default function UseEffectHookComponent() {
    const [count, setcount] = useState(0)
    const [name, setName] = useState('Default Name');
    // useEffect(() => {
    //     console.log("hello");
    //     console.log(count);
    // })

    useEffect(() => {
        console.log('Component Mounted!');
        
    },[])

    useEffect(() => {
        console.log(name);
        
    }, [name])



    const handelInput = (e) => {
        setName(e.target.value)
    }

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setcount((count) => count + 2)
        }, 2000);

        return () => clearTimeout(timer)
    }, [])


    return (
        <div>
            <button onClick={() => setcount(count + 1)}>increaseCount</button>
            <input onChange={handelInput} value={name} />
            
        </div>
    )
}