import { HeroSection } from "@/components/HeroSection";
import { SocialProofTape } from "@/components/SocialProofTape";
import { CoreIdentity } from "@/components/CoreIdentity";
import { ArcoCycle } from "@/components/ArcoCycle";
import { BentoBoxGrid } from "@/components/BentoBoxGrid";
import { StackShowcase } from "@/components/StackShowcase";
import { EngineeringManifesto } from "@/components/EngineeringManifesto";
// import { CaseStudySection } from "@/components/CaseStudySection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <SocialProofTape />
      <CoreIdentity />
      <EngineeringManifesto />
      <ArcoCycle />
      <BentoBoxGrid />
      <StackShowcase />
      {/* <CaseStudySection /> */}
      <WhatsAppButton />
    </main>
  );
}
