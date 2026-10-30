import React from 'react';
import { ShieldCheck, Compass, HeartHandshake, BookOpen, AlertCircle, FileCheck2, Scale } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ethical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About SkillPath & Our Principles
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            SkillPath was engineered to solve the acute information asymmetry faced by 10th standard students and families during the transition from secondary school to higher secondary or technical vocational careers.
          </p>
        </div>

        {/* 3 Core Ethical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">100% Unbiased & Neutral</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We do not accept commissions, paid college promotions, or commercial lead-generation fees. Every pathway—Diploma, 11th-12th, or ITI—is evaluated solely based on transparent student merit, aptitude, and financial viability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Verified Government Norms</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              All curricula, duration timelines, and admission criteria are verified against statutory regulatory bodies: All India Council for Technical Education (AICTE), Directorate General of Training (DGT), and State Secondary Boards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Child & Privacy Protection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Because SkillPath serves school-age teenagers, we practice strict data minimization. We do not sell student phone numbers to private coaching institutes, educational brokers, or telemarketers.
            </p>
          </div>

        </div>

        {/* Legal & Educational Advisory Disclaimer Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5 text-blue-400">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Statutory Educational & Admissions Disclaimer
            </h4>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            The data, estimated fees, cutoffs, and scholarship deadlines published on SkillPath are provided exclusively for informational orientation. 
            Educational policies, seat matrices, reservation quotas, and fee structures are determined autonomously by respective state admission directorates (such as DTE Maharashtra, JEECUP, POLYCET, Central Boards, and University Registrars) and are subject to change for each academic cycle.
          </p>

          <p className="text-xs text-slate-400 leading-relaxed">
            Students and guardians are strongly urged to verify final deadlines and eligibility with official government gazettes, university admission prospectuses, and authorized counseling authorities before finalizing admissions or financial commitments.
          </p>
        </div>

      </div>
    </section>
  );
};
