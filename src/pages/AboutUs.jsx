import { motion } from 'framer-motion';
import { Users, Music, Ribbon } from 'lucide-react';

const AboutUs = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--color-bg-beige)', padding: 'var(--spacing-xl) 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="section-title">Nuestra Pasión</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="section-subtitle">Música antes que negocio. Calidad en cada acorde.</motion.p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: 'var(--spacing-lg) 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <img src="/Assets/store.jpg" alt="Instrum Store La Paz" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Nacidos en La Paz</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-sm)' }}>
              Comenzamos en un pequeño local motivados por la falta de instrumentos de calidad premium para músicos clásicos y rockeros en la ciudad de La Paz.
            </p>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Hoy en día, traemos a nuestra tierra los mejores modelos de guitarras de rock, violines orquestales y pianos de cola, asesorando a estudiantes y expertos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'var(--spacing-lg) 0', backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 'var(--spacing-md)', textAlign: 'center' }}>
          <div>
            <Ribbon size={48} color="var(--color-accent-jade)" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '3rem', fontWeight: 800 }}>15+</h3>
            <p>Años de Experiencia</p>
          </div>
          <div>
            <Music size={48} color="var(--color-accent-jade)" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '3rem', fontWeight: 800 }}>500+</h3>
            <p>Instrumentos en stock</p>
          </div>
          <div>
            <Users size={48} color="var(--color-accent-jade)" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '3rem', fontWeight: 800 }}>5000+</h3>
            <p>Músicos Felices</p>
          </div>
        </div>
      </section>

      {/* Team / Founders */}
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">El Equipo</h2>
          <p className="section-subtitle">Músicos atendiendo a músicos.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
            <motion.div whileHover={{ y: -10 }}>
              <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'var(--color-bg-beige)', margin: '0 auto 20px', overflow: 'hidden' }}>
                 <img src="/Assets/store 3.jpg" alt="Founder" style={{width: '100%', height:'100%', objectFit: 'cover'}}/>
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Alejandro M.</h3>
              <p style={{ color: 'var(--color-accent-jade)' }}>Luthier & Fundador</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}>
              <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'var(--color-bg-beige)', margin: '0 auto 20px', overflow: 'hidden' }}>
                 <img src="/Assets/store2.jpg" alt="Co-Founder" style={{width: '100%', height:'100%', objectFit: 'cover'}}/>
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Carlos R.</h3>
              <p style={{ color: 'var(--color-accent-jade)' }}>Asesor Ventas (Rock)</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
