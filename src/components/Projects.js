import React from 'react';
import ProjectCard from "./ProjectCard";
import Tuter from "../img/tuter.png";
import PawPals from "../img/logo.gif";
import TTT from "../img/ttt.png";
import SJW from "../img/sjw.png";
import CC from "../img/cc.jpeg";

  const projects = [
    {
      id: 1,
      title: "Tuter",
      description: "Tuter is a social networking for tutors and students to share questions, homework details and more in an online, efficient platform. Now tutors can be accurately prepared to show up to sessions with the right materials and expectations in hand. It's as simple as uploading a picture of your homework, filling out a few questions and submitting it. Then you're done and on your way to better learning!",
      image: Tuter,
    },
    {
      id: 2,
      title: "PawPals",
      description: "Welcome to the Paw Pals! Our mission is to help find loving homes for animals in need. Whether you're looking for a cuddly cat, a playful pup, or a quirky rabbit, you'll find your perfect match here. Our extensive database of available pets includes detailed information on breed, age, personality, and more to help you find the right fit for your family. Adopting a pet is a big decision, and we're here to support you every step of the way. Our knowledgeable staff is available to answer any questions you may have, and our resources page includes information on pet care, training, and more. Start your search today and give an animal in need a second chance at a happy home!",
      image: PawPals,
    },
    {
      id: 3,
      title: "Sarah Jacobs Writes",
      description: "Sarah Jacobs is an aspiring author with an array of books and short stories in her portfolio. She uses this website as her landing page for friends and family to browse through her works as well as purchase products through Amazon links.",
      image: SJW,
    },
    {
        id: 4,
        title: "Carrot Calendar",
        description: "Gaining over $100k in revenue per year, Bobbys Rabbits needed a simple, efficient way to coordinate community events ro boost interaction and sales. Carrot Calendar is a user-friendly calendar intended to handle online events, RSVPs and monetary transactions.",
        image: CC,
      },
      {
        id: 5,
        title: "Time to Travel",
        description: "Time to Travel is a fun interactive website for consumers who want to travel in the future and seek an all-in-one alternative to planning accordingly. Time to Travel will allow users to search their intended destination and learn about different aspects of the location, including weather and scenery.",
        image: TTT,
      },
  ];
  
  const Card = ({ title, description, image }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  const Portfolio = () => {
    return (
        <div className="card-grid">
      <div className="portfolio">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
      </div>
    );
  };
  
  export default Portfolio;
  