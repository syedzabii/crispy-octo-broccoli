"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Ensure this is set in your .env file

const containerStyle = {
  width: "100%",
  height: "250px", // Adjust height as needed
};

const center = {
  lat: 12.9716, // Bangalore Latitude
  lng: 77.5946, // Bangalore Longitude
};

// Famous restaurant location: Karavalli, Bangalore
const restaurantLocation = {
  lat: 12.971891, // Karavalli's Latitude
  lng: 77.597022, // Karavalli's Longitude
};

const FooterMap = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Marker for Karavalli */}
        <Marker position={restaurantLocation} title="Karavalli - Bangalore" />
      </GoogleMap>
    </LoadScript>
  );
};

export default FooterMap;
