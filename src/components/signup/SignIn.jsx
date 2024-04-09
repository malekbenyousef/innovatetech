import React from 'react'
import './SignIn.css'
function SignIn() {
    return (
       <div className="sign-up">
        <div className='signcont'>
            <h2>
                CREATE AN ACCOUNT
            </h2>
            <form action="#" type="submit">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Repeat Your Password'/>
            </form>
            <div className="input-terms">
                <input type="checkbox" name="checkbox"  />
                I agree to the the <a href='/'>Terms and Condtions</a>
            </div>
            <button className="loginbtn">
                REGISTER
            </button>
            <h3>
                Alrady have an account?<a href="/login">Login Here</a>
            </h3>
            </div>
       </div>
    )
}

export default SignIn