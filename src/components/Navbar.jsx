// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { FaXmark } from "react-icons/fa6";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const navItem = [
//     {
//       id: 1,
//       text: "Home",
//     },
//     {
//       id: 2,
//       text: "About",
//     },
//     {
//       id: 3,
//       text: "Project",
//     },
//     {
//       id: 4,
//       text: "Skills",
//     },
//     {
//       id: 5,
//       text: "Contact",
//     },
//   ];
//   return (
//     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
//       <div className="flex justify-between items-center h-16">
//         <div className="flex px-2 text-3xl">
//           <h1 className="font-semibold cursor-pointer">
//             <span className="text-slate-500 text-4xl">K</span>aif
//             <p className="text-sm">Web Developer</p>
//           </h1>
//         </div>
//         <div>
//           <ul className=" hidden md:flex font-medium space-x-8 text-[1rem]">
//             {navItem.map(({ id, text }) => (
//               <li className="hover:scale-110 duration-200" key={id}>
//                 <Link
//                   to={text}
//                   duration={500}
//                   offset={-70}
//                   activeClass={"active"}
//                   smooth={true}
//                 >
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div onClick={() => setMenu(!menu)} className="md:hidden">
//             {menu ? <FaXmark size={25} /> : <FaBars size={25} />}
//           </div>
//         </div>
//       </div>
//       {/* modile navbar */}
//       {menu && (
//         <div>
//           <ul className="md:hidden h-[90vh] w-[80%] bg-white flex flex-col items-center justify-center space-y-10 text-xl font-medium">
//             {navItem.map(({ id, text }) => (
//               <li
//                 className="hover:scale-110 duration-200 cursor-pointer font-semibold"
//                 key={id}
//               >
//                 <Link
//                   onClick={() => setMenu(!menu)}
//                   to={text}
//                   duration={500}
//                   offset={-70}
//                   activeClass={"active"}
//                   smooth={true}
//                 >
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
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
      <div className="flex items-center justify-between bg-white py-4 md:px-20 px-5">
        <h1 className="text-4xl font-bold cursor-pointer">Kaif</h1>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:bg-white bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear ${
            open ? "top-20 " : "top-[-490px]"
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
