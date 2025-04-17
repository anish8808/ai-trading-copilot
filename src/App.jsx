import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('tradingGraph');
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (Chart.getChart(canvas)) Chart.getChart(canvas).destroy();
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          datasets: [
            {
              label: 'AI-Driven Signals',
              data: [120, 125, 130, 128, 140],
              borderColor: '#00ffd5',
              backgroundColor: 'rgba(0, 255, 213, 0.2)',
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: { color: '#fff' },
            },
          },
          scales: {
            x: { ticks: { color: '#fff' } },
            y: { ticks: { color: '#fff' } },
          },
        },
      });
    }
  }, []);

  return (
    <div className="App bg-dark text-light">
      {/* Hero Section with Video */}
      <header className="hero-section position-relative">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="display-4 fw-bold">AI Trading Copilot</h1>
          <p className="lead">From Zero to Pro — Let AI Guide Your Trades</p>
          <button className="btn btn-primary mt-3">Get Started</button>
        </div>
      </header>

      {/* Vision */}
      <section data-aos="fade-up" className="container py-5">
        <h2 className="text-center mb-3">Our Vision</h2>
        <p className="text-center">
          Empower every intraday trader — beginner or pro — with AI that learns, guides, and grows with you.
        </p>
      </section>

      {/* Why Us */}
      <section data-aos="fade-up" className="container py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h5>🎯 Smart Signals</h5>
            <p>AI that reads market pulse and delivers actionable trades.</p>
          </div>
          <div className="col-md-4">
            <h5>📊 Trade Feedback</h5>
            <p>Instant journaling and personal coaching, built in.</p>
          </div>
          <div className="col-md-4">
            <h5>🚀 Beginner-Friendly</h5>
            <p>No jargon. Just guidance, growth, and great trades.</p>
          </div>
        </div>
      </section>

      {/* Live Trading Graph */}
      <section data-aos="zoom-in" className="container py-5">
        <h2 className="text-center">Live Trading Graph</h2>
        <div className="text-center">
          <canvas id="tradingGraph" width="400" height="200"></canvas>
        </div>
      </section>

      {/* Testimonials */}
      <section data-aos="fade-up" className="container py-5">
        <h2 className="text-center mb-4">What Traders Say</h2>
        <div className="row">
          <div className="col-md-6">
            <blockquote className="blockquote">
              "Never thought trading could feel this intuitive. Game-changer!"
            </blockquote>
            <footer className="blockquote-footer">Ravi, Beginner Trader</footer>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              "This is not just a tool — it's a trading mentor in disguise."
            </blockquote>
            <footer className="blockquote-footer">Sneha, Full-time Day Trader</footer>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section data-aos="fade-up" className="container py-5">
        <h2 className="text-center mb-4">FAQs</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item bg-dark border-secondary">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                Do I need trading experience?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Nope! We start you from zero and guide you like a copilot all the way.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark border-secondary">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                How are signals generated?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Signals are AI-trained on live market data and trading strategies.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-top border-secondary">
        <p>&copy; 2025 AI Trading Copilot. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
