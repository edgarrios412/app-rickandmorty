import style from './Game.module.css'
import {Link} from 'react-router-dom'

const Game = (props) => {
    return(
        <>
        <div className={style.container}>
        <img className={style.img}src={props.img}/>
        <p className={style.title}>{props.title}</p>
        <b className={style.desc}>{props.desc}</b>
        <p className={style.highscore}>Puntacion mas alta: {props.highscore}</p>
        </div>
        </>
    )
}

export default Game