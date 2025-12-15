import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialMedia from "./SocialMedia";

const RightAside = () => {
  return (
    <div className="flex flex-col ">
      <h1>Login With</h1>
      <div className="space-y-5">
        <SocialMedia></SocialMedia>
        <FindUs></FindUs>
        <QZone></QZone>
      </div>
    </div>
  );
};

export default RightAside;
