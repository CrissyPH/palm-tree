// components/Hero.js
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="bg-blue-900 text-white h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Our Latest Products</h1>
            <p className="text-lg md:text-xl mb-8">Explore high-quality electronics that redefine innovation.</p>
            <Link href="/products">
                <div className="cursor-pointer bg-white text-blue-900 py-2 px-4 rounded-full font-bold text-lg md:text-xl hover:bg-gray-200 transition duration-300">
                    View Products
                </div>
            </Link>
        </div>
    );
};

export default Hero;
