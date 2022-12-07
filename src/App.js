import './App.css'
import Cards from './components/cards/Cards'
import Nav from './components/nav/Nav'
import { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import About from './components/about/About'
import Detail from "./components/detail/Detail"
import Form from './components/form/form'



function App() {
  const location = useLocation();
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
        {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
