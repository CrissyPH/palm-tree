


import React from 'react';
import ProductCard from '@/components/Product-card';

const AcerProductList: React.FC = () => {
  // Sample list of products
  const products = [
   
    // Acer Laptops
    {
      productName: 'Acer Aspire',
      productType: 'Laptop',
      productImage: '/Aceraspire.png',
    },
    {
      productName: 'Acer Predator Helios 300',
      productType: 'Gaming Laptop',
      productImage: '/acerhelios1.jpg',
    },
    {
      productName: 'Acer Swift 3',
      productType: 'Ultrabook',
      productImage: '/AcerSwift1.png',
    },
    {
      productName: 'Acer Chromebook 14',
      productType: 'Chromebook',
      productImage: '/acerchromebook.png',
    },
    {
      productName: 'Acer Nitro 5',
      productType: 'Gaming Laptop',
      productImage: '/acernitro.png',
    },
  ];

  return (
    <>
    <div className='text-4xl px-10 py-2 font-bold'>ACER LAPTOPS</div>
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

export default AcerProductList;
