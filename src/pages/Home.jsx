import { useEffect, useRef } from 'react'
import { ArrowRight, Star, ShieldCheck, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const featureBlocksRef = useRef([])

  useEffect(() => {
    // 1. Hero Entrance Animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.1 }
      )
    }

    // 2. Catalog Cards Scroll Animation
    const cards = gsap.utils.toArray('.catalog-card')
    cards.forEach(card => {
      gsap.fromTo(card, 
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // trigger when top of card hits 85% down viewport
            toggleActions: "play none none none"
          }
        }
      )
    })

    // 3. Features Stagger Animation
    if (featuresRef.current && featureBlocksRef.current.length > 0) {
      gsap.fromTo(featureBlocksRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          }
        }
      )
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="corporate-hero">
        <div className="container hero-container" ref={heroRef}>
          <div className="hero-text">
            <h1>
              Best Quality Spices from <br />
              <span className="text-green">Krishnagiri</span>
            </h1>
            <p>
              Get the finest Black Pepper and Green Cardamom. We supply top quality spices straight from the farm to businesses across Krishnagiri.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                See Our Spices <ArrowRight size={18} style={{marginLeft: '8px'}} />
              </Link>
              <a href="https://wa.me/919600972627" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Get Prices
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
            <h2 className="section-title">Our Spices</h2>
            <p className="section-subtitle">We supply exactly the grades you need for your business in Krishnagiri.</p>
          </div>
          
          <div className="catalog-grid">
            {/* Black Pepper Card */}
            <div className="corp-card catalog-card">
              <img src="/black_pepper.png" alt="Black Pepper" className="catalog-img" />
              <div className="catalog-content">
                <h3>Black Pepper</h3>
                <p className="text-secondary">Our black pepper is known for its strong, spicy flavor. We carefully dry and clean it to give you the best quality.</p>
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
                <h3>Green Cardamom</h3>
                <p className="text-secondary">The best quality Alleppey Green Cardamom. We sort the pods carefully by their size.</p>
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
      <section className="why-us section-padding" ref={featuresRef}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title text-green">Why Partner With Us?</h2>
          </div>

          <div className="features-grid">
            <div className="feature-block text-center" ref={el => featureBlocksRef.current[0] = el}>
              <Star className="feature-icon text-green" size={48} />
              <h4>Top Quality</h4>
              <p className="text-secondary">Strict cleaning and grading gives you the very best spices.</p>
            </div>
            
            <div className="feature-block text-center" ref={el => featureBlocksRef.current[1] = el}>
              <ShieldCheck className="feature-icon text-green" size={48} />
              <h4>Safe Packaging</h4>
              <p className="text-secondary">We use special boxes to keep the fresh smell inside.</p>
            </div>
            
            <div className="feature-block text-center" ref={el => featureBlocksRef.current[2] = el}>
              <Globe className="feature-icon text-green" size={48} />
              <h4>Local Supply</h4>
              <p className="text-secondary">Trusted by top businesses all around Krishnagiri.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
