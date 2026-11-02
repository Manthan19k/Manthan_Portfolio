import { motion } from "framer-motion";
import "./Experience.css";

import adityaBirlaLogo from "../assets/logos/aditya-birla-group-subsidiaries.webp";

function Experience() {
  const learningPoints = [
    {
      number: "01",
      title: "Enterprise IT Infrastructure",
      description:
        "Gained practical exposure to enterprise IT environments and understood how physical infrastructure supports critical business operations.",
    },
    {
      number: "02",
      title: "Virtualization & VMware",
      description:
        "Observed virtualization environments and learned how multiple virtual machines can operate across physical server infrastructure.",
    },
    {
      number: "03",
      title: "Cloud Computing",
      description:
        "Strengthened my understanding of cloud concepts, infrastructure management, resource utilization, and scalable computing environments.",
    },
    {
      number: "04",
      title: "Infrastructure Monitoring",
      description:
        "Learned how infrastructure health, server resources, system availability, and operational conditions can be monitored centrally.",
    },
  ];

  const exposureAreas = [
    "Cloud Computing",
    "AWS",
    "VMware",
    "Virtualization",
    "Linux",
    "Windows Server",
    "Infrastructure Monitoring",
    "Enterprise IT",
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        {/* =====================================================
            SECTION INTRO
        ===================================================== */}
        <motion.header
          className="experience-header"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="experience-heading-block">

            <span className="experience-label">
              04 / EXPERIENCE
            </span>

            <h2 className="experience-title">
              Learning Through
              <br />
              Real Systems.
            </h2>

          </div>

          <p className="experience-intro">
            My first professional IT experience, focused on enterprise
            infrastructure, virtualization, monitoring, cloud computing,
            and real-world IT operations.
          </p>
        </motion.header>


        {/* =====================================================
            MAIN EXPERIENCE CARD
        ===================================================== */}
        <motion.article
          className="experience-card"
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* =================================================
              COMPANY OVERVIEW
          ================================================= */}
          <div className="experience-company">

            {/* LOGO COLUMN */}
            <motion.div
              className="experience-logo-column"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <div className="experience-logo-wrapper">
                <img
                  src={adityaBirlaLogo}
                  alt="Aditya Birla Group"
                  className="experience-logo"
                />
              </div>
            </motion.div>


            {/* COMPANY INFORMATION */}
            <div className="experience-company-info">

              <span className="experience-overline">
                IT INTERNSHIP · VOCATIONAL TRAINING
              </span>

              <h3 className="company-name">
                Grasim Industries
                <br />
                Limited
              </h3>

              <p className="company-group">
                Aditya Birla Group · Rehla Unit
              </p>

            </div>


            {/* DURATION */}
            <div className="experience-duration">

              <span className="date-label">
                DURATION
              </span>

              <strong>
                4 Weeks
              </strong>

              <span className="date-role">
                IT Department
              </span>

            </div>

          </div>


          {/* =================================================
              PROFESSIONAL EXPOSURE
          ================================================= */}
          <motion.section
            className="experience-exposure"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >

            {/* LEFT SIDE */}
            <div className="exposure-heading">

              <span className="experience-overline">
                PROFESSIONAL EXPOSURE
              </span>

              <h3 className="exposure-title">
                Understanding IT
                <br />
                Beyond the Classroom.
              </h3>

            </div>


            {/* RIGHT SIDE */}
            <div className="exposure-content">

              <p className="exposure-description">
                During my four-week IT internship at Grasim Industries
                Limited, I gained practical exposure to enterprise IT
                operations and infrastructure management. The experience
                helped me understand how physical servers, virtual
                machines, networking environments, and infrastructure
                monitoring work together within an organization.
              </p>

              <p className="exposure-description">
                I also explored cloud computing concepts and studied how
                modern infrastructure can be monitored, managed, and
                optimized using centralized systems. This experience
                helped bridge the gap between academic concepts and
                real-world IT environments.
              </p>

            </div>

          </motion.section>


          {/* =================================================
              AREAS OF EXPOSURE
          ================================================= */}
          <motion.section
            className="exposure-areas"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <div className="areas-heading">

              <span className="experience-overline">
                AREAS OF EXPOSURE
              </span>

              <p className="areas-description">
                Technologies, platforms, and infrastructure concepts
                explored during the internship.

              </p>

            </div>


            <div className="exposure-tags">

              {exposureAreas.map((area, index) => (
                <motion.span
                  key={area}
                  className="exposure-tag"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -3,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {area}
                </motion.span>
              ))}

            </div>

          </motion.section>


          {/* =================================================
              WHAT I LEARNED
          ================================================= */}
          <section className="experience-learning">

            {/* LEARNING HEADER */}
            <motion.div
              className="learning-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <span className="experience-overline">
                WHAT I LEARNED
              </span>
              <br />

              <h3 className="learning-title">
                From Concepts
                <br />
                To Real Infrastructure.
              </h3>

            </motion.div>


            {/* LEARNING CARDS */}
            <div className="learning-grid">

              {learningPoints.map((item, index) => (
                <motion.article
                  key={item.number}
                  className="learning-card"
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -7,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >

                  <div className="learning-card-top">

                    <span className="learning-number">
                      {item.number}
                    </span>

                    <span className="learning-arrow">
                      ↗
                    </span>

                  </div>

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                </motion.article>
              ))}

            </div>

          </section>


          {/* =================================================
              EXPERIENCE FOOTER
          ================================================= */}
          <footer className="experience-footer">

            <span>
              Grasim Industries Limited · Rehla Unit
            </span>

            <span>
              Aditya Birla Group
            </span>

          </footer>

        </motion.article>

      </div>
    </section>
  );
}

export default Experience;