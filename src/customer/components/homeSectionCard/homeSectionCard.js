import React, { useState, useEffect } from 'react';

const HomeSectionCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                // Limit the products to the first 5 items
                const limitedProducts = data.slice(0, 5);
                setProducts(limitedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const shortenDescription = (description) => {
        const dotIndex = description.indexOf('.');
        return dotIndex !== -1 ? description.substring(0, dotIndex + 1) : description;
    };

    return (
        <div className="flex flex-wrap justify-center">
            {products.map(product => (
                <div key={product.id} className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 my-3">
                    <div className="h-[13rem] w-[10rem]">
                        <img className='object-cover object-top w-full h-full' src={product.image} alt={product.title} />
                    </div>
                    <div className='p-4'>
                        <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
                        <p className='mt-2 text-sm text-gray-500'>{shortenDescription(product.description)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomeSectionCard;
