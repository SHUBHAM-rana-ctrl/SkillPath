import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { coursesData } from '../data/coursesData';
import { scholarshipsData } from '../data/scholarshipsData';
import { resourcesData } from '../data/resourcesData';
import { CourseItem } from '../types';
import { 
  X, 
  User, 
  Bookmark, 
  Award, 
  BookOpen, 
  CheckSquare, 
  Sparkles, 
  LogOut, 
  Trash2, 
  Plus, 
  ExternalLink,
  MapPin,
  Calendar,
  Layers
} from 'lucide-react';

interface StudentDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAssessment: () => void;
  onSelectCourseDetail: (course: CourseItem) => void;
}

export const StudentDashboardModal: React.FC<StudentDashboardModalProps> = ({
  isOpen,
  onClose,
  onOpenAssessment,
  onSelectCourseDetail
}) => {
  const { 
    student, 
    logout, 
    removeCourse, 
    removeScholarship, 
    removeResource, 
    toggleChecklistItem, 
    addChecklistItem 
  } = useStudent();

  const [activeTab, setActiveTab] = useState<'bookmarks' | 'assessment' | 'checklist'>('bookmarks');
  const [newChecklistText, setNewChecklistText] = useState('');

  if (!isOpen || !student) return null;

  const savedCourses = coursesData.filter((c) => student.savedCourses.includes(c.id));
  const savedScholarships = scholarshipsData.filter((s) => student.savedScholarships.includes(s.id));
  const savedResources = resourcesData.filter((r) => student.savedResources.includes(r.id));

  const handleAddChecklist = (e: React.FormEvent) => {
    e.preventDefault();
    if (newChecklistText.trim()) {
      addChecklistItem(newChecklistText.trim());
      setNewChecklistText('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Profile Bar */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-blue-600/30">
              {student.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">{student.name}</h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30">
                  {student.currentStatus}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>{student.email}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{student.state}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6">
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'bookmarks'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved Items ({savedCourses.length + savedScholarships.length + savedResources.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('assessment')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'assessment'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Test Results ({student.assessmentHistory.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'checklist'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Action Checklist</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: BOOKMARKS */}
          {activeTab === 'bookmarks' && (
            <div className="space-y-6">
              
              {/* Courses */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>Bookmarked Courses ({savedCourses.length})</span>
                </h3>

                {savedCourses.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {savedCourses.map((c) => (
                      <div
                        key={c.id}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start justify-between gap-2"
                      >
                        <div
                          className="flex-1 cursor-pointer"
                          onClick={() => {
                            onClose();
                            onSelectCourseDetail(c);
                          }}
                        >
                          <span className="text-[10px] uppercase font-bold text-blue-400 block mb-0.5">
                            {c.pathway} • {c.duration}
                          </span>
                          <h4 className="text-xs font-bold text-white hover:text-blue-300">
                            {c.name}
                          </h4>
                          <span className="text-[11px] text-slate-400 block mt-1">
                            {c.category}
                          </span>
                        </div>

                        <button
                          onClick={() => removeCourse(c.id)}
                          className="text-slate-500 hover:text-rose-400 p-1"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">No courses bookmarked yet.</p>
                )}
              </div>

              {/* Scholarships */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Saved Scholarships ({savedScholarships.length})</span>
                </h3>

                {savedScholarships.length > 0 ? (
                  <div className="space-y-2">
                    {savedScholarships.map((s) => (
                      <div
                        key={s.id}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <h4 className="font-bold text-white">{s.title}</h4>
                          <div className="text-emerald-400 font-semibold text-[11px] mt-0.5">
                            {s.awardAmount}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={s.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold"
                          >
                            Apply Portal
                          </a>
                          <button
                            onClick={() => removeScholarship(s.id)}
                            className="text-slate-500 hover:text-rose-400 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">No scholarships saved yet.</p>
                )}
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span>Bookmarked Resources ({savedResources.length})</span>
                </h3>

                {savedResources.length > 0 ? (
                  <div className="space-y-2">
                    {savedResources.map((r) => (
                      <div
                        key={r.id}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <h4 className="font-bold text-white">{r.title}</h4>
                          <div className="text-slate-400 text-[11px]">
                            {r.publisher} • {r.type}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={r.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:underline flex items-center gap-1 text-[11px]"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <button
                            onClick={() => removeResource(r.id)}
                            className="text-slate-500 hover:text-rose-400 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">No resources bookmarked yet.</p>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: ASSESSMENT HISTORY */}
          {activeTab === 'assessment' && (
            <div className="space-y-4">
              {student.assessmentHistory.length > 0 ? (
                student.assessmentHistory.map((report, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {report.scorePercentage}% Pathway Match
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{report.date}</span>
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      Recommended: {report.topPathway}
                    </h4>

                    <div className="text-xs text-slate-300">
                      <strong>Target Streams:</strong> {report.suggestedStreams.join(', ')}
                    </div>

                    <div className="text-xs text-slate-400">
                      <strong>Alternative:</strong> {report.alternativeOption}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 bg-slate-950/40 rounded-2xl border border-slate-800 p-6 space-y-3">
                  <Sparkles className="w-8 h-8 text-slate-500 mx-auto" />
                  <h4 className="text-sm font-bold text-white">No Assessment History Found</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Take the 5-minute career interest questionnaire to identify which post-10th pathway matches your strengths.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenAssessment();
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                  >
                    Start Free Assessment
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                Track necessary documentation, marksheet verification, and admission deadlines.
              </div>

              {/* Add Custom Item */}
              <form onSubmit={handleAddChecklist} className="flex gap-2">
                <input
                  type="text"
                  value={newChecklistText}
                  onChange={(e) => setNewChecklistText(e.target.value)}
                  placeholder="Add custom task (e.g., Get photocopy of caste certificate)..."
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </form>

              {/* Items List */}
              <div className="space-y-2">
                {student.checklistItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                      item.completed
                        ? 'bg-slate-950/40 border-slate-800/60 text-slate-500 line-through'
                        : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => {}}
                      className="rounded border-slate-700 text-blue-600 focus:ring-0 w-4 h-4"
                    />
                    <span className="text-xs font-medium leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
