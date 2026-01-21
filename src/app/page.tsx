import GetInvolved from '@/components/get-involved';
import HeroSection from '@/components/hero-section';
import LatestNews from '@/components/latest-news';
import MissionOverview from '@/components/mission-overview';
import Gallery from '@/components/gallery';
import FounderSpotlight from '@/components/founder-spotlight';
import ScrollReveal from '@/components/scroll-reveal';

export default function Home() {
  return (
    <div className="flex flex-col">
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <MissionOverview />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <FounderSpotlight />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <LatestNews />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <GetInvolved />
      </ScrollReveal>
    </div>
  );
}
