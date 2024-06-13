import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RedButton = ({ text, icon, iconWidth, iconHeight }) => {
    return (
        <button className="flex items-center h-12 p-4 gap-x-2 bg-[#FF2A1A] rounded-full text-white text-base lg:text-xs md:text-xs">
            {icon && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={iconWidth} height={iconHeight}>
                    {React.cloneElement(icon, { fill: 'white' })}
                </svg>
            )}
            <span>{text}</span>
        </button>
    );
};

export default RedButton;