
"use client";

import React, { useState } from "react";
import { Phone,  MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface ChangeEvent {
    target: {
        name: string;
        value: string;
    };
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
        ...prev,
        [name]: value
    }));
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions? Our team is here to help you get started with BueaNet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h3>
                  <p className="text-gray-600 flex flex-row gap-2 items-center"><MapPin size={19} className="text-blue-900"/>123 Molyko Street, Buea, Cameroon</p>
                  <p className="text-gray-600 flex flex-row gap-2 items-center"><Phone size={19} className="text-blue-900"/>+237 123 456 789</p>
                  <p className="text-gray-600 flex flex-row gap-2 items-center"><Mail size={19} className="text-blue-900"/>info@bueanet.com</p>
                </div>

                <div className="mt-4">
                    <h2 className="font-semibold text-xl">Follow Us</h2>
                    <div className="flex mt-2">
                        <a href="#" className="text-blue-900 hover:text-blue-700"><Facebook/></a>
                        <a href="#" className="text-blue-900 hover:text-blue-700 ml-4"><Twitter/></a>
                        <a href="#" className="text-blue-900 hover:text-blue-700 ml-4"><Instagram/></a>
                    </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}