import style from "./Play.module.css";
import { Link } from "react-router-dom";
import Game from "../Game/Game";
import dead from "../../img/dead.jpg"
import rpg from "../../img/rpg.jpg"

const Play = () => {
  return (
    <>
      <p className={style.title}>Sala de juegos</p>
      <div className={style.games}>
        <Link to="/play/dead">
          <Game
            img={dead}
            title="Vivo o muerto"
            desc="Seras capaz de adivinar que personaje esta vivo y cual esta muerto en la serie?"
            highscore="0"
          />
        </Link>
        <Link to="/play/rpg">
          <Game
            img={rpg}
            title="RPG"
            desc="Armate de valor y derrota al jefe de la mazmorra para obtener las mejores recompensas"
            highscore="0"
          />
        </Link>
      </div>
    </>
  );
};

export default Play;
