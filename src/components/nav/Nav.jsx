import React from 'react'
import SearchBar from "../searchbar/SearchBar"
import { Link } from 'react-router-dom'

export default function Nav({ onSearch }) {


    return (
        <div>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <SearchBar onSearch={onSearch} />

        </div>
    )
}
