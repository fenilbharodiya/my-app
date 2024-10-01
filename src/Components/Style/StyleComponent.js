import React from 'react'
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.css'
import Style from './Style.module.css'

export default function StyleComponent() {
  return (
    <div>
      <h1 style={{color:"red"}}>HELLO WORLD!</h1>
      <h2 className={"text"}>HELLO <br /> WORLD!</h2>
      <h1 className='text-danger'>BOOTSRATP</h1>
      <h2 className={Style.text}>HELLO WORLD!</h2>


    </div>
  )
}
