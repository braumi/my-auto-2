import React from 'react'
import './Footer.css'
import Logo from '../components/Logo.jsx'

export default function Footer() {
  return (
    <footer>
        <div className="footer-wrapper">
          <div className="left">
            <Logo />
            <p>My Auto is a fictional car dealership. This website was created for educational purposes only.</p>
          </div>
          <div className="right">
            <h2>Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/assignment3">Assignment 3</a></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}
