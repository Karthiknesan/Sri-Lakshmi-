import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      {/* Top Bar for Contact Info */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-contact">
            <span><Phone size={14} /> +91 98203 23370</span>
            <span><Mail size={14} /> exports@srilakshmitraders.com</span>
          </div>
          <div className="top-links">
            <Link to="/about">Global Export Guidelines</Link>
            <Link to="/contact">Request a Sample</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.jpeg" alt="Sri Lakshmi Traders Logo" style={{ height: '120px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="https://wa.me/919600972627" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{padding: '0.6rem 1.2rem', marginLeft: '1rem'}}>Enquire Now</a></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} color="#333" /> : <Menu size={28} color="#333" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <ul>
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
