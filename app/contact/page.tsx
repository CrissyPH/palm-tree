"use client"
// Import necessary libraries and components
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Define animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Contact component
const Contact = () => {
    return (
        // Flex container for main content and footer
        <div className="flex flex-col min-h-screen">
            {/* Header section */}
            <div className="flex flex-col gap-2 text-black p-10 bg-gray-400 sm:flex items-center justify-center">
                <h1 className="font-light">How can we help you?</h1>
                <p className="text-4xl font-bold">Contact us</p>
            </div>

            {/* Main content with motion animation */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 lg:p-12 flex-grow"
            >
                {/* Left side: Office address information */}
                <div className="p-4 md:p-8 flex flex-col items-center md:items-start">
                    <motion.h1
                        variants={itemVariants}
                        className="text-2xl md:text-4xl font-bold mb-4"
                    >
                        OUR OFFICE ADDRESS
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-lg mb-4">
                        <strong>Palmtree Electronic Trading</strong>
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg mb-4">
                        <strong>Office Address:</strong> Unit 2C Velasco Farm Bldg. Severina Avenue, Brgy. Marcelo Green, Parañaque City
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg mb-4">
                        <strong>Telephone No.:</strong> Tel/Fax 02-7006-0942
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg mb-4">
                        <strong>Mobile No.:</strong> 0916-557-5058
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg mb-4">
                        <strong>Email Address:</strong> gelpalmtree@gmail.com
                    </motion.p>
                </div>
                {/* Right side: Image */}
                <motion.div
                    variants={itemVariants}
                    className="p-4 md:p-8 flex justify-center md:justify-end"
                >
                    {/* Responsive image with rounded corners */}
                    <div className="rounded-full overflow-hidden">
                        <Image
                            src="/contact.jpg"
                            alt="Contact Image"
                            width={800}
                            height={600}
                            layout="responsive"
                        />
                    </div>
                </motion.div>
            </motion.div>
            {/* Footer will be pushed to the bottom */}
            <div className="bg-gray-500 text-white p-4">
                {/* Footer content */}
            </div>
        </div>
    );
};

export default Contact;
