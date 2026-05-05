import React from 'react'
import '../Styles/WelcomeLight.css'
import { IoChevronForwardOutline,IoChatbubbleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import img from '../Assets/bg-cofe.png'

function WelcomeLight() {

    // state 
    const navigate = useNavigate();

    // FUNCTION 
    const navigateToMenu = () =>{
        navigate('/menu-list')
    }

  return (
    <div className='welcome-light-container'>
        <div className="welcome-box">

            <div className="light-title">
                <span>ALL MENU</span>
                <h1>BORCELLE CAFE</h1>
                <p>TAKE OUR MENU FLYER</p>
            </div>

            <div className="light-img">
                <img src={img} alt="coffee pic" />
            </div>

            <div className="light-open">
                <h4>OPENING HOURS</h4>
                <div className="light-opening">
                    <p>8am – 9pm</p>
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


    </div>
  )
}

export default WelcomeLight