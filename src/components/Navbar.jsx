import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  // const bgColor = this.bgColor;

  return (
    <div
      className={`flex justify-between items-center h-24 mx-auto px-4 text-white ${props.bgColor}`}
    >
      <a href="/">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">HonBil.</h1>
      </a>
      <ul className="hidden md:flex">
        <li>
          <a
            class="group text-white-500 transition-all duration-300 ease-in-out"
            href="/#/login"
          >
            <span class="bg-left-bottom bg-gradient-to-r from-white to-[#00df9a] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Login
            </span>
          </a>
        </li>
        &nbsp; &nbsp;
        <li>
          <a
            class="group text-white-500 transition-all duration-300 ease-in-out"
            href="mailto:  honbil963@gmail.com"
          >
            <span class="bg-left-bottom bg-gradient-to-r from-white to-[#00df9a] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact Us
            </span>
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          HonBil.
        </h1>
        <a
          class="group text-white-500 transition-all duration-300 ease-in-out"
          href="/"
        >
          <li className="p-4 border-b border-gray-600">Home</li>
        </a>
        <a
          class="group text-white-500 transition-all duration-300 ease-in-out"
          href="/#/login"
        >
          <li className="p-4 border-b border-gray-600">Login</li>
        </a>
        <a
          class="group text-white-500 transition-all duration-300 ease-in-out"
          href="mailto:  honbil963@gmail.com"
        >
          <li className="p-4">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
