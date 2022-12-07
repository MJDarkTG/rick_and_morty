import { useState } from "react";
import characters from "../../data";
import s from "../searchbar/SearchBar.module.css"

export default function SearchBar(props) {
   // console.log("mis props=");
   // console.log(props);
   const { onSearch } = props;
   const [character, setCharacter] = useState("");
   const handleChange = (evento) => {
      setCharacter(evento.target.value);
   }

   return (
      <div className={s.miDiv}>
         <input className={s.Inp} type='search' value={character} onChange={handleChange} />
         <button className={s.Btn} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
