import React from 'react';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0F1F] flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap');

        :root {
          --color-bg-base: #0A0F1F;
          --color-bg-gradient-start: #081825;
          --color-bg-gradient-end: #02060E;
          --color-primary-accent: #0FFAFE;
          --color-secondary-accent: #1AC6FF;
          --color-text-primary: #F9FAFB;
          --color-text-secondary: #E1E8F0;
          --color-text-muted: #94A3B8;
          --font-heading: 'Montserrat', sans-serif;
          --font-subheading: 'Space Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
        }

        body {
          background: var(--color-bg-base);
        }

        html {
          scroll-behavior: smooth;
        }

        html {
          font-size: clamp(14px, 0.875vw + 10px, 16px);
        }

        body {
          font-family: var(--font-body);
          font-weight: 400;
          letter-spacing: -0.01em;
          font-size: 1rem;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
          letter-spacing: -0.02em;
        }

        h1 {
          font-weight: 700;
          font-size: clamp(2rem, 4vw + 1rem, 4.5rem);
          line-height: 1.1;
        }

        h2 {
          font-weight: 600;
          font-size: clamp(1.75rem, 3vw + 0.75rem, 3.5rem);
          line-height: 1.2;
        }

        h3 {
          font-weight: 600;
          font-size: clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem);
          line-height: 1.3;
        }

        button, .btn {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: clamp(0.875rem, 0.75vw + 0.5rem, 1rem);
        }

        label, .label, .text-sm {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem);
        }

        p {
          font-size: clamp(0.875rem, 0.75vw + 0.5rem, 1.125rem);
          line-height: 1.7;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0FFAFE 0%, #1AC6FF 50%, #0D9488 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ocean-gradient {
          background: linear-gradient(180deg, #081825 0%, #0A0F1F 50%, #02060E 100%);
        }

        .premium-glow {
          box-shadow: 0 0 clamp(20px, 3vw, 40px) rgba(15, 250, 254, 0.15), 
                      0 0 clamp(40px, 5vw, 80px) rgba(26, 198, 255, 0.08);
        }

        .text-glow {
          text-shadow: 0 0 clamp(15px, 2vw, 30px) rgba(15, 250, 254, 0.3);
        }

        .fluid-spacing-y {
          padding-top: clamp(2.5rem, 5vh, 5rem);
          padding-bottom: clamp(2.5rem, 5vh, 5rem);
        }

        .fluid-spacing-x {
          padding-left: clamp(1rem, 4vw, 2rem);
          padding-right: clamp(1rem, 4vw, 2rem);
        }

        .fluid-gap {
          gap: clamp(1rem, 3vw, 4rem);
        }

        .fluid-icon {
          width: clamp(1.25rem, 2vw + 0.5rem, 2rem);
          height: clamp(1.25rem, 2vw + 0.5rem, 2rem);
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .wave-mask {
          mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L0,320Z'/%3E%3C/svg%3E");
          mask-size: cover;
          mask-position: bottom;
        }
      `}</style>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}