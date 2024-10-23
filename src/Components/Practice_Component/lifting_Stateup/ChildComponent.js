import React, { useState } from 'react'

export default function ChildComponent({sendData}) {
    const [count, setCount] = useState(0)

    const decrease = () =>{
        const newdata = count - 1;
        setCount(newdata);
        sendData(newdata);
    }

  return (
    <div>
      <button onClick={decrease} >DECREASE</button>
    </div>
  )
}
