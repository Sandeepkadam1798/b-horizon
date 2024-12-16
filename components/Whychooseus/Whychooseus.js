'use client'

import { motion } from "framer-motion"
import { Check } from 'lucide-react'
import Aboutus from "../../public/Images/Aboutus.png"
import Image from "next/image"

export default function Whychooseus() {
  const features = [
    { id: 1, text: "Transparent" },
    { id: 2, text: "Proactive" },
    { id: 3, text: "Affordable" },
    { id: 4, text: "Flexible" },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-blue-600 font-medium">Why choose us</span>
            <h2 className="text-4xl font-bold text-gray-900">
              Client likes seeing our work skills
            </h2>
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex items-center space-x-3 group"
              >
                <div className="bg-blue-100 rounded-full p-1 group-hover:bg-blue-200 transition-colors">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content with Image & Updated Blob Shape */}
        <div className="relative w-full h-[500px] flex justify-center items-center">
          {/* Blob Shape */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-[90%] h-[90%] bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200"
            style={{
              clipPath:
                "path('M156.5,0C202.8,0,252.6,29.2,292.5,65.7C329.3,98.6,348.5,144.3,345.3,192.6C342,240.9,316.5,290.6,272.3,321.5C228.1,352.4,165.4,364.6,112.3,343.6C59.3,322.6,15.9,268.3,5.5,213.5C-5,158.7,17.4,103.4,47.4,65.7C77.5,28,115.2,0,156.5,0Z')",
            }}
          />

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg  w-4/5 object-cover relative z-10"
          >
            <Image
              src={Aboutus}
              alt="Business Meeting"
              width={250}
              height={250}
              className="rounded-lg object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
