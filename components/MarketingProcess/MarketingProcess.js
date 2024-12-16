import React from 'react';

export function MarketingProcess() {
  const steps = [
    {
      title: "Ideate",
      description: "Turn your idea from concept to MVP",
    },
    {
      title: "Design",
      description: "Sketch out the product to align the user needs",
    },
    {
      title: "Develop",
      description: "Convert the designs into a live application",
    },
    {
      title: "Deploy",
      description: "Launching the application to the market",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-[#447ab1] tracking-wide uppercase">
          Our marketing process
        </h2>
        <h1 className="mt-2 text-4xl font-bold text-[#447ab1] sm:text-5xl">
          How we work step by step with marketing
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <h3 className="text-2xl font-bold text-[#447ab1] ">
              {step.title}
            </h3>
            <p className="text-gray-600 ">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
