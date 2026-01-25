
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, Chrome, Music, Cpu, AlertCircle, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: 'signup' | 'home') => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });

  const isEmailValid = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, [email]);

  const isPasswordValid = useMemo(() => {
    return password.length >= 8;
  }, [password]);

  const getEmailStatus = () => {
    if (!touched.email || email === '') return 'IDLE';
    return isEmailValid ? 'VALID' : 'INVALID_FORMAT';
  };

  const getPasswordStatus = () => {
    if (!touched.password || password === '') return 'IDLE';
    return isPasswordValid ? 'VALID' : 'INSUFFICIENT_LENGTH';
  };

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-6 relative overflow-hidden selection:bg-brand-green selection:text-brand-black font-sans">
      {/* Dynamic Background: Grid and Ambient Orbs */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/20 blur-[160px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-green/20 blur-[140px] rounded-full" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[480px] relative z-10"
      >
        {/* Tech Header */}
        <div className="flex justify-between items-end mb-10 px-2">
          <button onClick={() => onNavigate('home')} className="group flex flex-col items-start transition-transform active:scale-95">
            <span className="text-[9px] font-mono text-brand-green mb-1.5 tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">SYS_UPLINK_0.4</span>
            <div className="text-4xl font-bold font-heading tracking-tighter">
              <span className="text-brand-green drop-shadow-[0_0_10px_rgba(114,255,79,0.3)]">Tune</span>
              <span className="text-white">Via</span>
            </div>
          </button>
          <div className="text-right hidden sm:block">
            <div className="flex items-center gap-2 justify-end text-[10px] font-mono text-brand-blue mb-1">
              <Cpu size={12} className="animate-spin-slow" />
              <span className="tracking-widest">SECURE_NODE_TX</span>
            </div>
            <div className="h-[2px] w-32 bg-gradient-to-l from-brand-blue/50 to-transparent rounded-full" />
          </div>
        </div>

        <div className="relative group">
          {/* Animated Glowing Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-blue/40 via-brand-green/30 to-brand-purple/40 rounded-[2.5rem] opacity-40 group-hover:opacity-100 blur-[2px] transition-opacity duration-700" />
          
          <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-[#0c0c0c]/90 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Subtle Terminal Scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_2px,3px_100%] z-20 opacity-20" />

            <div className="relative z-30">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center border border-brand-green/20">
                    <ShieldCheck size={18} className="text-brand-green" />
                  </div>
                  <h1 className="text-2xl font-bold text-white tracking-tight font-heading">Access Terminal</h1>
                </div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">Verification required to initialize artist dashboard.</p>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Email Field */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">Comm_Link / Email</label>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={getEmailStatus()}
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-[9px] font-mono font-bold uppercase transition-colors duration-300 ${
                          getEmailStatus() === 'INVALID_FORMAT' ? 'text-red-500' : 
                          getEmailStatus() === 'VALID' ? 'text-brand-green' : 'text-gray-600'
                        }`}
                      >
                        {getEmailStatus() === 'IDLE' ? ':: WAITING' : `:: ${getEmailStatus()}`}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="relative group/input">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      getEmailStatus() === 'INVALID_FORMAT' ? 'text-red-500 scale-110' : 
                      getEmailStatus() === 'VALID' ? 'text-brand-green scale-110' : 'text-gray-600 group-focus-within/input:text-brand-blue'
                    }`}>
                      <Mail size={20} />
                    </div>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (!touched.email) setTouched(prev => ({ ...prev, email: true }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                      placeholder="uplink@artist_net.id"
                      className={`w-full bg-brand-black/40 border-2 rounded-2xl py-5 pl-14 pr-12 text-white focus:outline-none transition-all placeholder:text-gray-700 font-medium ${
                        getEmailStatus() === 'INVALID_FORMAT' 
                          ? 'border-red-500/30 focus:border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.1)]' 
                          : getEmailStatus() === 'VALID' 
                            ? 'border-brand-green/30 focus:border-brand-green shadow-[0_0_20px_rgba(114,255,79,0.1)]' 
                            : 'border-white/5 focus:border-brand-blue focus:shadow-[0_0_20px_rgba(58,205,255,0.1)]'
                      }`}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <AnimatePresence>
                        {getEmailStatus() === 'VALID' && (
                          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                            <CheckCircle2 size={18} className="text-brand-green" />
                          </motion.div>
                        )}
                        {getEmailStatus() === 'INVALID_FORMAT' && (
                          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                            <AlertCircle size={18} className="text-red-500" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">Access_Key</label>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={getPasswordStatus()}
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-[9px] font-mono font-bold uppercase transition-colors duration-300 ${
                          getPasswordStatus() === 'INSUFFICIENT_LENGTH' ? 'text-red-500' : 
                          getPasswordStatus() === 'VALID' ? 'text-brand-green' : 'text-gray-600'
                        }`}
                      >
                        {getPasswordStatus() === 'IDLE' ? ':: ENCRYPTED' : `:: ${getPasswordStatus()}`}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="relative group/input">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      getPasswordStatus() === 'INSUFFICIENT_LENGTH' ? 'text-red-500 scale-110' : 
                      getPasswordStatus() === 'VALID' ? 'text-brand-green scale-110' : 'text-gray-600 group-focus-within/input:text-brand-blue'
                    }`}>
                      <Lock size={20} />
                    </div>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (!touched.password) setTouched(prev => ({ ...prev, password: true }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
                      placeholder="••••••••••••"
                      className={`w-full bg-brand-black/40 border-2 rounded-2xl py-5 pl-14 pr-12 text-white focus:outline-none transition-all placeholder:text-gray-700 font-medium ${
                        getPasswordStatus() === 'INSUFFICIENT_LENGTH' 
                          ? 'border-red-500/30 focus:border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.1)]' 
                          : getPasswordStatus() === 'VALID' 
                            ? 'border-brand-green/30 focus:border-brand-green shadow-[0_0_20px_rgba(114,255,79,0.1)]' 
                            : 'border-white/5 focus:border-brand-blue focus:shadow-[0_0_20px_rgba(58,205,255,0.1)]'
                      }`}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <AnimatePresence>
                        {getPasswordStatus() === 'VALID' && (
                          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                            <CheckCircle2 size={18} className="text-brand-green" />
                          </motion.div>
                        )}
                        {getPasswordStatus() === 'INSUFFICIENT_LENGTH' && (
                          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                            <AlertCircle size={18} className="text-red-500" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="flex justify-end px-1">
                    <button className="text-[10px] font-mono font-bold text-brand-blue uppercase hover:text-white transition-colors tracking-widest flex items-center gap-1 group/link">
                      <Zap size={10} className="opacity-50 group-hover:opacity-100" />
                      Recover_Key?
                    </button>
                  </div>
                </div>

                <button 
                  disabled={!isEmailValid || !isPasswordValid}
                  className={`w-full font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group/btn relative overflow-hidden shadow-xl ${
                    isEmailValid && isPasswordValid 
                      ? 'bg-white text-brand-black hover:bg-brand-green hover:shadow-[0_0_40px_rgba(114,255,79,0.4)] cursor-pointer hover:scale-[1.02]' 
                      : 'bg-white/10 text-gray-500 cursor-not-allowed border border-white/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3 text-lg tracking-tight">
                    Execute_Login <ArrowRight size={22} className="group-hover/btn:translate-x-1.5 transition-transform" />
                  </span>
                  {isEmailValid && isPasswordValid && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                      animate={{ x: ['-200%', '300%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </button>
              </form>

              <div className="relative my-12">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                <div className="relative flex justify-center text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold">
                  <span className="bg-[#0c0c0c] px-6">Direct_Auth_Gateways</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <button className="flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-blue/40 transition-all text-[11px] font-bold uppercase tracking-widest text-gray-300 group">
                  <Chrome size={18} className="text-brand-blue group-hover:scale-110 transition-transform" /> Google
                </button>
                <button className="flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-green/40 transition-all text-[11px] font-bold uppercase tracking-widest text-gray-300 group">
                  <Music size={18} className="text-brand-green group-hover:scale-110 transition-transform" /> Spotify
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
          <p className="text-gray-500 text-sm font-medium">
            New Entity? <button onClick={() => onNavigate('signup')} className="text-brand-green font-bold hover:underline ml-1.5 transition-colors">Register_Profile</button>
          </p>
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600 border border-white/5 px-3 py-1.5 rounded-full bg-white/[0.02]">
            <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse shadow-[0_0_8px_rgba(114,255,79,0.8)]" />
            <span className="tracking-widest">NETWORK_STATUS: OPTIMAL</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
