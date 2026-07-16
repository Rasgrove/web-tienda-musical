import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Music, Ribbon, MessageSquare } from 'lucide-react';

const AboutUs = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then(res => res.json())
      .then(data => setTestimonials(data.items || []))
      .catch(console.error);
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Header */}
      <section style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center', backgroundColor: 'var(--color-secondary)' }}>
        <div className="container">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="section-title">Nuestra Historia</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="section-subtitle">Música antes que negocio. Excelencia en cada nota y en cada instrumento que tocamos.</motion.p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: 'var(--spacing-lg) 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} style={{ alignSelf: 'start', marginTop: 'var(--spacing-sm)' }}>
            <img src="/Assets/store 3.webp" alt="Interior Tienda Instrum" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }} />
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} style={{ padding: '0 var(--spacing-sm)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>Nacidos en La Paz, Para el Mundo</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)' }}>
              Comenzamos en un pequeño taller motivados por un vacío gigante: la dificultad de encontrar instrumentos de primerísimo nivel en nuestra ciudad sin tener que importar a ciegas.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)' }}>
              A lo largo de los años, nuestra obsesión nos llevó a formar un catálogo de modelos minuciosamente escogidos, trayendo directamente de las fábricas las piezas más legendarias.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              Ya no necesitas imaginar cómo suena un clásico de alta gama. Puedes venir y sentir la resonancia de una acústica impecable o la furia de una eléctrica calibrada a la perfección en nuestras manos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4rem', textAlign: 'center' }}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
            <Ribbon size={56} color="var(--color-accent-jade)" style={{ marginBottom: '15px' }} />
            <h3 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-secondary)' }}>15+</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-bg-beige)' }}>Años Transformando Músicos</p>
          </motion.div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Music size={56} color="var(--color-accent-jade)" style={{ marginBottom: '15px' }} />
            <h3 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-secondary)' }}>200+</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-bg-beige)' }}>Modelos Únicos en Exposición</p>
          </motion.div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Users size={56} color="var(--color-accent-jade)" style={{ marginBottom: '15px' }} />
            <h3 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-secondary)' }}>10k+</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-bg-beige)' }}>Acordes Tocados con Pasión</p>
          </motion.div>
        </div>
      </section>

      {/* Team / Founders */}
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-beige)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">El Alma de la Tienda</h2>
          <p className="section-subtitle">Músicos exigentes armando equipos para músicos exigentes.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)', marginTop: 'var(--spacing-lg)' }}>
            
            <motion.div whileHover={{ y: -15, scale: 1.02 }} style={{ backgroundColor: 'var(--color-secondary)', padding: 'var(--spacing-lg)', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', backgroundColor: 'var(--color-bg-light)', margin: '0 auto 20px', overflow: 'hidden', border: '5px solid var(--color-bg-beige)' }}>
                 <img src="/Assets/Jake Smith.webp" alt="Jake Smith" style={{width: '100%', height:'100%', objectFit: 'cover'}}/>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '5px' }}>Jake Smith</h3>
              <p style={{ color: 'var(--color-accent-wood)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>Luthier & Especialista</p>
              <p style={{ color: 'var(--color-text-muted)' }}>"Un instrumento mal calibrado ahoga la creatividad. Mi misión es que cada mástil que salga de nuestra tienda sea pura mantequilla."</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -15, scale: 1.02 }} style={{ backgroundColor: 'var(--color-secondary)', padding: 'var(--spacing-lg)', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', backgroundColor: 'var(--color-bg-light)', margin: '0 auto 20px', overflow: 'hidden', border: '5px solid var(--color-bg-beige)' }}>
                 <img src="/Assets/Gilmoure.webp" alt="David Gilmoure" style={{width: '100%', height:'100%', objectFit: 'cover'}}/>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '5px' }}>David Gilmour</h3>
              <p style={{ color: 'var(--color-accent-wood)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>Comprador / Curador</p>
              <p style={{ color: 'var(--color-text-muted)' }}>"No elijo guitarras por el logo que llevan. Las elijo por la resonancia de su cuerpo al tocar el primer acorde."</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">Las experiencias de músicos bolivianos que confiaron en nosotros.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-lg)' }}>
            {testimonials.map((t, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }}
                style={{ 
                  backgroundColor: 'var(--color-bg-beige)', 
                  padding: 'var(--spacing-lg)', 
                  borderRadius: '15px', 
                  border: t.featured ? '2px solid var(--color-accent-jade)' : '1px solid #ddd',
                  textAlign: 'left'
                }}
              >
                <MessageSquare size={30} color="var(--color-primary)" style={{ opacity: 0.2, marginBottom: '15px' }} />
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '15px' }}>"{t.comment}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 800, color: 'var(--color-primary)' }}>{t.name}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-accent-wood)' }}>Vía {t.social}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

    </div>
  );
};
export default AboutUs;
