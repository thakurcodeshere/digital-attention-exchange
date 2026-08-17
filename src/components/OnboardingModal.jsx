import React, { useState } from 'react';
import { X, Check, Mail, ShieldCheck, ArrowRight, Wallet, User, Globe, TrendingUp, Brain } from 'lucide-react';

export default function OnboardingModal({ isOpen, onClose, initialMode = 'signup' }) {
  const [mode, setMode] = useState(initialMode);
  const [selectedRole, setSelectedRole] = useState('explore');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const roles = [
    { id: 'explore', label: 'Explore the attention market', icon: TrendingUp },
    { id: 'earn', label: 'Earn from participation', icon: User },
    { id: 'list', label: 'List my website', icon: Globe },
    { id: 'analyze', label: 'Analyze websites', icon: ShieldCheck },
    { id: 'build', label: 'Build / Develop', icon: Brain },
    { id: 'curate', label: 'Curate markets', icon: TrendingUp },
    { id: 'validate', label: 'Validate data', icon: ShieldCheck }
  ];

  const handleAuth = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 border border-[#00F0FF]/30 bg-[#07090E]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 text-xs font-mono text-[#00F0FF]">
                <span>WELCOME TO DIGITAL ATTENTION EXCHANGE</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {mode === 'signup' ? 'Create your attention profile' : 'Sign in to Digital Attention Exchange'}
              </h3>
              <p className="text-sm text-gray-400">
                What brings you here? Select your primary interest.
              </p>
            </div>

            {/* Role Options */}
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRole(r.id)}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-mono flex items-center justify-between transition-all ${
                    selectedRole === r.id
                      ? 'bg-[#00F0FF]/10 border-[#00F0FF] text-white font-bold'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>{r.label}</span>
                  {selectedRole === r.id && <Check className="w-4 h-4 text-[#00F0FF]" />}
                </button>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAuth}
                className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center space-x-2"
              >
                <span className="font-sans">Continue with Google</span>
              </button>

              <button
                onClick={handleAuth}
                className="w-full py-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4 text-gray-400" />
                <span>Continue with Email</span>
              </button>

              <button
                onClick={handleAuth}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00F0FF]/20 to-blue-600/20 border border-[#00F0FF]/40 text-[#00F0FF] font-semibold text-sm hover:bg-[#00F0FF]/30 transition-all flex items-center justify-center space-x-2"
              >
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet (Optional)</span>
              </button>
            </div>

            <div className="text-center text-xs text-gray-500 font-mono pt-2 border-t border-white/10">
              {mode === 'signup' ? (
                <span>Already have an account? <button onClick={() => setMode('signin')} className="text-[#00F0FF] underline font-bold">Sign In</button></span>
              ) : (
                <span>Need an account? <button onClick={() => setMode('signup')} className="text-[#00F0FF] underline font-bold">Sign Up</button></span>
              )}
            </div>
          </>
        ) : (
          /* Success onboarding state */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Profile Ready!</h3>
            <p className="text-sm text-gray-300">
              Welcome to the attention economy. Your account has been initialized with role: <strong className="text-[#00F0FF] uppercase">{selectedRole}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-[#00F0FF] text-black font-bold text-sm shadow-glowCyan"
            >
              Start Exploring Markets
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
