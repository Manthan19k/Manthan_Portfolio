import { Menu, ArrowDownRight } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Patents', id: 'patents' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">

        <div className="navbar-inner">

          {/* Logo */}
          <button
            className="navbar-logo"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <span className="navbar-logo-mark">
              MK
            </span>

            <span className="navbar-logo-name">
              Manthan Kumar
            </span>
          </button>


          {/* Desktop navigation */}
          <nav className="navbar-links">

            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}

          </nav>


          {/* Resume */}
          <a
            href="/documents/resume/Manthan-Kumar-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="navbar-resume"
          >
            Resume
            <ArrowDownRight size={15} />
          </a>


          {/* Mobile menu */}
          <button
            className="navbar-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <Menu size={22} />
          </button>

        </div>

      </header>


      {/* Mobile menu */}
      <div
        className={`mobile-menu ${
          menuOpen ? 'mobile-menu-open' : ''
        }`}
      >

        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </button>
        ))}

        <a
          href="/documents/resume/Manthan-Kumar-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>

      </div>
    </>
  );
}

export default Navbar;