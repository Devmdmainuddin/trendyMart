import React from 'react';

const Heading = ({className,text}) => {
    return (
        <div>
            <h2 className={`font-josefin text-2xl md:text-[42px] font-bold text-[#1A0B5B] capitalize ${className}`}>{text}</h2>
        </div>
    );
};

export default Heading;