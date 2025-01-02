"use client";

import Image from "next/image";
import Aboutus from "../../public/Images/Aboutus.png";

export default function AboutSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section - Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute w-96 h-96 bg-blue-100 rounded-full -left-10 -top-10"></div>
          <Image
            src={Aboutus}
            alt="Person"
            width={400}
            height={450}
            className="relative z-10 rounded-lg shadow-2xl"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-[#447ab1] mb-4">
            About Us
          </h1>
          <div className="w-20 h-1 bg-[#447ab1] mx-auto lg:mx-0 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
           {`Beyond Horizon Technology Solutions is an Emirati-founded company committed to delivering cutting-edge, reliable, and scalable technology solutions. Our mission is to empower businesses with innovative tools and strategies, driving growth and fostering sustainable digital transformation. With a highly skilled and diverse team, we deliver impactful solutions tailored to the unique needs of our clients across multiple industries.`}
          </p>
         
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[#447ab1] mb-4">Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
             {`To lead the industry in delivering innovative technology solutions that empower businesses to achieve their full potential in the digital era.`}
            </p>
            <h3 className="text-2xl font-semibold text-[#447ab1] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
             {`To transform challenges into opportunities through creativity, technical expertise, and collaboration, ensuring scalable and secure solutions for our clients.`}
            </p>
          </div>
          {/* <button className="mt-8 px-6 py-3 bg-[#447ab1] text-white text-sm font-medium rounded-lg shadow-lg hover:bg-blue-700">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
}
