import { Link } from 'react-router-dom';
import { Instagram, Facebook, Ticket as Tiktok } from 'lucide-react'; // Using Ticket as Tiktok placeholder if not available

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--color-primary)', 
      color: 'var(--color-text-light)', 
      padding: 'var(--spacing-lg) 0',
      borderTop: '5px solid var(--color-accent-jade)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-md)'
      }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>INSTRUM<span style={{ color: 'var(--color-accent-jade)' }}>.</span></h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xs)' }}>La Paz, Bolivia</p>
          <p style={{ color: 'var(--color-text-muted)' }}>Pasión por el rock, la música moderna y la clásica. Tu tienda de confianza.</p>
        </div>
        
        <div>
          <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-secondary)' }}>Navegación</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link style={{ color: 'var(--color-text-muted)' }} to="/">Inicio</Link></li>
            <li><Link style={{ color: 'var(--color-text-muted)' }} to="/catalogo">Catálogo</Link></li>
            <li><Link style={{ color: 'var(--color-text-muted)' }} to="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link style={{ color: 'var(--color-text-muted)' }} to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-secondary)' }}>Contacto</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>info@instrum.com.bo</p>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>+591 71234567</p>
          <p style={{ color: 'var(--color-text-muted)' }}>Lunes - Sábado, 9:00 - 19:00</p>
        </div>

        <div>
          <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-secondary)' }}>Síguenos</h3>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>
              <Instagram size={28} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>
              <Facebook size={28} />
            </a>
            {/* Si Lucide no tiene Tiktok nativo, usamos un svg */}
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-2"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 'var(--spacing-sm)' }}>
        <p style={{ color: 'var(--color-text-muted)' }}>&copy; {new Date().getFullYear()} INSTRUM - La Paz. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;
