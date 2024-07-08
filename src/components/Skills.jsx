import React from "react";
import node from "../../public/node.png";
import react from "../../public/reactjs.png";
import express from "../../public/express.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import js from "../../public/javascript.png";
import mongo from "../../public/mongodb.jpg";

const Skills = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: js,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "React",
    },
    {
      id: 5,
      logo: node,
      name: "Node",
    },
    {
      id: 6,
      logo: express,
      name: "Express",
    },
    {
      id: 7,
      logo: mongo,
      name: "MongoDB",
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
                className=" flex justify-center items-center flex-col border-[2px] rounded-full md:w-[180px] md:h-[180px] p-1 cursor-pointer hover:scale-110 duration-300 my-2"
                key={id}
              >
                <img
                  src={logo}
                  alt=""
                  className="w-[150px] h-[150px] rounded-full"
                />
                <div>
                  <div className="font-semibold">{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
