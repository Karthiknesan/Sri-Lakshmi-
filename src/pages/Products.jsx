import './Home.css'

function Products() {
  return (
    <div className="products-page bg-light page-section">
      <div className="container">
        <h1 className="section-title text-center page-spacing">Our Spices</h1>
        
        {/* Black Pepper */}
        <div id="pepper" className="corp-card product-row page-spacing">
          <div className="product-img-box">
            <img src="/black_pepper.png" alt="Black Pepper" className="product-image" />
          </div>
          <div className="product-content">
            <h2 className="text-green product-title">Black Pepper</h2>
            <p className="text-secondary product-text">
              We supply the best Black Pepper. Our pepper is graded by size, so you always get exactly what you pay for. It features a strong, spicy flavor perfect for all needs.
            </p>
            <h4 className="list-title">Our Grades</h4>
            <ul className="grade-list">
              <li><strong>TGEB (Tellicherry Garbled Extra Bold):</strong> Size 4.75mm and above</li>
              <li><strong>TGB (Tellicherry Garbled Bold):</strong> Size 4.25mm</li>
              <li><strong>MG-1 (Malabar Garbled):</strong> High-density standard size</li>
            </ul>
            <a href="https://wa.me/919600972627" target="_blank" rel="noopener noreferrer" className="btn btn-gold action-btn">Get Price List</a>
          </div>
        </div>

        {/* Cardamom */}
        <div id="cardamom" className="corp-card product-row">
          <div className="product-img-box">
            <img src="/green_cardamom.png" alt="Green Cardamom" className="product-image" />
          </div>
          <div className="product-content">
            <h2 className="text-green product-title">Green Cardamom</h2>
            <p className="text-secondary product-text">
              We supply fresh Green Cardamom. The pods are cleaned and sorted by their thickness into different packs so you get perfect consistency.
            </p>
            <h4 className="list-title">Cardamom Sizes</h4>
            <div className="grade-table-wrapper">
              <table className="grade-table">
                <thead>
                  <tr>
                    <th>Label Code</th>
                    <th>Pod Size (Diameter)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Yellow Pack</strong></td><td>8mm & above</td></tr>
                  <tr><td><strong>Red Pack</strong></td><td>7.5mm & above</td></tr>
                  <tr><td><strong>Purple Pack</strong></td><td>7mm - 8mm</td></tr>
                  <tr><td><strong>Turquoise Pack</strong></td><td>6.5mm - 7.5mm</td></tr>
                  <tr><td><strong>Green Pack</strong></td><td>6mm - 7mm</td></tr>
                </tbody>
              </table>
            </div>
            <a href="https://wa.me/919600972627" target="_blank" rel="noopener noreferrer" className="btn btn-gold action-btn">Enquire Now</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products
