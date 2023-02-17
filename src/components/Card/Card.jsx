import style from "./Card.module.css";
import {Link} from "react-router-dom"

export default function Card(props) {
   const {id, name,species,gender,image,onClose,status} = props
   return (
      <div className={style.cartabox}>
         <div className={style.carta}>    
            <div className={style.cara}>
               <img className={style.img} src={image}></img>
               <h2 className={style.name}>{name}</h2>
            </div>
            <div className={`${style.cara} ${style.detras}`}>
               <h2 className={style.name}>{name}</h2>
               <h3>{status}</h3>
               <h3>{gender}</h3>
               <h3>{species}</h3>
               <Link to={`/profile/${id}`}><button className={style.btn}>PERFIL</button></Link>
            </div>    
         </div>
      </div>
   );
}
