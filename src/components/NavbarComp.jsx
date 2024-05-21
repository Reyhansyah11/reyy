import {useState, useEffect, useRef, useCallback} from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  }, []);

  const handleXClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);



  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo"> <span>Rey</span>hansyah</a>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <div className={`navbar-nav ${isOpen ? 'active' : ''}`} ref={menuRef}>
        <HashLink smooth to="/#Hero-Section" className="nav-link" onClick={closeMenu}>Home</HashLink>
        <HashLink smooth to="/#About" className="nav-link" onClick={closeMenu}>About</HashLink>
        <HashLink smooth to="/#Experience" className="nav-link" onClick={closeMenu}>Experience</HashLink>
        <HashLink smooth to="/#Portfolio" className="nav-link" onClick={closeMenu}>Portfolio</HashLink>
        <Link to="../Pages/ContactPage" className="nav-link" onClick={closeMenu}>Contact</Link>
      </div>
      {isMobile && isOpen && (
        <div className="close-menu" onClick={handleXClick}>
          <i className="fa fa-times"></i>
        </div>
      )}
    </nav>
    </>
  )
}

export default App