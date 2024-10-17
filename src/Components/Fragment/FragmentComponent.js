import React, { Fragment } from 'react'

export default function FragmentComponent() {

  let name = ['fenil', 'yash', 'harsh', 'deep'];
  return (
    <>
      {name.map((value, index) =>
        <Fragment key={index}>
          {value}
        </ Fragment >
      )}
    </>
  )
}
