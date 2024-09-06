import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Project",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex px-2 text-3xl">
          <h1 className="font-semibold cursor-pointer">
            <span className="text-slate-500 text-4xl">K</span>aif
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>
        <div>
          <ul className=" hidden md:flex font-medium space-x-8 text-[1rem]">
            {navItem.map(({ id, text }) => (
              <li className="hover:scale-110 duration-200" key={id}>
                <Link
                  to={text}
                  duration={500}
                  offset={-70}
                  activeClass={"active"}
                  smooth={true}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <FaXmark size={25} /> : <FaBars size={25} />}
          </div>
        </div>
      </div>
      {/* modile navbar */}
      {menu && (
        <div>
          <ul className="md:hidden h-[90vh] w-[80%] bg-white flex flex-col items-center justify-center space-y-10 text-xl font-medium">
            {navItem.map(({ id, text }) => (
              <li
                className="hover:scale-110 duration-200 cursor-pointer font-semibold"
                key={id}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  duration={500}
                  offset={-70}
                  activeClass={"active"}
                  smooth={true}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
