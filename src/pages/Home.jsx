import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Guitar, Headphones, Star } from 'lucide-react';

const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.7)), url('/Assets/cool.jpg') center/cover no-repeat`,
        color: 'var(--color-text-light)',
        textAlign: 'center',
        padding: 'var(--spacing-md)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px' }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: 'var(--spacing-sm)', letterSpacing: '-2px', textTransform: 'uppercase' }}>
            Siente la <span style={{ color: 'var(--color-accent-jade)' }}>Música</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginBottom: 'var(--spacing-md)', color: '#eaeaea' }}>
            La Paz, Bolivia | Especialistas en Rock, Música Moderna y Clásica
          </p>
          <Link to="/catalogo" className="btn-primary">Explorar Catálogo</Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ textAlign: 'center', padding: 'var(--spacing-md)', backgroundColor: 'var(--color-secondary)', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <Guitar size={48} color="var(--color-accent-wood)" style={{ marginBottom: 'var(--spacing-sm)' }} />
              <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.5rem' }}>Afinación Perfecta</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Gran variedad de guitarras, pianos y violines de marcas exclusivas.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ textAlign: 'center', padding: 'var(--spacing-md)', backgroundColor: 'var(--color-secondary)', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <Headphones size={48} color="var(--color-accent-wood)" style={{ marginBottom: 'var(--spacing-sm)' }} />
              <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.5rem' }}>Asesoría Experta</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Te ayudamos a encontrar el modelo exacto que conecte con tu alma.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ textAlign: 'center', padding: 'var(--spacing-md)', backgroundColor: 'var(--color-secondary)', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <Star size={48} color="var(--color-accent-wood)" style={{ marginBottom: 'var(--spacing-sm)' }} />
              <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.5rem' }}>Calidad Premium</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Instrumentos para músicos apasionados y profesionales exigentes.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Famous Buyers Section */}
      <section style={{ padding: 'var(--spacing-lg) 0', backgroundColor: 'var(--color-bg-beige)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Músicos que Confían en Nosotros</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--spacing-lg)', flexWrap: 'wrap', opacity: 0.7 }}>
            <motion.h3 whileHover={{ scale: 1.1, opacity: 1 }} style={{ fontSize: '1.8rem', fontFamily: 'Impact, sans-serif' }}>WHITE BUFFALO</motion.h3>
            <motion.h3 whileHover={{ scale: 1.1, opacity: 1 }} style={{ fontSize: '1.8rem', fontStyle: 'italic', fontFamily: 'serif' }}>The Sonic Waves</motion.h3>
            <motion.h3 whileHover={{ scale: 1.1, opacity: 1 }} style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '2px' }}>OCTAVIA</motion.h3>
            <motion.h3 whileHover={{ scale: 1.1, opacity: 1 }} style={{ fontSize: '1.8rem', fontWeight: 300 }}>La Paz Symphony</motion.h3>
          </div>
        </div>
      </section>

      {/* Testimonials Sample */}
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-primary)', color: 'var(--color-text-light)' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-lg)' }}>La Voz de nuestros Artistas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
            <div style={{ padding: 'var(--spacing-md)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px' }}>
              <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-sm)' }}>"La guitarra eléctrica que compré aquí cambió mi forma de componer. Excelente atención."</p>
              <h4 style={{ color: 'var(--color-accent-jade)' }}>- Marcelo D.</h4>
            </div>
            <div style={{ padding: 'var(--spacing-md)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px' }}>
              <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-sm)' }}>"Increíble variedad de teclados. Finalmente pude armar mi estudio casero con el mejor equipo."</p>
              <h4 style={{ color: 'var(--color-accent-jade)' }}>- Sarah P.</h4>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-md)' }}>
            <Link to="/sobre-nosotros" className="btn-secondary" style={{ color: 'var(--color-text-light)', borderColor: 'var(--color-text-light)' }}>Leer más historias</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 'var(--spacing-sm)' }}>¿Listo para encontrar tu instrumento?</h2>
          <p className="section-subtitle">Visítanos en nuestra tienda física en La Paz o consúltanos por disponibilidad.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
            <Link to="/contacto" className="btn-primary">Contáctanos</Link>
            <Link to="/catalogo" className="btn-secondary">Ver Catálogo</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
