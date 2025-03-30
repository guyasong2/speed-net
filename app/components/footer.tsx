"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/speednet_logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-blue-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand Info */}
          <div className="space-y-4">
            <Image src={logo} alt="Logo" width={150} height={0}/>
            <p className="text-white">
              Providing fast and reliable internet services to Buea and surrounding areas.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-blue-900">Home</a></li>
                <li><a href="#" className="text-white hover:text-blue-900">About Us</a></li>
                <li><a href="#" className="text-white hover:text-blue-900">Services</a></li>
                <li><a href="#" className="text-white hover:text-blue-900">Coverage</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-red">FAQs</a></li>
                <li><a href="#" className="text-white hover:text-red">Contact Us</a></li>
                <li><a href="#" className="text-white hover:text-red">Technical Support</a></li>
                <li><a href="#" className="text-white hover:text-red">Network Status</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-white">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-grow px-4 py-2 border placeholder:text-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-black cursor-pointer px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-white">
          <p>© {new Date().getFullYear()} Speed-Net. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}