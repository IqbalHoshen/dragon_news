import { NavLink } from "react-router";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar  ">
      <div className="navbar-start">
        <div></div>{" "}
      </div>
      <div className="navbar-center hidden lg:flex text-primary text-xl font-normal">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <BsPersonCircle size={32} />
        <button className="btn bg-base-200 text-white text-xl font-semibold rounded-xs w-28">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
