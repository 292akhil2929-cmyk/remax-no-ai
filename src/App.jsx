import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { AudienceProvider } from '@/lib/AudienceContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import Properties from './pages/Properties.jsx';
import PropertyDetail from './pages/PropertyDetail';
import JoinUs from './pages/JoinUs';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import GoldenVisa from './pages/GoldenVisa';
import Services from './pages/Services';
import OffPlan from './pages/OffPlan';
import Team from './pages/Team';
import AreaGuides from './pages/AreaGuides';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Landlords from './pages/Landlords';
import Dashboard from './pages/Dashboard';
import AdminContent from './pages/AdminContent';
import ThemePreview from './pages/ThemePreview';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:propertyId" element={<PropertyDetail />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/area-guides" element={<AreaGuides />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/golden-visa" element={<GoldenVisa />} />
        <Route path="/services" element={<Services />} />
        <Route path="/off-plan" element={<OffPlan />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogDetail />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/content" element={<AdminContent />} />
        <Route path="/theme-preview" element={<ThemePreview />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <AudienceProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AudienceProvider>
    </AuthProvider>
  )
}

export default App