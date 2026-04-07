function About() {
  return (
    <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', minHeight: '60vh' }}>
      <h1 className="text-center" style={{ marginBottom: '3rem' }}>About <span className="text-green">Sri Lakshmi Traders</span></h1>
      <div className="corp-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8' }}>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Sri Lakshmi Traders is a premier wholesale supplier and exporter of Indian Spices, dedicated to the highest standards of quality. Based in India, we have built an enduring legacy on trust, authenticity, and our close relationships with generational spice farmers.
        </p>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          By focusing exclusively on Black Pepper and Alleppey Green Cardamom, we maintain unparalleled expertise and quality control. From the moment the pods and corns are hand-picked at the expansive estates of South India to their export in our specialized Aroma-Lock packaging, we ensure that every batch meets rigorous global excellence standards.
        </p>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Partner with us to secure a reliable, certified, and consistent supply of the world's most sought-after spices. 
        </p>
      </div>
    </div>
  )
}

export default About
