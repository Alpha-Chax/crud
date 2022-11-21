import React from 'react'
import '../Styles/Signup.css'

const Signup = () => {
  return (
    <>
    <div className="container">
        <div className="Card">
            <div className="line1"></div>
            <div className="text">
            <h1 className='title'>CRUD OPERATIONS</h1>
            <h2 className='signin'>SIGN IN</h2>
            <h4 className='small-text'>Enter your credentials to access your account</h4>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="text" name='email' id='email' placeholder='Enter your email' required/>
                </div>
                <div className='pw'>
                    <label htmlFor="password">Password</label><br />
                    <input type="text" name='password' id='password' placeholder='Enter your password' required/>
                </div>
                <button type='submit'>SIGN IN</button>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup