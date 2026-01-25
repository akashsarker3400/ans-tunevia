
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Gavel, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle,
  ArrowRight,
  Music,
  FileText
} from 'lucide-react';

const DMCAPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const thirdPartyLinks = [
    { name: 'Spotify', url: 'https://www.spotify.com/us/legal/infringement-form/', icon: <Music className="text-brand-green" size={20} /> },
    { name: 'iTunes / Apple Music', url: 'https://www.apple.com/legal/internet-services/itunes/itunesstorenotices/', icon: <Music className="text-brand-blue" size={20} /> },
    { name: 'YouTube / Google Play', url: 'https://support.google.com/legal/troubleshooter/1114905', icon: <Music className="text-brand-purple" size={20} /> },
    { name: 'Anghami', url: 'mailto:contentclaims@anghami.com', icon: <Music className="text-white" size={20} />, email: true, description: 'Reach out to contentclaims@anghami.com' }
  ];

  return (
    <div className="bg-brand-black pt-32 pb-24 min-h-screen selection:bg-brand-purple selection:text-white font-sans">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div {...fadeInUp} className="max-w-4xl mb-20">
          <span className="px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold tracking-[0.3em] uppercase mb-8 inline-block">
            Rights Verification Protocol
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tighter leading-none">
            DMCA TAKEDOWNS & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green">
              COUNTERCLAIMS.
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            TuneVia is constantly working to ensure that our users are only uploading content they have 100% rights to. We provide strict mechanisms to protect intellectual property within our ecosystem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
          {/* Section 1: Reporting Infringement */}
          <motion.div 
            {...fadeInUp}
            className="p-10 lg:p-12 rounded-[3rem] bg-[#0c0c0c] border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-brand-purple/30 transition-all shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldAlert size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-8">
                <ShieldAlert size={32} />
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Report Infringement</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                If someone has uploaded your music, photos, or artwork to <span className="text-white">TuneVia Music</span> without your permission, please reach out to our Claims Department.
              </p>
              <div className="bg-brand-purple/5 rounded-2xl p-6 border border-brand-purple/10 space-y-4 mb-8">
                <div className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-purple" />
                    <span className="text-sm font-bold text-white">claim@tunevia.com</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Include a <span className="text-white">link to the release</span>, and we’ll get you in touch with our Claims Department immediately.
                </p>
              </div>
            </div>
            <a 
              href="mailto:claim@tunevia.com" 
              className="w-full sm:w-fit bg-brand-purple text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(163,111,255,0.2)]"
            >
              Contact Claims <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Section 2: Counterclaims */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="p-10 lg:p-12 rounded-[3rem] bg-[#0c0c0c] border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-brand-blue/30 transition-all shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Gavel size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-8">
                <Gavel size={32} />
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Counterclaim Notice</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                If you have received a DMCA Takedown notice from <span className="text-white">TuneVia</span> and would like to provide a counterclaim to the initial takedown notice, you have two pathways:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue mb-2">Option A</h4>
                    <p className="text-xs text-gray-400">Submit your counterclaim via email to <span className="text-white">claim@tunevia.com</span></p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue mb-2">Option B</h4>
                    <p className="text-xs text-gray-400">Fill out our structured <span className="text-white underline cursor-pointer">Digital Claims Form</span></p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:claim@tunevia.com" 
                className="bg-white text-brand-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Submit via Email
              </a>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <FileText size={18} /> Open Web Form
              </button>
            </div>
          </motion.div>
        </div>

        {/* Third Party Section */}
        <motion.div 
          {...fadeInUp}
          className="p-12 lg:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">External IP <br/>Infringement</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                If someone has uploaded your intellectual property using a service other than TuneVia, that’s unfortunately not something that we can help with. 
                <span className="block mt-4">However, you can reach out to each streaming service with a DMCA takedown request. Here are several official links to processes that we’re aware of:</span>
              </p>
              <div className="flex items-center gap-3 text-brand-green font-bold text-sm uppercase tracking-widest bg-brand-green/5 w-fit px-4 py-2 rounded-full border border-brand-green/20">
                <ShieldCheck size={20} />
                Global Compliance Network
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {thirdPartyLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-3xl bg-[#0c0c0c] border border-white/5 hover:border-brand-green/30 hover:bg-white/5 transition-all group flex flex-col justify-between gap-4 shadow-xl"
                >
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{link.name}</h4>
                    <p className="text-[10px] text-gray-500 leading-snug font-medium">
                      {link.description || 'Access official legal infringement portal'}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Meta Disclaimer */}
        <motion.div {...fadeInUp} className="mt-20 pt-10 border-t border-white/5 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertCircle size={16} className="text-gray-600" />
            <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">Legal_Compliance_Node_V.2.4</span>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed italic">
            TuneVia acts as a digital service provider under the Digital Millennium Copyright Act. We maintain a strict policy to terminate the accounts of repeat infringers and respond expeditiously to valid takedown notices.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DMCAPage;
