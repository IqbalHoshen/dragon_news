import swimming from "../../assets/swimming.png";
import classRoom from "../../assets/class.png";
import playground from "../../assets/playground.png";
const QZone = () => {
  return (
    <div className="bg-base-100 px-2 py-4">
      <h1 className="text-secondary  text-xl font-semibold mb-3">Q-Zone</h1>
      <div className="flex flex-col">
        <img src={swimming} alt="Image" />
        <img src={classRoom} alt="Image" />
        <img src={playground} alt="Image" />
      </div>
    </div>
  );
};

export default QZone;
