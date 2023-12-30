"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component
import Link from "next/link";

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const servicesList = [
        "Fire Detection & Alarm System",
        "Building Management System",
        "Building Automation System (With Optional ID System Access)",
        "CCTV System",
        "Traffic Management System / Car Ramp",
        "Audio/Video Phone System",
        "Telephone & CATV System",
        "PA/BGM System",
        "Structured Cabling",
        "Door Access System",
        "Gate Barrier",
        "After Sales Support (Preventive Maintenance)",
        "PPE’s"
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 lg:p-12"
        >
            <div className="p-4 md:p-8 flex flex-col items-center md:items-start space-y-4">
                <motion.h1
                    variants={itemVariants}
                    className="text-2xl md:text-4xl font-bold mb-4"
                >
                    OUR SERVICES
                </motion.h1>
                {servicesList.map((service, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-sm md:text-lg mb-2 md:mb-4 border-b md:border-b-0 border-red-500">
                        {service}
                    </motion.p>
                ))}
                <motion.p variants={itemVariants} className="text-lg mb-4 pt-2">
                    <strong>Inquiries?</strong> Contact us Now
                </motion.p>
                <Link href={'/contact'}>
                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-400 mt-4 px-4 md:px-6 py-2 md:py-3 rounded-md text-white"
                    >
                        Contact Us
                    </motion.button>
                </Link>
            </div>
            <motion.div
                variants={itemVariants}
                className="p-4 md:p-8 flex justify-center md:justify-end"
            >
                <Image src="/service.jpg" alt="Your Image Alt Text" width={800} height={600} className="rounded-full" />
            </motion.div>

        </motion.div>
    );
};

export default Services;
