import React from 'react';
import ProductCard from '@/components/Product-card';

const ZKtecoProductList: React.FC = () => {
  // Sample list of products
  const products = [
    // Zketeco Products
    {
      productName: 'Zketeco VF780',
      productType: 'Time and Attendance',
      productImage: '/VF780.jpg',
    },
    {
      productName: 'Zketeco VF680',
      productType: 'Time and Attendance',
      productImage: '/VF680.jpg',
    },
    {
      productName: 'Zketeco OP-200',
      productType: 'Time and Attendance',
      productImage: '/OP-200.png',
    },
    {
      productName: 'Zketeco KF160',
      productType: 'Attendance Device',
      productImage: '/KF160.png',
    },
    {
      productName: 'Zketeco VF380',
      productType: 'Time and Attendance',
      productImage: '/VF680.jpg',
    },
    {
      productName: 'Zketeco IN05 & IN05-A',
      productType: 'Fingerprint Device',
      productImage: '/Zketeco IN05 & IN05-A.png',
    },
    {
      productName: 'Zketeco U300-C',
      productType: 'Fingerprint Device',
      productImage: '/U300-C.png',
    },
    {
      productName: 'Zketeco UA760',
      productType: 'Fingerprint Device',
      productImage: '/UA760.png',
    },
  ];

  return (

    <>
      <div className='text-4xl px-10 py-2 font-bold'>ZKTeco</div>
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

export default ZKtecoProductList;