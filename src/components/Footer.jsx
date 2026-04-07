import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--brand-green)', marginBottom: '1rem', background: '#FFF', padding: '0.5rem', borderRadius: '4px', display: 'inline-block' }}>Sri Lakshmi <span style={{color: 'var(--brand-gold)'}}>Traders</span></h3>
          </Link>
          <p className="footer-desc">
            Best suppliers of Black Pepper and Green Cardamom. We bring fresh spices directly from the farms to businesses in Krishnagiri.
          </p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><MapPin size={18} className="text-gold" /> <span>Kaveripattinam, Krishnagiri</span></li>
            <li><Phone size={18} className="text-gold" /> <span>+91 9876543210</span></li>
            <li><Mail size={18} className="text-gold" /> <span>exports@srilakshmitraders.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sri Lakshmi Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
