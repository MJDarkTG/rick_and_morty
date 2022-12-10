import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import s from "./Detail.module.css"



export default function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState(
        {
            name: "",
            status: "",
            species: "",
            gender: "",
            origin: {},
            location: {},
            image: ""
        }
    )
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return setCharacter({});
    }, [id]);
    // useEffect(() => {
    //     fetch(`https://rickandmorty.com/api/character/${id}`)
    //         .then((response) => response.json())
    //         .then((char) => {
    //             if (char.name) {
    //                 setCharacter(char)
    //             } else {
    //                 window.alert("no hay personajes con ese ID")
    //             }
    //         })
    // }, [id]);


    // return character === undefined ? (
    //     <div>
    //         <h1>{character.name}</h1>
    //         <h5>{character.id}</h5>
    //         <h5>{character.status}</h5>
    //         <h5>{character.specie}</h5>
    //         <h5>{character.gender}</h5>
    //         <h5>{character.origin?.name}</h5>
    //     </div>

    // ) : (
    //     <h1>cargando...</h1>
    // )
    const handleCLick = () => {
        navigate("/home")
    }
    return (
        <div>
            <button className={s.miBoton} onClick={handleCLick}>Go Home</button>
            {character ? (
                <div className={s.containerDetail}>
                    <div className={s.datos} >
                        <h2>Nombre: {character.name}</h2>
                        <h5>Status: {character.status}</h5>
                        <h5>Especie: {character.species}</h5>
                        <h5>Genero: {character.gender}</h5>
                        <h5>Origen: {character.origin?.name}</h5>
                    </div>
                    <div>
                        <img
                            src={character.image}
                            alt={character.name}
                        />
                    </div>
                </div>

            ) : ('cargando')}
        </div>
    )
}
