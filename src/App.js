import './App.css'

import Cards from './components/cards/Cards'
import Nav from './components/nav/Nav'
import { useState } from 'react'



function App() {
  const [characters, setCharacters] = useState([]);


  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (id) => {
    // console.log(id);
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>

      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>

    </div>
  )
}

export default App
