import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const joinBtn =
  "btn bg-white border-base-300 shadow-none justify-start join-item text-primary font-medium text-[16px]";

const FindUs = () => {
  return (
    <div>
      <h1 className="text-secondary  text-xl font-semibold mb-3">Find Us On</h1>

      <div className="join join-vertical w-full ">
        <button className={joinBtn}>
          <CiFacebook size={24} color="#3B599C" />
          Facebook
        </button>
        <button className={joinBtn}>
          <FaTwitter size={24} color="#58A7DE" /> Twitter
        </button>
        <button className={joinBtn}>
          <FaInstagram size={24} color="#D82D7E" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
