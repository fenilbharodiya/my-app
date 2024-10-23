import React, { createContext, useState } from 'react'
import ContextChildComponent from './ContextChildComponent';

export const UserContext = createContext();



export default function ContextParentComponent() {
  const [user, setUser] = useState("Fenil")
  return (
    <div>
      <UserContext.Provider value={user} >
          <h1>{`Hello ${user}`}</h1>
          <ContextChildComponent />
      </UserContext.Provider>
    </div>
  )
}
