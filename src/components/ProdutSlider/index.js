import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
import GrayButton from '../Buttons/grayButton';

const ProductSlider = ({ title, products, icon }) => {
    return (
        <div className="relative flex justify-center py-8 bg-white bestseller-section">
            <div className='w-[1384px] xl:w-[1384px] lg:w-[958px] md:w-[720px] sm:w-[625px] c-w-415 relative'>
                <div className='w-full flex justify-between gap-5'>
                    <h2 className="text-4xl font-bold mb-4 relative z-0 c-ts-15">{title}</h2>
                    <GrayButton text="Show all >" />
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 6,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white">
                                <div className="bg-gray-200 rounded-lg h-55 flex items-center justify-center relative">
                                    {icon && (
                                        <button className="absolute top-2 right-3 text-black">
                                            <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                {icon}
                                            </svg>
                                        </button>
                                    )}
                                    <img src={product.image} alt={product.label} className="rounded-lg h-full w-full object-cover" />
                                    <button className="absolute bottom-4 right-4 bg-black text-white rounded-full py-2 px-4">+</button>
                                </div>
                                <p className="my-2 font-sans font-semibold text-base leading-5 tracking-tighter">{product.label}</p>
                                <p>{product.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductSlider;
