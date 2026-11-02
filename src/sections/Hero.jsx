import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero" id="home">

      {/* Decorative background */}
      <div className="hero-decoration" />


      <div className="hero-container">

        {/* =================================
            META
        ================================= */}
        <div className="hero-meta">

          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            01 / INTRODUCTION
          </motion.span>


          <motion.span
            className="hero-status"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </motion.span>

        </div>


        {/* =================================
            MAIN GRID
        ================================= */}
        <div className="hero-grid">


          {/* =================================
              LEFT CONTENT
          ================================= */}
          <div className="hero-content">

            <motion.div
              className="hero-kicker"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >
              SOFTWARE ENGINEER IN THE MAKING
              <span>·</span>
              CLOUD & AI
            </motion.div>


            <h1 className="hero-title">

              <motion.span
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: 'easeOut',
                }}
              >
                Building
              </motion.span>


              <motion.span
                className="hero-title-indent"
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease: 'easeOut',
                }}
              >
                Modern Software
              </motion.span>


              <motion.span
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  ease: 'easeOut',
                }}
              >
                <em>&</em> Digital
              </motion.span>


              <motion.span
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.6,
                  ease: 'easeOut',
                }}
              >
                Experiences.
              </motion.span>

            </h1>


            <motion.div
              className="hero-footer"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
            >

              <p>
                Computer Science student focused on
                software development, cloud technologies
                and emerging AI solutions.
              </p>


              <button
                className="hero-cta"
                onClick={scrollToProjects}
              >

                <span>
                  Explore My Work
                </span>

                <span className="hero-cta-icon">
                  <ArrowUpRight size={17} />
                </span>

              </button>

            </motion.div>

          </div>


          {/* =================================
              RIGHT PORTRAIT
          ================================= */}
          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="hero-portrait">

              <div className="portrait-initials">
                MK
              </div>

              <div className="portrait-caption">
                PROFESSIONAL PORTRAIT
              </div>

            </div>


            <div className="hero-location">

              <span>
                BASED IN
              </span>

              <strong>
                GREATER NOIDA, INDIA
              </strong>

            </div>

          </motion.div>

        </div>


        {/* =================================
            SCROLL
        ================================= */}
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.2,
          }}
        >

          <span>
            SCROLL TO EXPLORE
          </span>

          <ArrowDownRight size={16} />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;