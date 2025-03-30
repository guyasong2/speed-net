"use client";

import React from "react";
import { Wifi, Menu, X } from "lucide-react";
import logo from "@/public/speednet_logo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white shadow-xs sticky top-0 z-50 absolute">
        <nav className="w-[85%] md:w-[90%] mx-auto flex items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Image src={logo} alt="logo" width={150} height={0} />
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-row text-black space-x-8 text-lg">
            <Link href="/" className="hover:text-blue-900">
              Home
            </Link>
            <Link href="/" className="hover:text-blue-900">
              Services
            </Link>
            <Link href="/" className="hover:text-blue-900">
              Plans
            </Link>
            <Link href="/" className="hover:text-blue-900">
              Coverage
            </Link>
            <Link href="/" className="hover:text-blue-900">
              Contact
            </Link>
          </ul>

          <div className="hidden md:flex flex-row gap-4">
            <button
              type="button"
              className="cursor-pointer text-blue-900 px-6 py-2 text-lg rounded-md"
            >
              Login
            </button>
            <button className="cursor-pointer bg-blue-900 text-white px-4 rounded-md hover:bg-blue-800">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white text-black shadow-lg py-4 px-6 z-50">
              <ul className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="hover:text-blue-900"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="hover:text-blue-900"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="hover:text-blue-900"
                  onClick={() => setIsOpen(false)}
                >
                  Plans
                </Link>
                <Link
                  href="/"
                  className="hover:text-blue-900"
                  onClick={() => setIsOpen(false)}
                >
                  Coverage
                </Link>
                <Link
                  href="/"
                  className="hover:text-blue-900"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </ul>
              <div className="flex flex-col gap-4 mt-4">
                <button
                  type="button"
                  className="cursor-pointer text-blue-900 px-6 py-2 rounded-md"
                >
                  Login
                </button>
                <button className="cursor-pointer bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}