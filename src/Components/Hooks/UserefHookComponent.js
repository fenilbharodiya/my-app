import React, { useRef } from 'react'

export default function UserefHookComponent() {

    const inputElement = useRef()
    const h1 = useRef()
    const h2 = useRef()


    const focusInput = () => {
        console.log(inputElement);
        inputElement.current.focus();
        h1.current.style.color = "red"
        h2.current.style.color = "blue"
        
    }
  return (
    <div>
        <h1 ref={h1}>UseRef Hook</h1>
        <h2 ref={h2}>HELLO WORLD!</h2>
        <input type='text' ref={inputElement} />
        <button onClick={focusInput}>Focus input</button>
    </div>
  )
}
