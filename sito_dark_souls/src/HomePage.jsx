import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './HomePage.css'

const images = [
  'public/ds1.jpg',
  'public/ds2.jpg',
  'public/ds3.jpg',
  'public/bloodborne.jpg',
  'public/sekiro.jpg',
  'public/elden_ring.jpg'
];

const titolo = [
  'Dark Souls I',
  'Dark Souls II',
  'Dark Souls III',
  'Bloodborne',
  'Sekiro',
  'Elden Ring'
];

function App() {
  // Stato per l'immagine corrente
  const [currentImage, setCurrentImage] = useState(images[0]);
  // stoto titolo corrente
  const [currentTitolo, setCurrentTitolo] = useState(titolo[0]);
  // Funzione per aggiornare l'immagine corrente e per il titolo
  const handleMouseEnter = (index) => {
    setCurrentImage(images[index]);
    setCurrentTitolo(titolo[index]);
  };



  return (
    <>
      <div className='titolo-home-page'>
        {/* titolo che cambia in base al hover del pulsante selezionato */}
        <h1>{currentTitolo}</h1>
      </div>
      <div className="image-container">
        {/* immagine sfondo del gioco in base al hover del pulsante */}
        <img src={currentImage} alt="Current Display" />
      </div>
      <div className='bottoni'>
      <button onMouseEnter={() => handleMouseEnter(0)} >DARK SOULS I</button>
      <button onMouseEnter={() => handleMouseEnter(1)} >DARK SOULS II</button>
      <button onMouseEnter={() => handleMouseEnter(2)} >DARK SOULS III</button>
      <button onMouseEnter={() => handleMouseEnter(3)} >BLOODBORNE</button>
      <button onMouseEnter={() => handleMouseEnter(4)} >SEKIRO</button>
      <button onMouseEnter={() => handleMouseEnter(5)} >ELDEN RING</button>
      </div>
    </>
  )
}

export default App
