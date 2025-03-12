import { Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name */}
          <div className="text-lg font-semibold text-white">
            Trèsind<span className="text-primary">.</span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
            <p className="flex items-center gap-2">
              <Mail size={18} /> contact@tresind.com
            </p>
            <p className="flex items-center gap-2 mt-1">
              <MapPin size={18} /> Bangalore, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
