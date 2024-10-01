import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    const [count, setcount] = useState(0)

    const decrease = (e) => {
        setcount(e)
    }

    return (
        <div>
            <h1>PARENT COMPONENT</h1>
            <p>{count}</p>
            <ChildComponent sendData={decrease} />
        </div>
    )
}
