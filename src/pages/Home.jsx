import { ArrowRight, Star, ShieldCheck, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="corporate-hero">
        <div className="container hero-container">
          <div className="hero-text animate-fade-in">
            <h1>
              Local Suppliers within Krishnagiri of <br />
              <span className="text-green">Premium Indian Spices</span>
            </h1>
            <p>
              Delivering the finest grades of Black Pepper and Green Cardamom across the Krishnagiri Region. From estate to export, ensuring unmatched quality and purity.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Explore Spices <ArrowRight size={18} style={{marginLeft: '8px'}} />
              </Link>
              <a href="https://wa.me/919600972627" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Request a Quote
              </a>
            </div>
          </div>
          <div className="hero-image-box">
             <img src="/hero.png" alt="Premium Spices" className="hero-banner-img" />
          </div>
        </div>
      </section>

      {/* Core Specialties */}
      <section className="specialties section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Premium Product Range</h2>
            <p className="section-subtitle">Specialized processing and grading for specific local market demands within Krishnagiri.</p>
          </div>
          
          <div className="catalog-grid">
            {/* Black Pepper Card */}
            <div className="corp-card catalog-card">
              <img src="/black_pepper.png" alt="Black Pepper" className="catalog-img" />
              <div className="catalog-content">
                <h3>Whole Black Pepper</h3>
                <p className="text-secondary">Sourced from the best estates in South India. Known for its strong aroma and high piperine content.</p>
                <div className="catalog-specs">
                  <strong>Grades:</strong> TGEB, TGB, MG-1
                </div>
                <Link to="/products#pepper" className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>Specifications</Link>
              </div>
            </div>

            {/* Cardamom Card */}
            <div className="corp-card catalog-card">
              <img src="/green_cardamom.png" alt="Green Cardamom" className="catalog-img" />
              <div className="catalog-content">
                <h3>Alleppey Green Cardamom</h3>
                <p className="text-secondary">The Queen of Spices. Precisely graded by pod thickness to meet stringent international standards.</p>
                <div className="catalog-specs">
                  <strong>Grades:</strong> 8mm, 7.5mm, 7mm, 6.5mm
                </div>
                <Link to="/products#cardamom" className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>Specifications</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title text-green">Why Partner With Us?</h2>
          </div>

          <div className="features-grid">
            <div className="feature-block text-center">
              <Star className="feature-icon text-green" size={48} />
              <h4>Stringent Quality</h4>
              <p className="text-secondary">HACCP-certified processing and strict pod diametric grading ensures absolute consistency.</p>
            </div>
            
            <div className="feature-block text-center">
              <ShieldCheck className="feature-icon text-green" size={48} />
              <h4>Aroma-Lock Packaging</h4>
              <p className="text-secondary">Specialized UV-coated cartons lock in the essential oils and aroma through transit.</p>
            </div>
            
            <div className="feature-block text-center">
              <Globe className="feature-icon text-green" size={48} />
              <h4>Local Krishnagiri Reach</h4>
              <p className="text-secondary">Trusted wholesale supplier within Krishnagiri district.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
