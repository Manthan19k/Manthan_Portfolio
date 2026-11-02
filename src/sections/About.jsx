import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./About.css";

function About() {
  const focusAreas = [
    {
      number: "01",
      title: "Software Development",
      description:
        "Building modern web applications with a focus on clean architecture, responsive interfaces and practical user experiences.",
    },
    {
      number: "02",
      title: "Cloud & Infrastructure",
      description:
        "Exploring cloud computing, virtualization, infrastructure monitoring and technologies used to build reliable systems.",
    },
    {
      number: "03",
      title: "Artificial Intelligence",
      description:
        "Developing an understanding of AI and machine learning while exploring how intelligent systems can solve real-world problems.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="about-top">
          <div className="section-index">
            <span className="index-dot"></span>
            <span>02 / ABOUT</span>
          </div>

          <div className="about-top-line"></div>
        </div>

        {/* =========================
            MAIN INTRO
        ========================== */}
        <div className="about-intro">

          <motion.h2
            className="about-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Engineering with a focus on
            <span> software, cloud & AI.</span>
          </motion.h2>

          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p>
              I am a Computer Science & Engineering student focused on
              software development, cloud technologies and emerging
              artificial intelligence solutions.
            </p>

            <p>
              My work combines development with practical exploration of
              modern technologies — from building web applications and
              software systems to understanding cloud infrastructure and
              intelligent solutions.
            </p>
          </motion.div>
        </div>

        {/* =========================
            FOCUS AREAS
        ========================== */}
        <div className="about-focus">

          <div className="focus-heading">
            <span>CORE FOCUS</span>

            <ArrowUpRight size={18} strokeWidth={1.5} />
          </div>

          <div className="focus-list">

            {focusAreas.map((item, index) => (
              <motion.article
                className="focus-item"
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <div className="focus-number">
                  {item.number}
                </div>

                <div className="focus-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="focus-arrow">
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
              </motion.article>
            ))}

          </div>
        </div>

        {/* =========================
            PROFESSIONAL SNAPSHOT
        ========================== */}
        <motion.div
          className="about-snapshot"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <div className="snapshot-item">
            <span className="snapshot-number">01</span>
            <span className="snapshot-label">
              Computer Science
              <br />
              & Engineering
            </span>
          </div>

          <div className="snapshot-item">
            <span className="snapshot-number">02</span>
            <span className="snapshot-label">
              Cloud & Virtual
              <br />
              Infrastructure
            </span>
          </div>

          <div className="snapshot-item">
            <span className="snapshot-number">03</span>
            <span className="snapshot-label">
              AI & Emerging
              <br />
              Technologies
            </span>
          </div>

          <div className="snapshot-item">
            <span className="snapshot-number">04</span>
            <span className="snapshot-label">
              Published
              <br />
              Patents
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;