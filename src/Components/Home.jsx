
import React from "react";
import { Routes, Route } from "react-router-dom";
import Part1 from './Part1';
import Part3 from './Part3';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../Pages/ErrorPage'; 

export default function Home() {
    return (
        <>
            <Part1 />
            <Routes>
                <Route path="/" element={<Part3 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
           
        </>
    );
}
