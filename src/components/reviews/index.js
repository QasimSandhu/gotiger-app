"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './style.css';

const ReviewSlider = () => {
    const reviews = [
        {
            id: 1,
            name: 'Johanna Wagner',
            date: 'Vor 2 Tagen',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            slides: [
                '/assets/images/style.jpeg',
                '/assets/images/style.jpeg',
                '/assets/images/style.jpeg',
            ]
        },
        {
            id: 1,
            name: 'Johanna Wagner',
            date: 'Vor 2 Tagen',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            slides: [
                '/assets/images/style.jpeg',
                '/assets/images/style.jpeg',
                '/assets/images/style.jpeg',
            ]
        },
        {
            id: 1,
            name: 'Johanna Wagner',
            date: 'Vor 2 Tagen',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            slides: [
                '/assets/images/style.jpeg',
                '/assets/images/style.jpeg',
                '/assets/images/style.jpeg',
            ]
        },
        {
            id: 1,
            name: 'Johanna Wagner',
            date: 'Vor 2 Tagen',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            slides: [
                '/assets/images/style.jpeg',
                '/assets/images/style.jpeg',
                '/assets/images/style.jpeg',
            ]
        },
    ];

    return (
        <div className="flex justify-center py-8 bg-white">
            <div className="w-[1384px] xl:w-[1384px] lg:w-[958px] md:w-[720px] sm:w-[625px] c-w-415 relative">
                <div className='w-full flex justify-between gap-5 review-grid-container'>
                    {reviews.map(review => (
                        <div key={review.id} className="w-[332px] xl:w-[332px] lg:w-[303px] sm:w-[235px] xl:h-[344px] h-[344px] lg:h-[400px] sm:h-[446px] c-w-204 c-h-438">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full">
                                    <img src="/assets/images/images.jpg" alt="Men Images" className='w-12 h-12 rounded-full' />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold font-sans text-base md:text-lg lg:text-xl">{review.name}</h2>
                                    <p className="text-gray-500 font-sans font-normal text-xs leading-4">{review.date}</p>
                                </div>
                            </div>
                            <Swiper
                                pagination={true}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {review.slides.map((slide, index) => (
                                    <SwiperSlide key={index} className='mySwipperSlider'>
                                        <div className="bg-black rounded-lg">
                                            <img src={slide} alt={'Reviews Slide'} className='rounded-lg' />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <p className="mt-4 text-gray-700 font-sans text-base font-normal leading-6">
                                {review.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;
