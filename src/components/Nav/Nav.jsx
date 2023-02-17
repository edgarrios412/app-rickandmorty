import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Nav(props){
    const coins = useSelector(state => state.coins)

    return(
        <nav>
            <div className={style.coins}>
                <p className={style.coin}/>
                <b className={style.count}>{coins}</b>
            </div>
            <div>
                <SearchBar
                onSearch={props.onSearch}
                />
            </div>
            <div className={style.buttons}>
                <ul>
                <Link to="/home" className={style.link}><li className={style.button}>INICIO</li></Link>
                <Link to="/crear" className={style.link}><li className={style.button}>CREAR</li></Link>
                <Link to="/play" className={style.link}><li className={style.button}>JUGAR</li></Link>
                <Link to="/" className={style.link}><li className={style.button}>SALIR</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav