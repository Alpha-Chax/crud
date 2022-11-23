import React from 'react'
import { useHistory } from 'react-router-dom'
import '../Styles/Signup.css'

const Signup = () => {
    let history = useHistory()
    const handlesubmit = ()=>{
        history.push("/")
    }
  return (
    <>
    <div className="container-s">
        <div className="Card-sign">
            <div className="line1"></div>
            <div className="text-s">
            <h1 className='title-s'>CRUD OPERATIONS</h1>
            <h2 className='signin-s'>SIGN IN</h2>
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
                <button onClick={handlesubmit} className='sign-in-btn' type='submit'>SIGN IN</button>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup