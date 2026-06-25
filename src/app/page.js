import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
// import FeaturedCollectionTest from "@/components/FeaturedCollectionTest";
import ShopByCategory from "@/components/ShopByCategory";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#07111f] overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      {/* <FeaturedCollectionTest /> */}
      <ShopByCategory />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}