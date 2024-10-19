
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";

export default function Part1() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToRegister = () => {
        navigate('/register');
    };

    return (
        <>
            <nav>
                <ul>
                    <div style={{ marginRight: "700px", display: "flex", alignItems: "center" }}>
                        <img 
                            src="https://cdn0.iconfinder.com/data/icons/tropical-43/64/Tropical_Kobai-12-128.png" 
                            alt="Pixabay Icon" 
                            style={{ width: '24px', height: '24px', marginRight: '8px' }} 
                        />
                        <li style={{ fontFamily: "fantasy", fontStyle: "oblique", fontWeight: "300", fontSizeAdjust: "revert-layer",color:"wheat" }}>
                            Pixabay
                        </li>
                    </div>
                    <li style={{color:"whitesmoke"}}>Explore</li>
                    <li>
                        <button className="but1" onClick={goToLogin}>Login</button>
                    </li>
                    <li>
                        <button className="but1" onClick={goToRegister}>Join</button>
                    </li>
                    <li>
                        <button id="but2">Update</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
