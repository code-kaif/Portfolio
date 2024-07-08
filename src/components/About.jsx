import React from "react";

const About = () => {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="text-3xl font-semibold mb-5">About</h1>
          <p>
            Hello, I'm Kaif, A MERN stack developer is a professional who
            specializes in using the MERN stack to build web applications. The
            term "MERN" refers to a specific combination of technologies:
            MongoDB, Express.js, React, and Node.js. <br />{" "}
            <span className="font-semibold">Database Management:</span>
            Understanding and working with MongoDB is essential for storing,
            retrieving, and managing data in a MERN stack application.
            Developers should be comfortable designing schemas, optimizing
            queries, and ensuring data security. <br />{" "}
            <span className="font-semibold">API Intigration:</span> MERN stack
            developers create and consume APIs using Express.js to facilitate
            data exchange between the front end and back end of applications.
            They design API endpoints, handle HTTP requests, and manage
            authentication and authorization.
          </p>
          <br />
          <h1 className="text-green-700 font-semibold text-xl">Eduation</h1>
          <span>[BCA], [3rd Year], [University of Rajsthan]</span>
          <br />
          <br />
          <h1 className="text-green-700 font-semibold text-xl">
            Skills & Expertise
          </h1>
          <span>
            Proficient in JavaScript Experienced with React/ Node Strong grasp
            of Design Principles in Tailwind & other UI Liablary Excellent
            problem-solving skills Effective communicator and collaborator.
          </span>
          <br />
          <br />
          <h1 className="text-green-700 font-semibold text-xl">
            Mission Statement
          </h1>
          <span>
            My mission is to leverage my skills and creativity to deliver
            innovative Web Development solutions that exceed client expectations
            and contribute positively to the digital landscape. I am committed
            to continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
