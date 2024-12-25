"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardBody, Input } from "@nextui-org/react";
import { Select, SelectItem, Textarea, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import { FcBusinessman, FcAddressBook, FcCallback, FcComments } from "react-icons/fc";



const ContactdetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    serviceRequired: "",
    message: "",
  });

  const services = [
    { key: "IT Application Development", label: "IT Application Development" },
    { key: "AI, Machine Learning, and Data Science", label: "AI, Machine Learning, and Data Science" },
    { key: "Geospatial Development and GeoAI", label: "Geospatial Development and GeoAI" },
    { key: "IT-Enabled Services (ITES)", label: "IT-Enabled Services (ITES)" },
    { key: "Database Development and Custom Report Generation", label: "Database Development and Custom Report Generation" },
    { key: "Other", label: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (selectedKeys) => {
    const selectedKey = Array.from(selectedKeys)[0];
    const selectedLabel = services.find(
      (service) => service.key === selectedKey
    ).label;
    setFormData({
      ...formData,
      serviceRequired: selectedLabel,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.serviceRequired
    ) {
      toast.error("Please fill out all required fields");
      return;
    }

    const sendForm = async () => {
      const response = await fetch("/api/Contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        serviceRequired: "",
        message: "",
      });
    };

    toast.promise(sendForm(), {
      loading: "Sending message...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    });
  };

  const locationname = "kakatiya hills, pragati nagar,Kukatpally-500090";
  const location = `https://maps.google.com/maps?q=${locationname}&t=k&z=10&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <div className="flex flex-col gap-4 justify-start items-start px-3 py-1 w-full ring-1 ring-gray-200 p-4 rounded-md ">
        <div className="flex flex-col w-full justify-start items-start p-2 py-4 gap-4">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 place-content-center justify-between items-start">
              <Input
                type="text"
                name="firstName"
                variant="bordered"
                labelPlacement="outside"
                label="First Name"

                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="First Name"
                // startContent={
                //   <FcBusinessman className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                label="Last Name"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                labelPlacement="outside"

                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                // startContent={
                //   <FcBusinessman className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
              />
              <Input
                type="text"
                name="mobileNumber"
                variant="bordered"
                label="Mobile Number"
                radius="sm"
                labelPlacement="outside"

                className="w-full rounded-none"
                size="lg"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                // startContent={
                //   <FcCallback className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
              />
              <Input
                type="text"
                name="email"
                variant="bordered"
                label="Email"
                labelPlacement="outside"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                // startContent={
                //   <FcAddressBook className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
              />
            </div>
            <div className="w-full mt-12">
              <Select
                name="serviceRequired"
                label="inquiry"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Select inquiry type"
                size="lg"
                radius="sm"
                className="w-full mx-auto mt-4"
                selectedKeys={new Set([formData.serviceRequired])}
                onSelectionChange={handleServiceChange}
              >
                {services.map((service) => (
                  <SelectItem key={service.key}>{service.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="w-full mt-4">
              <Textarea
                name="message"
                variant="bordered"
                placeholder="Your message (Optional)"
                label="Message"
                labelPlacement="outside"
                className="w-full"
                value={formData.message}
                onChange={handleChange}
                // startContent={
                //   <FcComments className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
              />
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <Button
                type="submit"
                className="w-60 rounded-full bg-[#132b57] text-white text-center"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ContactdetailsForm;
