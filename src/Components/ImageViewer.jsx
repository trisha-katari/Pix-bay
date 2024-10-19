import React from 'react';
import { useLocation } from 'react-router-dom';

const ImageViewer = () => {
    const location = useLocation();
    const { imageUrl } = location.state || { imageUrl: '' }; 

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {imageUrl ? (
                <img src={imageUrl} alt="Full view" style={{ maxHeight: '90%', maxWidth: '90%' }} />
            ) : (
                <h1>No Image Found</h1>
            )}
        </div>
    );
};

export default ImageViewer;