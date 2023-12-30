

"use client"


import React from 'react';
import ProductCard from '@/components/Product-card';

const HikvisionProductList: React.FC = () => {
    // Sample list of products
    const products = [
        {
            productName: 'Office Security Entrance Swing Gate Turnstile Barrier Gate RFID Card Reader',
            productType: 'Barrier Gate',
            productImage: '/turbo1.png',
        },
        {
            productName: 'SUS Biometric High Speed Gate Turnstile Security QR Code ReaderAC 100-240V Servo Motor',
            productType: 'Barrier Gate',
            productImage: '/turbo1.png',
        },
        {
            productName: 'Compact Design Speed Gate Turnstile Office Building AC100-240V Pedestrian Swing Gate',
            productType: 'Barrier Gate',
            productImage: '/turbo3.png',
        },
        {
            productName: 'Fast Access Control Speed Gate Turnstile Swing Barrier Gate With LED Strip Bar',
            productType: 'Barrier Gate',
            productImage: '/turbo4.png',
        },
        {
            productName: 'Turboo R3211 Swing Gate Biometric Security System Brushless Servo Motor 100w',
            productType: 'Barrier Gate',
            productImage: '/turbo1.png',
        },

    ];




    return (

        <>
            <div className='text-4xl px-10 py-2 font-bold'>TURBOO</div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        productName={product.productName}
                        productType={product.productType}
                        productImage={product.productImage}

                    />
                ))}
            </div>
        </>
    );
};
export default HikvisionProductList;