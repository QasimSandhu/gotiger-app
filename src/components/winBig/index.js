import React from 'react';
import './style.css';
import SaleBanner from './saleBanner';

const WinBig = () => {
    return (
        <div className="relative flex justify-center py-8 bg-white">
            <div className="w-[1384px] xl:w-[1384px] lg:w-[970px] md:w-[720px] sm:w-[625px] h-[272px] gap-[16px] mobile-res">
                <div className="w-full flex justify-between gap-5 flex-container">
                    <SaleBanner text="Win Big with GoTiger" />
                    <SaleBanner text="Win Big with GoTiger" />
                </div>
            </div>
        </div>
    );
};

export default WinBig;
