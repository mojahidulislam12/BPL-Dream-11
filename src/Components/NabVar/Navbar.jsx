import React from "react";
import Imag1 from "../../assets/dollar 1 (1).png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold text-xl">
          0 Coins
          <img src={Imag1} alt="" srcset="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
