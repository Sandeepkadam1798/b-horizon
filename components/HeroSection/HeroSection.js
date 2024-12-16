import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export function HeroSection({ active, title, description }) {
  return (
    <section className="relative overflow-hidden min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl font-bold text-[#447ab1] mb-6">
                  {title}
                </h1>
                <p className="text-gray-600 mb-8 text-lg">
                  {description}
                </p>
              </motion.div>
            </AnimatePresence>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
            
            <div className="flex items-center gap-4 mt-12">
              {[0, 1, 2].map((index) => (
                <React.Fragment key={index}>
                  <span className={`text-2xl font-semibold ${active === index ? 'text-blue-600' : 'text-gray-400'}`}>
                    0{index + 1}
                  </span>
                  {index < 2 && <div className={`h-0.5 w-12 ${active === index ? 'bg-blue-600' : 'bg-gray-300'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Team collaboration"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
