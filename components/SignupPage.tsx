
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShieldCheck, ArrowRight, Zap, Globe, Sparkles, Database, Layout, AlertCircle, CheckCircle2, Cpu, Globe2, Music2, Shield } from 'lucide-react';

interface SignupPageProps {
  onNavigate: (page: 'login' | 'home') => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  const [accountType, setAccountType] = useState<'artist' | 'label'>('artist');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [legalName, setLegalName] = useState('');
  const [creatorTag, setCreatorTag] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false, legalName: false, creatorTag: false });

  const isEmailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [email]);
  const isPasswordValid = useMemo(() => password.length >= 8, [password]);
  const isLegalNameValid = useMemo(() => legalName.trim().length >= 2, [legalName]);
  const isCreatorTagValid = useMemo(() => creatorTag.trim().length >= 2, [creatorTag]);

  const getStatus = (field: 'email' | 'password' | 'legalName' | 'creatorTag') => {
    if (!touched[field]) return 'IDLE';
    switch (field) {
      case 'email': return isEmailValid ? 'VALID' : 'INVALID';
      case 'password': return isPasswordValid ? 'VALID' : 'WEAK';
      case 'legalName': return isLegalNameValid ? 'VALID' : 'EMPTY';
      case 'creatorTag': return isCreatorTagValid ? 'VALID' : 'EMPTY';
      default: return 'IDLE';
    }
  };

  const isFormValid = isEmailValid && isPasswordValid && isLegalNameValid && isCreatorTagValid && agreed;

  return (
    <div className="min-h-screen bg-brand-black flex flex-col lg:flex-row overflow-hidden relative selection:bg-brand-green selection:text-brand-black">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      {/* Left Panel: The Vision */}
      <div className="lg:w-[42%] relative bg-[#080808] p-10 lg:p-20 flex flex-col justify-between overflow-hidden border-r border-white/10 z-10">
        {/* Holographic Interactive Waveform */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] opacity-[0.15] pointer-events-none">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#72FF4F" />
                <stop offset="50%" stopColor="#3ACDFF" />
                <stop offset="100%" stopColor="#A36FFF" />
              </linearGradient>
            </defs>
            {[...Array(3)].map((_, i) => (
              <motion.path
                key={i}
                d="M 0 300 Q 200 100 400 300 T 800 300"
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth={4 - i}
                animate={{ 
                  d: [
                    `M 0 300 Q 200 ${50 + i * 50} 400 300 T 800 300`, 
                    `M 0 300 Q 200 ${550 - i * 50} 400 300 T 800 300`, 
                    `M 0 300 Q 200 ${50 + i * 50} 400 300 T 800 300`
                  ] 
                }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10">
          <button onClick={() => onNavigate('home')} className="group flex items-center gap-4 mb-24 transition-transform active:scale-95">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center border border-brand-green/30 group-hover:border-brand-green/60 transition-all shadow-[0_0_20px_rgba(114,255,79,0.1)] group-hover:shadow-[0_0_30px_rgba(114,255,79,0.3)]">
              <Zap size={24} className="text-brand-green" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading tracking-tighter leading-none">
                <span className="text-brand-green">Tune</span>
                <span className="text-white">Via</span>
              </span>
              <span className="text-[8px] font-mono text-gray-500 tracking-[0.5em] uppercase mt-1">Global_Distribution</span>
            </div>
          </button>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-8xl font-heading font-bold mb-8 tracking-tighter leading-[0.85]">
              DEFINE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple">
                LEGACY.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-sm leading-relaxed font-medium">
              Join the institutional-grade network built for the next generation of independent creators.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 space-y-12">
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            {[
              { icon: <Globe2 size={20} className="text-brand-blue" />, label: "NEURAL_NODE", value: "250+ DSPs" },
              { icon: <Database size={20} className="text-brand-green" />, label: "LEDGER_CORE", value: "100% Rights" },
              { icon: <Shield size={20} className="text-brand-purple" />, label: "COMPLIANCE", value: "KYC Verified" },
              { icon: <Sparkles size={20} className="text-white" />, label: "AI_LOGIC", value: "Daily Sync" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">{item.icon}</div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">{item.label}</span>
                </div>
                <div className="pl-0.5">
                  <div className="text-sm font-bold text-white mb-1.5">{item.value}</div>
                  <div className="h-[1px] w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 0.6 + (i * 0.15) }}
                      className="h-full bg-gradient-to-r from-transparent via-white/40 to-transparent origin-left" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono text-gray-600 tracking-[0.3em]">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" /> UPTIME_STABLE</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <span>VER_4.2.0</span>
          </div>
        </div>
      </div>

      {/* Right Panel: Onboarding Flow */}
      <div className="lg:w-[58%] bg-brand-black p-8 lg:p-20 flex items-center justify-center relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-blue/5 blur-[160px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl relative z-10"
        >
          <div className="mb-14">
            <div className="flex items-center gap-3 text-brand-blue mb-5">
              <Cpu size={18} className="animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-[0.4em] uppercase text-brand-blue/80">Entity_Onboarding_Sequence</span>
            </div>
            <h2 className="text-5xl font-heading font-bold text-white mb-3 tracking-tight">System Initialization</h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">Configure your node parameters to begin global distribution.</p>
          </div>

          {/* Account Type Selector */}
          <div className="grid grid-cols-2 gap-5 mb-12">
            <button 
              onClick={() => setAccountType('artist')}
              className={`p-7 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-4 group relative overflow-hidden ${
                accountType === 'artist' 
                ? 'bg-brand-green/10 border-brand-green/60 text-brand-green shadow-[0_0_30px_rgba(114,255,79,0.15)]' 
                : 'bg-white/[0.02] border-white/5 text-gray-500 hover:bg-white/[0.05] hover:border-white/20'
              }`}
            >
              <User size={28} className={accountType === 'artist' ? 'scale-110 drop-shadow-[0_0_10px_rgba(114,255,79,0.5)]' : 'opacity-40'} />
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Artist_Node</span>
                <span className="text-[9px] font-mono opacity-50 mt-1">SINGLE_ENTITY</span>
              </div>
              {accountType === 'artist' && (
                <motion.div layoutId="selector-glow" className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-green" />
              )}
            </button>
            <button 
              onClick={() => setAccountType('label')}
              className={`p-7 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-4 group relative overflow-hidden ${
                accountType === 'label' 
                ? 'bg-brand-blue/10 border-brand-blue/60 text-brand-blue shadow-[0_0_30px_rgba(58,205,255,0.15)]' 
                : 'bg-white/[0.02] border-white/5 text-gray-500 hover:bg-white/[0.05] hover:border-white/20'
              }`}
            >
              <ShieldCheck size={28} className={accountType === 'label' ? 'scale-110 drop-shadow-[0_0_10px_rgba(58,205,255,0.5)]' : 'opacity-40'} />
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Label_Admin</span>
                <span className="text-[9px] font-mono opacity-50 mt-1">MULTI_ARTIST</span>
              </div>
              {accountType === 'label' && (
                <motion.div layoutId="selector-glow" className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-blue" />
              )}
            </button>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Row 1: Legal & Alias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">Legal_Identity</label>
                  <span className={`text-[8px] font-mono font-bold ${getStatus('legalName') === 'EMPTY' ? 'text-red-500/60' : 'text-gray-700'}`}>
                    [{getStatus('legalName')}]
                  </span>
                </div>
                <input 
                  type="text" 
                  value={legalName}
                  onChange={(e) => setLegalName(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, legalName: true }))}
                  placeholder="FULL_REAL_NAME"
                  className={`w-full bg-white/[0.03] border-2 rounded-2xl py-4.5 px-6 text-white focus:outline-none focus:ring-2 focus:ring-brand-green/10 transition-all placeholder:text-gray-700 font-medium ${
                    getStatus('legalName') === 'EMPTY' ? 'border-red-500/20 focus:border-red-500/40' : 'border-white/5 focus:border-brand-green/40'
                  }`}
                />
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">Public_Alias</label>
                  <span className={`text-[8px] font-mono font-bold ${getStatus('creatorTag') === 'EMPTY' ? 'text-red-500/60' : 'text-gray-700'}`}>
                    [{getStatus('creatorTag')}]
                  </span>
                </div>
                <input 
                  type="text" 
                  value={creatorTag}
                  onChange={(e) => setCreatorTag(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, creatorTag: true }))}
                  placeholder="STAGE_TAG_OR_ID"
                  className={`w-full bg-white/[0.03] border-2 rounded-2xl py-4.5 px-6 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-700 font-medium ${
                    getStatus('creatorTag') === 'EMPTY' ? 'border-red-500/20 focus:border-red-500/40' : 'border-white/5 focus:border-brand-blue/40'
                  }`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">Comm_Channel / Email</label>
                <span className={`text-[8px] font-mono font-bold uppercase ${getStatus('email') === 'INVALID' ? 'text-red-500' : getStatus('email') === 'VALID' ? 'text-brand-green' : 'text-gray-700'}`}>
                  [{getStatus('email')}]
                </span>
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                placeholder="uplink@tunevia.io"
                className={`w-full bg-white/[0.03] border-2 rounded-2xl py-4.5 px-6 text-white focus:outline-none focus:ring-2 transition-all placeholder:text-gray-700 font-medium ${
                  getStatus('email') === 'INVALID' ? 'border-red-500/30 focus:border-red-500 focus:ring-red-500/10' : 
                  getStatus('email') === 'VALID' ? 'border-brand-green/30 focus:border-brand-green focus:ring-brand-green/10' : 'border-white/5 focus:border-brand-purple/40'
                }`}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">Security_Master_Key</label>
                <span className={`text-[8px] font-mono font-bold uppercase ${getStatus('password') === 'WEAK' ? 'text-red-500' : getStatus('password') === 'VALID' ? 'text-brand-green' : 'text-gray-700'}`}>
                  [{getStatus('password')}]
                </span>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
                placeholder="CRYPT_8_CHARS_MIN"
                className={`w-full bg-white/[0.03] border-2 rounded-2xl py-4.5 px-6 text-white focus:outline-none focus:ring-2 transition-all placeholder:text-gray-700 font-medium ${
                  getStatus('password') === 'WEAK' ? 'border-red-500/30 focus:border-red-500 focus:ring-red-500/10' : 
                  getStatus('password') === 'VALID' ? 'border-brand-green/30 focus:border-brand-green focus:ring-brand-green/10' : 'border-white/5 focus:border-white/30'
                }`}
              />
            </div>

            {/* Terms Checkbox */}
            <div className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all duration-300 ${agreed ? 'bg-brand-green/5 border-brand-green/30' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="peer h-5 w-5 opacity-0 absolute cursor-pointer z-10" 
                />
                <div className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all ${agreed ? 'bg-brand-green border-brand-green' : 'border-gray-600'}`}>
                  {agreed && <CheckCircle2 size={14} className="text-brand-black" />}
                </div>
              </div>
              <label htmlFor="terms" className="text-[11px] text-gray-500 leading-relaxed font-semibold cursor-pointer select-none">
                I acknowledge the <button className="text-brand-green font-bold hover:text-white transition-colors">Distribution Protocol</button>, <button className="text-brand-green font-bold hover:text-white transition-colors">IP Ownership Policy</button> and <button className="text-brand-green font-bold hover:text-white transition-colors">Data Encryption standards</button>.
              </label>
            </div>

            <button 
              disabled={!isFormValid}
              className={`w-full py-5.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-4 group/btn relative overflow-hidden shadow-2xl ${
                isFormValid 
                  ? 'bg-white text-brand-black hover:bg-brand-green hover:shadow-[0_0_50px_rgba(114,255,79,0.4)] cursor-pointer hover:scale-[1.01]' 
                  : 'bg-white/10 text-gray-500 cursor-not-allowed border border-white/5'
              }`}
            >
              <span className="relative z-10 flex items-center gap-3 text-xl tracking-tight">
                Initialize_Profile <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
              </span>
              {isFormValid && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                  animate={{ x: ['-250%', '350%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              )}
            </button>
          </form>

          <p className="text-center mt-12 text-gray-500 text-sm font-medium">
            Active session found? <button onClick={() => onNavigate('login')} className="text-white font-bold hover:text-brand-green transition-colors hover:underline underline-offset-4 ml-1.5">Sign_In_Now</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
