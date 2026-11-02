import { motion } from "framer-motion";
import "./skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Languages",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "C",
        "HTML",
        "CSS",
      ],
    },
    {
      number: "02",
      title: "Frontend",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      number: "03",
      title: "Cloud & Infrastructure",
      skills: [
        "AWS",
        "Microsoft Azure",
        "VMware",
        "Cloud Infrastructure",
        "Virtualization",
      ],
    },
    {
      number: "04",
      title: "AI & Data",
      skills: [
        "Machine Learning",
        "Generative AI",
        "AI Fundamentals",
      ],
    },
    {
      number: "05",
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "MySQL",
        "Appwrite",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* SECTION HEADER */}
        <div className="skills-header">

          <div className="skills-index">
            <span className="skills-dot"></span>
            <span>03 / SKILLS</span>
          </div>

          <div className="skills-heading-wrap">

            <motion.h2
              className="skills-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Technologies
              <br />
              <span>I work with.</span>
            </motion.h2>

            <motion.p
              className="skills-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A growing technical toolkit built through
              projects, certifications and continuous learning.
            </motion.p>

          </div>
        </div>


        {/* SKILLS GRID */}
        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.div
              className={`skill-card ${
                group.number === "05" ? "skill-card-wide" : ""
              }`}
              key={group.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div className="skill-card-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <h3 className="skill-title">
                  {group.title}
                </h3>

              </div>


              <div className="skill-items">

                {group.skills.map((skill) => (
                  <span
                    className="skill-name"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>


        {/* FOOTER */}
        <div className="skills-footer">
          Continuous learning · Building · Exploring ·
          Software · Cloud · AI
        </div>

      </div>
    </section>
  );
}

export default Skills;