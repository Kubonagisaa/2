import HeroSection from "@/components/HeroSection";
import HotbarNav from "@/components/HotbarNav";
import TrustSection from "@/components/TrustSection";
import CatalogueSection from "@/components/CatalogueSection";
import ProofGallery from "@/components/ProofGallery";
import ProcessSection from "@/components/ProcessSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      <HeroSection />
      <HotbarNav />
      <TrustSection />
      <CatalogueSection />
      <ProofGallery />
      <ProcessSection />
      <InquirySection />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
