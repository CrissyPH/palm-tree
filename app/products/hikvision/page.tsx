"use client"


import React from 'react';
import ProductCard from '@/components/Product-card';

const HikvisionProductList: React.FC = () => {
  // Sample list of products
  const products = [
    {
      productName: 'Hikvision DS-2CD1A43G0-IZU',
      productType: 'CCTV Camera',
      productImage: '/S-2CD1A43G0-IZU.png',
    },
    {
      productName: 'Hikvision NVR Pro Series',
      productType: 'Network Video Recorder',
      productImage: '/nvrpro.jpg',
    },
    {
      productName: 'Hikvision Bullet Camera 4K',
      productType: 'CCTV Camera',
      productImage: '/4kcamera.jpg',
    },
    {
      productName: 'Hikvision PTZ Camera Outdoor',
      productType: 'CCTV Camera',
      productImage: '/ptzcamera.png',
    },
    {
      productName: 'Hikvision DVR Turbo HD',
      productType: 'Digital Video Recorder',
      productImage: '/turbo.png',
    },
    {
      productName: 'iDS-7204HQHI-M1/FA',
      productType: 'Network Switch',
      productImage: '/iDS-7204HQHI-M1.png',
    },
    {
      productName: 'Hikvision DS-2CD2047G2H-LIU/SL',
      productType: 'CCTV Camera',
      productImage: '/DS-2CD2047G2H-LIU.png',
    },
    {
      productName: 'Hikvision DS-2CD2T47G2H-LISU/SL',
      productType: 'CCTV Camera',
      productImage: '/DS-2CD2T47G2H-LISU.png',
    },
    {
      productName: 'Hikvision DS-7616NI-K1',
      productType: 'Network Video Recorders',
      productImage: '/DS-7616NI-K1.png',
    },
    {
      productName: 'Hikvision DS-7608NXI-K1/8P',
      productType: 'Network Video Recorders',
      productImage: '/DS-7608NXI-K1-8P.png',
    },
    {
        productName: 'Hikvision DS-7708NXI-K4/8P',
        productType: 'Network Video Recorders',
        productImage: '/DS-7708NXI-K4-8P.png',
      },
      {
        productName: 'Hikvision DS-7616NI-K2/16P',
        productType: 'Network Video Recorders',
        productImage: '/DS-7616NI-K2-16P.png',
      },
  ];
  

  

  return (
    <>
    <div className='text-4xl px-10 py-2 font-bold'>HIKVISIONS</div>
    
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