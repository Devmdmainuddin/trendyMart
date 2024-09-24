import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <Container>
                <div className='flex justify-between'>
                    {/* 01 */}
                    <div>
                        <h5 className="text-black pt-5 ps-2">Catagories</h5>
                        <ul className="text-black-50 flex-column">
                            <li><Link>Laptops & Computers</Link></li>
                            <li><Link>Cameras & Photography</Link></li>
                            <li><Link>Smart Phones & Tablets</Link></li>
                            <li><Link>Video Games & Consoles</Link></li>
                            <li><Link>Waterproof Headphones</Link></li>

                        </ul>
                    </div>
                      {/* 02 */}
                    <div>
                        <h5 className="text-black pt-5 ps-2">Customer Care</h5>
                        <ul className="text-black-50 flex-column">
                            <li><Link>My Account</Link></li>
                            <li><Link>Discount</Link></li>
                            <li><Link>Returns</Link></li>
                            <li><Link>Order history</Link></li>
                            <li><Link>Order Tracking</Link></li>

                        </ul>
                    </div>
                     {/* 03 */}
                    <div>
                        <h5 className="text-black pt-5 ps-2">Pages</h5>
                        <ul className="text-black-50 flex-column">
                            <li><Link>Blog</Link></li>
                            <li><Link>Browse the Shop</Link></li>
                            <li><Link>Category</Link></li>
                            <li><Link>Pre-Built Pages</Link></li>
                            <li><Link>Visual Composer Elements</Link></li>
                            <li><Link>WooCommerce Pages</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;