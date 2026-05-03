import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    fetch('/data/catalog.json')
      .then(res => res.json())
      .then(data => setProducts(data.items || []))
      .catch(console.error);
  }, []);

  const categories = ['Todos', 'Guitarras', 'Guitarras Eléctricas', 'Violines', 'Pianos', 'Ropa'];

  const filteredProducts = products.filter(p => filter === 'Todos' || p.category === filter);

  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', paddingBottom: 'var(--spacing-xl)' }}>
      {/* Header */}
      <section style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center', backgroundColor: 'var(--color-secondary)' }}>
        <div className="container">
          <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="section-title">Nuestra Colección</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="section-subtitle">
            Cada instrumento aquí expuesto ha sido seleccionado a mano. Explora, enamórate y consúltanos.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: 'var(--spacing-md) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'var(--spacing-lg)' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '10px 25px',
                  borderRadius: '30px',
                  border: '1px solid var(--color-primary)',
                  backgroundColor: filter === cat ? 'var(--color-primary)' : 'transparent',
                  color: filter === cat ? 'var(--color-secondary)' : 'var(--color-primary)',
                  fontWeight: 600,
                  transition: 'all 0.3s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '300px', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-bg-beige)' }}>
                  <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: 'var(--spacing-md)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px', display: 'block' }}>{product.category} | {product.model}</span>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '10px' }}>{product.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', flex: 1, marginBottom: '20px' }}>{product.description}</p>
                  
                  <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-accent-jade)' }}>
                        {product.price || 'Consultar'}
                     </span>
                     <Search size={24} color="var(--color-text-muted)" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
             <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)', color: 'var(--color-text-muted)' }}>
                <h3>No hay productos en esta categoría ahora mismo.</h3>
             </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Catalog;
