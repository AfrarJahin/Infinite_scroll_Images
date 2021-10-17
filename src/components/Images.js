import React from 'react';
import './style.css';

function Images({images}) {
    return (
        <div className="container">
                {images.map(image => {
                    return (
                            <img
                                style={{marginBottom:"10px",boxSizing:"border-box",width:"100%"}}
                                src={image.urls.regular}
                                alt="unsplash images"
                            />
                    );
                })}
        </div>
    )

}

export default Images;
