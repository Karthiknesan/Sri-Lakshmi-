import './Contact.css'

function Contact() {
  return (
    <div className="container page-section page-min-height">
      <h1 className="text-center page-spacing">Contact <span className="text-green">Us</span></h1>
      <div className="contact-wrapper">
        
        {/* Contact Form */}
        <div className="corp-card contact-card">
          <h3 className="contact-heading">Get a Wholesale Quote</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name/Company Name" className="form-input" />
            <input type="email" placeholder="Your Email Address" className="form-input" />
            <select className="form-select">
               <option value="">Select Product of Interest...</option>
               <option value="pepper">Black Pepper</option>
               <option value="cardamom">Green Cardamom</option>
               <option value="both">Both Black Pepper & Cardamom</option>
            </select>
            <textarea placeholder="Describe your quantity requirements and location..." rows="5" className="form-textarea"></textarea>
            <button type="button" className="btn btn-primary submit-btn">Submit Inquiry</button>
          </form>
        </div>
        
        <div className="corp-card contact-card">
          <h3 className="contact-heading">Our Contact Details</h3>
          <div className="address-block-wrapper">
            <div className="address-block">
              <strong className="address-title">Our Office:</strong>
              <p className="text-secondary">Sri Lakshmi Traders<br/>Kaveripattinam<br/>Krishnagiri, Tamil Nadu</p>
            </div>
            <div className="address-block">
              <strong className="address-title">Call Us:</strong>
              <p className="text-secondary">+91 98203 23370<br/>+91 22670 86439</p>
            </div>
            <div className="address-block">
              <strong className="address-title">Email:</strong>
              <p className="text-secondary">exports@srilakshmitraders.com<br/>info@srilakshmitraders.com</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
