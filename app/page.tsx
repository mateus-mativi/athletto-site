import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Interval } from "@/components/Interval";
import { ProductInAction } from "@/components/ProductInAction";
import { HowItWorks } from "@/components/HowItWorks";
import { Team, TEAM_MEMBERS } from "@/components/Team";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Interval />
        <ProductInAction />
        <HowItWorks />
        <Team members={TEAM_MEMBERS} />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
