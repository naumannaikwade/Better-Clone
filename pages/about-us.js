import BackedBySection from "@/components/AboutUs/BackedBySection";
import CompanySection from "@/components/AboutUs/CompanySection";
import AboutUsHero from "@/components/AboutUs/Hero";
import RelatedPosts from "@/components/AboutUs/RelatedPosts";
import Timeline from "@/components/AboutUs/Timeline";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <AboutUsHero />
      <CompanySection />
      <BackedBySection />
      <Timeline />
      <RelatedPosts />
      <Footer />
    </div>
  );
}
