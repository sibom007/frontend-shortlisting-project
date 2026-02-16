import { BackOverly } from "@/feature/landing/components/back-overlay";
import { Companies } from "@/feature/landing/components/companies";
import { FeatureBoxes } from "@/feature/landing/components/feature-boxes";
import { FreeToJoin } from "@/feature/landing/components/free-to-join";
import { GetInTouch } from "@/feature/landing/components/get-in-touch";
import { GuideAndHelp } from "@/feature/landing/components/guide-&-help";
import { HeroSection } from "@/feature/landing/components/hero-section";
import { Footer } from "@/feature/shared/components/footer";
import { Navbar } from "@/feature/shared/components/navbar";

export default function Home() {
  return (
    <main className="bg-">
      <Navbar />
      <HeroSection />
      <BackOverly />
      <FeatureBoxes />
      <GuideAndHelp />
      <Companies />
      <FreeToJoin />
      <GetInTouch />
      <Footer />
    </main>
  );
}
