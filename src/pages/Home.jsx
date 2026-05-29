import { useAudience } from '@/lib/AudienceContext';
import AudienceSelector from '../components/AudienceSelector';
import HeroSection from '../components/HeroSection/index.jsx';
import InvestorHome from '../components/home/InvestorHome';
import SellerHome from '../components/home/SellerHome';
import AgentHome from '../components/home/AgentHome';

export default function Home() {
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