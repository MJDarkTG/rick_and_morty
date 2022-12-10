import React from 'react'
import SearchBar from "../searchbar/SearchBar"
import { Link } from 'react-router-dom'
import s from "./Nav.module.css"

export default function Nav({ onSearch }) {


    return (
        <div className={s.miNav}>
            <Link to="/home">Home</Link>
            {/* <br /> */}
            <Link to="/about">About</Link>
            <Link to="/favorites">Favorites</Link>
            <SearchBar onSearch={onSearch} />

        </div>
    )
}
