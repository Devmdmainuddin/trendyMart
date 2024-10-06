import React from 'react';
import { Link } from 'react-router-dom';

const SingleBanner = () => {
    return (
        <div className='h-auto md:h-[462px] mt-6 md:mt-16 lg:mt-[125px]'>
         <Link to='/shop'> <img src="/banner.jpg" alt=""  className='w-full h-full object-cover'/> </Link>  
        </div>
    );
};

export default SingleBanner;