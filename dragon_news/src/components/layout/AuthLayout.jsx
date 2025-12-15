import { Outlet } from "react-router";
import Navbar from "../header/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-100 min-h-screen flex flex-col pt-5">
      <header className="w-11/12">
        <Navbar />
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
