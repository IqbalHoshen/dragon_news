import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/createContext";

const Login = () => {
  const { signIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    const formEvent = e.target;
    const email = formEvent.email.value;
    const password = formEvent.password.value;
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  return (
    <form onSubmit={handleSignIn}>
      <fieldset className="fieldset bg-white border-base-300 rounded-box  border p-14">
        <h1 className="text-center text-[35px] font-semibold text-secondary mb-4">
          Login your account
        </h1>
        <label className="label">Email address</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Enter your email address"
          required
        />

        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>

        {error && (
          <p className="text-xs font-extralight text-red-500">{error}</p>
        )}

        <p className="text-center mt-3">
          Dont’t Have An Account ?
          <Link to="/auth/register">
            <span className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent">
              Register
            </span>
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default Login;
