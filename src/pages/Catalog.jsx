import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    // Simulando fetch de Decap CMS generado
    fetch('/data/catalog.json')
      .then(res => res.json())
      .then(data => {
        if (data.items) setProducts(data.items);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching catalog", err);
        setLoading(false);
      });
  }, []);

  const categories = ['Todos', ...new Set(products.map(p => p.category))];
  const filteredProducts = filter === 'Todos' ? products : products.filter(p => p.category === filter);

  return (
    <div style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-light)', minHeight: '80vh' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="section-title">Catálogo Exclusivo</h1>
          <p className="section-subtitle">Nuestra selección curada para los amantes del sonido puro.</p>
        </motion.div>

        {loading ? (
          <p style={{ textAlign: 'center' }}>Cargando catálogo...</p>
        ) : (
          <>
            {/* Filters */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: 'var(--spacing-lg)' }}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: `2px solid ${filter === cat ? 'var(--color-primary)' : '#ccc'}`,
                    backgroundColor: filter === cat ? 'var(--color-primary)' : 'transparent',
                    color: filter === cat ? 'var(--color-secondary)' : 'var(--color-text-muted)',
                    fontWeight: 600,
                    transition: 'all 0.3s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
              {filteredProducts.map((product, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{ backgroundColor: 'var(--color-secondary)', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                >
                  <div style={{ height: '250px', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-bg-beige)' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 'var(--spacing-md)' }}>
                    <p style={{ color: 'var(--color-accent-jade)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '5px' }}>{product.category}</p>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{product.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '15px' }}>{product.description}</p>
                    <p style={{ fontWeight: 'bold' }}>Mod: {product.model}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* FAQ Section */}
            <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', backgroundColor: 'var(--color-bg-beige)', borderRadius: '15px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Preguntas Frecuentes</h2>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <h4 style={{ fontWeight: 600 }}>¿Puedo comprar en línea?</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>Por ahora, nuestro catálogo es solo informativo. Te invitamos a la tienda en La Paz para probar los instrumentos.</p>
                </div>
                <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <h4 style={{ fontWeight: 600 }}>¿Tienen servicio técnico?</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>Sí, contamos con luthiers especializados para guitarras y afinación de pianos.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Catalog;
