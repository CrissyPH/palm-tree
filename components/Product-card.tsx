"use client"

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  productName: string;
  productType: string;
  productImage: string;
  
}

const ProductCard: React.FC<ProductCardProps> = ({
  
  productName,
  productType,
  productImage,
}) => {

  const router = useRouter()

  const onClick = () => {
    router.push('/contact');
};


  return (
    <div className="product-card bg-white p-4 rounded-md shadow-md border border-black">
      <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md flex items-center justify-center">
        <Image
          src={productImage}
          alt={productName}
          width={200}
          height={100}
        />
      </div>
      <div className="product-details">
        <h3 className="product-name text-lg font-semibold mb-2">{productName}</h3>
        <p className="product-type text-gray-600 mb-2">{productType}</p>
        <Button onClick={onClick} className='bg-red-700 hover:bg-red-600 hover:text-white font-semibold'>Learn More</Button>
      </div>
    </div>
  );
};

export default ProductCard;
