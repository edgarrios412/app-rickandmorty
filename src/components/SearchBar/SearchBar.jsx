import style from './SearchBar.module.css';
import {useState} from 'react';

export default function SearchBar(props) {

   const [character,setCharacter] = useState("")

   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }

   return (
      <div className={style.container}>
         <div className={style.containerForm}>
         <input onChange={handleChange} className={style.input} type='search' placeholder='Buscar por ID'/>
         <button className={style.button} onClick={() => props.onSearch(character)}><span className={style.lupa}/></button>
         </div>
      </div>
   );
}
