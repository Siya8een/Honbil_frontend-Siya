import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Menu = styled.div`
  align-items: center;
  justify-content: space-between;
  width: auto;
  &.hidden {
    display: flex;
  }
  @media (max-width: 768px) {
    display: flex;
    order: 1;
    position: absolute;
    top: 100%;
    right: 0;
    &.hidden {
      display: none;
    }
  }
`;

const Nav = () => {
  const [hide, sethide] = useState(true);
  return (
    <div>
      <nav className=" px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-green-400 dark:border-green-400">
        <div className="container flex flex-wrap items-center justify-between mx-auto relative">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl  whitespace-nowrap font-bold text-[#00df9a]">
              HonBil.
            </span>
          </a>
          <div className="flex md:order-2 gap-2">
            {/* <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button> */}
            <NavLink
              to="/contact"
              type="button"
              className="inline-block rounded mt-2 bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            >
              Contact us
            </NavLink>
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-black-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => {
                sethide(!hide);
              }}
            >
              <span className="sr-only">hide main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <Menu className={hide ? "hidden" : ""} id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:p-0 md:dark:hover:text-black-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#/rentals"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:p-0 md:dark:hover:text-black-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Rentals
                </a>
              </li>
              <li>
                <a
                  href="/#/login"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:p-0 md:dark:hover:text-black-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Login
                </a>
              </li>
            </ul>
          </Menu>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
