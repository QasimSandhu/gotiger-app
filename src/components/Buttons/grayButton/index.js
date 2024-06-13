import React from 'react';

const GrayButton = ({ text, icon, iconWidth, iconHeight }) => {
    return (
        <button className="flex items-center h-12 p-4 gap-x-2 bg-[#F1F1F1] rounded-full font-inter text-base text-[#303030] lg:text-xs md:text-xs">
            {icon && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={iconWidth} height={iconHeight}>
                    {icon}
                </svg>
            )}
            <span>{text}</span>
        </button>
    );
};

export default GrayButton;
