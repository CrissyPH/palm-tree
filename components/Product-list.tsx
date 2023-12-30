// ProductCard.tsx

import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  productName: string;
  productType: string;
  productImage: string;
  
}

const ProductList: React.FC<ProductCardProps> = ({
  productName,
  productType,
  productImage,
}) => {
  return (
    <div className="product-card bg-white p-4 rounded-md shadow-md">
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
      </div>
    </div>
  );  
};

export default ProductList;
