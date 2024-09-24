import React, { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  let Links = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Skills" },
    { id: 4, name: "Projects" },
    { id: 5, name: "Contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="max-w-screen-2xl container mx-auto  h-16 fixed top-0 left-0 right-0 z-100 bg-white">
      <div className="flex items-center justify-between bg-white py-4 md:px-20 px-5 border-b-2">
        <h1 className="text-4xl font-bold cursor-pointer">Kaif</h1>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:bg-white bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear ${
            open ? "top-16 " : "top-[-500px]"
          }`}
        >
          {Links.map(({ id, name }) => (
            <li key={id} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={name}
                duration={500}
                offset={-70}
                activeClass={"active"}
                smooth={true}
                onClick={() => setOpen(!open)}
                className="text-gray-800 hover:text-gray-400 font-medium duration-100 cursor-pointer"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
