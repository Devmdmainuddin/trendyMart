import React from 'react';

const Image = ({src,className,alt}) => {
    return (
        <img src={src} alt={alt}  className={`w-full h-full object-cover ${className}`}/>
    );
};

export default Image;