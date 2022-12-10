import './App.css'
import Cards from './components/cards/Cards'
import Nav from './components/nav/Nav'
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from './components/about/About'
import Detail from "./components/detail/Detail"
import Form from './components/form/Form'
import Favorites from './components/favorites/Favorites'


function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, SetAccess] = useState(false)
  const username = "milthon.g@gmail.com"
  const password = "1234a"



  function login(userDAta) {
    if (userDAta.username === username && userDAta.password === password) {
      SetAccess(true)
      navigate("/home")
    } else {
      alert("usuario o contraseña incorrecta")
    }
  }

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
  //App.js
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
