
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, FileText, PieChart, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onExploreAll?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onExploreAll }) => {
  const services = [
    {
      title: "Distribution",
      icon: <Globe className="text-brand-green" />,
      items: [
        "International platforms (250+)",
        "Indian platforms (Gaana, JioSaavn, Wynk)",
        "Bangladeshi platforms (Shadhin, GP, Robi)",
        "Video (YouTube, VEVO, Apple, Tidal)"
      ]
    },
    {
      title: "MCN & CMS",
      icon: <Shield className="text-brand-blue" />,
      items: [
        "Copyright Protection",
        "Channel Management",
        "Premium Adsense",
        "Sponsorships",
        "24/7 Rights Management"
      ]
    },
    {
      title: "Publishing Admin",
      icon: <FileText className="text-brand-purple" />,
      items: [
        "Unlimited Registrations",
        "Collect Worldwide Royalties",
        "Keep 100% Copyrights",
        "Global Collection Network"
      ]
    },
    {
      title: "Royalty",
      icon: <PieChart className="text-white" />,
      items: [
        "Monthly Royalty & Reports",
        "80% Royalty Share",
        "Payoneer / Bank Transfer",
        "No hidden charges"
      ]
    }
  ];

  return (
    <section className="py-24 bg-brand-black/50" id="royalties">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-4">Our Core Services</h2>
            <div className="w-20 h-1 bg-brand-green" />
          </div>
          <button 
            onClick={onExploreAll}
            className="flex items-center gap-2 text-brand-green font-bold hover:gap-4 transition-all"
          >
            Explore All Solutions <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{s.title}</h3>
              <ul className="space-y-4">
                {s.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-green/50 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
