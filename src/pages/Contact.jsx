import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '80vh', padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <h1 className="section-title">Contáctanos</h1>
          <p className="section-subtitle">Resuelve tus dudas o visita nuestra tienda para probar los instrumentos.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: 'var(--spacing-lg)' }}>
          {/* Contact Info Box */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)', padding: 'var(--spacing-lg)', borderRadius: '15px' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Información</h3>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: 'var(--spacing-sm)' }}>
              <MapPin size={24} color="var(--color-accent-jade)" />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Dirección</h4>
                <p style={{ color: '#ccc' }}>Av. Arce Esq. Belisario Salinas,<br/>Edificio Músico Piso 1.<br/>La Paz, Bolivia</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: 'var(--spacing-sm)' }}>
              <Phone size={24} color="var(--color-accent-jade)" />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Teléfonos</h4>
                <p style={{ color: '#ccc' }}>+591 71234567<br/>+591 2 2445566</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <Mail size={24} color="var(--color-accent-jade)" />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Email</h4>
                <p style={{ color: '#ccc' }}>info@instrum.com.bo</p>
              </div>
            </div>
            
            <div style={{ marginTop: 'var(--spacing-md)', paddingTop: 'var(--spacing-sm)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Horario de Atención</h4>
              <p style={{ color: '#ccc' }}>Lunes - Sábado: 9:00 - 19:00<br/>Domingo: Cerrado</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            style={{ backgroundColor: 'var(--color-secondary)', padding: 'var(--spacing-lg)', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)' }}>Envíanos un Mensaje</h3>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Nombre Completo</label>
                <input type="text" placeholder="Ej. Juan Pérez" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Correo Electrónico</label>
                <input type="email" placeholder="juan@ejemplo.com" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Mensaje</label>
                <textarea rows="4" placeholder="¿En qué instrumento estás interesado?" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Enviar Consulta</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
