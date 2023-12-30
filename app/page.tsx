"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ProductList from '@/components/Product-list';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

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
];

const Home = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/products');
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="border h-[500px] bg-neutral-100 relative flex flex-col items-center justify-end md:flex sm:grid-cols-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={'/22422.jpg'}
          alt="laptop"
          fill
          className="object-cover w-full h-full opacity-50/2"
        />
        <div className="absolute inset-0 flex items-center flex-col p-4 md:p-10 space-y-4 md:space-y-10">
          <motion.h1
            className="text-bold text-white font-bold text-4xl text-center md:text-left md:grid-cols-2 sm:grid-cols-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Elevate Your Security Standards
          </motion.h1>
          <motion.p
            className="md:text-left text-2xl font-bold pt-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Advanced CCTV and barrier solutions for real-time monitoring and access control, ensuring a safer environment.
          </motion.p>
          <Link href={'/services'}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-green-700 hover:bg-green-600 font-bold text-2xl rounded-md text-white">Explore Our Services</Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* What We Do Section */}
      <motion.div
        className="flex flex-col items-center justify-center p-8 md:p-12 mb-16 border border-b-black text-white bg-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          WHAT WE DO
        </motion.h1>
        <motion.p
          className="text-center text-2xl text-neutral-200 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Palmtree Electronic Trading offers all-in-one revolutionary security solutions, specializing in Smart Identity Authentication Applications, Smart Entrance & Exit Applications, and Smart Office Applications.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {products.map((product, index) => (
          <ProductList
            key={index}
            productName={product.productName}
            productType={product.productType}
            productImage={product.productImage}
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button onClick={onClick} className="bg-green-500 hover:bg-green-400  font-semibold">View Products</Button>
        </motion.div>
      </div>
    </>
  );
};

export default Home;