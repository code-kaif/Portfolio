import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer text-black p-10">
          <aside>
            <h1 className="text-4xl font-semibold">Kaif</h1>
            <p className="text-[1rem] font-medium">
              © 2024 All rights reserved.
              <br />
              Supportive Partner ❤️ Asad, Kuldeep, Aditya
            </p>
          </aside>
          <nav>
            <h6 className="text-black font-bold text-2xl">Social</h6>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.instagram.com/kaif.jsx" target={"_blank"}>
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
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
