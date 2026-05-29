import HeroSection from '../components/HeroSection/index.jsx';
import AudienceSelector from '../components/AudienceSelector';
import MarketTicker from '../components/MarketTicker';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyInvestSection from '../components/WhyInvestSection';
import GlobalNetworkSection from '../components/GlobalNetworkSection';
import CommunityGuidesSection from '../components/CommunityGuidesSection';
import CTASection from '../components/CTASection';
import YouTubeSection from '../components/YouTubeSection';
import TestimonialsSection from '../components/TestimonialsSection';

const INTERIOR_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/ae16b8f38_generated_326a751a.png';

export default function Home() {
  return (
    <div>
      <AudienceSelector />
      <HeroSection />
      <MarketTicker />
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