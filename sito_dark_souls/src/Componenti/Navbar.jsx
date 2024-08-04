import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
function MenuTop(){
    return(
        <>
            <div className='menutop'>
                <img className='immagineN1' src='public/icona.jpg' />
                <div className='navbar'>
                <Link to={"/"}>
                <button className='bottoneN'>HOME</button>
                </Link>
                <button className='bottoneN'>Registrati</button>
                </div>
                <img className='immagineN2' src='public/icona.jpg' />
                
            </div>
        </>
    )
}
export default MenuTop;