import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import "./Contact.css";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Manthan19k",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manthankumar-builds",
    icon: Linkedin,
  },
  {
    label: "Credly",
    href: "https://www.credly.com/users/manthan-kumar.1ddcb416",
    icon: Award,
  },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* SECTION LABEL */}
        <motion.div
          className="contact-section-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span>08</span>
          <span>/</span>
          <span>CONTACT</span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            Let&apos;s build something
            <span> meaningful.</span>
          </h2>

          <p>
            Whether it&apos;s a software project, cloud solution,
            AI-driven idea, or a meaningful collaboration —
            I&apos;d be happy to connect.
          </p>
        </motion.div>

        {/* CONTACT GRID */}
        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >

          {/* EMAIL CARD */}
          <div className="contact-email-card">

            <div className="contact-card-icon">
              <Mail size={21} strokeWidth={1.7} />
            </div>

            <div className="contact-email-content">

              <span className="contact-card-label">
                HAVE A PROJECT IN MIND?
              </span>

              <a
                href="mailto:kumar.m.reh@gmail.com"
                className="contact-email"
              >
                kumar.m.reh@gmail.com
              </a>

              <p>
                The best way to reach me is through email.
                I&apos;ll get back to you as soon as possible.
              </p>

              <div className="contact-other-emails">
                <span>OTHER EMAILS</span>

                <a href="mailto:kumar.m.reh@outlook.com">
                  kumar.m.reh@outlook.com
                </a>

                <a href="mailto:manthan2404920100193@kccitm.org">
                  manthan2404920100193@kccitm.org
                </a>
              </div>

            </div>

            <a
              href="mailto:kumar.m.reh@gmail.com"
              className="contact-arrow"
              aria-label="Send email"
            >
              <ArrowUpRight size={20} />
            </a>

          </div>

          {/* LOCATION CARD */}
          <div className="contact-info-card">

            <div className="contact-info-icon">
              <MapPin size={19} strokeWidth={1.7} />
            </div>

            <div>
              <span>BASED IN</span>

              <strong>
                Greater Noida, India
              </strong>
            </div>

          </div>

          {/* AVAILABILITY CARD */}
          <div className="contact-info-card">

            <div className="contact-availability-dot"></div>

            <div>
              <span>CURRENTLY OPEN TO</span>

              <strong>
                Software &amp; Cloud Opportunities
              </strong>
            </div>

          </div>

        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          className="contact-social-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <span className="contact-social-title">
            CONNECT
          </span>

          <div className="contact-social-links">

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.7}
                  />

                  <span>{social.label}</span>

                  <ArrowUpRight size={14} />
                </a>
              );
            })}

          </div>
        </motion.div>

        {/* CLOSING */}
        <motion.div
          className="contact-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <div className="contact-closing-line"></div>

          <p>
            Designed &amp; developed by Manthan Kumar
          </p>

          <span>
            © 2026
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;