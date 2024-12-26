"use client";

import { Card } from "@/components/ui/card";
import { Truck, Heart, GraduationCap, Building2, Store, Coins, Play, Scale, Landmark, Fuel } from "lucide-react";
import { useState } from "react";

export default function IndustriesGrid() {
  const [activeCard, setActiveCard] = useState(null);

  const industries = [
    { icon: Truck, name: "Manufacturing" },
    { icon: Heart, name: "Healthcare" },
 
    { icon: Building2, name: "Public Sector" },
   
    { icon: Coins, name: "Finance and Banking" },

    { icon: Landmark, name: "Government" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Industries <span className="border-b-4 border-[#447ab1] pb-1">We Serve</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {industries.map((industry, index) => (
          <Card
            key={index}
            className={`flex flex-col items-center justify-center p-6 transition-all duration-300 cursor-pointer ${
              activeCard === index
                ? "bg-[#447ab1] text-white transform -translate-y-1 shadow-lg"
                : "hover:border-[#447ab1] hover:shadow-md"
            }`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <industry.icon
              className={`w-12 h-12 mb-4 transition-colors duration-300 ${
                activeCard === index ? "text-white" : "text-[#447ab1]"
              }`}
            />
            <h3 className="text-center font-medium">{industry.name}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
}
