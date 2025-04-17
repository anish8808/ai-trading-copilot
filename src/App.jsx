import React, { useEffect } from 'react';
import './App.css'; // If you have custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Chart from 'chart.js/auto'; // For trading graph
import AOS from 'aos'; // For animations
import 'aos/dist/aos.css'; // AOS CSS for animations

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  useEffect(() => {
    // Example: Dynamic Trading Graph with Chart.js
    const ctx = document.getElementById('tradingGraph').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          {
            label: 'AI-Driven Trade Signal',
            data: [120, 125, 130, 135, 140],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="App">
      {/* Vision Section */}
      <header className="App-header text-center py-5">
        <h1 className="display-4 text-light">AI Trading Copilot</h1>
        <p className="lead text-light">
          Your trusted partner in intelligent intraday trading.
          From zero knowledge to expert trader.
        </p>
      </header>

      {/* Vision & Features Section */}
      <section data-aos="fade-up" className="container py-5">
        <h2 className="text-center">Our Vision</h2>
        <p className="text-center">
          Empowering traders with AI-powered trade signals, personalized feedback, and smart journaling.
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">AI-driven Trade Signals for Better Decisions</li>
          <li className="list-group-item">Trade Journaling and Personalized Feedback</li>
          <li className="list-group-item">Simple, Intuitive, and Beginner-Friendly</li>
        </ul>
      </section>

      {/* Trading Graph Section */}
      <section data-aos="zoom-in" className="container py-5">
        <h2 className="text-center">Live Trading Graph</h2>
        <div className="text-center">
          <canvas id="tradingGraph" width="400" height="200"></canvas>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container py-5 text-center">
        <h3>Start Trading Like a Pro</h3>
        <p>Join the AI-powered trading revolution today!</p>
        <button className="btn btn-primary">Get Started</button>
      </section>

      {/* Footer Section */}
      <footer className="App-footer py-3 text-center">
        <p>&copy; 2025 AI Trading Copilot | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
