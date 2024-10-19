import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Part1 from './Components/Part1';
import Part3 from './Components/Part3';
import Part4 from './Components/Part4';
import Login from './Pages/Login';
import SignPage from './Pages/Register';
import ImageViewer from './Components/ImageViewer';
import ErrorPage from './Pages/ErrorPage';

export default function App() {
    return (
        <Router>
            <Part1 /> {/* This could be a navbar or header */}
            <Routes>
                {/* Define your specific routes */}
                <Route path="/" element={<Part3 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignPage />} />
                <Route path="/image-viewer" element={<ImageViewer />} />

                {/* Catch all unmatched routes and display the ErrorPage */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Part4 /> {/* This could be a footer or another part of the layout */}
        </Router>
    );
}
