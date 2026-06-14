import { useAudience } from '@/lib/AudienceContext';
import AudienceSelector from '../components/AudienceSelector.jsx';
import usePageSEO from '@/lib/usePageSEO';
import HeroSection from '../components/HeroSection/index.jsx';
import InvestorHome from '../components/home/InvestorHome';
import SellerHome from '../components/home/SellerHome';
import AgentHome from '../components/home/AgentHome';

export default function Home() {
  usePageSEO({
    title: 'Dubai Real Estate Investment | Off-Plan & Golden Visa Properties | RE/MAX ZAM',
    description: "RE/MAX ZAM is Dubai's data-driven real estate advisory. Buy off-plan, earn up to 9% tax-free rental yield, and qualify for a UAE Golden Visa. RERA licensed advisors. Book a free consultation.",
    canonical: 'https://remaxzam.com/',
  });

  const { audience } = useAudience();

  return (
    <div>
      <AudienceSelector />
      <HeroSection />
      {audience === 'investor' && <InvestorHome />}
      {audience === 'seller' && <SellerHome />}
      {audience === 'agent' && <AgentHome />}
      {!audience && <InvestorHome />}
    </div>
  );
}