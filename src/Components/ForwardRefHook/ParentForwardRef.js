import React, { useRef } from 'react'
import ChildForwrdRef from './ChildForwardRef';

export default function ParentForwardRef() {
    let inputRef = useRef();
  return (
    <div>
      <ChildForwrdRef ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus input</button>
    </div>
  )
}
