import React from 'react';
import '../../styles/sign.css';
import { BiRightArrowAlt } from 'react-icons/bi';

const SignIn = () => {
  return (
    <div className="sign-container">
      <div className="signImage"></div>
      <div className="sign-form">
        <div className="form-label">
          <h2>Sign In</h2>
        </div>
        <div className="form">
          <div className="form-element">
            <label>Email</label>
            <input className="input-container" type="email" placeholder="abcd@xyz" />
          </div>
          <div className="form-element">
            <label>Password</label>
            <input type="password" className="input-container" placeholder="*******" />
          </div>
        </div>
        <div className="sign-btn">
          <a href="./signin" type="submit" className="btn sign-btn1">
            <span>Connect</span>
          </a>
          <a href="./signup" type="submit" className="btn sign-btn2">
            <span>Create a new account</span>
            <BiRightArrowAlt />
          </a>
        </div>
        <div className="sign-btn">
          <a href="./forgotpassword" type="submit" className="btn sign-btn2">
            <span>Forgot your password?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
