"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Products = () => {
    const productData = [
        { id: 1, image: '/HIKVISION.jpg', name: 'Hikvision' },
        { id: 2, image: '/zkteco.png', name: 'Zkteco' },
        { id: 3, image: '/dell.png', name: 'Dell' },
        { id: 4, image: '/hp.png', name: 'HP' },
        { id: 5, image: '/acer.jpg', name: 'Acer' },
        { id: 6, image: '/turbologo.png', name: 'Turboo' },
        // Add more product data as needed
    ];

    const router = useRouter();

    const onClick = (productName: string) => {
        router.push(`/products/${productName.toLowerCase()}`);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="p-4">
                <div className="text-2xl font-bold mb-4 bg-gray-400 p-10 mx-auto">Recommend Products</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 border">
                    {productData.map((product) => (
                        <div
                            key={product.id}
                            className="relative group overflow-hidden border border-black flex items-center justify-center transition-transform duration-300 transform hover:scale-105 rounded-lg cursor-pointer"
                            onClick={() => onClick(product.name)}
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={200}
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-lg">
                                <p className="text-white font-bold text-lg">{product.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Products;
