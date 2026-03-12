import { ProfessionProvider } from "@/context/profession-context";
import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import { Differentials } from "@/components/differentials";
import { Workflow } from "@/components/workflow";
import { BookingForm } from "@/components/booking-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <ProfessionProvider>
      <main className="relative">
        <NavBar />
        <Hero />
        <Differentials />
        <Workflow />
        <BookingForm />
        {/* Futuras secciones aquí */}
        <Footer />
      </main>
    </ProfessionProvider>
  );
}
