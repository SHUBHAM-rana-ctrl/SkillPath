import React from 'react';
import { CourseItem, EducationalPathway } from '../types';
import { useStudent } from '../context/StudentContext';
import { 
  X, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Bookmark, 
  ShieldCheck, 
  Layers, 
  BookOpen, 
  Building 
} from 'lucide-react';

interface DetailModalProps {
  course: CourseItem | null;
  pathway: EducationalPathway | null;
  onClose: () => void;
  onOpenAssessment?: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  course,
  pathway,
  onClose,
  onOpenAssessment
}) => {
  const { isCourseSaved, saveCourse, removeCourse } = useStudent();

  if (!course && !pathway) return null;

  const isCourse = !!course;
  const itemTitle = course ? course.name : pathway!.title;
  const itemTagline = course ? course.description : pathway!.tagline;
  const bookmarked = course ? isCourseSaved(course.id) : false;

  const toggleBookmark = () => {
    if (course) {
      if (bookmarked) {
        removeCourse(course.id);
      } else {
        saveCourse(course.id);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
              {isCourse ? `Course Profile • ${course?.category}` : 'Educational Pathway Blueprint'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isCourse && (
              <button
                onClick={toggleBookmark}
                className={`p-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                  bookmarked
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                    : 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Bookmark className="w-4 h-4 fill-current" />
                <span className="hidden sm:inline">{bookmarked ? 'Saved' : 'Save Course'}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-slate-300">
          
          {/* Main Title & Tagline */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {itemTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {itemTagline}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs">
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                Duration
              </span>
              <span className="font-bold text-white text-xs mt-0.5 block">
                {isCourse ? course?.duration : pathway?.duration}
              </span>
            </div>

            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                Authority
              </span>
              <span className="font-bold text-blue-400 text-xs mt-0.5 block truncate">
                {isCourse ? course?.regulatoryAuthority : pathway?.officialRegulatoryBody}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                Indicative Fees
              </span>
              <span className="font-bold text-emerald-400 text-xs mt-0.5 block truncate">
                {isCourse ? course?.estimatedFeeRange : `${pathway?.approxFees.govt} (Govt)`}
              </span>
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Eligibility & Academic Prerequisites:
            </span>
            <p className="text-slate-200 leading-relaxed text-xs">
              {isCourse ? course?.eligibility : pathway?.eligibility}
            </p>
          </div>

          {/* If Course: Subjects & Skills */}
          {isCourse && course && (
            <>
              {/* Subjects */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Key Subjects & Laboratory Modules:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {course.keySubjects.map((sub, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                      <span className="text-blue-400 font-bold">•</span>
                      <span className="text-slate-300">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills to Develop */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Practical Competencies & Skills Acquired:</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {course.keySkills.map((skill, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Progression & Roles */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                  <span>Typical Entry-Level Job Roles:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {course.careerRoles.map((role, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-slate-200">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Further Study Options */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                  <span>Higher Education / Degree Pathways:</span>
                </h4>
                <div className="space-y-1.5 text-xs">
                  {course.furtherStudy.map((study, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-teal-500/5 border border-teal-500/20 text-slate-300 flex items-start gap-2">
                      <span className="text-teal-400 font-bold">→</span>
                      <span>{study}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* If Pathway: Deep Details */}
          {!isCourse && pathway && (
            <>
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Academic & Vocational Framework Overview:
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {pathway.overview}
                </p>
              </div>

              {/* Admission Process */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Standard Admission Process:
                </h4>
                <div className="space-y-2 text-xs">
                  {pathway.admissionProcess.map((proc, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-[10px] flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-slate-300 leading-relaxed">{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Further Education */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Educational Ladder (Further Studies):
                </h4>
                <div className="space-y-1.5 text-xs">
                  {pathway.furtherEducation.map((item, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Key Employment & Industry Destinations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {pathway.careerOpportunities.map((opp, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300">
                      • {opp}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Official Verification Disclaimer */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <strong>Verification Note:</strong> This syllabus blueprint is maintained according to AICTE, DGT, and State Education Board norms. Individual colleges may have supplementary prerequisites.
          </div>

        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <button
            onClick={onClose}
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Close
          </button>

          {onOpenAssessment && (
            <button
              onClick={() => {
                onClose();
                onOpenAssessment();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all"
            >
              <span>Test My Aptitude for This</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
