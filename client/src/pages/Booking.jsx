import React, { useState } from 'react';
import '../styles/booking.css';

// Replace these with your actual image paths
import mainImage from '../assets/images/gallery/gallery3.jpg';
import accentImage from '../assets/images/gallery/gallery4.jpg';
import studioThumb from '../assets/images/gallery/gallery5.jpg';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: 'Wedding',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', date: '', eventType: 'Wedding', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="container-custom booking-hero__grid">
          
          <div className="booking-hero__copy fade-up">
            <span className="booking-kicker">Reserve Your Date</span>
            <h1>A refined visual studio for timeless stories.</h1>
            <p>
              We take on a limited number of weddings each year to ensure every couple receives our full creative dedication. Let's create something beautiful together.
            </p>
            
            <div className="booking-hero__actions">
              <a href="#booking-form" className="booking-btn booking-btn--primary">
                Start Your Story →
              </a>
              <a href="/contact" className="booking-btn booking-btn--ghost">
                General Inquiry
              </a>
            </div>

            <div className="booking-tags">
              <span>Bhopal & Worldwide</span>
              <span>Cinematic Films</span>
              <span>Fine Art Photography</span>
            </div>
          </div>

          <div className="booking-hero__visual fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="booking-hero__main-image">
              <img src={mainImage} alt="Wedding Couple" loading="lazy" />
            </div>
            <div className="booking-hero__accent-image float-animation">
              <img src={accentImage} alt="Wedding Detail" loading="lazy" />
            </div>
            <div className="booking-hero__floating-card float-animation-delayed">
              <img src={studioThumb} alt="Studio" />
              <div>
                <span>Experience</span>
                <strong>10+ Years of Capturing Love</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Booking Form & Info Section */}
      <section className="container-custom booking-content" id="booking-form">
        
        <div className="booking-form-card fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="booking-heading">
            <h2>Tell us about your day</h2>
            <p>Fill out the form below, and we will get back to you within 48 hours with our availability and pricing guide.</p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form__row">
              <label>
                Your Name
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John & Jane" required />
              </label>
              <label>
                Email Address
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="hello@example.com" required />
              </label>
            </div>

            <div className="booking-form__row">
              <label>
                Phone Number
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" required />
              </label>
              <label>
                Event Date
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
              </label>
            </div>

            <label className="booking-form__full">
              Event Type
              <select name="eventType" value={formData.eventType} onChange={handleChange}>
                <option value="Wedding">Full Wedding Coverage</option>
                <option value="Pre-Wedding">Pre-Wedding Shoot</option>
                <option value="Engagement">Engagement</option>
                <option value="Destination">Destination Wedding</option>
              </select>
            </label>

            <label className="booking-form__full">
              Event Details & Locations
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your vision, venues, and what matters most to you..." required></textarea>
            </label>

            <button type="submit" className="booking-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Request Availability'}
            </button>
            
            {isSuccess && <p className="success-msg">Thank you! Your inquiry has been sent successfully.</p>}
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="booking-sidebar fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="booking-info-card">
            <span className="booking-info-card__kicker">Direct Contact</span>
            <h3>Need immediate assistance?</h3>
            <p>If your event is less than 30 days away, please reach out directly via WhatsApp or Phone.</p>
            <a href="tel:+919039079507" className="contact-link">+91-9039079507</a>
            <a href="mailto:rangrit04@gmail.com" className="contact-link">rangrit04@gmail.com</a>
          </div>

          <div className="booking-collage">
            <img src={mainImage} alt="Gallery 1" loading="lazy" className="hover-scale" />
            <img src={accentImage} alt="Gallery 2" loading="lazy" className="hover-scale" />
          </div>
        </div>

      </section>

      {/* Booking Process Section */}
      <section className="container-custom booking-process">
        <div className="booking-process__grid">
          <div className="booking-process__card fade-up" style={{ animationDelay: '0.2s' }}>
            <span>Step 01</span>
            <h3>Inquiry</h3>
            <p>Fill out the form with your event details. We'll review our calendar and send over a comprehensive pricing guide.</p>
          </div>
          <div className="booking-process__card fade-up" style={{ animationDelay: '0.4s' }}>
            <span>Step 02</span>
            <h3>Consultation</h3>
            <p>We'll schedule a quick call to hear about your vision, answer questions, and ensure we're the perfect fit.</p>
          </div>
          <div className="booking-process__card fade-up" style={{ animationDelay: '0.6s' }}>
            <span>Step 03</span>
            <h3>Booking</h3>
            <p>Once you select your package, we'll send a digital contract and invoice to officially secure your date!</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Booking;