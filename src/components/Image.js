import React from 'react';

function Image(image) {
    return (
        <div>
            <img src={image.urls.small} alt="unsplash images"/>
        </div>
    );
}

export default Image;
