import MarketTicker from '../components/MarketTicker';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyInvestSection from '../components/WhyInvestSection';
import GlobalNetworkSection from '../components/GlobalNetworkSection';
import CommunityGuidesSection from '../components/CommunityGuidesSection';
import CTASection from '../components/CTASection';
import YouTubeSection from '../components/YouTubeSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/72b385d1a_generated_1283577f.png';
const INTERIOR_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/ae16b8f38_generated_326a751a.png';

export default function Home() {
  return (
    <div>
      <MarketTicker />
      <HeroSection heroImage={HERO_IMAGE} />
      <div className="pt-20" />
      <StatsBar />
      <FeaturedProperties />
      <WhyInvestSection />
      <CommunityGuidesSection />
      <GlobalNetworkSection />
      <YouTubeSection />
      <TestimonialsSection />
      <CTASection image={INTERIOR_IMAGE} />
    </div>
  );
}