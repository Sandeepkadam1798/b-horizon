import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Raju",
    position: "Senior Engineer",
    message:
      "We are very satisfied and happy to have found STG Chennai IT Services as our development partner. They are true professionals.",
  },
  {
    name: "Rohith",
    position: "Designer",
    message:
      "I am very impressed by the quality of the team working on our project and the team displays a real understanding of our issues.",
  },
  {
    name: "Anjali",
    position: "Project Manager",
    message:
      "The team was extremely helpful and professional throughout the entire project timeline.",
  },
  {
    name: "Vikram",
    position: "CEO",
    message:
      "Outstanding work by the team. They truly delivered beyond expectations and ensured our goals were met.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const totalPairs = Math.ceil(testimonials.length / 2);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPairs);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPairs]);

  const nextPair = () => {
    setCurrent((prev) => (prev + 1) % totalPairs);
  };

  const prevPair = () => {
    setCurrent((prev) => (prev - 1 + totalPairs) % totalPairs);
  };

  const getCurrentPair = () => {
    const start = current * 2;
    return testimonials.slice(start, start + 2);
  };

  return (
    <div className="w-full bg-white py-12 px-4 flex flex-col items-center overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
        Testimonials
      </h2>

      {/* Testimonial Container */}
      <div className="relative w-full lg:w-3/4 flex items-center justify-between">
        {/* Left Button - Positioned Outside */}
        <button
          onClick={prevPair}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-blue-100 rounded-full p-3 hover:bg-blue-200 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <AnimatePresence mode="wait">
            {getCurrentPair().map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-lg p-6 relative text-center"
              >
                {/* Quote */}
                <blockquote className="text-gray-600 italic mb-4">
                  <span className="text-blue-400 text-4xl leading-none mr-1">
                    “
                  </span>
                  {testimonial.message}
                  <span className="text-blue-400 text-4xl leading-none ml-1">
                    ”
                  </span>
                </blockquote>

                {/* User Details */}
                <div className="flex items-center justify-center mt-4">
                  <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <div className="text-gray-400 text-2xl">👤</div>
                  </div>
                  <div>
                    <p className="text-blue-600 font-semibold text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Button - Positioned Outside */}
        <button
          onClick={nextPair}
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-blue-100 rounded-full p-3 hover:bg-blue-200 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex mt-8 gap-2">
        {Array.from({ length: totalPairs }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
