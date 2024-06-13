import React from 'react';
import './style.css';

const BrandGrid = () => {
    const brands = [
        { id: 1, yum: "/assets/images/yum.png", alcohol: "/assets/images/honey.png" },
        { id: 2, yum: "/assets/images/yum.png", alcohol: "/assets/images/honey.png" },
        { id: 3, yum: "/assets/images/yum.png", alcohol: "/assets/images/honey.png" },
        { id: 4, yum: "/assets/images/yum.png", alcohol: "/assets/images/honey.png" },
        { id: 5, yum: "/assets/images/yum.png", alcohol: "/assets/images/honey.png" },
        { id: 6, yum: "/assets/images/yum.png", alcohol: "/assets/images/honey.png" },
        { id: 7, yum: "/assets/images/yum.png", alcohol: "/assets/images/honey.png" },
        { id: 8, yum: "/assets/images/yum.png", alcohol: "/assets/images/honey.png" }
    ];

    return (
        <div className="flex justify-center p-8 bg-white sm:px-2 c-px-2">
            <div className="w-[1384px] xl:w-[1384px] lg:w-[970px] md:w-[720px] sm:w-[625px] c-w-415">
                <h1 className="text-2xl font-bold mb-6">Search by brands</h1>
                <div className="grid grid-cols-4 gap-4 sm:gap-2 grid-container">
                    {brands.map((brand, index) => (
                        <div key={brand.id} className="w-[332px] xl:w-[332px] lg:w-[230px] md:w-[170px] sm:w-[150px] h-[149px] bg-gray-100 rounded-md p-4 flex items-center justify-between relative c-w-100 c-w-198">
                            <img src={brand.yum} alt={`Yum! ${index + 1}`} className="w-[94.81px] xl:w-[94.81px] lg:w-[70px] md:w-[50px] sm:w-[50px] h-[80px] object-contain c-w-60" />
                            <div className="border-r border-gray-300 h-20 absolute left-1/2 top-1/2 transform -translate-y-1/2"></div>
                            <img src={brand.alcohol} alt={`Brand ${index + 1}`} className="w-[94.81px] xl:w-[94.81px] lg:w-[70px] md:w-[50px] sm:w-[50px] h-[80px] object-contain" />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandGrid;
