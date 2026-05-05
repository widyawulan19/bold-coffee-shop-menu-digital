import React from 'react'
import '../Styles/WelcomeLight.css'
import { IoChevronForwardOutline,IoChatbubbleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function WelcomeLight() {

    // state 
    const navigate = useNavigate();

    // FUNCTION 
    const navigateToMenu = () =>{
        navigate('/choose-light')
    }

  return (
    <div className='welcome-light-container'>
        <div className="light-logo">
            <h3>THE LOCAL</h3>
            <p>EST 2010</p>
        </div>

        <div className="light-title">
            <span>ALL FOOD</span>
            <h1>MENU</h1>
            <p>TAKE OUR MENU FLYER</p>
        </div>

        <div className="light-open">
            <h4>OPENING HOURS</h4>
            <div className="light-opening">
                <p>Monday – Friday : <span> 09:00 – 22:00 </span></p>
                <p>Saturday – Sunday : <span> 08:00 – 23:00 </span></p>
            </div>
        </div>

        <div className="light-btn">
            <button onClick={navigateToMenu}>
                Discover Our Menu
                <IoChevronForwardOutline/>
            </button>
             <button className='btn-contact'>
                Contact Via WhatsApp
                <IoChatbubbleOutline/>
            </button>
        </div>

        <div className="light-footer">
             <p>CREATE BY LUMINOUS.ID</p>
        </div>
    </div>
  )
}

export default WelcomeLight