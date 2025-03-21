import React, { useState } from "react";
import "./portfolio.css";
import ProjectCard from "./ProjectCard";

import imgFastWeather from "../../assets/fast-weather-app.png";
import imgAlmarYoga from "../../assets/almar-yoga.png";
import imgSnakeGame from "../../assets/snake-game.png";
import imgAseoClean from "../../assets/aseoclean-page.png";
import imgAddToCart from "../../assets/PWA-Add to Cart.png";

import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars

const Portfolio = () => {
  const { t } = useTranslation();
  
  // Estado para el modal
  const [selectedProject, setSelectedProject] = useState(null);

  const allProjects = [
    {
      title: "Fast Weather App",
      description: t(
        "A quick and easy climate application created with JavaScript and deployed in Vercel."
      ),
      imageName: imgFastWeather,
      demoLink: "https://fast-weather-app.vercel.app/",
      codeLink: "https://github.com/Tongaston/Practicas-APIs/tree/main/Weather",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    },
    {
      title: "Almar Yoga Website",
      description: t(
        "A yoga studio website with blog, created with JavaScript and deployed in Vercel."
      ),
      imageName: imgAlmarYoga,
      demoLink: "https://almar-yoga.vercel.app/",
      codeLink: "https://github.com/Tongaston/Almar-Yoga",
      technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "Vercel"],
    },
    {
      title: "AseoClean Website",
      description:
        "A cleaning services website created with HTML, CSS, and JavaScript.",
      imageName: imgAseoClean,
      demoLink: "https://aseoclean.es/",
      codeLink: "https://github.com/Tongaston/AseoClean.es",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "PWA Add to Cart",
      description:
        "A Progressive Web App that allows users to add products to a cart and checkout.",
      imageName: imgAddToCart,
      demoLink: "https://mamma-shop-list.netlify.app/",
      codeLink:
        "https://github.com/Tongaston/Scrimba-JavaScript-Practice/tree/main/Add%20to%20Cart",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    },
    {
      title: "Snake Game",
      description: "A classic Snake game created with JavaScript.",
      imageName: imgSnakeGame,
      demoLink: "https://snake-game-neon-three.vercel.app/",
      codeLink:
        "https://github.com/Tongaston/Practicas-JavaScript/tree/main/Snake",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleProjects = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  // Abre el modal con la información del proyecto seleccionado
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Cierra el modal
  const closeModal = () => {
    setSelectedProject(null); // 👈 Limpia el estado para cerrar el modal
  };

  return (
    <section id="portfolio">
      <h2 className="portfolioTitle">{t("My Portfolio")}</h2>
      <p className="portfolioDesc">
        {t(
          "My portfolio as a web developer reflects my skills in creating engaging and functional digital experiences."
        )}
      </p>
      <p className="portfolioDesc">
        {t(
          "With a user-centric approach, I designed and developed intuitive and aesthetically appealing websites that not only meet the technical requirements but also offer smooth navigation and a pleasant interface."
        )}
      </p>

      <div className="imgContainer">
        <div className="imgWrapper">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageName={project.imageName}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              technologies={project.technologies}
              onClick={() => openModal(project)} // 👈 Abre el modal al hacer clic
            />
          ))}
        </div>
      </div>

      <button onClick={toggleProjects} className="portfolioBtn">
        {showAll ? t("Show Less") : t("Show More")}
      </button>

      {/* MODAL */}
      <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="modalOverlay"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0, opacity: 0 }} // Inicia más pequeño
        animate={{ scale: 1, opacity: 1 }}   // Aparece con tamaño normal
        exit={{ scale: 0, opacity: 0 }}    // Se encoge antes de desaparecer
        transition={{ duration: 0.3 }}
      >
        <button className="closeBtn" onClick={closeModal}>✖</button>
        <h2>{selectedProject.title}</h2>
        <img src={selectedProject.imageName} alt={selectedProject.title} />
        <p>{selectedProject.description}</p>
        <div className="modalBtnContainer">
          <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            {t("View Demo")}
          </a>
          <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" className="project-link code-link">
            {t("View Code")}
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Portfolio;
