"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BriefHistory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 lg:p-12 min-h-screen"
    >
      {/* Left Side: Content */}
      <div className="p-4 md:p-8 flex flex-col items-center md:items-start">
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-4xl font-bold mb-4 text-blue-600"
        >
          Brief History
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg mb-6">
          Palmtree Electronic Trading is a culmination of extensive experience, preparation, passion, and dedication. With over a decade of expertise in sales, Palmtrees founder served as a sales/system engineer and project engineer specializing in Fire Alarm System, Building Automation, and Security System. Now, Palmtree stands as a promising provider of these systems, ensuring guaranteed quality installations.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg mb-6">
          Registered on January 07, 2013, with the Department of Trade and Industry, and on September 27, 2005, with the Bureau of Internal Revenue, Palmtree continues to deliver unparalleled quality workmanship.
        </motion.p>

        {/* OUR CAPABILITIES Section */}
        <h1 className="text-3xl font-bold mb-4 text-blue-600">OUR CAPABILITIES</h1>
        <ul className="text-lg mb-6">
          <li>We supply, deliver, install, test & commission the following:</li>
          <ul className="list-disc pl-6">
            <li>Fire Detection and Alarm, Surveillance & Security System</li>
            <li>Building Automation System</li>
            <li>Auxiliary System (Telephone Cabling, Audio/Video Phone, Car Ramp, Gate Barrier & CATV & Access Control)</li>
          </ul>
          <li>We do Build & Design</li>
          <li>We do piping works & wire pulling</li>
          <li>We provide After Sales support (Monthly/Quarterly Preventive Maintenance)</li>
        </ul>
      </div>

      {/* Right Side: Image */}
      <motion.div
        variants={itemVariants}
        className="p-4 md:p-8 flex justify-center md:justify-end"
      >
        <motion.div variants={itemVariants} className="relative w-64 h-64 md:w-80 md:h-80">
          <Image src="/about-us.jpg" alt="About Us Image" height={600} width={600} className=" rounded-full"/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BriefHistory;