import React, { useEffect } from 'react';
import './App.css';
import Chart from 'chart.js/auto';
import aiImage from './assets/ai-trading-bg.png';

function App() {
  useEffect(() => {
    const canvas = document.getElementById('candlestickChart');

    if (Chart.getChart(canvas)) {
      Chart.getChart(canvas).destroy(); // Fix multiple render issue
    }

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          {
            label: 'Candlestick Demo',
            data: [120, 125, 115, 130, 140],
            backgroundColor: '#00cec9',
            borderColor: '#00cec9',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <img src={aiImage} alt="AI Copilot" className="hero-image" />
        <h1>AI Trading Copilot</h1>
        <p>
          Elevate your intraday trading with AI-powered signals, journaling, and market analytics – all in one place.
        </p>
        <button className="cta-btn">Start Trading Smarter</button>
      </section>

      {/* Features */}
      <section className="section features">
        <div className="feature">
          <h3>⚙️ AI Trade Signals</h3>
          <p>
            We use real-time data and intelligent pattern recognition to offer personalized trading signals.
          </p>
        </div>
        <div className="feature">
          <h3>📓 Smart Journaling</h3>
          <p>
            Keep track of your trades, insights, and growth. Our AI gives feedback to sharpen your skills.
          </p>
        </div>
        <div className="feature">
          <h3>📊 Real-Time Analytics</h3>
          <p>
            Visualize your progress, understand what works, and identify mistakes instantly.
          </p>
        </div>
      </section>

      {/* Candlestick Graph */}
      <section className="section about">
        <h2>Candlestick Overview</h2>
        <img
          src="/Candlestick_Pattern_Cheat_Sheet_TheChartGuys.jpg"
          alt="Candlestick Cheat Sheet"
          className="candlestick-cheat-img"
        />
        <canvas id="candlestickChart" width="600" height="300"></canvas>
      </section>

      {/* Vision and Tech Stack */}
      <section className="section tech">
        <h2>Our Vision</h2>
        <p>
          We aim to empower intraday traders with smart, AI-enhanced tools that bring confidence, clarity, and consistency
          to trading. No more overtrading, no more emotional bias—just clean, data-backed execution.
        </p>
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React (for dynamic, user-friendly interfaces), TailwindCSS (for responsive design)</li>
          <li><strong>Backend:</strong> Node.js with Express (for handling APIs and data requests)</li>
          <li><strong>AI:</strong> Python (Pandas for data analysis, TensorFlow for AI-driven trading signals)</li>
          <li><strong>Data Visualization:</strong> Chart.js (for creating interactive charts and graphs)</li>
          <li><strong>Cloud & Infra:</strong> AWS (for hosting and cloud infrastructure), Docker (for containerization)</li>
          <li><strong>CI/CD:</strong> GitHub Actions (for automation of continuous integration and deployment)</li>
          <li><strong>Database:</strong> MySQL (for storing trading data and user interactions), Redis (for caching and fast data retrieval)</li>
          <li><strong>Version Control:</strong> Git (for source code management), GitHub (for collaboration and versioning)</li>
          <li><strong>Security:</strong> JWT (for secure authentication), HTTPS (for secure communication)</li>
        </ul>
      </section>


      {/* Testimonials */}
      <section className="section testimonials">
        <h2>User Testimonials</h2>
        <p>"This tool has completely changed the way I trade. The AI feedback is spot on!" – Alex</p>
        <p>"A must-have for every serious trader looking for an edge." – Priya</p>
      </section>

      {/* Footer */}
      <footer className="footer">© 2025 AI Trading Copilot | Built with ❤️ for traders</footer>
    </div>
  );
}

export default App;
