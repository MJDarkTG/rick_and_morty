import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, removeFavorites } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
   // console.log(props);

   const [isFav, setIsFav] = useState(false)
   // const [myFavorites, setmyFavorites] = useState()

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         props.removeFavorites(props.id)
      }
      else {
         setIsFav(true)
         props.addFavorites(props)
      }
   }
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   return (
      <div className={styles.card}>
         <div className={styles.corazones}>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={props.onClose}>X</button>
         </div>



         <img src={props.image} alt={props.image} />
         <div className={styles.datos}>

            <h2>{props.gender}</h2>
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link >
         </div>
      </div >
   );
}


export function mapDispatchToPorps(dispatch) {
   return {
      addFavorites: function (character) {
         dispatch(addFavorites(character))
      },
      removeFavorites: function (id) {
         dispatch(removeFavorites(id))
      }
   }
}
export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Card);
