import React, { useState } from 'react';
import { pathwaysData } from '../data/pathwaysData';
import { EducationalPathway, PathwayType } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Clock, 
  FileCheck, 
  GraduationCap, 
  Building, 
  Briefcase, 
  Sparkles,
  Info,
  GitCompare,
  Filter
} from 'lucide-react';

interface PathwaysSectionProps {
  selectedPathwayId: PathwayType;
  onSelectPathway: (id: PathwayType) => void;
  onOpenDetailModal: (pathway: EducationalPathway) => void;
  onNavigateToCompare: () => void;
}

export const PathwaysSection: React.FC<PathwaysSectionProps> = ({
  selectedPathwayId,
  onSelectPathway,
  onOpenDetailModal,
  onNavigateToCompare
}) => {
  const [filterGoal, setFilterGoal] = useState<string>('all');

  const filteredPathways = pathwaysData.filter((p) => {
    if (filterGoal === 'all') return true;
    if (filterGoal === 'fast-job' && (p.id === 'iti' || p.id === 'diploma')) return true;
    if (filterGoal === 'degrees' && (p.id === 'intermediate' || p.id === 'diploma')) return true;
    if (filterGoal === 'low-budget' && (p.id === 'iti' || p.id === 'diploma')) return true;
    if (filterGoal === 'flexibility' && p.id === 'intermediate') return true;
    return true;
  });

  return (
    <section id="pathways" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Primary Educational Options</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore 3 Core Educational Pathways
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Every pathway after 10th standard offers distinct learning methodologies, duration, and long-term outcomes. 
            Evaluate which aligns with your personal aptitude and career goals.
          </p>
        </div>

        {/* Filter and Switcher Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter Goal:</span>
            </span>
            {[
              { id: 'all', label: 'All 3 Pathways' },
              { id: 'fast-job', label: 'Rapid Employment (1-3 Yrs)' },
              { id: 'degrees', label: 'Higher Degrees / B.Tech' },
              { id: 'low-budget', label: 'Budget-Friendly / Govt' },
              { id: 'flexibility', label: 'Maximum Flexibility' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterGoal(tab.id)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  filterGoal === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={onNavigateToCompare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 hover:border-blue-500/40 transition-colors"
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Launch Side-by-Side Comparator</span>
          </button>
        </div>

        {/* Pathway Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredPathways.map((pathway) => {
            const isSelected = selectedPathwayId === pathway.id;

            return (
              <div
                key={pathway.id}
                className={`flex flex-col justify-between rounded-2xl bg-slate-900 border transition-all duration-200 overflow-hidden ${
                  isSelected
                    ? 'border-blue-500/80 ring-2 ring-blue-500/20 shadow-xl shadow-blue-500/10'
                    : 'border-slate-800 hover:border-slate-700 shadow-md'
                }`}
              >
                <div>
                  {/* Card Header Top */}
                  <div className="p-6 border-b border-slate-800/80 bg-slate-900/50">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-blue-600/15 text-blue-300 border-blue-500/30">
                        {pathway.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>{pathway.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                      {pathway.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pathway.tagline}
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-5 text-xs text-slate-300">
                    
                    {/* Eligibility & Estimated Fees */}
                    <div className="space-y-2 pb-3 border-b border-slate-800/60">
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                          Eligibility Criteria:
                        </span>
                        <p className="text-slate-200">{pathway.eligibility}</p>
                      </div>

                      <div className="pt-2 grid grid-cols-2 gap-2">
                        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-[10px] text-slate-400 block font-medium">Govt. Approx Fee:</span>
                          <span className="font-semibold text-emerald-400 text-xs">{pathway.approxFees.govt}</span>
                        </div>
                        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-[10px] text-slate-400 block font-medium">Private Approx Fee:</span>
                          <span className="font-semibold text-slate-200 text-xs">{pathway.approxFees.private}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Branches / Streams */}
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Key Branches / Specializations:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pathway.keyBranchesOrStreams.slice(0, 5).map((branch) => (
                          <span
                            key={branch}
                            className="text-[11px] px-2 py-0.5 rounded bg-slate-850 text-slate-200 border border-slate-800"
                          >
                            {branch}
                          </span>
                        ))}
                        {pathway.keyBranchesOrStreams.length > 5 && (
                          <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-400">
                            +{pathway.keyBranchesOrStreams.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Pros & Cons Preview */}
                    <div className="space-y-3 pt-1">
                      <div>
                        <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Key Advantages:</span>
                        </span>
                        <ul className="space-y-1">
                          {pathway.pros.slice(0, 2).map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-slate-300">
                              <span className="text-emerald-400 font-bold">•</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                          <XCircle className="w-3.5 h-3.5 text-rose-400" />
                          <span>Limitations to Consider:</span>
                        </span>
                        <ul className="space-y-1">
                          {pathway.cons.slice(0, 2).map((con, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-slate-300">
                              <span className="text-rose-400 font-bold">•</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Ideal Candidate Profile */}
                    <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-900/30">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                        Best Suited For:
                      </span>
                      <p className="text-[11px] text-slate-300 leading-relaxed italic">
                        "{pathway.idealFor}"
                      </p>
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-slate-800/80 bg-slate-900/30 mt-4 space-y-2">
                  <button
                    onClick={() => onOpenDetailModal(pathway)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Info className="w-3.5 h-3.5 text-blue-400" />
                    <span>View In-Depth Syllabus & Careers</span>
                  </button>

                  <button
                    onClick={() => onSelectPathway(pathway.id)}
                    className={`w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-medium transition-colors ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{isSelected ? 'Currently Selected' : 'Select for Comparison'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Disclaimer Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Admissions Note:</strong> State eligibility percentages, counseling dates, and fee structures are indicative and vary by respective state directorates, AICTE notifications, and academic year.
            </span>
          </div>
          <span className="text-[11px] text-slate-500 whitespace-nowrap">Updated for 2024-2025 Cycle</span>
        </div>

      </div>
    </section>
  );
};
