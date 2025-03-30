"use client";

import React from "react";
import { Zap, LifeBuoy, Shield } from "lucide-react";

export default function Advantages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-sm font-bold text-blue-900 mb-2">OUR ADVANTAGES</h2>
          <h3 className="text-2xl font-semibold text-black mb-2">Why Leading Businesses Choose Us</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience enterprise-grade connectivity solutions backed by cutting-edge infrastructure and dedicated support.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Advantage 1 - Ultra-Fast Speeds */}
          <div className="bg-white p-8 rounded-md shadow-sm transition-shadow duration-300">
            <div className="bg-blue-900 px-3 py-2 mb-2 w-[20%] rounded-md text-white"><Zap size={34}/></div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Ultra-Fast Speeds</h4>
            <p className="text-gray-600">
              Experience lightning-fast internet with speeds up to 100Mbps, perfect for demanding applications and seamless connectivity.
            </p>
          </div>

          {/* Advantage 2 - 24/7 Support */}
          <div className="bg-white p-8 rounded-md shadow-sm transition-shadow duration-300">
            <div className="bg-blue-900 px-3 py-2 mb-2 w-[20%] rounded-md text-white"><LifeBuoy size={34}/></div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h4>
            <p className="text-gray-600">
              Our technical team is always available to assist you with any questions or technical issues.
            </p>
          </div>

          {/* Advantage 3 - Secure Network */}
          <div className="bg-white p-8 rounded-md shadow-sm transition-shadow duration-300">
            <div className="bg-blue-900 px-3 py-2 mb-2 w-[20%] rounded-md text-white"><Shield size={34}/></div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Secure Network</h4>
            <p className="text-gray-600">
              Advanced security features to protect your online activities and ensure a safe browsing experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}