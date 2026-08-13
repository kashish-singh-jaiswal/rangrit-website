import React, { useState } from 'react';
import '../styles/contact.css'; // Styles folder ka path

  // ... baki ka code

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Wedding',
    date: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call or EmailJS integration
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 4 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({ name: '', email: '', eventType: 'Wedding', date: '', message: '' });
      }, 4000);
    }, 1500);
  };

  return (
    <section className="portfolio-page">
      <div className="container-custom">
        <div className="section-heading section-heading--light">
          <span>Contact</span>
          <h2>Let's create something beautiful together</h2>
          <p>
            Currently booking for the upcoming season. Reach out directly or fill out the form below to discuss your vision.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-column">
            <div className="portfolio-stats__grid">
              <article className="portfolio-stat-card interactive-card">
                <strong>Call</strong>
                <span><a href="tel:+91-7049569503" className="contact-link">+91-7049569503</a></span>
              </article>
              <article className="portfolio-stat-card interactive-card">
                <strong>Email</strong>
                <span><a href="mailto:rangrit01@gmail.com" className="contact-link">rangrit01@gmail.com</a></span>
              </article>
              <article className="portfolio-stat-card interactive-card">
                <strong>Base</strong>
                <span>Bhopal, India</span>
              </article>
              <article className="portfolio-stat-card interactive-card">
                <strong>Coverage</strong>
                <span>Worldwide travel available</span>
              </article>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required 
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group half-width">
                  <select 
                    name="eventType" 
                    value={formData.eventType}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Portrait">Portrait Session</option>
                    <option value="Commercial">Commercial / Editorial</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group half-width">
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your event or vision..." 
                  required 
                  rows="4"
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>

              {submitStatus === 'success' && (
                <p className="success-message">Thank you! Your inquiry has been sent.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;