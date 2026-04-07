import './Home.css'

function Products() {
  return (
    <div className="products-page bg-light">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h1 className="section-title text-center" style={{ marginBottom: '3rem' }}>Product Specifications</h1>
        
        {/* Black Pepper */}
        <div id="pepper" className="corp-card" style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
          <div style={{ flex: '1', maxWidth: '400px' }}>
            <img src="/black_pepper.png" alt="Black Pepper" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
          </div>
          <div style={{ flex: '2' }}>
            <h2 className="text-green" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Premium Black Pepper</h2>
            <p className="text-secondary" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Often referred to as "Black Gold," our black pepper is sourced from the finest estates. It is meticulously hand-picked, sun-dried, and graded to ensure the highest concentration of Piperine, offering a signature robust, pungent flavor.
            </p>
            <h4 style={{marginBottom: '0.5rem'}}>Available Grades</h4>
            <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{padding: '0.8rem', background: '#fff', border: '1px solid #EAEAEA', borderRadius: '4px'}}><strong>TGEB (Tellicherry Garbled Extra Bold):</strong> Size 4.75mm and above</li>
              <li style={{padding: '0.8rem', background: '#fff', border: '1px solid #EAEAEA', borderRadius: '4px'}}><strong>TGB (Tellicherry Garbled Bold):</strong> Size 4.25mm</li>
              <li style={{padding: '0.8rem', background: '#fff', border: '1px solid #EAEAEA', borderRadius: '4px'}}><strong>MG-1 (Malabar Garbled):</strong> High-density standard size</li>
            </ul>
            <a href="https://wa.me/919600972627" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{display: 'inline-block'}}>Request Wholesale Pricing</a>
          </div>
        </div>

        {/* Cardamom */}
        <div id="cardamom" className="corp-card" style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
          <div style={{ flex: '1', maxWidth: '400px' }}>
            <img src="/green_cardamom.png" alt="Green Cardamom" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
          </div>
          <div style={{ flex: '2' }}>
            <h2 className="text-green" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Alleppey Green Cardamom</h2>
            <p className="text-secondary" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              We offer the world's best Alleppey Green Cardamom, renowned for its intense flavor. Soon after the pods are picked, they are processed in our HACCP-certified facility and graded meticulously by diameter.
            </p>
            <h4 style={{marginBottom: '0.5rem'}}>Strict Grading System</h4>
            <div style={{ background: '#fff', border: '1px solid #EAEAEA', borderRadius: '4px', overflow: 'hidden', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-secondary)' }}>
                    <th style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}>Label Code</th>
                    <th style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}>Pod Size (Diameter)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}><strong>Yellow Pack</strong></td><td style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}>8mm & above</td></tr>
                  <tr><td style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}><strong>Red Pack</strong></td><td style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}>7.5mm & above</td></tr>
                  <tr><td style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}><strong>Purple Pack</strong></td><td style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}>7mm - 8mm</td></tr>
                  <tr><td style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}><strong>Turquoise Pack</strong></td><td style={{ padding: '1rem', borderBottom: '1px solid #EAEAEA' }}>6.5mm - 7.5mm</td></tr>
                  <tr><td style={{ padding: '1rem' }}><strong>Green Pack</strong></td><td style={{ padding: '1rem' }}>6mm - 7mm</td></tr>
                </tbody>
              </table>
            </div>
            <a href="https://wa.me/919600972627" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{display: 'inline-block'}}>Enquire Now</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products
