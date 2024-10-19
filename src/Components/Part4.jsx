import React from "react";
import './App.css';

export default function Part4() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4>About Pixabay</h4>
                <p>Over 5 million+ high-quality stock images, videos, and music shared by our talented community.</p>
                <div className="footer-links">
                    <a href="#about">About Us</a>
                    <a href="#terms">Terms of Service</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Pixabay Clone. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
