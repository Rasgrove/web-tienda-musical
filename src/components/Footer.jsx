import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--color-primary)', 
      color: 'var(--color-text-light)', 
      padding: 'var(--spacing-lg) 0',
      borderTop: '5px solid var(--color-accent-wood)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-md)'
      }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>INSTRUM.</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xs)' }}>La Paz, Bolivia</p>
          <p style={{ color: 'var(--color-text-muted)' }}>Pasión por el rock, la música moderna y la clásica. Tu tienda de confianza.</p>
        </div>
        
        <div>
          <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Enlaces</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link style={{ color: 'var(--color-text-muted)' }} to="/">Inicio</Link></li>
            <li><Link style={{ color: 'var(--color-text-muted)' }} to="/catalogo">Catálogo</Link></li>
            <li><Link style={{ color: 'var(--color-text-muted)' }} to="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link style={{ color: 'var(--color-text-muted)' }} to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Contacto</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Email: info@instrum.com.bo</p>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Teléfono: +591 71234567</p>
          <p style={{ color: 'var(--color-text-muted)' }}>Horario: Lunes - Sábado, 9:00 - 19:00</p>
        </div>
      </div>
      
      <div className="container" style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--spacing-sm)' }}>
        <p style={{ color: 'var(--color-text-muted)' }}>&copy; {new Date().getFullYear()} Instrum. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;
