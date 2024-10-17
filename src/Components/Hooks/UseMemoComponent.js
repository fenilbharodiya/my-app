import React, { useMemo, useState } from 'react'

export default function UseMemoComponent() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(10);


    const expensiveResult = useMemo(() =>{
        console.log("Calculating....");

        return value * 2;
        
    });
  
  
    return (
    <div>
      <h1>Expensive CalCulation Component</h1>
      <p>Count: {count}</p>
      <p>Expensive CalCulation Result: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setValue(value + 1)}>Change value</button>
    </div>
  )
}
