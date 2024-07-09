import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  const cardItem = [
    {
      id: 1,
      logo: <FaHtml5 />,
      name: "HTML",
    },
    {
      id: 2,
      logo: <FaCss3 />,
      name: "CSS",
    },
    {
      id: 3,
      logo: <IoLogoJavascript />,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: <FaReact />,
      name: "React",
    },
    {
      id: 5,
      logo: <FaNodeJs />,
      name: "Node",
    },
    {
      id: 6,
      logo: <SiExpress />,
      name: "Express",
    },
    {
      id: 7,
      logo: <SiMongodb />,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: <FaGithub />,
      name: "GitHub",
    },
  ];
  return (
    <>
      <div
        name="Skills"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-semibold mb-5">Skills</h1>
          <p className="font-semibold">
            I've more than 1 years of experiance in below technologies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-5">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className=" flex justify-center items-center flex-col  md:w-[180px] md:h-[180px] p-1 cursor-pointer hover:scale-110 duration-300 my-2"
                key={id}
              >
                <div className="text-9xl">{logo}</div>
                <div>
                  <div className="font-semibold">{name}</div>
                </div>
              </div>
            ))}
            ``
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
