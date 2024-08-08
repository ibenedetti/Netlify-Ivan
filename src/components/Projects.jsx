import { useState } from "react";
import { Random, FitCalc, LED } from "./";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Projects = () => {
    const [activeExperience, setActiveExperience] = useState(undefined); // No default active component

    const experiences = [
        { title: "Cards Shuffle Code", component: <Random /> },
        { title: "Fit Website", component: <FitCalc /> },
        { title: "LED Rental Model", component: <LED /> },
        // Add more experiences as needed
    ];

    const handleExperienceClick = (title) => {
        setActiveExperience(prevTitle => (prevTitle === title ? undefined : title));
    };

    return (
        <div className="projects-container sm:my-20 relative">
            <motion.div variants={textVariant()}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    My Projects
                </motion.h2>
            </motion.div>

            <nav className="navbar mt-8">
                <ul className="nav-list">
                    {experiences.map((exp, index) => (
                        <li 
                            key={index} 
                            className={`nav-item ${activeExperience === exp.title ? 'active' : ''}`}
                            onClick={() => handleExperienceClick(exp.title)}
                        >
                            <Link 
                                to={`/${exp.title.replace(/\s+/g, '-').toLowerCase()}`} 
                                className="nav-link"
                            >
                                <div className="absolute"></div> {/* Added div here */}
                                {exp.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="component-container mt-8">
                {experiences.find(exp => exp.title === activeExperience)?.component}
            </div>
        </div>
    );
};

export default Projects;
