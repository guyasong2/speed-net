import Image from "next/image";
import graphic from '@/public/isp.png';

export default function Hero() {
  return (
    <header className="bg-blue-50 p-4 md:p-8">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="text-center md:text-left">
          <span className="text-sm bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
            ★ Trusted by 1000+ customers
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Enterprise-Grade Internet Solutions
          </h1>
          <p className="text-gray-600 mt-3">
            Powering Buea's digital future with ultra-fast fiber connectivity
            and unmatched reliability for businesses and homes.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="cursor-pointer bg-blue-900 text-white px-6 py-2 rounded-md">
              Start Now
            </button>
            <button className="cursor-pointer bg-white border border-blue-900 text-blue-900 px-6 py-2 rounded-md hover:bg-gray-100">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 md:gap-1 md:grid-cols-3">
        <div className="text-gray-700">
          <h2 className="text-xl font-bold">99.9%</h2>
          <p>Network Uptime</p>
        </div>
        <div className="text-gray-700">
          <h2 className="text-xl font-bold">100+</h2>
          <p>Business Clients</p>
        </div>
        <div className="text-gray-700">
          <h2 className="text-xl font-bold">24/7</h2>
          <p>Expert Support</p>
        </div>
      </div>
        </div>
        <div className="mt-6 md:mt-0">
          <Image src={graphic} alt="Network graphic" width={900} height={960}/>
        </div>
      </div>
    </header>
  );
}
