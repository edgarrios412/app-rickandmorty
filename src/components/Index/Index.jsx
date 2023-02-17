import {Link} from 'react-router-dom'
import style from './Index.module.css'
import {useState} from 'react'


const Index = () =>{
    return(
        <>
        <Link to="/home"><div className={style.img}></div></Link>
        <div className={style.buttons}>
            <Link to="/registro"><button className={style.button}>REGISTRO</button></Link>
            <Link to="/home"><button className={style.button}>INGRESO</button></Link>
        </div>
        </>
    )
}

export default Index