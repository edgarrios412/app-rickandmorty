import style from './Dead.module.css'
import {useEffect} from 'react'
import { getCharacter } from '../../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { updateCoins } from '../../../redux/action'

const Dead = (props) =>{

    const random = Math.floor(Math.random()*825)
    const character = useSelector(state => state.character)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getCharacter(random))
    },[])

    const validate = (event) =>{
        const value = character.status
        const name = event.target.name
        if(value === name){
            const random = Math.floor(Math.random()*825)
            dispatch(updateCoins(1))
            dispatch(getCharacter(random))
        }else{
            alert("Has perdido")
        }
    }

    return(
        <>
        <div className={style.cartabox}>
         <div className={style.carta}>    
            <div className={style.cara}>
               <img className={style.img} src={character.image}></img>
               <h2 className={style.name}>{character.name}</h2>
            </div>
            <div className={`${style.cara} ${style.detras}`}>
               <h2 className={style.name}>{character.name}</h2>
               <h2>¿Este personaje esta vivo o esta muerto actualmente?</h2>
               <button className={style.btnVivo} onClick={validate} name="Alive">VIVO</button>
                <button className={style.btnMuerto} onClick={validate} name="Dead">MUERTO</button>
            </div>    
         </div>
      </div>
      </>
    )
}

export default Dead