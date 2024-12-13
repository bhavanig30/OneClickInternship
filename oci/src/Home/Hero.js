import React from 'react';
import './Hero.css'; // Import the Hero CSS file

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Catchy Tagline */}
        <h1 className="hero-title">Your Gateway to Internship Success!</h1>
        <p className="hero-subtitle">
          Discover endless opportunities and kickstart your career with just one click.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="hero-buttons">
          <button className="cta-button explore">Explore Internships</button>
          <button className="cta-button signup">Sign Up Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
