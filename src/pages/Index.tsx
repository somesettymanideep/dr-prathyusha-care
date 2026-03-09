import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ConsultationForm from "@/components/ConsultationForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <TreatmentsSection />
    <ConsultationForm />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Index;
