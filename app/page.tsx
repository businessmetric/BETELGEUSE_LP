import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProblemsSection } from "@/components/sections/problems-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { MoneyMakingSection } from "@/components/sections/money-making-section"
import { ProofSection } from "@/components/sections/proof-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"
import { StickyCTA } from "@/components/sticky-cta"

export default function BetelgeuseLanding() {
  return (
    <main className="min-h-screen bg-black text-[#00ff88] relative scanlines">
      <HeroSection />
      <AboutSection />
      <ProblemsSection />
      <SolutionSection />
      <ComparisonSection />
      <MoneyMakingSection />
      <ProofSection />
      <TestimonialsSection />
      <PricingSection />
      <TimelineSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <StickyCTA />
    </main>
  )
}
