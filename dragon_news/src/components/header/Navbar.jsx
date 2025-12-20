import { Link, NavLink } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/createContext";
import person from "../../assets/user.png";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("success!!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar  ">
      <div className="navbar-start"></div>
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
        <img
          className="w-10 rounded-full"
          src={`${user?.photoURL || person}`}
          alt=""
        />

        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-base-200 text-white text-xl font-semibold rounded-xs w-28"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-base-200 text-white text-xl font-semibold rounded-xs w-28"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
