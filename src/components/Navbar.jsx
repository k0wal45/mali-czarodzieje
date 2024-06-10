import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Data from "../Data";

const Navbar = () => {
  const [earliestEvents, setEarliestEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const Events = (data) => {
    const sortedData = [...data].sort((a, b) => b.date - a.date);

    const threeEarliestEvents = sortedData.slice(0, 4);

    setEarliestEvents(threeEarliestEvents);
  };

  useEffect(() => {
    Events(Data);
  }, []);

  return (
    <nav className=" absolute top-0 left-0 navbar text-xl text-white lg:px-12 p-4 px-2 z-30">
      <ul
        className={`fixed top-0 left-0 z-20 ${
          isOpen ? "scale-x-100" : "scale-x-0"
        } duration-500 transition-all origin-right bg-black/70 w-screen h-screen flex flex-col items-center justify-center text-4xl font-bold text-center p-4 gap-6`}
      >
        <li>
          <Link to="/onas">O nas</Link>
        </li>
        <li>
          <Link to="/programy">Programy</Link>
        </li>
        {earliestEvents.map((event) => (
          <li className="text-2xl px-4">
            <Link to={`/programy/${event.link}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
      <div className="navbar-start z-30">
        {/* mobile */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        {/* title */}
        <Link
          to="/"
          className="btn btn-ghost font-w text-3xl lg:text-5xl font-gerak text-white font-medium"
        >
          Mali Czarodzieje
        </Link>
      </div>
      {/* middle nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link to="/onas">O Nas</Link>
          </li>
          <li>
            <details>
              <summary>Programy</summary>
              <ul class="p-2 text-black whitespace-nowrap w-72 rounded-sm bg-opacity-75">
                {earliestEvents.map((event) => (
                  <li>
                    <Link to={`/programy/${event.link}`}>{event.title}</Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/programy"
                    className="border-2 bg-base-200 rounded-sm"
                  >
                    Wszystkie Programy
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* btn */}
      <div className="hidden lg:flex navbar-end ">
        <Link
          to="/kontakt"
          className="btn font-lato-bold text-lg bg-white text-black rounded-full"
        >
          Skontaktuj się
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
