import { useParams } from "react-router-dom";
import { useEffect} from "react";
import Comment from "../Comment/Comment.jsx";
import style from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearComments,
  getCharacter,
  getComments,
} from "../../redux/action.js";
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';
import img8 from '../../img/img8.jpg';
import img9 from '../../img/img9.jpg';
import img10 from '../../img/img10.jpg';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
  const comments = useSelector((state) => state.comments);
  const comment = [
    "Hola, alguien me enseña a usar esto?",
    "Estamos en el 2023 cambia esa foto o te funan",
    "He escuchado mencionar varias veces funar, que es?",
    "Eres team bad bunny o anuel?",
    "Paso por aca para desearte un feliz cumpleaños",
    "Quien diria que yo estaria aca",
    "Like si eres hombre",
    "Sigueme y te sigo, si cumplo",
    "Que le dice un pez a otro pez? NADA",
    "Eres un roba maridos!",
    "Alguien sabe como llegue hasta aqui?",
    "Vendo maquina del tiempo, info al imbox",
    "Hola guap@ en que universo te encuentras?",
    "Esto es mejor que twitter jajaja",
    "Viaje al futuro y Henry cambia el mundo",
    "Hola, eres nuevo? BIENVENIDO",
    "Quieres salir a comer pizza mas tarde?",
    "Jorge Vega tambien es el mejor profe de Henry en este universo?",
  ];
  const imgs = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
  var array = [];
  const refran = [
    'Haz el bien sin mirar a quién',
    'La avaricia rompe el saco',
    'Más vale prevenir que curar',
    'No es oro todo lo que reluce',
    'No hay mal que por bien no venga',
    'Al mal tiempo buena cara',
    'Quien tiene un amigo tiene un tesoro',
    'No dejes para mañana lo que puedas hacer hoy',
    "Tengan pensamiento independiente, no sean ovejas.",
    "Pero los discursos son para hacer campaña. Ahora es el momento para la acción.",
    "Lo siento, pero tu opinión significa muy poco para mí.",
    "Soy una versión de tu hermano en la que puedes confiar cuando dice No huyas.",
    "Si te matan en el sueño de alguien, mueres de verdad.",
    "Cuando te das cuenta que nada importa, el universo es tuyo.",
  ]
  const random = Math.floor(Math.random()*refran.length)

  for (let i = 0; i < imgs.length; i++) {
    const randi = Math.floor(Math.random()*imgs.length)
    array = [...array,imgs[randi]]
  }

  useEffect(() => {
    dispatch(getCharacter(id));
    let random = Math.floor(Math.random() * 8);
    for (let i = 0; i < random; i++) {
      let rand = Math.floor(Math.random() * 800);
      dispatch(getComments(rand));
    }
    return () => {
      dispatch(clearComments());
    };
  }, []);

  return (
    <>
      <div className={style.profile}>
        <img src={character.image} className={style.img}></img>
        <div className={style.description}>
        <h2>{character.name}</h2>
        <h5>@usuario</h5>
        <h4>{refran[random]}</h4>
          <div className={style.tags}>
            <span className={character.gender == "Male" ? style.tagmale : style.tagfemale}>{character.gender}</span>
            <span className={character.species == "Human" ? style.taghuman : style.tag}>{character.species}</span>
            <span className={character.status == "Alive" ? style.tagalive : style.tagdead}>{character.status}</span>
            {/* <span className={style.tag}>COMUN</span> */}
          </div>
        </div>
        <div className={style.container}>
        <h3>Mis fotos</h3>
          <div className={style.galery}>
          <div className={style.imgcontainer}><img className={style.image} src={array[1]}></img></div>
          <div className={style.imgcontainer}><img className={style.image} src={array[2]}></img></div>
          <div className={style.imgcontainer}><img className={style.image} src={array[3]}></img></div>
          </div>
        </div>
        <button className={style.donar} onClick={() => alert("Funcion en desarrollo")}>DONAR BITS</button>
      </div>

      <div className={style.muro}>
        {comments.map((c) => {
          return (
            <Comment
              charx={c}
              comment={comment[Math.floor(Math.random() * comment.length)]}
            />
          );
        })}
      </div>
    </>
  );
};

export default Profile;
