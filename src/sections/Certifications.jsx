import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, X } from "lucide-react";
import "./Certifications.css";

import awsLogo from "../assets/logos/icons8-aws-logo-48.png";

function Certifications() {
  const [selectedProvider, setSelectedProvider] = useState(null);

  /* =========================================
     AWS BADGES
     ========================================= */

  const awsBadges = [
    {
      number: "01",
      title: "AWS Skills Center AI Practitioner: Foundational",
      issuer: "Amazon Web Services",
      description:
        "Foundation training focused on artificial intelligence concepts, applications, and responsible AI practices.",
      link: "https://www.credly.com/badges/2dca4b17-5e63-49bf-b188-a1968742c246/public_url",
    },
    {
      number: "02",
      title: "AWS Knowledge: Cloud Essentials",
      issuer: "Amazon Web Services",
      description:
        "Training focused on essential cloud concepts, AWS services, and fundamental cloud computing knowledge.",
      link: "https://www.credly.com/badges/1788edff-08d1-408e-ab69-da574fe5e9f7/public_url",
    },
    {
      number: "03",
      title: "AWS Knowledge: AI Basics",
      issuer: "Amazon Web Services",
      description:
        "Foundation AWS training covering essential artificial intelligence and machine learning concepts.",
      link: "https://www.credly.com/badges/919dafbc-3996-44eb-b957-dc9ea4070fe4/public_url",
    },
    {
      number: "04",
      title: "AWS Knowledge: AWS for Games: Cloud Game Development",
      issuer: "Amazon Web Services",
      description:
        "Training focused on AWS cloud technologies and their application in game development environments.",
      link: "https://www.credly.com/badges/ef3b214a-ef52-4967-99f4-8062af2b9c62/public_url",
    },
  ];

  /* =========================================
     IBM CREDENTIALS
     ========================================= */

  const ibmCredentials = [
    {
      number: "01",
      title: "AI Fundamentals: Foundations for Understanding AI",
      issuer: "IBM SkillsBuild",
      description:
        "Foundational learning covering artificial intelligence concepts and the fundamentals of understanding AI.",
      link: "https://www.credly.com/badges/9f45fb53-1b5c-4b1a-89fa-1e23ff994505/public_url",
    },
    {
      number: "02",
      title: "Getting Started with Generative AI",
      issuer: "IBM SkillsBuild",
      description:
        "Foundational learning focused on generative artificial intelligence concepts and applications.",
      link: "https://www.credly.com/badges/c70f5d15-7a51-4f8d-81d2-b551f3a6fd73/public_url",
    },
    {
      number: "03",
      title: "Cloud Computing Fundamentals",
      issuer: "IBM SkillsBuild",
      description:
        "Fundamental learning covering cloud computing concepts, technologies, and essential cloud knowledge.",
      link: "https://www.credly.com/badges/14b97c8e-fe41-4324-a39d-8b999f2e14e5/public_url",
    },
    {
      number: "04",
      title: "Make Agentic AI Work for You",
      issuer: "IBM SkillsBuild",
      description:
        "Learning focused on agentic AI concepts and practical ways intelligent AI systems can support work.",
      link: "https://www.credly.com/badges/7e4163af-1b13-4f31-94b2-fca347fc208c/public_url",
    },
    {
      number: "05",
      title: "AI Literacy",
      issuer: "IBM SkillsBuild",
      description:
        "Learning focused on developing foundational AI literacy and understanding artificial intelligence.",
      link: "https://www.credly.com/badges/2aa92a9e-cc36-42b6-88bf-59da9e3e8118/public_url",
    },
  ];

  /* =========================================
     MICROSOFT CREDENTIALS
     ========================================= */

  const microsoftCredentials = [
    {
      number: "01",
      title: "Microsoft Azure Essentials",
      issuer: "Microsoft",
      description:
        "Professional learning covering Microsoft Azure fundamentals and essential cloud computing concepts.",
      link: "#",
    },
    {
      number: "02",
      title: "Get started with machine learning in Azure",
      issuer: "Microsoft",
      description:
        "Learning focused on getting started with machine learning capabilities and concepts in Microsoft Azure.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/FMCN4A6X?sharingId=76663FA4C8BE6022",
    },
    {
      number: "03",
      title: "Get started with natural language processing in Azure",
      issuer: "Microsoft",
      description:
        "Learning focused on natural language processing concepts and capabilities available through Azure.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/NVCJLKTF?sharingId=76663FA4C8BE6022",
    },
    {
      number: "04",
      title: "Describe Azure compute services",
      issuer: "Microsoft",
      description:
        "Learning covering core Azure compute services and their role in cloud-based solutions.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/8V7YDS2W?sharingId=76663FA4C8BE6022",
    },
    {
      number: "05",
      title: "Describe Azure networking services",
      issuer: "Microsoft",
      description:
        "Learning covering essential Azure networking services and cloud networking concepts.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/BU65RJFD?sharingId=76663FA4C8BE6022",
    },
    {
      number: "06",
      title: "Describe Azure storage services",
      issuer: "Microsoft",
      description:
        "Learning covering Azure storage services and fundamental cloud storage concepts.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/ZJKEUPW2?sharingId=76663FA4C8BE6022",
    },
    {
      number: "07",
      title: "Introduction to generative AI concepts",
      issuer: "Microsoft",
      description:
        "Introduction to the fundamental concepts, capabilities, and applications of generative artificial intelligence.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/3A5E8B3H?sharingId=76663FA4C8BE6022",
    },
    {
      number: "08",
      title: "Introduction to machine learning concepts",
      issuer: "Microsoft",
      description:
        "Introduction to fundamental machine learning concepts, terminology, and approaches.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/PLA2ENN4?sharingId=76663FA4C8BE6022",
    },
    {
      number: "09",
      title: "Introduction to natural language processing concepts",
      issuer: "Microsoft",
      description:
        "Introduction to natural language processing concepts and how AI systems work with human language.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/A48LCZ27?sharingId=76663FA4C8BE6022",
    },
    {
      number: "10",
      title: "Introduction to AI concepts",
      issuer: "Microsoft",
      description:
        "Introduction to fundamental artificial intelligence concepts and terminology.",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/Manthankumar-1868/CXDDJJK9?sharingId=76663FA4C8BE6022",
    },
  ];

  /* =========================================
     CISCO NETWORKING ACADEMY CREDENTIALS
     ========================================= */

  const ciscoCredentials = [
    {
      number: "01",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      description:
        "Foundational learning focused on cybersecurity concepts, threats, vulnerabilities, and basic security practices.",
      link: "https://www.credly.com/badges/2dee19c8-95d5-476f-9b57-7570922fd8b5/public_url",
    },
  ];

  /* =========================================
     SELECTED BADGES
     ========================================= */

  const selectedBadges =
    selectedProvider === "aws"
      ? awsBadges
      : selectedProvider === "ibm"
      ? ibmCredentials
      : selectedProvider === "microsoft"
      ? microsoftCredentials
      : selectedProvider === "cisco"
      ? ciscoCredentials
      : [];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="certifications-header">

          <div>
            <span className="certifications-number">
              06 / CERTIFICATIONS
            </span>

            <h2 className="certifications-title">
              Certifications
            </h2>
          </div>

          <p className="certifications-intro">
            Industry-recognized training and certifications
            across cloud, AI, development, and emerging
            technologies.
          </p>

        </div>


        {/* =========================================
            PROVIDER CARDS
        ========================================= */}

        <div className="provider-grid">

          {/* =========================================
              AWS
          ========================================= */}

          <motion.button
            className="provider-card"
            onClick={() => setSelectedProvider("aws")}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >

            <div className="provider-top">

              <span className="provider-number">
                01
              </span>

              <ArrowUpRight
                className="provider-arrow"
                size={20}
              />

            </div>


            <div className="provider-main">

              <div className="provider-logo-wrapper">

                <img
                  src={awsLogo}
                  alt="Amazon Web Services"
                  className="provider-logo"
                />

              </div>


              <div className="provider-content">

                <span className="provider-label">
                  CLOUD & AI
                </span>

                <h3>
                  Amazon Web Services
                </h3>

                <p>
                  AWS training badges covering cloud computing,
                  artificial intelligence, and specialized AWS
                  knowledge.
                </p>

              </div>

            </div>


            <div className="provider-bottom">

              <span>
                04 Training Badges
              </span>

              <span className="provider-view">
                View badges
                <ArrowUpRight size={15} />
              </span>

            </div>

          </motion.button>


          {/* =========================================
              IBM
          ========================================= */}

          <motion.button
            className="provider-card provider-card-ibm"
            onClick={() => setSelectedProvider("ibm")}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >

            <div className="provider-top">

              <span className="provider-number">
                02
              </span>

              <ArrowUpRight
                className="provider-arrow"
                size={20}
              />

            </div>


            <div className="provider-main">

              <div className="provider-logo-wrapper ibm-logo-wrapper">

                <span className="ibm-logo-text">
                  IBM
                </span>

              </div>


              <div className="provider-content">

                <span className="provider-label">
                  AI & EMERGING TECHNOLOGIES
                </span>

                <h3>
                  IBM SkillsBuild
                </h3>

                <p>
                  Professional learning credentials covering
                  artificial intelligence, generative AI, cloud
                  computing, and emerging technologies.
                </p>

              </div>

            </div>


            <div className="provider-bottom">

              <span>
                05 Credentials
              </span>

              <span className="provider-view">
                View credentials
                <ArrowUpRight size={15} />
              </span>

            </div>

          </motion.button>


          {/* =========================================
              MICROSOFT
          ========================================= */}

          <motion.button
            className="provider-card provider-card-microsoft"
            onClick={() => setSelectedProvider("microsoft")}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >

            <div className="provider-top">

              <span className="provider-number">
                03
              </span>

              <ArrowUpRight
                className="provider-arrow"
                size={20}
              />

            </div>


            <div className="provider-main">

              <div className="provider-logo-wrapper microsoft-logo-wrapper">

                <div className="microsoft-logo-grid">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>


              <div className="provider-content">

                <span className="provider-label">
                  AZURE & AI
                </span>

                <h3>
                  Microsoft
                </h3>

                <p>
                  Microsoft Learn achievements covering Azure,
                  artificial intelligence, machine learning,
                  networking, storage, and generative AI.
                </p>

              </div>

            </div>


            <div className="provider-bottom">

              <span>
                10 Credentials
              </span>

              <span className="provider-view">
                View credentials
                <ArrowUpRight size={15} />
              </span>

            </div>

          </motion.button>


          {/* =========================================
              CISCO NETWORKING ACADEMY
          ========================================= */}

          <motion.button
            className="provider-card provider-card-cisco"
            onClick={() => setSelectedProvider("cisco")}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >

            <div className="provider-top">

              <span className="provider-number">
                04
              </span>

              <ArrowUpRight
                className="provider-arrow"
                size={20}
              />

            </div>


            <div className="provider-main">

              <div className="provider-logo-wrapper cisco-logo-wrapper">

                <span className="cisco-logo-text">
                  CISCO
                </span>

              </div>


              <div className="provider-content">

                <span className="provider-label">
                  CYBERSECURITY
                </span>

                <h3>
                  Cisco Networking Academy
                </h3>

                <p>
                  Cybersecurity training covering foundational
                  security concepts, threats, vulnerabilities,
                  and essential security practices.
                </p>

              </div>

            </div>


            <div className="provider-bottom">

              <span>
                01 Credential
              </span>

              <span className="provider-view">
                View credential
                <ArrowUpRight size={15} />
              </span>

            </div>

          </motion.button>

        </div>


        {/* =========================================
            BADGE / CREDENTIAL POPUP
        ========================================= */}

        <AnimatePresence>

          {selectedProvider && (

            <motion.div
              className="badge-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProvider(null)}
            >

              <motion.div
                className="badge-panel"
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >

                {/* PANEL HEADER */}

                <div className="badge-panel-header">

                  <div className="badge-panel-brand">

                    {selectedProvider === "aws" ? (

                      <div className="badge-panel-logo">

                        <img
                          src={awsLogo}
                          alt="AWS"
                        />

                      </div>

                    ) : selectedProvider === "ibm" ? (

                      <div className="badge-panel-logo ibm-panel-logo">
                        <span>IBM</span>
                      </div>

                    ) : selectedProvider === "microsoft" ? (

                      <div className="badge-panel-logo microsoft-panel-logo">
                        <div className="microsoft-logo-grid">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>

                    ) : (

                      <div className="badge-panel-logo cisco-panel-logo">
                        <span>CISCO</span>
                      </div>

                    )}


                    <div>

                      <span>
                        {selectedProvider === "aws"
                          ? "AMAZON WEB SERVICES"
                          : selectedProvider === "ibm"
                          ? "IBM SKILLSBUILD"
                          : selectedProvider === "microsoft"
                          ? "MICROSOFT"
                          : "CISCO NETWORKING ACADEMY"}
                      </span>

                      <h3>
                        {selectedProvider === "aws"
                          ? "AWS Training Badges"
                          : selectedProvider === "ibm"
                          ? "IBM Credentials"
                          : selectedProvider === "microsoft"
                          ? "Microsoft Credentials"
                          : "Cisco Credential"}
                      </h3>

                    </div>

                  </div>


                  <button
                    className="close-button"
                    onClick={() => setSelectedProvider(null)}
                    aria-label="Close credentials"
                  >
                    <X size={22} />
                  </button>

                </div>


                {/* BADGES */}

                <div className="badges-grid">

                  {selectedBadges.map((badge, index) => (

                    <motion.article
                      className="badge-card"
                      key={badge.number}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >

                      <div className="badge-card-top">

                        <span className="badge-number">
                          {badge.number}
                        </span>

                        <Award
                          size={21}
                          className="badge-icon"
                        />

                      </div>


                      <div className="badge-card-content">

                        <span className="badge-issuer">
                          {badge.issuer}
                        </span>

                        <h4>
                          {badge.title}
                        </h4>

                        <p>
                          {badge.description}
                        </p>

                      </div>


                      <a
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge-link"
                      >

                        {selectedProvider === "aws"
                          ? "View Badge"
                          : "View Credential"}

                        <ArrowUpRight size={16} />

                      </a>

                    </motion.article>

                  ))}

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
}

export default Certifications;