import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer>
            <div className="part1">
                <h1 className="footerlogo">MedSirat</h1>

                <div className='abonnement'> 
                    <h2>Abonnez-vous maintenant pour rester à jour </h2>
                    <div className="abnformulaire ">
                        <input className="input-container" type="email" placeholder='Adress e-mail *' />
                        <a href="" className='inscriptionbtn btn'> <span>Inscription</span>  </a>
                    </div>
                </div>
               
            </div>               
            
            <div className="part2">

                <div className='contacts'>
                <h3>CONTACTS</h3>
                <div className='contacts-element'>
                    <div>
                        <p className='title'>Email:</p> 
                        <span>contact@medsirat.com</span>

                    </div>

                
                    <div>
                        <p>Phone:</p> 
                        <span>+216 29 926 386</span>
                    </div>
                
                    <div>
                        <p >Localisation</p>
                        <span>21bis rue Docteur Conseil,Cité Jardins 1002 Tunis</span>
                    </div>
                </div>
                </div>
                
                <div className='reseaux'>
                            <h3>SUIVEZ-NOUS</h3>


                            <div className='icons'>
                            <IconContext.Provider value={{ color:"black", size:"22px" , className: "icon3" }}>
                            <a href =''>  <FaFacebook className='icon1'/>  </a>
                            <a href =''>  <BsInstagram className='icon2'/> </a>
                            <a href =''>  <AiFillYoutube className='icon3'/> </a>
                            <a href =''>  <BsLinkedin className='icon4'/> </a>
                                </IconContext.Provider>                   

                            </div>
                    </div>
               
            </div>

               
          
    </footer>
  )
}

export default Footer