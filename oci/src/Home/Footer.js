import React from 'react';
import './Footer.css'; // Import the Footer CSS file

const Footer = () => {
  return (
    <footer>
      {/* Quick Links */}
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: contact@oneclickinternship.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Internship St, Career City, IC 56789</p>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#" className="icon facebook">Facebook</a>
          <a href="#" className="icon twitter">Twitter</a>
          <a href="#" className="icon linkedin">LinkedIn</a>
          <a href="#" className="icon instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
