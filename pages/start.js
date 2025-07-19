import Footer from "@/components/Start/Footer";
import Hero from "@/components/Start/Hero";
import Navbar from "@/components/Start/Navbar";
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Navbar />
<Hero></Hero>
      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" ></script>
    </>
  );
}
