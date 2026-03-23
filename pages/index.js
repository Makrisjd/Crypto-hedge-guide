import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Welcome to Crypto Hedge Fund</h1>
        <p>Your gateway to smart investing in cryptocurrencies.</p>
        <button className="cta-button">Get Started</button>
        <button className="cta-button">Contact Us</button>
      </header>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li><strong>Expert Analysis:</strong> Leverage insights from our expert team.</li>
          <li><strong>Real-time Data:</strong> Gain access to live market data.</li>
          <li><strong>Secure Investment:</strong> Your investments are protected with top security protocols.</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2026 Crypto Hedge Fund. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;