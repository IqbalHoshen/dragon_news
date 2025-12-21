import { format } from "date-fns";
import "../../cssStyle/style.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header text-center">
      <img src={logo} alt="image" />

      <h3 className=" text-xl font-normal text-primary mt-3">
        Journalism Without Fear or Favour
      </h3>

      <p className="text-2xl font-medium mt-2 ">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
