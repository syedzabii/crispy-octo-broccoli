// app/page.tsx
import Footer from "@/components/Footer";
import FooterMap from "@/components/FooterMap";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-20 px-4 bg-neutral">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Culinary Excellence</h2>
            <p className="mb-4 text-lg">
              Experience the art of fine dining at Trèsind, where traditional
              Indian flavors meet modern culinary techniques.
            </p>
            <p className="mb-6 text-lg">
              Our award-winning chefs craft each dish with precision and
              passion, using only the finest seasonal ingredients to create an
              unforgettable dining experience.
            </p>
            <Link
              href="/about"
              className="inline-block border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors"
            >
              Our Story
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/chef-cooking.jpg"
              alt="Chef preparing a dish"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Signature Creations</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Indulge in our chef's selection of innovative dishes that showcase
            the diverse flavors of India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Menu Item 1 */}
          <div className="bg-neutral rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/dish1.jpg"
                alt="Signature Dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">Spiced Lamb Chops</h3>
              <p className="mb-4">
                Tender lamb marinated with aromatic spices, served with mint
                chutney
              </p>
              <p className="text-primary font-semibold">₹850</p>
            </div>
          </div>

          {/* Menu Item 2 */}
          <div className="bg-neutral rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/dish2.jpg"
                alt="Signature Dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">Saffron Prawn Curry</h3>
              <p className="mb-4">
                Fresh prawns in a rich saffron-infused coconut curry
              </p>
              <p className="text-primary font-semibold">₹950</p>
            </div>
          </div>

          {/* Menu Item 3 */}
          <div className="bg-neutral rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/dish3.jpg"
                alt="Signature Dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">Truffle Ghee Roast</h3>
              <p className="mb-4">
                Signature ghee roast with shaved truffle and curry leaf powder
              </p>
              <p className="text-primary font-semibold">₹750</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="btn-primary px-8 py-3 rounded inline-block"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-neutral">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Guest Experiences
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="p-8 bg-white rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                "Trèsind offers an extraordinary culinary journey through India
                with modern interpretations that surprise and delight. Their
                attention to detail and service is impeccable."
              </p>
              <footer className="font-semibold">— Bangalore Food Guide</footer>
            </blockquote>

            <blockquote className="p-8 bg-white rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                "Every dish tells a story at Trèsind. The chef's tasting menu is
                a masterpiece of flavors and textures that must be experienced."
              </p>
              <footer className="font-semibold">— Food & Wine Magazine</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact & Reservations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Visit Us</h2>
            <p className="text-lg mb-4">
              Level 4, Inspire BKC, G Block BKC, Karavalli, Bangalore, Karnataka
              5600051
            </p>

            <div className="mb-6">
              <h3 className="text-xl mb-2">Opening Hours</h3>
              <p>Lunch: 12:00 PM - 2:30 PM (Mon-Sun)</p>
              <p>Dinner: 7:00 PM - 11:30 PM (Mon-Sun)</p>
            </div>

            <div>
              <h3 className="text-xl mb-2">Contact</h3>
              <p>Phone: +91 22 4976 4600</p>
              <p>Email: reservations@tresind.com</p>
            </div>
          </div>

          <footer className="bg-gray-900 text-white p-6">
            <div className="container mx-auto">
              <h2 className="text-lg font-semibold">Our Location</h2>
              <FooterMap />
            </div>
          </footer>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <Footer />
    </main>
  );
}
