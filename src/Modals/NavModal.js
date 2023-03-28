import React from 'react'
function NavModal() {
    
        return (
          <div className="navLinks-container navmodal-container" >
            <ul className="navLinks navmodal">
                <a href=""><span>Notre guide</span></a>
                <a href=""><span>Nos services</span></a>
                <a href="/magazine"><span>Magazine</span></a>
                <a href="#contact"><span>Contact</span></a>
            </ul>
            <div className='signInButtn' > 
              <a href="/signin"><span>Sign In </span></a>
            </div>  
          </div>  )
      }

export default NavModal