import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Comparison } from "@/components/sections/comparison";
import { Benefits } from "@/components/sections/benefits";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <div className="dot-grid pointer-events-none fixed inset-0 z-0 opacity-60" />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-200/60 to-transparent blur-[100px]" />
        <div className="absolute -right-24 bottom-[10%] h-[400px] w-[480px] rounded-full bg-gradient-to-b from-zinc-200/40 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <Navbar />
        <main className="min-w-0 flex-1 overflow-x-clip">
          <Hero />
          <HowItWorks />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
