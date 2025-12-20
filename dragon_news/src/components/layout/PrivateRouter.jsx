import { useContext } from "react";
import { AuthContext } from "../../context/createContext";
import { Navigate, useLocation } from "react-router";
import Loader from "./Loader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
};

export default PrivateRouter;
