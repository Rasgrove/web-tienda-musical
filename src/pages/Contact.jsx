import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <section style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center', backgroundColor: 'var(--color-secondary)' }}>
        <div className="container">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="section-title">Ponte en Contacto</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="section-subtitle">
            Hablemos de música, equipo, o coordinemos la calibración de tu preciado instrumento.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-lg) 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
          
          {/* Form */}
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} style={{ backgroundColor: 'var(--color-secondary)', padding: 'var(--spacing-lg)', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: '100%', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>Envíanos un mensaje</h2>
            {/* Using FormSubmit to send messages directly to the user's email */}
            <form action="https://formsubmit.co/elyamilalarcon.ya@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', width: '100%' }}>
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Nombre Completo</label>
                <input type="text" name="name" required style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem', width: '100%' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Correo Electrónico</label>
                <input type="email" name="email" required style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem', width: '100%' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Mensaje / Consulta de Reserva</label>
                <textarea name="message" rows="5" required style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem', resize: 'vertical', width: '100%' }}></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: 'var(--spacing-xs)', width: '100%' }}>Enviar Mensaje</button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>Asesoría y Luthier</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: 'var(--spacing-xs)' }}>
                ¿Necesitas reservar un instrumento especial que viste en el catálogo? Mándanos un mensaje y lo apartaremos.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                ¿Tu guitarra trastea o tu violín perdió alma? Pregunta por nuestros servicios de Luthiería profesional. Reparamos, calibramos, y revivimos.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: 'var(--spacing-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ padding: '15px', backgroundColor: 'rgba(107, 158, 131, 0.1)', borderRadius: '50%' }}>
                  <MapPin color="var(--color-accent-jade)" size={28} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>Ubicación</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>Av. Arce Esq. Cordero, La Paz, Bolivia</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ padding: '15px', backgroundColor: 'rgba(107, 158, 131, 0.1)', borderRadius: '50%' }}>
                  <Phone color="var(--color-accent-jade)" size={28} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>Teléfono / WhatsApp</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>+591 71234567</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ padding: '15px', backgroundColor: 'rgba(107, 158, 131, 0.1)', borderRadius: '50%' }}>
                  <Mail color="var(--color-accent-jade)" size={28} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>Correo</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>elyamilalarcon.ya@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ height: '400px', width: '100%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(/Assets/store2.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
          <div style={{ backgroundColor: 'white', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 'bold' }}>📍 Encuéntranos aquí</div>
      </section>
    </div>
  );
};
export default Contact;
