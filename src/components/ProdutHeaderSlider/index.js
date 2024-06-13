'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

const ProductHeaderSlider = () => {
    const productCategories = [
        { name: "Bestseller", image: "/assets/images/coin.jpg" },
        { name: "New In", image: "/assets/images/coin.jpg" },
        { name: "Candy", image: "/assets/images/coin.jpg" },
        { name: "Rice", image: "/assets/images/coin.jpg" },
        { name: "Soups", image: "/assets/images/coin.jpg" },
        { name: "Alcoholic", image: "/assets/images/coin.jpg" },
        { name: "Rice", image: "/assets/images/coin.jpg" },
        { name: "Soups", image: "/assets/images/coin.jpg" },
        { name: "Alcoholic", image: "/assets/images/coin.jpg" },
        { name: "Bestseller", image: "/assets/images/coin.jpg" },
        { name: "New In", image: "/assets/images/coin.jpg" },
        { name: "Candy", image: "/assets/images/coin.jpg" },
        { name: "Bestseller", image: "/assets/images/coin.jpg" },
        { name: "Bestseller", image: "/assets/images/coin.jpg" },
        { name: "Bestseller", image: "/assets/images/coin.jpg" },
        { name: "New In", image: "/assets/images/coin.jpg" },
        { name: "Candy", image: "/assets/images/coin.jpg" },
        { name: "Rice", image: "/assets/images/coin.jpg" },
        { name: "Soups", image: "/assets/images/coin.jpg" },
        { name: "Alcoholic", image: "/assets/images/coin.jpg" },
        { name: "Rice", image: "/assets/images/coin.jpg" },
        { name: "Soups", image: "/assets/images/coin.jpg" },
        { name: "Alcoholic", image: "/assets/images/coin.jpg" },
        { name: "Bestseller", image: "/assets/images/coin.jpg" },
        { name: "New In", image: "/assets/images/coin.jpg" },
        { name: "Candy", image: "/assets/images/coin.jpg" },
        { name: "Bestseller", image: "/assets/images/coin.jpg" },
        { name: "Bestseller", image: "/assets/images/coin.jpg" },
    ];
    return (
        <div className="relative flex justify-center py-4 bg-white bestseller-section w-full border-t border-b">
            <div className='flex justify-center items-center'>
                <div className='flex items-center scrollbar-hide no-scrollbar space-x-4 px-4'>
                    <div className='w-[1384px] xl:w-[1384px] lg:w-[970px] md:w-[720px] sm:w-[625px] c-w-415'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={10}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 5,
                                },
                                768: {
                                    slidesPerView: 8,
                                },
                                640: {
                                    slidesPerView: 6,
                                },
                                480: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {productCategories.map((product) => (
                                <SwiperSlide key={product.id} className='main-header-slider'>
                                    <div className="bg-white">
                                        <div className="bg-gray-200 rounded-lg h-[48px] w-[48px] flex items-center justify-center relative">
                                            <img src={product.image} alt={product.label} className="rounded-lg h-full w-full object-cover" />
                                        </div>
                                    </div>
                                    <p className="text-xs text-center mt-1">{product.name}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHeaderSlider;
