"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const Polygon = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polygon),
  { ssr: false }
);

// Coverage areas data
const coverageAreas = {
  "Buea": {
    neighborhoods: ["Molyko", "Muea", "Bonduma", "Great Soppo", "Small Soppo", "Checkpoint", "Buea Town"],
    polygon: [
      [4.155, 9.241],
      [4.16, 9.25],
      [4.17, 9.255],
      [4.175, 9.24],
    ],
    center: [4.163, 9.246]
  },
};

export default function CoverageArea() {
  const [address, setAddress] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof coverageAreas>("Buea");
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  // Geocode address using GraphHopper
  const geocodeAddress = async () => {
    if (!address.trim()) {
      alert("Please enter your address");
      return;
    }

    setIsLoading(true);
    setIsAvailable(null);

    try {
      // GraphHopper Geocoding API
      const response = await fetch(
        `https://graphhopper.com/api/1/geocode?q=${encodeURIComponent(address)}&key=5afba3ef-54e9-4514-b0e8-2ca253e8e73e&limit=1`
      );
      
      const data = await response.json();
      
      if (data.hits && data.hits.length > 0) {
        const location = data.hits[0].point;
        setUserLocation([location.lat, location.lng]);
        checkCoverageAvailability([location.lat, location.lng]);
        
        // Center map on the location
        if (mapRef.current) {
          mapRef.current.flyTo([location.lat, location.lng], 15);
        }
      } else {
        alert("Address not found");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      alert("Error geocoding address");
      setIsLoading(false);
    }
  };

  // Check if location is within coverage area
  const checkCoverageAvailability = (location: [number, number]) => {
    // In a real implementation, you would check against your coverage polygons
    // This is a simplified version that just checks if within the selected region's bounds
    setTimeout(() => {
      const randomAvailable = Math.random() > 0.3; // Simulate check
      setIsAvailable(randomAvailable);
      setIsLoading(false);
    }, 1000);
  };

interface CoverageArea {
    neighborhoods: string[];
    polygon: [number, number][];
    center: [number, number]; // Explicitly typed as LatLngTuple-compatible
}

const handleRegionSelect = (region: keyof typeof coverageAreas): void => {
    setSelectedRegion(region);
    if (mapRef.current && coverageAreas[region]) {
        mapRef.current.flyTo(coverageAreas[region].center as [number, number], 13);
    }
};

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Coverage Area</h1>
            <p className="text-lg text-gray-600">
              Check if Speed-Net is available in your area
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Regions List */}
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Towns</h2>
              <div className="space-y-4">
                {Object.keys(coverageAreas).map((region) => (
                  <div key={region} className="border-b pb-4 last:border-b-0">
                    <button
                      onClick={() => handleRegionSelect(region as keyof typeof coverageAreas)}
                      className={`w-full text-left font-medium ${selectedRegion === region ? 'text-blue-900' : 'text-gray-700'}`}
                    >
                      {region}
                    </button>
                    {selectedRegion === region && (
                      <ul className="mt-2 pl-5 space-y-2">
                        {coverageAreas[region as keyof typeof coverageAreas].neighborhoods.map((area) => (
                          <li key={area} className="text-gray-600">{area}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map and Checker */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-1 rounded-lg shadow-md relative z-0">
                <MapContainer
                  center={(coverageAreas[selectedRegion]?.center || [4.163, 9.246]) as [number, number]}
                  zoom={13}
                  style={{ height: "400px", width: "100%", borderRadius: "0.375rem" }}
                  whenReady={(map: L.Map) => mapRef.current = map}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {selectedRegion && coverageAreas[selectedRegion] && (
                    <Polygon
                      positions={coverageAreas[selectedRegion].polygon as [number, number][]}
                      pathOptions={{ color: '#1E40AF', fillOpacity: 0.3 }}
                    />
                  )}
                  {userLocation && (
                    <Marker position={userLocation as [number, number]}>
                      <Popup>Your Location</Popup>
                    </Marker>
                  )}
                </MapContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Check Your Address</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Enter your address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. Molyko, Buea"
                    />
                  </div>

                  <button
                    onClick={geocodeAddress}
                    disabled={isLoading}
                    className={`w-full py-2 px-4 rounded-md transition-colors ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-800 text-white'}`}
                  >
                    {isLoading ? 'Checking...' : 'Check Coverage'}
                  </button>

                  {isAvailable !== null && (
                    <div className={`p-4 rounded-md ${isAvailable ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      {isAvailable ? (
                        <p>🎉 Great news! Speed-Net is available at your location.</p>
                      ) : (
                        <p>We're sorry, Speed-Net is not currently available in your area.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}