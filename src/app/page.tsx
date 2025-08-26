import GetInvolved from '@/components/get-involved';
import HeroSection from '@/components/hero-section';
import LatestNews from '@/components/latest-news';
import MissionOverview from '@/components/mission-overview';
import Gallery from '@/components/gallery';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MissionOverview />
      <Gallery />
      <LatestNews />
      <GetInvolved />
    </div>
  );
}
