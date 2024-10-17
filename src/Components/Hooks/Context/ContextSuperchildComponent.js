import React, { useContext } from 'react'
import { UserContext } from './ContextParentComponent'

export default function ContextSuperchildComponent() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{`Super Child ${user}`}</h1>
    </div>
  )
}
