
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import HowItWorks from './components/HowItWorks';
import WhyChoose from './components/WhyChoose';
import PublishingSection from './components/PublishingSection';
import Services from './components/Services';
import Pricing from './components/Pricing';
import HomeFAQ from './components/HomeFAQ';
import Footer from './components/Footer';
import PublishingPage from './components/PublishingPage';
import ServicesPage from './components/ServicesPage';
import FAQPage from './components/FAQPage';
import VideoPage from './components/VideoPage';
import PricingPage from './components/PricingPage';
import YoutubeCMSPage from './components/YoutubeCMSPage';
import DistributionPartnersPage from './components/DistributionPartnersPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'publishing' | 'services' | 'faq' | 'video' | 'pricing' | 'youtube-cms' | 'distribution-partners'>('home');

  useEffect(() => {
    // Smooth scroll behavior for internal anchors
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href;
          const element = document.querySelector(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'publishing' | 'services' | 'faq' | 'video' | 'pricing' | 'youtube-cms' | 'distribution-partners') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-black bg-brand-black text-white">
      <Header onNavigate={navigateTo as any} currentPage={currentPage as any} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <FeatureSection />
            <HowItWorks />
            <WhyChoose />
            <PublishingSection onLearnMore={() => navigateTo('publishing')} />
            <Services onExploreAll={() => navigateTo('services')} />
            <Pricing />
            <HomeFAQ />
          </>
        )}
        {currentPage === 'publishing' && <PublishingPage />}
        {currentPage === 'services' && <ServicesPage onNavigateToYoutube={() => navigateTo('youtube-cms')} />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'video' && <VideoPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'youtube-cms' && <YoutubeCMSPage />}
        {currentPage === 'distribution-partners' && <DistributionPartnersPage />}
      </main>
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
