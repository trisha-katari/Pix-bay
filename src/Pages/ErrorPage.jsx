import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                Go Back to Home
            </Link>
        </div>
    );
}
