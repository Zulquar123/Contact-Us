import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const style = (e) => {
    return {
      color: e.isActive ? "red" : "",
    };
  };
  return (
    <nav className="flex justify-between items-center p-1 w-[90%] m-auto">
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <div className="flex gap-4 text-xl font-bold">
        <NavLink style={style} to="/">
          Home
        </NavLink>
        <NavLink style={style} to="/contact">
          Contact
        </NavLink>
        <NavLink style={style} to="/about">
          About
        </NavLink>
      </div>

      <div>
        <button className="text-xl font-bold text-white bg-[#D01C28] px-3 py-2">
          Login
        </button>
      </div>
    </nav>
  );
}
