import { useAudience } from '@/lib/AudienceContext';
import AudienceSelector from '../components/AudienceSelector';
import MarketTicker from '../components/MarketTicker';
import InvestorHero from '../components/HeroSection/InvestorHero';
import SellerHero from '../components/HeroSection/SellerHero';
import AgentHero from '../components/HeroSection/AgentHero';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyInvestSection from '../components/WhyInvestSection';
import GlobalNetworkSection from '../components/GlobalNetworkSection';
import CommunityGuidesSection from '../components/CommunityGuidesSection';
import CTASection from '../components/CTASection';
import YouTubeSection from '../components/YouTubeSection';
import TestimonialsSection from '../components/TestimonialsSection';

const INTERIOR_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/ae16b8f38_generated_326a751a.png';

export default function Home() {
  const { audience } = useAudience();

  const getHeroComponent = () => {
    switch (audience) {
      case 'investor':
        return <InvestorHero />;
      case 'seller':
        return <SellerHero />;
      case 'agent':
        return <AgentHero />;
      default:
        return null;
    }
  };

  return (
    <div>
      {!audience && <AudienceSelector />}
      {audience && (
        <>
          <MarketTicker />
          {getHeroComponent()}
          <FeaturedProperties />
          <WhyInvestSection />
          <CommunityGuidesSection />
          <GlobalNetworkSection />
          <YouTubeSection />
          <TestimonialsSection />
          <CTASection image={INTERIOR_IMAGE} />
        </>
      )}
    </div>
  );
}