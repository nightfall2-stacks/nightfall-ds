import { HeroSection } from "@/components/HeroSection";
import { SocialProofTape } from "@/components/SocialProofTape";
import { BentoBoxGrid } from "@/components/BentoBoxGrid";
import { StackShowcase } from "@/components/StackShowcase";
import { ConversionForm } from "@/components/ConversionForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <SocialProofTape />
      <BentoBoxGrid />
      <StackShowcase />
      <ConversionForm />
      <WhatsAppButton />
    </main>
  );
}
