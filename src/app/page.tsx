import GetInvolved from '@/components/get-involved';
import HeroSection from '@/components/hero-section';
import LatestNews from '@/components/latest-news';
import MissionOverview from '@/components/mission-overview';
import Gallery from '@/components/gallery';
import FounderSpotlight from '@/components/founder-spotlight';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MissionOverview />
      <Gallery />
      <FounderSpotlight />
      <LatestNews />
      <GetInvolved />
    </div>
  );
}
