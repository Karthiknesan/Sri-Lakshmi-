import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      {/* Main Nav */}
      <nav className="navbar">
        <div className="container nav-container" style={{ justifyContent: 'flex-end' }}>
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
