import React from "react";
import NavbarHome from "./NavbarHome";
import NavbarLogin from "./NavbarLogin";

const Navbar = () => {
  return (
    <div className="flex text-center">
      <div className="basis-1/4 bg-indigo-300">
        <NavbarHome></NavbarHome>
      </div>
      <div className=" basis-2/4 bg-yellow-300"></div>
      <div className=" basis-1/4 bg-indigo-400">
        <NavbarLogin ></NavbarLogin>
      </div>
    </div>
  );
};

export default Navbar;
