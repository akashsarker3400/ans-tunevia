
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
import TermsOfServicePage from './components/TermsOfServicePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import DMCAPage from './components/DMCAPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AnimatedBackground from './components/AnimatedBackground';

export type PageType = 'home' | 'publishing' | 'services' | 'faq' | 'video' | 'pricing' | 'youtube-cms' | 'distribution-partners' | 'terms' | 'privacy' | 'dmca' | 'login' | 'signup';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Dynamic SEO Manager
  useEffect(() => {
    const pageMetadata: Record<PageType, { title: string; description: string; keywords: string }> = {
      'home': { 
        title: 'TuneVia | Global Music Distribution & Royalties', 
        description: 'Distribute your music to Spotify, Apple, and 250+ stores. Keep 100% of your royalties and stay independent.',
        keywords: 'music distribution, sell music online, independent artist tools, spotify distribution'
      },
      'publishing': { 
        title: 'Music Publishing Administration | Collect Global Royalties | TuneVia', 
        description: 'Collect your global mechanical and performance royalties. We handle the paperwork, you keep the copyrights.',
        keywords: 'music publishing, mechanical royalties, songwriting royalties, PRO registration'
      },
      'services': { 
        title: 'Music Tech Services & Label Solutions | TuneVia', 
        description: 'From global distribution to advanced rights management, discover our enterprise-grade music technology stack.',
        keywords: 'music tech, label services, rights management, music analytics'
      },
      'faq': { 
        title: 'Help Center & Frequently Asked Questions | TuneVia Support', 
        description: 'Learn how music distribution works, payment cycles, technical requirements, and how to maximize earnings.',
        keywords: 'music distribution help, royalty faq, spotify verification help'
      },
      'video': { 
        title: 'Premium Video Distribution & VEVO Channels | TuneVia', 
        description: 'Get your music videos on VEVO, Apple Music, and Tidal. Professional 4K delivery and monetization.',
        keywords: 'VEVO distribution, music video monetization, apple music video'
      },
      'pricing': { 
        title: 'Unlimited Music Distribution Pricing | Simple Artist Plans | TuneVia', 
        description: 'Affordable annual plans for independent artists and record labels. No hidden fees, unlimited releases.',
        keywords: 'music distribution cost, cheap music distribution, label distribution pricing'
      },
      'youtube-cms': { 
        title: 'YouTube CMS & MCN Monetization | Content ID Protection | TuneVia', 
        description: 'Maximize your YouTube revenue with Content ID and premium MCN linkage for verified artist channels.',
        keywords: 'youtube content id, youtube monetization for artists, MCN music'
      },
      'distribution-partners': { 
        title: 'Our Global DSP Network | 250+ Music Stores | TuneVia Partners', 
        description: 'See the 250+ stores where we deliver your music, from Spotify to Tencent and TikTok.',
        keywords: 'music stores, spotify, apple music, tiktok music distribution'
      },
      'terms': { 
        title: 'Terms of Service & Distribution Agreement | TuneVia Legal', 
        description: 'Read the legal terms, ownership rights, and distribution agreement for the TuneVia platform.',
        keywords: 'music distribution contract, terms of service, artist rights'
      },
      'privacy': { 
        title: 'Privacy Policy | Data Security & Artist Protection | TuneVia', 
        description: 'How we protect artist data, manage metadata securely, and handle your personal information.',
        keywords: 'privacy policy, data protection, music metadata security'
      },
      'dmca': { 
        title: 'DMCA Takedowns & Copyright Protection | Report Infringement | TuneVia', 
        description: 'Protect your intellectual property. Report copyright infringement or submit a DMCA counterclaim.',
        keywords: 'DMCA music, copyright infringement report, music protection'
      },
      'login': { 
        title: 'Secure Artist Login | Access Your Dashboard | TuneVia Terminal', 
        description: 'Access your TuneVia artist dashboard to manage releases, view analytics, and collect royalties.',
        keywords: 'artist login, music dashboard, royalty login'
      },
      'signup': { 
        title: 'Create Artist Account | Start Distributing Music | Join TuneVia', 
        description: 'Join 100k+ artists and start distributing your music worldwide today. Keep 100% of your rights.',
        keywords: 'sell music online signup, join music distribution, create artist profile'
      }
    };

    const metadata = pageMetadata[currentPage];
    if (metadata) {
      document.title = metadata.title;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', metadata.description);
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', metadata.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', metadata.description);

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', metadata.keywords);
    }

    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };

  const isAuthPage = currentPage === 'login' || currentPage === 'signup';

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-black relative">
      {/* Background is now the base layer, App container is transparent */}
      <AnimatedBackground />
      
      {!isAuthPage && <Header onNavigate={navigateTo as any} currentPage={currentPage as any} />}
      
      <main id="main-content" className="relative z-10">
        {currentPage === 'home' && (
          <article>
            <Hero onGetStarted={() => navigateTo('signup')} onLearnMore={() => navigateTo('services')} />
            <FeatureSection />
            <HowItWorks />
            <WhyChoose />
            <PublishingSection onLearnMore={() => navigateTo('publishing')} />
            <Services onExploreAll={() => navigateTo('services')} />
            <Pricing onGetStarted={() => navigateTo('signup')} />
            <HomeFAQ />
          </article>
        )}
        {currentPage === 'publishing' && <PublishingPage onGetStarted={() => navigateTo('signup')} />}
        {currentPage === 'services' && <ServicesPage onNavigateToYoutube={() => navigateTo('youtube-cms')} onGetStarted={() => navigateTo('signup')} />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'video' && <VideoPage onGetStarted={() => navigateTo('signup')} />}
        {currentPage === 'pricing' && <PricingPage onGetStarted={() => navigateTo('signup')} />}
        {currentPage === 'youtube-cms' && <YoutubeCMSPage onGetStarted={() => navigateTo('signup')} />}
        {currentPage === 'distribution-partners' && <DistributionPartnersPage onGetStarted={() => navigateTo('signup')} />}
        {currentPage === 'terms' && <TermsOfServicePage />}
        {currentPage === 'privacy' && <PrivacyPolicyPage />}
        {currentPage === 'dmca' && <DMCAPage />}
        {currentPage === 'login' && <LoginPage onNavigate={navigateTo as any} />}
        {currentPage === 'signup' && <SignupPage onNavigate={navigateTo as any} />}
      </main>
      
      {!isAuthPage && <Footer onNavigate={navigateTo as any} />}
    </div>
  );
};

export default App;
