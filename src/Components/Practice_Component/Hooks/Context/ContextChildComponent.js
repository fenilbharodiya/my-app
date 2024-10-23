import React, { useContext } from 'react'
import { UserContext } from './ContextParentComponent'
import ContextSuperchildComponent from './ContextSuperchildComponent'
 

export default function ContextChildComponent() {
  const user = useContext(UserContext)
  return (
    <div>
      <h1>{`Child ${user}`}</h1>
      <ContextSuperchildComponent />
    </div>
  )
}
