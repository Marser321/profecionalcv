import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { Differentials } from "@/components/differentials";
import { ServicesGrid } from "@/components/services-grid";
import { WorkGallery } from "@/components/work-gallery";
import { Workflow } from "@/components/workflow";
import { Testimonials } from "@/components/testimonials";
import { FAQAccordion } from "@/components/faq-accordion";
import { BookingForm } from "@/components/booking-form";
import { Footer } from "@/components/footer";
import { DynamicMetadata } from "@/components/dynamic-metadata";

export default function Home() {
  return (
    <main className="relative">
      <DynamicMetadata />
      <NavBar />
      <Hero />
      <AboutSection />
      <Differentials />
      <ServicesGrid />
      <WorkGallery />
      <Workflow />
      <Testimonials />
      <FAQAccordion />
      <BookingForm />
      <Footer />
    </main>
  );
}
