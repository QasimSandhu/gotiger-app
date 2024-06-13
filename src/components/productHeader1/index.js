import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import GrayButton from '../Buttons/grayButton';
import RedButton from '../Buttons/redButton';


const ProductHeader = () => {
    return (
        <header className="bg-white shadow-sm product-header">
            <div className="flex justify-center product-header">
                <div className="flex items-center justify-between w-full max-w-[1440px] h-20 px-4 lg:px-8">
                    <div className="flex items-center">
                        <img src="/assets/images/logo.jpeg" alt="GoTiger" className="h-8" />
                    </div>

                    <div className="flex items-center space-x-4">
                        <GrayButton text="Add Address" icon={<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />} iconWidth={11.2} />

                        <div className="flex items-center relative w-[507px] h-12 bg-[#EFEFEF] rounded-[56px]">
                            <i className="absolute left-3 top-4 text-gray-500 w-4">
                                <FontAwesomeIcon icon={faSearch} />
                            </i>
                            <input type="text" placeholder="Search for dishes, products etc." className="w-full h-full bg-transparent pl-12 outline-none" />
                        </div>


                        <GrayButton text="Pick Time" icon={<path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />} iconWidth={11.2} />
                    </div>

                    <div className="flex items-center space-x-2">
                        <RedButton text="Items" icon={<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />} iconWidth={12.8} />

                        <button className="flex items-center h-12 bg-white px-4 text-black">
                            <i className="fa-solid fa-user mr-2"></i>
                            <span className="flex-shrink-0">Sign In / Sign Up</span>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProductHeader;
