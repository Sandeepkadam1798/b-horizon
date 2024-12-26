


import { Button } from "@/components/ui/button"
import ITApplicationDevelopments from  "../../../public/Images/ITApplicationDevelopment.png"
import Link from "next/link"
import Image from "next/image"
import IndustriesGrid from "./IndustriesGrid";
import WhyYouNeedUs from "./WhyYouNeedUs";
import BusinessImpact from "./BusinessImpact";

export default function ITApplicationDevelopment() {

    const models = [
        {
          icon: "💻", // Custom software and application design
          title: "Custom software and application design",
        },
        {
          icon: "🔒", // Scalable, secure architectures
          title: "Scalable, secure architectures",
        },
        {
          icon: "🔗", // Seamless system integration
          title: "Seamless system integration",
        },
      ];

      const steps = [
        {
          title: "Agile Methodology for Flexibility",
          description:
            "We follow an adaptive, iterative process that ensures flexibility and responsiveness. Agile allows us to prioritize your evolving requirements while maintaining a strong focus on deliverables.",
          icon: "🔄", // Symbolizing iteration and agility
        },
        {
          title: "Cloud, AI, and Database Technologies for Efficiency",
          description:
            "Leveraging cutting-edge cloud solutions, artificial intelligence, and robust database frameworks, we ensure scalable, secure, and high-performing applications tailored to your business needs.",
          icon: "☁️", // Representing cloud technologies
        },
        {
          title: "Close Collaboration with Your Team Throughout the Lifecycle",
          description:
            "We engage closely with your team from planning to deployment, ensuring seamless communication and transparency. Your feedback drives every step of the lifecycle for optimal results.",
          icon: "🤝", // Symbolizing teamwork and collaboration
        },
      ];
      

      

      
  return (

    <>

<div className="bg-gradient-to-r from-[#1a0b2e]/90 to-purple-900 text-white py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 lg:px-20">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl font-bold">
          IT Application Development
          </h1>
          <p className="text-sm">
          {`  At SoluLab - a renowned blockchain development company, we empower
            enterprises with personalized blockchain development services.
            Position your business for the future with robust and secure
            blockchain implementations crafted by our industry-leading experts.`}
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-6 rounded-md text-lg">
            Consult Our Experts
          </button>
        </div>

        {/* Right Illustration */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={ITApplicationDevelopments}
            alt="Blockchain Illustration"
            className="w-3/4 lg:w-full"
          />
        </div>
      </div>
    </div>

<div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-6">What Services We Offered</h2>
        <div className="w-12 mx-auto mb-10 border-b-2 border-gray-400"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="bg-gray-200 rounded-full p-4 w-20 h-20 flex items-center justify-center text-3xl text-black">
                {model.icon}
              </div>
              {/* Title */}
              <p className="mt-4 text-gray-700">{model.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


    <h2 className="text-3xl font-bold text-center mt-10">
    {/* Our Approach <span className="border-b-4 border-[#447ab1] pb-1">(How We Do It)</span> */}
    Our Approach 
      </h2>

      <div className="p-10  flex flex-col items-center">


      {steps.map((step, index) => (
        <div
          key={index}
          className="group relative bg-white shadow-md rounded-lg p-6 w-full max-w-xl mb-6 border border-gray-200 hover:border-red-500 hover:bg-red-50 transition duration-300"
        >
          <div className="absolute -left-4 top-4 text-3xl text-red-500">
            {step.icon}
          </div>
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-red-500">
            {step.title}
          </h2>
          <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-800">
            {step.description}
          </p>
        </div>
      ))}
    </div>

    <IndustriesGrid/>
    <WhyYouNeedUs/>
    <BusinessImpact/>
    
    </>

  )
}

