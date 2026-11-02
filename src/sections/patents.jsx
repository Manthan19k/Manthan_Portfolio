import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import "./Patents.css";

const patents = [
  {
    number: "01",
    status: "PUBLISHED",
    title:
      "Intelligent Multi-Modal Automated Vehicular Gate Access Control System",

    description:
      "An intelligent automated gate access system integrating multi-modal authentication, computer vision, audio-based driver verification, IoT-enabled safety control, and intelligent decision-making for secure industrial and logistics entry.",

    applicationNo: "202611013823",
    publicationNo: "IN202611013823 A1",
    filingDate: "09 Feb 2026",
    publicationDate: "27 Mar 2026",

    inventors:
      "Ayush Kumar, Manthan Kumar, Aman Kumar, Shivam Maddheshiya, Dr. Mohd Wazih Ahmad, Geetanjali Mittal, Azhar Ahmad Khan, Dr. Mohammad Haris & Ashutosh Kumar Singh",

    link: "#",
  },

  {
    number: "02",
    status: "PUBLISHED",
    title:
      "An Integrated Ropeway-Based Mobility System for Hill Regions and Method Thereof",

    description:
      "An integrated smart mobility framework combining peripheral parking, aerial ropeway transportation, electric last-mile shuttles, IoT sensing, AI-based optimization, and centralized intelligent control for sustainable transportation in hill regions.",

    applicationNo: "202611058075",
    publicationNo: "IN202611058075 A1",
    filingDate: "07 May 2026",
    publicationDate: "17 Jul 2026",

    inventors:
      "Ayush Kumar, Manthan Kumar, Aniket Agrahari, Ayush Jaiswal, Chand Babu, Ashish Raj, Geetanjali Mittal, Azhar Ahmad Khan & Dr. Mohd Wazih Ahmad",

    link: "#",
  },

  {
    number: "03",
    status: "PUBLISHED",
    title:
      "A Real-Time Geological and Traffic Carrying Capacity Monitoring, Prediction and Control System for Roads",

    description:
      "A real-time road safety and traffic management system that combines geological sensing, traffic monitoring, risk assessment, safe vehicle limit determination, AI/ML prediction, traffic diversion, and automated control for geologically sensitive roads.",

    applicationNo: "202611076677",
    publicationNo: "IN202611076677 A1",
    filingDate: "20 Jun 2026",
    publicationDate: "07 Aug 2026",

    inventors:
      "Manthan Kumar, Ayush Kumar, Dr. Mohammad Haris, Dr. Mousumi Banerjee, Ms. Saranya Raj, Dr. Rakesh Kumar Singh, Geetanjali Mittal, Azhar Khan & Dr. Mohd Wazih Ahmad",

    link: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Patents = () => {
  return (
    <section className="patents-section" id="patents">
      <div className="patents-container">

        {/* Section Header */}
        <motion.div
          className="patents-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="patents-section-label">
            <span>07</span>
            <span>/</span>
            <span>PATENTS</span>
          </div>

          <div className="patents-heading-row">
            <div>
              <h2>Patents & Intellectual Property</h2>

              <p>
                Ideas developed into protected innovations across intelligent
                systems, mobility, infrastructure, and AI-driven technology.
              </p>
            </div>

            <div className="patents-count">
              <span>03</span>
              <small>Published<br />Applications</small>
            </div>
          </div>
        </motion.div>

        {/* Patent Cards */}
        <motion.div
          className="patents-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {patents.map((patent) => (
            <motion.article
              className="patent-card"
              key={patent.number}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top Row */}
              <div className="patent-card-top">
                <div className="patent-number">
                  {patent.number}
                </div>

                <div className="patent-status">
                  <span className="patent-status-dot"></span>
                  {patent.status}
                </div>
              </div>

              {/* Main Content */}
              <div className="patent-main">
                <div className="patent-icon">
                  <FileText size={22} strokeWidth={1.7} />
                </div>

                <div className="patent-content">
                  <h3>{patent.title}</h3>

                  <p className="patent-description">
                    {patent.description}
                  </p>

                  {/* Patent Information */}
                  <div className="patent-meta">

                    <div className="patent-meta-item">
                      <span>APPLICATION NO.</span>
                      <strong>{patent.applicationNo}</strong>
                    </div>

                    <div className="patent-meta-item">
                      <span>PUBLICATION NO.</span>
                      <strong>{patent.publicationNo}</strong>
                    </div>

                    <div className="patent-meta-item">
                      <span>FILED</span>
                      <strong>{patent.filingDate}</strong>
                    </div>

                    <div className="patent-meta-item">
                      <span>PUBLISHED</span>
                      <strong>{patent.publicationDate}</strong>
                    </div>

                  </div>

                  {/* Inventors */}
                  <div className="patent-inventors">
                    <span>INVENTORS</span>
                    <p>{patent.inventors}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Gateway */}
              <div className="patent-footer">

                <div className="patent-footer-label">
                  <span>INDIAN PATENT APPLICATION</span>
                </div>

                <a
                  href={patent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="patent-view-link"
                  onClick={(e) => {
                    if (patent.link === "#") {
                      e.preventDefault();
                    }
                  }}
                >
                  <span>View Patent</span>
                  <ArrowUpRight size={17} />
                </a>

              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="patents-bottom-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="patents-note-line"></span>

          <p>
            Innovation focused on solving real-world problems through
            intelligent systems, automation, mobility, and sustainable
            technology.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Patents;