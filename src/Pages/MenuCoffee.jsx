import React from 'react'
import '../Styles/MenuCoffee.css'
import { IoChevronBackOutline } from "react-icons/io5";
// icon 
import { BiSolidCoffeeBean } from "react-icons/bi";
//data
import dataKopi from '../Data/DataCoffee.json'
import { PiCoffee } from "react-icons/pi";
import { GiTeapot } from "react-icons/gi";
import { BsCake } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


function MenuCoffee() {
    // state 
    const navigate = useNavigate();

    // function navigate 
    const navigateToWelcome = () =>{
        navigate('/');
    }

    // function 
    const getIcon = {
        "COFFEE": <BiSolidCoffeeBean/>,
        "NON-COFFEE":<PiCoffee/>,
        "TEA": <GiTeapot/>,
        "DESSERTS": <BsCake/>
    }


  return (
    <div className='mc-container'>
        
        <div className="menu-header">
            <IoChevronBackOutline className='mc-icon' onClick={navigateToWelcome}/>
            <h2>MENU</h2>
        </div>

        <div className="menu-content">
            {dataKopi.map((item) =>(
                <div className="mc-box" key={item.id}>
                    <div className="mc-box-header">
                        <div className="mc-box-icon">
                            {getIcon[item.category]}
                        </div>
                        <div className="mc-box-title">
                            <h3>{item.category}</h3>
                        </div>
                    </div>

                    <div className="mc-box-content">
                        <div className="mc-left">
                            p
                        </div>

                        <div className="mc-right">
                            {item.items.map((menu, index) => (
                                <div className="mc-box-right" key={index}>
                                    <p>{menu.name}</p>
                                    <span> $ {menu.price}</span>
                                </div>
                            ))}
                        </div>
                        
                        
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default MenuCoffee