import { Link } from "react-router-dom";
import Head from "../assets/head.jpg";
import food from "../assets/food.jpg";
import mentor from "../assets/mentor.jpg";
import remote from "../assets/remote.png";
import robot from "../assets/robot.png";
import portf from "../assets/portf.jpg";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Skill-up Website",
      image: remote,
      description:
        "A web app designed to help individuals gain high-income skill to make their dream remote job.",
      link: "https://jobmingles.vercel.app/",
    },
    {
      id: 2,
      title: "Payment system",
      image: robot,
      description:
        "Payment system using a methodology to identify the credit cards most likely to fit your needs .",
      link: "https://main--linxbank.netlify.app",
    },
    {
      id: 3,
      title: "Mentorship Website",
      image: mentor,
      description:
        "Designed to connect you with experience and passionate mentors.",
      link: "https://mentorwey.com/",
    },
    {
      id: 4,
      title: "Headset Store",
      image: Head, // Replace with actual image path
      description:
        "An online store with advanced shopping features, user authentication, and payment integration.",
      link: "https://ecommerce-seven-rosy.vercel.app/",
    },
    {
      id: 5,
      title: "Portfolio",
      image: portf,
      description:
        "A Porfolio for one of out client , dieplaying his skill in other to apply for work.",
      link: "https://main--ogabz-portfolio.netlify.app/",
    },
    {
      id: 6,
      title: "Luxury Restaurant Website",
      image: food,
      description:
        "A website for a restaurant with online ordering, menu display, and reservation booking system.",
      link: "https://main--linxdachef.netlify.app",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Our Recent <span className="text-blue-400">Work</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore some of the most exciting projects we ve worked on. Click any
          of the projects to learn more.
        </p>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link
                to={project.link}
                className="mt-4 inline-block text-blue-400 hover:text-blue-500 font-semibold"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
