import React from 'react';
import { GraduationCap, ArrowUp, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 border-b border-slate-900">
          
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">SkillPath</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Comprehensive, unbiased education & career decision platform for 10th Standard (SSC / CBSE / ICSE) students in India. Discover Polytechnic Diplomas, Senior Secondary Streams, and ITI Vocational Trades.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Free Public Educational Guidance Initiative</span>
            </div>
          </div>

          {/* Column 1: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-white transition-colors">
                  Educational Pathways
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-white transition-colors">
                  Course Explorer
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('compare')} className="hover:text-white transition-colors">
                  Side-by-Side Comparison
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('scholarships')} className="hover:text-white transition-colors">
                  Scholarship Finder
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('resources')} className="hover:text-white transition-colors">
                  Study Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: 10th Standard Pathways */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Educational Pathways
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-white transition-colors">
                  Polytechnic Diploma (3 Yrs)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-white transition-colors">
                  11th & 12th Science (PCM/PCB)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-white transition-colors">
                  11th & 12th Commerce
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-white transition-colors">
                  11th & 12th Arts / Humanities
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-white transition-colors">
                  ITI Craftsmen Training (1-2 Yrs)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Government Portals
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://scholarships.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>National Scholarship Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aicte-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>AICTE Official Website</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://bharatskills.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Bharat Skills (DGT ITI)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://ncert.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>NCERT Textbooks e-Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.apprenticeshipindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Apprenticeship India (NAPS)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} SkillPath Educational Platform. Built with transparency for 10th standard students and parents.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy & Terms
            </button>
            <span className="text-slate-800">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
