import React from 'react';

const ProductCard = ({ title, price }) => {
    return (
        <div className="p-4 border rounded-lg shadow-sm">
            <div className="bg-gray-200 h-40 mb-4"></div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{price}</p>
        </div>
    );
};

export default ProductCard;
