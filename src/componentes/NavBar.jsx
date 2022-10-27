import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "noActive");

  return (
    <div className="divNavbar">
      <div className="divIcono">
        <img id="icono" src="https://cdn.icon-icons.com/icons2/851/PNG/512/psyduck_icon-icons.com_67509.png" alt="pokemon" />
      </div>
      <div className="divNavigation">
        <NavLink className={ setActiveClass} to="/" end>
          Home
        </NavLink>
        <br />
        <NavLink className={ setActiveClass} to="pokemones">
          Pokemones
        </NavLink>
      </div>
    </div>
  )
};

export default Navbar;