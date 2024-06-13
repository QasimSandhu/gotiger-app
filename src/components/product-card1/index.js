'use client'
import { useState } from 'react';

const ProductCard1 = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Implement the logic to add the item to the cart
        alert(`Added ${quantity} items to the cart`);
    };

    const handleDecreaseQuantity = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="w-full bg-white border-t p-4">
            <div className='flex justify-center items-center'>
                <div className="flex flex-col md:flex-row w-full max-w-[1250px] px-4 lg:px-8 gap-x-6">
                    <div className="w-full md:w-1/2 rounded-xl bg-gray-200 my-4 flex items-center justify-center">
                        <img src="/assets/images/grabowska.jpg" alt="grabowska" className='rounded-xl' />
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl font-bold font-sans font-medium text-gray-900 leading-tight tracking-tight">Product label</h1>
                            <p className="text-lg text-gray-600 mt-2">5,20 €</p>
                            <p className="mt-4 text-gray-700 font-sans font-medium text-base leading-6">
                                Flowering plant of the nightshade family (Solanaceae), cultivated extensively for its edible fruits. Labelled as a vegetable for nutritional purposes, tomatoes are a good source of vitamin C and the phytochemical lycopene.
                            </p>

                            <div className="mt-4">
                                <div className="flex items-center mt-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                    <div className="ml-2">
                                        <p className="font-semibold font-sans text-xs text-gray-700 leading-tight">Recommended by</p>
                                        <p className="font-semibold">Lars Sabelfeld <span className='ps-1 text-gray-500 text-sm'>GoTiger Mitarbeiter</span></p>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                                <h2 id="accordion-flush-heading-1">
                                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1" expanded>
                                        <span className='font-semibold'>Product description</span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-1" className="border-b border-gray-200 dark:border-gray-700">
                                    <div className="py-5">
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <h2 id="accordion-flush-heading-1">
                                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1" expanded>
                                        <span className='font-semibold'>Product details</span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className='bg-gray-200 rounded-full p-2 flex items-center justify-between gap-x-4'>
                                <button onClick={handleDecreaseQuantity} className="w-[36px] h-[36px] bg-black text-white rounded-full focus:outline-none">-</button>
                                <input type="text" className="w-6 h-6 text-center border-t border-b border-gray-200 focus:outline-none font-inter font-semibold text-base leading-6 tracking-tight text-center rounded-full" value={quantity} readOnly />
                                <button onClick={handleIncreaseQuantity} className="w-[36px] h-[36px] bg-black text-white rounded-full focus:outline-none">+</button>
                            </div>
                            <button onClick={handleAddToCart} className="ml-4 bg-red-500 text-white py-2 px-4 rounded-full w-[380px] h-[56px]">Add to cart 10,00 €</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard1;
