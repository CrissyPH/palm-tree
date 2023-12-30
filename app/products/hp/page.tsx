import React from 'react';
import ProductCard from '@/components/Product-card';

const HPProductList: React.FC = () => {
  // Sample list of products
  const products = [
    // HP Laptops
    {
      productName: 'HP Spectre x360',
      productType: 'HP Spectre x360 2-in-1 Laptop 13.5, Windows 11 Home, 13.5", touch screen, Intel® Core™ i7, 16GB RAM, 1TB SSD',
      productImage: '/HP Spectre x360.png',
    },
    {
      productName: 'HP Envy 16',
      productType: 'Windows 11 HomeLatest Intel® Core™ processors16.1-inch; 16:10 aspect ratio displayUp to 9:45 hours battery life',
      productImage: '/HPENVY16.png',
    },
    {
      productName: 'HP Pavilion 15',
      productType: 'HP Pavilion Laptop 15-eg3097nr, Windows 11 Home, 15.6", Intel® Core™ i7, 16GB RAM, 512GB SSD, FHD, Natural silver',
      productImage: '/HP Pavilion 15.png',
    },
    {
      productName: 'HP Omen 15',
      productType: 'Wndows 11 Home, Up to Intel® Core™ i7-13700HX (up to 5.0 GHz, 30 MB cache, 16 cores), p to NVIDIA® GeForce® RTX 4090',
      productImage: '/omenlaptop.png',
    },
    {
      productName: 'HP Stream 14',
      productType: 'HP Stream 14", Intel Celeron N4020, 4GB RAM, 64GB eMMC, Rose Pink, Windows 10 (S Mode), 14-cb172wm',
      productImage: '/HP Stream 14.jpg',
    },
  ];

  return (

    <>
      <div className='text-4xl px-10 py-2 font-bold'>HP LAPTOPS</div>

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

export default HPProductList;