import React, { useState } from 'react'

export default function SimpleFormValidation() {

  const [value, setValue] = useState({});
  const [error, setError] = useState({});


  handelSubmit = (event) => {
    event.preventDefault()
    console.log(value);
    
    if (value.username == "") {
      alert("user name is empty")
      return;
    }
    console.log(value);
    
  
  };

  const handelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;


    setValue((values) => ({...values, [name]: value}))
  }

 

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>Enter Your Name:</label>
        <input type='text' name='name' value={name} onChange={handelChange} />
        <input type="submit" />
      </form>
    </div>
  )
}
