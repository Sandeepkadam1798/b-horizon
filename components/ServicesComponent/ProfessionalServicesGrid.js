"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BarChart2, Smartphone, ShoppingBag, Globe, FlaskRoundIcon as Flask } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "HR and Payroll Management",
    description: "Streamline your workforce operations with our advanced HR and payroll solutions, designed for modern businesses.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BarChart2,
    title: "CRM Development",
    description: "Elevate customer relationships with our bespoke CRM solutions, tailored to your unique business needs.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Transform your ideas into powerful, user-friendly mobile applications for iOS and Android platforms.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description: "Build and scale your online presence with our cutting-edge e-commerce platforms and strategies.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Globe,
    title: "Enterprise Portal Development",
    description: "Unify your business processes with our secure and scalable enterprise portal solutions.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Flask,
    title: "Quality Assurance",
    description: "Ensure flawless performance with our comprehensive software testing and quality assurance services.",
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function ProfessionalServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 ">
      <div className=" mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">What we do</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
          What services we offer
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Empowering businesses with cutting-edge technology and unparalleled expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl bg-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="px-6 py-8">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${service.color} text-white mb-5`}>
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center p-6">
                      <service.icon className="h-12 w-12 text-white mx-auto mb-4" aria-hidden="true" />
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-white mb-4">{service.description}</p>
                      <button
                        className="px-4 py-2 bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Explore Service
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
