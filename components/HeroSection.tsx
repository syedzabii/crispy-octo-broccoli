"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/restaurant-interior.jpg",
  "/images/restaurant-interior-2.jpg",
  "/images/restaurant-interior-3.jpg",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Hero Image ${index + 1}`}
            fill
            priority
            className={`object-cover brightness-75 absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImage === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <Image
          src="/images/logo.jpg"
          alt="Trèsind Logo"
          width={150}
          height={150}
          className="mb-8"
        />
        <h1 className="text-5xl md:text-7xl mb-4">Trèsind Bangalore</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          A culinary journey through modern Indian cuisine
        </p>
        <Link
          href="/reservation"
          className="btn-primary px-8 py-3 rounded text-lg"
        >
          Reserve Your Table
        </Link>
      </div>
    </section>
  );
}
