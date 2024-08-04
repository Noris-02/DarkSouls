import { useState } from 'react'
import './darksouls3.css'
import React from 'react';
import { Link } from 'react-router-dom';
import iundex_gundyr from './immagini/Iudex_Gundyr.jpg'

function Darksouls3(){
    return(
      <>
        <h1>Dark Souls 3</h1>
        <h2>Lista boss</h2>

        <div className='cartaBoss'>
          <div>
          <h2>Iundex Gundyr</h2>
          </div>
          <img className='immagineBoss' src={iundex_gundyr} />
          <p>hai sconfitto questo boss</p>
        </div>
      </>
    )
}
export default Darksouls3