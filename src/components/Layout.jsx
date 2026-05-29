import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget.jsx';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main className="pt-16 lg:pt-[68px]">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}