const Register = () => {
  return (
    <fieldset className="fieldset bg-white border-base-300 rounded-box  border p-14">
      <h1 className="text-center text-[35px] font-semibold text-secondary mb-4">
        Register your account
      </h1>
      <label className="label">Your Name</label>
      <input type="text" className="input" placeholder="Enter your name" />
      <label className="label">Photo URL</label>
      <input type="url" className="input" placeholder="Enter your photo URL" />
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

      <label className="label mt-3">
        <input type="checkbox" className="checkbox" />
        Accept Term & Conditions
      </label>
      <button className="btn btn-neutral mt-4">Register</button>
    </fieldset>
  );
};

export default Register;
