import { connect } from 'react-redux'
import { filterCards } from '../../redux/actions.js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { orderCards } from '../../redux/actions.js';
import styles from "../favorites/Favorites.module.css"

function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    function handleOrder(e) {
        dispatch(orderCards(e.target.value))
    }
    return (
        <div>
            <div className={styles.miSel}>
                <select onChange={handleOrder} name="order" >
                    <option value="ascendente">ascendente</option>
                    <option value="desendente">desendente</option>
                </select>
                <select onChange={(e) => { dispatch(filterCards(e.target.value)) }} name="filtrar" >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={styles.container}> {myFavorites?.map((char) => (
                <div className={styles.card}  key={char.id}>
                    <h2>{char.name} {char.id}</h2>
                    <h2>{char.gender}</h2>
                    <img src={char.image} alt={char.name} />
                </div>
            ))}</div>

        </div>
    )
}

//   return (
//     <div>
//         <h1>Favorites</h1>
//         <div>
//             <select name="order" id="" onChange={e => dispatch(ordenarPersonajes(e.target.value))}>
//                 <option value="" disabled>
//                     Select...
//                 </option>
//                 <option value="Ascendente">Ascendente ⬆️</option>
//                 <option value="Descendente">Descendente ⬇️</option>
//             </select>
//             <select name="gender" id="" onChange={handleFilter}>
//                 <option value="" disabled>
//                     Select...
//                 </option>
//                 <option value="All">All 🌎</option>
//                 <option value="Male">Male ♂️</option>
//                 <option value="Female">Female ♀️</option>
//                 <option value="Genderless">Genderless ⚧️🏳️</option>
//                 <option value="unknown">unknown ❓</option>
//             </select>
//         </div>
//         <div>
//         {myFavorites.map(character => (
//             <div key={character.id}>
//                 <h3>{character.name} - {character.id}</h3>
//                 <img src={character.image} alt="" />
//             </div>
//         ))}
//         </div>
//     </div>
//   );
// }

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites);