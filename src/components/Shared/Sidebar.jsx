import React, { useState } from 'react';
import { FaCheck, FaCheckSquare } from 'react-icons/fa';

const Sidebar = () => {
    const [selectedFurniture, setSelectedFurniture] = useState([]);
    const [selectedDiscount, setSelectedDiscount] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedRanges, setSelectedRanges] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);


    const Categories = [
        " Prestashop",
        " Magento",
        "Bigcommerce",
        "osCommerce",
        "Bags",
        "Accessories",
        "Jewellery",
        "Watches",
    ]
    const priceRanges = [
        { label: "$0 - $50", value: [0, 50] },
        { label: "$51 - $100", value: [51, 100] },
        { label: "$101 - $200", value: [101, 200] },
        { label: "$201 - $500", value: [201, 500] },
        { label: "$501 - $1000", value: [501, 1000] },
    ];
    const handlePriceChange = (range) => {
        // Check if the range is already selected, remove or add it accordingly
        const isSelected = selectedRanges.some(
            (r) => r[0] === range[0] && r[1] === range[1]
        );
        if (isSelected) {
            setSelectedRanges(selectedRanges.filter((r) => r[0] !== range[0] || r[1] !== range[1]));
        } else {
            setSelectedRanges([...selectedRanges, range]);
        }
    };

    const furnitureOptions = [
        "Coaster Furniture",
        "Fusion Dot High Fashion",
        "Unique Furniture Restor",
        "Dream Furniture Flipping",
        "Young Repurposed",
        "Green DIY Furniture",
    ];
    const discountOptions = [
        "20% Cashback",
        "5% Cashback Offer",
        "25% Discount Offer",
    ]
    console.log(selectedFurniture);
    // Handle checkbox changes
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedFurniture((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };
    const handleDiscountChange = (event) => {
        const value = event.target.value;
        setSelectedDiscount((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };
    const handleCategoriesChange = (event) => {
        const value = event.target.value;
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };
    const colors = [
        { label: "Red", value: "#FF0000" },
        { label: "Yellow", value: "#FFFF00" },
        { label: "Blue", value: "#0000FF" },    // Blue color
        { label: "Orange", value: "#FFA500" },  // Orange color
        { label: "Brown", value: "#A52A2A" },   // Brown color
        { label: "Green", value: "#008000" },   // Green color
        { label: "Purple", value: "#800080" },  // Purple color
        { label: "Sky", value: "#87CEEB" }
    ];

    const handleColorChange = (color) => {
        if (selectedColors.includes(color)) {
            // Remove color if already selected
            setSelectedColors(selectedColors.filter((c) => c !== color));
        } else {
            // Add the selected color
            setSelectedColors([...selectedColors, color]);
        }
    };
    return (
        <div>
            <div className='w-[225px]'>


                {/* Brand */}
                <div >
                    <h2 className='text-xl text-[#151875] leading-7 font-josefin font-bold underline '>Product Brand</h2>
                    {furnitureOptions.map((furniture) => (
                        <div key={furniture} className='mt-2'>
                            <label className='flex items-center  text-[#7E81A2]'>
                                <input
                                    type="checkbox"
                                    value={furniture}
                                    checked={selectedFurniture.includes(furniture)}
                                    onChange={handleCheckboxChange}
                                    className="peer  appearance-none  checked:bg-[#603EFF] checked:text-white "
                                />
                                <span className={` flex  items-center ${selectedFurniture.includes(furniture) ? 'text-[#603EFF]' : 'text-[#d7d2f0]'}`}>
                                    <FaCheckSquare />
                                </span>
                                <span className="peer-checked:text-[#603EFF] ml-2">{furniture}</span>
                            </label>
                        </div>
                    ))}
                </div>
                {/* Offer */}
                <div >
                    <h2 className='text-xl text-[#151875] leading-7 font-josefin font-bold underline mt-10'>Discount Offer</h2>
                    {discountOptions.map((item) => (
                        <div key={item} className='mt-2'>
                            <label className='flex items-center  text-[#7E81A2]'>
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={selectedDiscount.includes(item)}
                                    onChange={handleDiscountChange}
                                    className="peer  appearance-none  checked:bg-[#FF3EB2] checked:text-white "
                                />
                                <span className={` flex  items-center ${selectedDiscount.includes(item) ? 'text-[#FF3EB2]' : 'text-[#FFDBF1]'}`}>
                                    <FaCheckSquare />
                                </span>
                                <span className="peer-checked:text-[#FF3EB2] ml-2">{item}</span>
                            </label>
                        </div>
                    ))}
                </div>

                {/* category */}
                <div >
                    <h2 className='text-xl text-[#151875] leading-7 font-josefin font-bold underline mt-10'>Categories</h2>
                    {Categories.map((item) => (
                        <div key={item} className='mt-2'>
                            <label className='flex items-center  text-[#7E81A2]'>
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={selectedCategories.includes(item)}
                                    onChange={handleCategoriesChange}
                                    className="peer  appearance-none  checked:bg-[#FF3EB2] checked:text-white "
                                />
                                <span className={` flex  items-center ${selectedCategories.includes(item) ? 'text-[#FF3EB2]' : 'text-[#fad3eb]'}`}>
                                    <FaCheckSquare />
                                </span>
                                <span className="peer-checked:text-[#FF3EB2] ml-2">{item}</span>
                            </label>
                        </div>
                    ))}
                </div>
                {/* Rating */}

                {/* Price filter */}
                {/* <div >
                    <h2 className='text-xl text-[#151875] leading-7 font-josefin font-bold underline mt-10'>Price Filter</h2>
                    {priceRanges.map((range, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id={`price-${index}`}
                                value={range.value}
                                onChange={() => handlePriceChange(range.value)}
                                className="mr-2"
                            />
                            <label htmlFor={`price-${index}`} className="text-sm">
                                {range.label}
                            </label>
                        </div>
                    ))}




                </div> */}
                <div>
                    <h2 className='text-xl text-[#151875] leading-7 font-josefin font-bold underline mt-10'>Price Filter</h2>
                    {priceRanges.map((range, index) => (
                        <div key={index} className='mt-2'>
                            <label className='flex items-center text-[#7E81A2]'>
                                <input
                                    type="checkbox"
                                    id={`price-${index}`}
                                    value={range.value}
                                    checked={selectedRanges.some(
                                        (selectedRange) => selectedRange[0] === range.value[0] && selectedRange[1] === range.value[1]
                                    )}
                                    onChange={() => handlePriceChange(range.value)}
                                    className="peer appearance-none checked:bg-[#FF3EB2] checked:text-white"
                                />
                                <span
                                    className={`flex items-center ${selectedRanges.some(
                                        (selectedRange) => selectedRange[0] === range.value[0] && selectedRange[1] === range.value[1]
                                    ) ? 'text-[#FF3EB2]' : 'text-[#fad3eb]'}`}
                                >
                                    <FaCheckSquare />
                                </span>
                                <span className="peer-checked:text-[#FF3EB2] ml-2">{range.label}</span>
                            </label>
                        </div>
                    ))}
                </div>


                {/* filter by color */}
                <div>
                    <h2 className='text-xl text-[#151875] leading-7 font-josefin font-bold underline mt-10'>Filter by Color</h2>
                    {colors.map((color, index) => (
                        <div key={index} className='mt-2'>
                            <label className='flex items-center text-[#7E81A2]'>
                                <input
                                    type="checkbox"
                                    id={`color-${index}`}
                                    value={color.value}
                                    checked={selectedColors.includes(color.value)}
                                    onChange={() => handleColorChange(color.value)}
                                    className="peer appearance-none checked:bg-[#FF3EB2] checked:text-white"
                                />
                                <span
                                    className={` flex items-center ${selectedColors.includes(color.value) ? 'text-[#FF3EB2]' : 'text-[#fad3eb]'}`}
                                >
                                    <FaCheckSquare />
                                </span>
                                <div className='flex gap-1 items-center'>
                                    <span
                                        className={`w-4 h-4 rounded-full  ml-2`}
                                        style={{ backgroundColor: color.value }} 
                                    >
                                    </span>
                                    <span className="peer-checked:text-[#FF3EB2] ml-2">
                                        {color.label}
                                    </span>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>


            </div>
        </div>

    );
};

export default Sidebar;