import { Link } from "react-router";

const Login = () => {
  return (
    <fieldset className="fieldset bg-white border-base-300 rounded-box  border p-14">
      <h1 className="text-center text-[35px] font-semibold text-secondary mb-4">
        Login your account
      </h1>
      <label className="label">Email address</label>
      <input
        type="email"
        className="input"
        placeholder="Enter your email address"
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input"
        placeholder="Enter your password"
      />

      <button className="btn btn-neutral mt-4">Login</button>

      <p className="text-center mt-3">
        Dont’t Have An Account ?{" "}
        <Link to="/auth/register">
          <span className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent">
            Register
          </span>
        </Link>
      </p>
    </fieldset>
  );
};

export default Login;
