import { useState } from 'react';
import Error from '../../Error/Error';
import style from './RPG.module.css';

const RPG = () => {

    const [hp,setHp] = useState(1000)
    const [mihp,setMihp] = useState(100)

    const golpear = (event) => {
        const damage = Math.floor(Math.random()*500)
        const defense = Math.floor(Math.random()*80)
        if(defense > mihp){
            setMihp(0)
            event.target.innerHTML = "Volver a jugar"
        }else if(defense < mihp){
            setMihp(mihp-defense)
        }
        if(damage > hp){
            setHp(0)
            event.target.innerHTML = "Reclamar recompensa"
        }else{
        setHp(hp-damage)
        }
    }


  return(
    <>
    {/* <div className={style.ranking}></div>
      <div className={style.container}>
        <span className={style.enemy}></span>
        <span className={style.hp}>{hp}</span>
        <p>HP: {mihp}</p>
        <button onClick={golpear}>Golpear</button>
      </div> */}
      <Error desc='Esta pagina se encuentra en proceso de desarrollo'/>
    </>
  )
};

export default RPG