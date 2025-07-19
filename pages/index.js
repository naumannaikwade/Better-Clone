import Footer from "@/components/Footer";
import IndexFAQ from "@/components/Index-FAQSection";

import IndexHero from "@/components/Index-Hero";
import IndexStories from "@/components/Index-Stories";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <IndexHero />
      <IndexStories />
      <IndexFAQ />
      <Footer />
    </>
  );
}
