import React from 'react'
import {BiRightArrowAlt} from  "react-icons/bi";
function SignUp() {
  return (
   
    <div className='sign-container'>
        
        <div className='signImage'> </div> 

        <div className='sign-form'>

            <div className='form-label'><h2>Sign Up : </h2></div>

            <div className="form">

                <div className='form-element'>
                    <label>Full Name</label>
                    <input className ="input-container" type="text" placeholder='john doe' />
                </div>

                <div className='form-element'>
                    <label>Email</label>
                    <input type="text" className ="input-container"  placeholder='johndoe@gmail.com' />
                </div>

                <div className='form-element'>
                    <label>Username</label>
                    <input type="text" className ="input-container"  placeholder='john123' />
                </div>
                <div className='form-element'>
                    <label>Password</label>
                    <input type="password" className ="input-container" placeholder='***************' />
                </div>
                <div className='form-element'>
                    <label>Password</label>
                    <input type="password" className ="input-container"  placeholder='***************' />
                </div>
            </div>
            
            <div className='sign-btn'> 
                <a href='./signup' type="submit" className='sign-btn1 btn'> <span>Sign Up</span> </a> 
                <a href='./signin' type="submit" className='btn sign-btn2' > <span>Sign In</span><BiRightArrowAlt/></a> 

            </div>

        </div>
    </div>
 )
}

export default SignUp