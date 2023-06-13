import React, { useState } from 'react';
import SignUpCoach from './SignUpCoach';
import SignUpEntrep from './SignUpEntrep';
import SignUpPart1 from './SignUpPart1';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';

function SignUp() {
  const [signUp, setSignUp] = useState(true);
  const [coachSignUp, setCoachSignUp] = useState(false);
  const [entrepreneurSignUp, setEntrepreneurSignUp] = useState(false);

  const handleCoachClick = () => {
    setSignUp(false);
    setCoachSignUp(true);
    setEntrepreneurSignUp(false);
  };

  const handleEntrepreneurClick = () => {
    setSignUp(false);
    setCoachSignUp(false);
    setEntrepreneurSignUp(true);
  };

  return (
    <div className='sign-container'>
      <div className='signImage'></div>

      <div className='sign-form'>
        

        {signUp ? (
          <>
            <SignUpPart1 />
            <div className='sign-instruction'>
              <p>Choose whether you are an Entrepreneur or a Coach:</p>
            </div>
            <div className='choices-btn'>
              <button className='btn' onClick={handleCoachClick}>
                Coach
              </button>
              <button className='btn' onClick={handleEntrepreneurClick}>
                Entrepreneur
              </button>
            </div>

            <div className='sign-btn'>
              <a href='./signin' type='submit' className='btn sign-btn2'>
                <span>Sign In</span>
                <BiRightArrowAlt />
              </a>
            </div>
          </>
        ) : (
          <>
            {coachSignUp ? (
              <>
                <SignUpCoach />
                <div className='sign-btn'>
                  <a
                    type='submit'
                    className='btn sign-btn2'
                    onClick={() => setSignUp(true) && setCoachSignUp(false)}
                  >
                  </a>
                </div>
              </>
            ) : entrepreneurSignUp ? (
              <>
                <SignUpEntrep />
                <div className='sign-btn'>
                  <a type='submit' className='sign-btn1 btn'>
                    <span>Submit</span>
                  </a>
                  <a
                    type='submit'
                    className='btn sign-btn2'
                    onClick={() => setSignUp(true) && setEntrepreneurSignUp(false)}
                  >
                    <BiLeftArrowAlt /> <span>Back</span>
                  </a>
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default SignUp;
