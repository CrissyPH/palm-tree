import React from 'react';
import ProductCard from '@/components/Product-card';

const DellProductList: React.FC = () => {
  // Sample list of products
  const products = [
    // Dell Laptops
    {
      productName: 'Dell Inspiron 15',
      productType: 'Dell Inspiron 15 15.6" HD Non-Touch Laptop 3000 Series 3515, AMD Ryzen 5 8GB RAM/256GB SSD Win 11 - Black',
      productImage: '/inspiron15.png',
    },
    {
      productName: 'Dell XPS 13',
      productType: 'The Dell XPS 13 model we were given to review boasts an Intel Core i7-1165G7 processor',
      productImage: '/Dell XPS 13.jpg',
    },
    {
      productName: 'Dell Latitude 14',
      productType: '13th Gen Intel® Core™ i5-1335U (12 MB cache, 10 cores, 12 threads, up to 4.60 GHz Turbo)',
      productImage: '/Latitude 7440.png',
    },
    {
      productName: 'Dell Precision 5550',
      productType: 'Intel Core Processor i7-10750H,NVIDIA Quadro T1000 16GB, 2X8GB, DDR4 2933Mhz Non-ECC Memory',
      productImage: '/Dell Precision 5550.jpg',
    },
    {
      productName: 'Dell G5 Gaming Laptop',
      productType: 'This product is currently unavailable, but Dell offers similar products.',
      productImage: '/G5 15 Gaming Laptop.png',
    },
    {
      productName: 'Dell Inspiron 14 2-in-1',
      productType: '13th Generation Intel® Core™ i3-1315U, (10 MB cache, 6 cores, 8 threads, up to 4.50 GHz)',
      productImage: '/Inspiron 14 2-in-1 Laptop.png',
    },
    {
      productName: 'Dell Vostro 15',
      productType: 'Business Laptop',
      productImage: '/Vostro 15 Laptop.png',
    },
    {
      productName: 'Dell Alienware m15 R6',
      productType: 'This product is currently unavailable, but Dell offers similar products.',
      productImage: '/alienware.png',
    },
  ];

  return (
    <>
      <div className='text-4xl px-10 py-2 font-bold'>DELL LAPTOPS</div>

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

export default DellProductList;