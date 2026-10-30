import React from 'react';
import { Compass, GitCompare, Briefcase, Award, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

interface QuickDiscoveryProps {
  onOpenAssessment: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const QuickDiscovery: React.FC<QuickDiscoveryProps> = ({
  onOpenAssessment,
  onNavigateSection
}) => {
  const discoveryItems = [
    {
      id: 'courses',
      title: 'Explore Courses After 10th',
      description: 'Search 20+ specialized diplomas, senior secondary streams, and trade courses with subjects and jobs.',
      icon: Compass,
      action: () => onNavigateSection('courses'),
      badge: '20+ Courses'
    },
    {
      id: 'compare',
      title: 'Compare Diploma vs 11th/12th vs ITI',
      description: 'Side-by-side analysis of fee ranges, course duration, hands-on exposure, and career growth potential.',
      icon: GitCompare,
      action: () => onNavigateSection('compare'),
      badge: 'Side-by-Side Matrix'
    },
    {
      id: 'careers',
      title: 'Discover Career Opportunities',
      description: 'Find out which path leads to Junior Engineer, Doctor, Software Developer, Railway Technician, or CA.',
      icon: Briefcase,
      action: () => onNavigateSection('pathways'),
      badge: 'Real Job Roles'
    },
    {
      id: 'scholarships',
      title: 'Find Scholarships & Grants',
      description: 'Discover government financial aid (AICTE Pragati, Post-Matric, NMMSS) with eligibility checklists.',
      icon: Award,
      action: () => onNavigateSection('scholarships'),
      badge: 'Govt Verified'
    },
    {
      id: 'resources',
      title: 'Access Study Materials & Syllabi',
      description: 'Free access to NCERT textbooks, Bharat Skills ITI trade modules, and Polytechnic CET question patterns.',
      icon: BookOpen,
      action: () => onNavigateSection('resources'),
      badge: 'Verified Links'
    },
    {
      id: 'assessment',
      title: 'Take Career-Interest Assessment',
      description: 'Answer 7 guided questions to identify which educational path matches your abilities and goals.',
      icon: Sparkles,
      action: onOpenAssessment,
      badge: '5-Min Free Test'
    }
  ];

  return (
    <section className="py-12 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Quick Discovery Dashboard
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              What Are You Looking For?
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Jump directly to any tool, comparison, or directory to explore your options.
            </p>
          </div>
          <div className="text-xs text-slate-500 hidden md:block">
            6 Specialized Tools for 10th Standard Decision Making
          </div>
        </div>

        {/* Shortcuts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {discoveryItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-blue-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-300 group-hover:text-white">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
