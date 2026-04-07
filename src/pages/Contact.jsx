function Contact() {
  return (
    <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', minHeight: '60vh' }}>
      <h1 className="text-center" style={{ marginBottom: '3rem' }}>Contact <span className="text-green">Us</span></h1>
      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Contact Form */}
        <div className="corp-card" style={{ flex: 1, minWidth: '300px', maxWidth: '500px' }}>
          <h3 style={{marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--brand-gold)'}}>Get a Wholesale Quote</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Your Name/Company Name" style={{ padding: '0.8rem', border: '1px solid #CCC', borderRadius: '4px', background: '#F8F9FA' }} />
            <input type="email" placeholder="Your Email Address" style={{ padding: '0.8rem', border: '1px solid #CCC', borderRadius: '4px', background: '#F8F9FA' }} />
            <select style={{ padding: '0.8rem', border: '1px solid #CCC', borderRadius: '4px', background: '#F8F9FA' }}>
               <option value="">Select Product of Interest...</option>
               <option value="pepper">Black Pepper</option>
               <option value="cardamom">Green Cardamom</option>
               <option value="both">Both Black Pepper & Cardamom</option>
            </select>
            <textarea placeholder="Describe your quantity requirements and location..." rows="5" style={{ padding: '0.8rem', border: '1px solid #CCC', borderRadius: '4px', background: '#F8F9FA', resize: 'vertical' }}></textarea>
            <button type="button" className="btn btn-primary" style={{marginTop: '0.5rem'}}>Submit Inquiry</button>
          </form>
        </div>
        
        {/* Contact Address */}
        <div className="corp-card" style={{ flex: 1, minWidth: '300px', maxWidth: '500px' }}>
          <h3 style={{marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--brand-gold)'}}>Corporate Headquarters</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <strong style={{color: 'var(--brand-green)', display: 'block', marginBottom: '0.3rem'}}>Registered Address:</strong>
              <p className="text-secondary">Sri Lakshmi Traders<br/>Jaswanti Allied Business Centre<br/>Mumbai, Maharashtra, India 400064</p>
            </div>
            <div>
              <strong style={{color: 'var(--brand-green)', display: 'block', marginBottom: '0.3rem'}}>Phone Numbers:</strong>
              <p className="text-secondary">+91 98203 23370<br/>+91 22670 86439</p>
            </div>
            <div>
              <strong style={{color: 'var(--brand-green)', display: 'block', marginBottom: '0.3rem'}}>Email Addresses:</strong>
              <p className="text-secondary">exports@srilakshmitraders.com<br/>info@srilakshmitraders.com</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
