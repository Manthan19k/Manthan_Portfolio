import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Cloud Infrastructure Monitoring Dashboard",
      category: "CLOUD · INFRASTRUCTURE",
      description:
        "A centralized dashboard concept for monitoring enterprise IT infrastructure, including physical servers, virtual machines, infrastructure resources, and cloud environments.",
      technologies: [
        "AWS",
        "React",
        "Cloud Computing",
        "VMware",
        "Virtualization",
      ],
      github: "https://github.com/Manthan19k/cloudaxis-enterprise-dashboard",
      demo: "#",
      
    },

    {
      number: "02",
      title: "BusEase",
      category: "WEB APPLICATION · CLOUD",
      description:
        "A modern cloud-based bus ticketing and payment platform designed to provide a streamlined experience for discovering routes, selecting seats, booking journeys, and managing travel information.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Start",
        "Framer Motion",
      ],
      github: "https://github.com/Manthan19k/cloud-bus-ticketing-system",
      demo: "#",
      
    },

    {
      number: "03",
      title: "Amazon Clone",
      category: "WEB DEVELOPMENT · E-COMMERCE",
      description:
        "A functional e-commerce web application inspired by Amazon, developed to strengthen frontend development skills through product interfaces, responsive layouts, user interactions, and shopping-oriented UI.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      github: "#",
      demo: "#",
      
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <div className="projects-header-left">

            <span className="projects-label">
              <span className="projects-dot"></span>
              05 / PROJECTS
            </span>

            <h2 className="projects-title">
              Selected
              <br />
              Work.
            </h2>

          </div>

          <p className="projects-intro">
            A selection of practical projects developed across
            software engineering, cloud infrastructure, and
            modern web technologies.
          </p>
        </motion.div>


        {/* =========================================
            PROJECT LIST
        ========================================= */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <motion.article
              className="project-item"
              key={project.number}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -3,
              }}
            >

              {/* =========================================
                  PROJECT NUMBER
              ========================================= */}

              <div className="project-number">
                {project.number}
              </div>


              {/* =========================================
                  PROJECT MAIN CONTENT
              ========================================= */}

              <div className="project-main">

                {/* PROJECT HEADING */}

                <div className="project-heading">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                </div>


                {/* PROJECT DETAILS */}

                <div className="project-details">

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* =====================================
                      TECHNOLOGIES
                  ===================================== */}

                  <div className="project-technologies">

                    {project.technologies.map((technology) => (
                      <span
                        className="project-tech"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}

                  </div>


                  {/* =====================================
                      LINKS
                  ===================================== */}

                  <div className="project-links">

                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      

                      <span>
                        GitHub
                      </span>
                    </a>


                    <a
                      href={project.demo}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <span>
                        Live Demo
                      </span>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                      />
                    </a>

                  </div>

                </div>

              </div>


              {/* =========================================
                  PROJECT ARROW
              ========================================= */}

              <motion.div
                className="project-arrow"
                whileHover={{
                  rotate: 45,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <ArrowUpRight
                  size={24}
                  strokeWidth={1.25}
                />
              </motion.div>

            </motion.article>
          ))}

        </div>


        {/* =========================================
            PROJECT FOOTER
        ========================================= */}

        <motion.div
          className="projects-footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span>
            SOFTWARE · CLOUD · WEB
          </span>

          <span>
            03 SELECTED PROJECTS
          </span>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;