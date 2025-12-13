import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
const btnBase = "btn btn-outline w-full";

const RightAside = () => {
  return (
    <div className="flex flex-col">
      <h1>Login With</h1>
      <div className="space-y-2 mt-3">
        <button className={`btn-info ${btnBase}`}>
          <FcGoogle size={24} />
          <span>Login With Google</span>
        </button>
        <button className={`btn-neutral ${btnBase}`}>
          <ImGithub size={24} /> <span>Login With Github</span>
        </button>
      </div>
    </div>
  );
};

export default RightAside;
