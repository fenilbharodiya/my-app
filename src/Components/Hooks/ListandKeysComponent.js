import React from 'react'

export default function ListandKeysComponent() {

  let items = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
      <ul>
        {items.map((value,index) =>
          <li key={index}>{value}</li>
        )}
      </ul>
    </div>
  )
}
