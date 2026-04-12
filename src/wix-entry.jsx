import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import '@/index.css';

const TAG_NAME = 'bhargav-portfolio';

class BhargavPortfolio extends HTMLElement {
  connectedCallback() {
    if (this.root) {
      return;
    }

    this.style.display = 'block';
    this.style.width = '100%';
    this.style.minHeight = this.style.minHeight || '100vh';

    this.mountPoint = document.createElement('div');
    this.mountPoint.className = 'bhargav-portfolio-root';
    this.appendChild(this.mountPoint);

    this.root = ReactDOM.createRoot(this.mountPoint);
    this.root.render(<App />);
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BhargavPortfolio);
}
