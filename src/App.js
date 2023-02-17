import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Index from "./components/Index/Index.jsx";
import Error from "./components/Error/Error.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Play from "./components/Play/Play";
import Crear from "./components/Crear/Crear";
import Dead from "./components/Games/Dead/Dead";
import RPG from "./components/Games/RPG/RPG";
import Registro from "./components/Registro/Registro";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, updateCoins } from "./redux/action.js";

function App() {
  const location = useLocation();
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const onSearch = (character) => {
    dispatch(getCharacters(character));
  };

  const onClose = (id) => {
    // setCharacters(characters.filter(character => character.id !== id))
  };

  return (
    <>
      {location.pathname !== "/" &&
        location.pathname !== "/registro" &&
        location.pathname !== "/404" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/play" element={<Play />} />
        <Route path="/crear" element={<Crear />} />
        <Route path="/play/dead" element={<Dead />} />
        <Route path="/play/rpg" element={<RPG />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/404" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
