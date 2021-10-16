import React from 'react';
import Image from "./Image";
import './style.css';

function Images({images}) {

    const img = {
        maxHeight: "100%",
        minWidth: "100%",
        objectFit: "cover",
        verticalAlign: "bottom",
        borderRadius: "4px"
    }

    return (
        <div>
            <ul className="photo-grid">
                {images.map(image => {
                    return (
                        <li key={image.id}>
                            <img
                                src={image.urls.regular}
                                alt="unsplash images"
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    )

}

export default Images;
