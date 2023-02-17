import style from './Error.module.css'
import {Link} from 'react-router-dom'

const Error = ({desc = "La página que intenta buscar se ha movido a otro universo."}) =>{
    return(
        <div className={style.html}>
        <div className={style.backgroundImg}>
			<div className={style.wrapper}>
				<div className={style.imgWrapper}>
					<span className={style.span}>44</span>
				</div>
				<p className={style.p}>{desc}</p>
				<Link to="/home"><button className={style.button} type="button">LLEVAME A MI UNIVERSO</button></Link>
			</div>
		</div>
        </div>
    )

}

export default Error