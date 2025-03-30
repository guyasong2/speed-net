"use client";

import React from "react";

export default function PricingPlans() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect internet package that suits your needs.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-black cursor-pointer">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Basic</h3>
              <p className="text-2xl font-bold text-blue-900 mt-2">15,000 <span className="text-sm font-normal">/month</span></p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>20 Mbps Speed</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited Data</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic Support</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 border bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Standard Plan - Popular */}
          <div className="border-2 border-blue-900 rounded-lg p-6 transform hover:scale-[1.02] transition-transform relative">
            <div className="absolute top-0 right-0 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Popular
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Standard</h3>
              <p className="text-2xl font-bold text-blue-900 mt-2">25,000 <span className="text-sm font-normal">/month</span></p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>50 Mbps Speed</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited Data</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 Support</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Installation</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Premium</h3>
              <p className="text-2xl font-bold text-blue-900 mt-2">40,000 <span className="text-sm font-normal">/month</span></p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100 Mbps Speed</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited Data</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority Support</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Installation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Static IP</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 border bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}