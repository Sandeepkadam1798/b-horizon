"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Aboutus from "../../public/Images/Aboutus.png"

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  const processSteps = ["Planning", "Research", "Optimizing", "Results"];

  return (
    <section className=" mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-1 justify-center items-center">
        {/* Left Column - Image */}
        <motion.div 
          className="relative overflow-hidden rounded-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={Aboutus}
              alt="Professional IT consultant"
              width={400}
              height={600}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl font-bold"
            style={{ color: "#447ab1" }}
          >
            About us
          </motion.h1>
          
          <motion.p 
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {`STG Chennai It Services delivers end-to-end digital transformation solutions and technology services, ranging from ideation to designing and from development to deployment. Since a decade we have been serving the widest array of business niche. STG Chennai It Services is an agile studio that offers the most customized solutions across the digital value chain. We are highly proficient in Artificial Intelligence, Chatbots, Mobile Applications, AR/VR, IOT, Web Apps, Blockchain and more. Whether you are a start-up or well-established organization willing to up-scale your business with an enthralling business app, STG Chennai It Services is the right technology partner for you. We offer unmatched services capable of giving a cutthroat competition to the existing market with a revolutionary technological change.`}
          </motion.p>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              We divide our working process into 4 ways
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {processSteps.map((item, index) => (
                <motion.div 
                  key={item} 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-[#447ab1] flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.button 
            className="px-6 py-2 rounded text-white transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#447ab1" }}
            whileHover={{ scale: 1.05, backgroundColor: "#3a699f" }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            View more info
            <motion.span
              className="inline-block ml-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
