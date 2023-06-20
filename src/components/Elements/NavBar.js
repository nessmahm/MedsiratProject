import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  let navigate = useNavigate();

  const handleServices = () => {
    navigate("/");
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="navLinks-container">
      <ul className="navLinks">
        <li>
          <a href="/guide">
            <span>Notre guide</span>
          </a>
        </li>
        <li>
          <a onClick={handleServices}>
            <span>Nos services</span>
          </a>
        </li>
        <li>
          <a href="/magazine">
            <span>Magazine</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>Contact</span>
          </a>
        </li>
      </ul>

      <div className="signInButtn">
        <a href="/signin">
          <span>Sign In</span>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
