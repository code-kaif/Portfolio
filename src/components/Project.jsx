import React from "react";
import book from "../../public/Banner.png";
import pic from "../../public/kaif.jpg";
import map from "../../public/map.jpeg";

const Project = () => {
  const cardItem = [
    {
      id: 1,
      logo: book,
      name: "Book Store",
      about: "A book store using Mern Stack with Fully Authentication",
      prev: "https://bookstrrapp.netlify.app",
      source: "https://github.com/code-kaif/BookApp",
    },
    {
      id: 2,
      logo: pic,
      name: "Portfolio",
      about: "Personal Portfolio using React and GetForm",
      prev: "https://kaifprtfolio.netlify.app",
      source: "https://github.com/code-kaif/Portfolio",
    },
    {
      id: 3,
      logo: map,
      name: "Device Tracking",
      about: "A real time device tracking app using Nodejs",
      prev: "https://realtime-device-tracking-bmmb.onrender.com",
      source: "https://github.com/code-kaif/Realtime-Device-Tracking",
    },
  ];
  return (
    <>
      <div
        name="Project"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-semibold mb-5">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 my-5">
            {cardItem.map(({ id, logo, name, about, prev, source }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 my-5"
                key={id}
              >
                <img
                  src={logo}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full p-1 border-[2px]"
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">{about}</p>
                </div>
                <div className="flex justify-around px-6 py-4">
                  <button className="bg-slate-900 hover:bg-white hover:text-black hover:border-2 rounded-md text-white font-bold px-4 py-2">
                    <a href={prev} target={"_blank"}>
                      Preview
                    </a>
                  </button>
                  <button className="bg-white hover:bg-slate-900 hover:text-white text-black border-2 rounded-md font-bold px-4 py-2">
                    <a href={source} target={"_blank"}>
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
