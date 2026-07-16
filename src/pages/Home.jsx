import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Guitar, Headphones, Star } from 'lucide-react';

const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '95vh',
        width: '100vw', /* Force full width viewport to avoid container constraints */
        marginLeft: 'calc(-50vw + 50%)', /* Break out of container if wrapped */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(to bottom, rgba(28, 30, 27, 0.4), rgba(28, 30, 27, 0.8)), url('/Assets/pexels-modus-vivendi-5137409.webp') center/cover no-repeat`,
        color: 'var(--color-text-light)',
        textAlign: 'center',
        padding: 'var(--spacing-md)'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ maxWidth: '900px', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: 'var(--spacing-xs)', letterSpacing: '-2px', textTransform: 'uppercase', textShadow: '2px 4px 15px rgba(0,0,0,0.5)' }}>
            <span style={{ color: 'var(--color-accent-jade)' }}>Inspira</span> tu Arte
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontWeight: 300, marginBottom: 'var(--spacing-md)', color: '#FFFCF7', textShadow: '1px 2px 10px rgba(0,0,0,0.6)' }}>
            Mucho más que una tienda en La Paz. Somos tu santuario para el <b>Rock</b>, la música <b>Moderna</b> y la <b>Clásica</b>.
          </p>
          <Link to="/catalogo" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>Explorar Catálogo</Link>
        </motion.div>
      </section>

      {/* Intro Visual Section */}
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-beige)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
             <h2 className="section-title" style={{ textAlign: 'left', fontSize: '3rem' }}>Bienvenido a <br/> INSTRUM</h2>
             <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Creemos que cada instrumento tiene un alma esperando a conectar con su músico ideal. Nuestro salón en La Paz es un espacio relajado donde puedes perderte entre maderas finas y amplificadores a tubos.
             </p>
             <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                Desde las guitarras eléctricas más agresivas hasta la sutileza de un violín de luthier, el sonido que buscas ya existe, y está aquí esperándote.
             </p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <img src="/Assets/cool1.webp" alt="Instrumentos Clásicos y Modernos" style={{ width: '100%', height: '100%', display: 'block' }} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ textAlign: 'center', padding: 'var(--spacing-lg) var(--spacing-md)', backgroundColor: 'var(--color-bg-light)', borderRadius: '20px', border: '1px solid #eaeaea' }}
            >
              <Guitar size={54} color="var(--color-accent-wood)" style={{ marginBottom: 'var(--spacing-sm)' }} />
              <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>Gran Variedad</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>Guitarras, pianos, violines y sintetizadores de marcas exclusivas y legendarias.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ textAlign: 'center', padding: 'var(--spacing-lg) var(--spacing-md)', backgroundColor: 'var(--color-bg-light)', borderRadius: '20px', border: '1px solid #eaeaea' }}
            >
              <Headphones size={54} color="var(--color-accent-wood)" style={{ marginBottom: 'var(--spacing-sm)' }} />
              <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>Atención Personalizada</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>Te acompañamos pacientemente. Juntos descubriremos el tono exacto que conecta con tu alma.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ textAlign: 'center', padding: 'var(--spacing-lg) var(--spacing-md)', backgroundColor: 'var(--color-bg-light)', borderRadius: '20px', border: '1px solid #eaeaea' }}
            >
              <Star size={54} color="var(--color-accent-wood)" style={{ marginBottom: 'var(--spacing-sm)' }} />
              <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>Modelos Seleccionados</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>Filtramos exhaustivamente cada instrumento. Calidad garantizada para músicos apasionados.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Famous Buyers Section */}
      <section style={{ padding: 'var(--spacing-lg) 0', backgroundColor: 'var(--color-bg-beige)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Músicos que Confían en Nosotros</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--spacing-lg)', flexWrap: 'wrap', opacity: 0.8 }}>
            <motion.h3 whileHover={{ scale: 1.1, opacity: 1, color: 'var(--color-accent-wood)' }} style={{ fontSize: '1.8rem', fontFamily: 'Impact, sans-serif', transition: 'all 0.3s' }}>WHITE BUFFALO</motion.h3>
            <motion.h3 whileHover={{ scale: 1.1, opacity: 1, color: 'var(--color-accent-wood)' }} style={{ fontSize: '1.8rem', fontStyle: 'italic', fontFamily: 'serif', transition: 'all 0.3s' }}>The Sonic Waves</motion.h3>
            <motion.h3 whileHover={{ scale: 1.1, opacity: 1, color: 'var(--color-accent-wood)' }} style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '2px', transition: 'all 0.3s' }}>OCTAVIA</motion.h3>
            <motion.h3 whileHover={{ scale: 1.1, opacity: 1, color: 'var(--color-accent-wood)' }} style={{ fontSize: '1.8rem', fontWeight: 300, transition: 'all 0.3s' }}>La Paz Symphony</motion.h3>
          </div>
        </div>
      </section>

      {/* Visual Intermission */}
      <section style={{ height: '400px', width: '100%', background: 'linear-gradient(rgba(28, 30, 27, 0.4), rgba(28, 30, 27, 0.4)), url(/Assets/coolvio.webp) center/cover fixed' }}>
      </section>

      {/* CTA Section */}
      <section style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center', background: 'var(--color-secondary)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 'var(--spacing-sm)' }}>¿Sientes la inspiración?</h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', fontSize: '1.2rem', marginBottom: 'var(--spacing-md)' }}>
            Visítanos en nuestra tienda física en La Paz para sentir el mástil en tus manos,
            o contáctanos en línea para coordinar una reserva de compra o consultas de luthieria especializadas.
          </p>
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
