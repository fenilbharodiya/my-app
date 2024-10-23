import React from 'react'

export default function Form() {
    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Your Name:
                   
                        <label htmlFor="Email">Email :-</label>
                        <input 
                        type="username" 
                        name='Username' value={value.username || ""}
                        type="email" 
                        name='email' 
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete='on'
                        />
                    
                </label>

                <label>
                    Enter your age:
                    {error.email && <span style={{color:"red"}}>{error.email}</span>}

                </label>
            </form>
        </div>
    )
}
