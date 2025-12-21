import { use } from "react";
import { AuthContext } from "../../context/createContext";
import { useNavigation } from "react-router";

const Register = () => {
  const { createRegister, userProfile, setUser } = use(AuthContext);
  const navigation = useNavigation();
  const handleRegister = (e) => {
    e.preventDefault();
    const formEvent = e.target;
    const name = formEvent.name.value;

    const photo = formEvent.photo.value;
    const email = formEvent.email.value;
    const password = formEvent.password.value;
    const userInfo = {
      displayName: name,
      photoURL: photo,
    };
    createRegister(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        userProfile(userInfo)
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigation("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <form onSubmit={handleRegister}>
      <fieldset className="fieldset bg-white border-base-300 rounded-box  border p-14">
        <h1 className="text-center text-[35px] font-semibold text-secondary mb-4">
          Register your account
        </h1>
        <label className="label">Your Name</label>
        <input
          name="name"
          type="text"
          className="input"
          placeholder="Enter your name"
          required
        />
        <label className="label">Photo URL</label>
        <input
          name="photo"
          type="url"
          className="input"
          placeholder="Enter your photo URL"
        />
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

        <label className="label mt-3">
          <input type="checkbox" className="checkbox" />
          Accept Term & Conditions
        </label>
        <button type="submit" className="btn btn-neutral mt-4">
          Register
        </button>
      </fieldset>
    </form>
  );
};

export default Register;
