import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/kaif.jpg";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2">
            <h1 className="text-2xl md:text-4xl">Hello, Kaif here</h1>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>I'm a</h1>
              <ReactTyped
                className="text-slate-600 font-bold"
                strings={[
                  "Frontend Developer",
                  "Backend Developer",
                  "Fullstack Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-[12px] md:text-[15px] font-medium text-justify">
              Hello, I'm Kaif, a passionate MERN stack developer with a keen
              interest in crafting robust and scalable web applications. I
              specialize in leveraging the MERN (MongoDB, Express.js, React,
              Node.js) stack to build dynamic user interfaces and seamless
              backend services.
            </p>
            <br />
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-semibold text-[1rem] text-center">
                  Available on
                </h1>
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="https://www.instagram.com/kaif.jsx"
                      target={"_blank"}
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/code-kaif-93543a222/"
                      target={"_blank"}
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/code-kaif" target={"_blank"}>
                      <FaGithubSquare className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-[1rem]">
                  Currently Working on
                </h1>
                <div className="flex space-x-4">
                  <SiMongodb className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                  <SiExpress className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                  <FaReact className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                  <FaNodeJs className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-10 mt-8 order-1 md:order-2">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
};

export default Home;
