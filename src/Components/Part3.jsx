import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './App.css';

export default function Background() {
    const [api, setApi] = useState({ product: [] });
    const [img, setImg] = useState('');
    const navigate = useNavigate(); 

    const fetchImages = async (query = 'nature') => {
        try {
            const response = await fetch(`https://pixabay.com/api/?key=46193723-c71dd6e4249e10a2024b30b19&q=${query}&image_type=photo&pretty=true`);
            const data = await response.json();
            setApi({ product: data.hits });
        } catch (err) {
            console.error("Error fetching images:", err);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        if (img) {
            fetchImages(img);
        }
    }, [img]);

    const view = (e) => {
        setImg(e.target.value);
    };

    const handleImageClick = (imageUrl) => {
        navigate('/image-viewer', { state: { imageUrl } }); 
    };

    const handleButtonClick = (buttonValue) => {
        setImg(buttonValue);
    };

    return (
        <div id="maindiv">
            {/* Background Section */}
            <div id="bacimg">
                <div id="tx">
                    <h1>Stress less and enjoy the best.</h1>
                    <p>Over 5 million+ high quality stock images, videos, and music shared by our talented community.</p>
                    <span>
                        <input
                            type="text"
                            onChange={view}
                            placeholder="Search images..."
                            style={{ height: "50px", width: "600px", borderRadius: "25px" }}
                        />
                        <i className="fa-solid fa-magnifying-glass" id="ic"></i>
                    </span>
                </div>
            </div>

            {/* Buttons Section */}
            <div id="buttons">
                <button onClick={() => handleButtonClick('background')}>Background</button>
                <button onClick={() => handleButtonClick('wallpaper')}>Wallpaper</button>
                <button onClick={() => handleButtonClick('flowers')}>Flowers</button>
                <button onClick={() => handleButtonClick('woman')}>Woman</button>
                <button onClick={() => handleButtonClick('money')}>Money</button>
                <button onClick={() => handleButtonClick('autumn')}>Autumn</button>
                <button onClick={() => handleButtonClick('travel')}>Travel</button>
                <button onClick={() => handleButtonClick('house')}>House</button>
                <button onClick={() => handleButtonClick('sea')}>Sea</button>
                <button onClick={() => handleButtonClick('iphone wallpaper')}>iPhone Wallpaper</button>
                <button onClick={() => handleButtonClick('mountains')}>Mountains</button>
            </div>

            {/* Image Grid Section */}
            <div id="ren">
                {api.product.map(x => (
                    <img
                        key={x.id}
                        src={x.largeImageURL}
                        alt={x.type}
                        style={{ width: "200px", margin: "10px", cursor: "pointer" }}
                        onClick={() => handleImageClick(x.largeImageURL)}
                    />
                ))}
            </div>
            </div>
    );
}
