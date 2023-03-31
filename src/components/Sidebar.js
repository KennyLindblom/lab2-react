import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Contact Information</h2>
      <ul>
        <li><a href="https://github.com/your-github-username">GitHub</a></li>
        <li><a href="mailto:your-email-address">Email</a></li>
        <li><a href="https://www.linkedin.com/in/your-linkedin-username/">LinkedIn</a></li>
        <li><a href="https://your-website.com">Website</a></li>
      </ul>
    </div>
  );
}

