import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Wrench, ShieldCheck, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

interface HeroProps {
  onOpenAssessment: () => void;
  onSelectPathway: (id: 'diploma' | 'intermediate' | 'iti') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment, onSelectPathway }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>SkillPath • 10th Standard Academic Decision Framework</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Your Future After 10th <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Starts Here.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore courses, compare career paths, discover scholarships, and make a confident decision about your future. 
              Unbiased, transparent, and verified guidance for 10th standard students and parents.
            </p>

            {/* Main Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('pathways')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Explore Career Options</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 font-semibold text-sm hover:border-blue-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
              >
                <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                <span>Find My Best Path (Free 5-Min Test)</span>
              </button>
            </div>

            {/* Trust and Accuracy Badges */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% Free & Neutral Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>AICTE & NCVT Aligned</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero Commercial Bias</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars Visual Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1 flex items-center justify-between">
              <span>Choose Your Foundation</span>
              <span className="text-slate-500 font-normal">3 Main Routes After 10th</span>
            </div>

            {/* Diploma Card */}
            <div
              onClick={() => {
                onSelectPathway('diploma');
                scrollTo('pathways');
              }}
              className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 cursor-pointer group shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        Polytechnic Diploma
                      </h2>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-blue-300 border border-slate-800">
                        3 Years
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      Direct 2nd Year B.Tech Lateral Entry or early Junior Engineer job.
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all mt-2 shrink-0" />
              </div>
            </div>

            {/* 11th & 12th Card */}
            <div
              onClick={() => {
                onSelectPathway('intermediate');
                scrollTo('pathways');
              }}
              className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 cursor-pointer group shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        11th & 12th (HSC / Junior College)
                      </h2>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-blue-300 border border-slate-800">
                        2 Years
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      Science (PCM/PCB), Commerce & Arts. Gateway to NEET, JEE, CA, UPSC.
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all mt-2 shrink-0" />
              </div>
            </div>

            {/* ITI Card */}
            <div
              onClick={() => {
                onSelectPathway('iti');
                scrollTo('pathways');
              }}
              className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 cursor-pointer group shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        ITI Vocational Trades
                      </h2>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-blue-300 border border-slate-800">
                        1 - 2 Years
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      Electrician, Fitter, COPA. Railway technician jobs & fast employment.
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all mt-2 shrink-0" />
              </div>
            </div>

            {/* Parent & Student Guidance Notice */}
            <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-900/40 text-[11px] text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <span>Tip: Admission processes typically begin immediately after 10th results are announced.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
