import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isHome = location.pathname === '/';

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      height: 'var(--navbar-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--spacing-sm)',
      backgroundColor: 'var(--color-bg-light)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary)', letterSpacing: '-0.5px' }}>
          INSTRUM<span style={{ color: 'var(--color-accent-jade)' }}> - La Paz</span>
        </Link>
        
        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: 'var(--spacing-md)', fontWeight: 500 }} className="desktop-menu">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              style={{
                position: 'relative',
                color: location.pathname === link.path ? 'var(--color-accent-jade)' : 'var(--color-primary)',
                transition: 'color var(--transition-fast)'
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--color-accent-jade)'
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} style={{ display: 'block', color: 'var(--color-primary)' }} className="mobile-toggle">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: 'var(--navbar-height)',
              left: 0,
              width: '100%',
              backgroundColor: 'var(--color-bg-light)',
              padding: 'var(--spacing-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
              boxShadow: '0 10px 15px rgba(0,0,0,0.05)'
            }}
          >
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: location.pathname === link.path ? 'var(--color-accent-jade)' : 'var(--color-primary)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
export default Navbar;
