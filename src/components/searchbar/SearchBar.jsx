import { useState } from "react";
import characters from "../../data";

export default function SearchBar(props) {
   // console.log("mis props=");
   // console.log(props);
   const { onSearch } = props;
   const [character, setCharacter] = useState("");
   const handleChange = (evento) => {
      setCharacter(evento.target.value);
   }

   return (
      <div>
         <input type='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
