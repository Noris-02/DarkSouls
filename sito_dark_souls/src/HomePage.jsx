import { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import MenuTop from './Componenti/Navbar'

const images = [
  'public/ds1.jpg',
  'public/ds2.jpg',
  'public/ds3.jpg',
  'public/bloodborne.jpg',
  'public/sekiro.jpg',
  'public/elden_ring.jpg'
];

const titolo = [
  'Dark Souls ',
  'Dark Souls II',
  'Dark Souls III',
  'Bloodborne',
  'Sekiro',
  'Elden Ring'
];

const routes = [
  '/DarkSouls1',
  '/DarkSouls2',
  '/DarkSouls3',
  '/Bloodborne',
  '/Sekiro',
  '/EldenRing'
];

function HomePage() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentTitolo, setCurrentTitolo] = useState(titolo[0]);

  const handleMouseEnter = (index) => {
    setCurrentImage(images[index]);
    setCurrentTitolo(titolo[index]);
  };

  return (
    <>
      {/* <MenuTop /> */}
      <div className='titolo-home-page'>
        <h1>{currentTitolo}</h1>
      </div>
      <div className="image-container">
        <img src={currentImage} alt="Current Display" />
      </div>
      <div className='bottoni'>
        {titolo.map((game, index) => (
          <Link key={game} to={routes[index]}>
            <button onMouseEnter={() => handleMouseEnter(index)}>
              {game.toUpperCase()}
            </button>
          </Link>
        ))}
      </div>
    </>
  )
}

export default HomePage