import React from 'react'
import { useState } from 'react';
import NavModal from '../../Modals/NavModal';
import NavBar from './NavBar';
import '../../styles/elements.css' 
function Header() {
  const [menuIsOpen,setMenu]=useState(false);
  const [menuClass,setMenuClass]=useState("menu-icon");
  const handleMenu =  () => {
    setMenu(!menuIsOpen)
    if(menuClass=="menu-icon" ) 
    setMenuClass("menu-icon menu-change");
    else setMenuClass("menu-icon")
  };
  
  return (
  <div className="header">
    
    <a className="logo" href="/">MedSirat</a>

    
    <div className={menuClass  } onClick={handleMenu }>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
      <NavBar/>
    


   {  menuIsOpen &&   <NavModal />   } 

  </div> 
   
  )
}

export default Header