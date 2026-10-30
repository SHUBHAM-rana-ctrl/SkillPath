import React, { useState, useMemo } from 'react';
import { coursesData } from '../data/coursesData';
import { CourseItem, PathwayType } from '../types';
import { useStudent } from '../context/StudentContext';
import { 
  Search, 
  Filter, 
  Bookmark, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowUpDown
} from 'lucide-react';

interface CourseExplorerProps {
  onSelectCourseDetail: (course: CourseItem) => void;
  initialPathwayFilter?: PathwayType | 'all';
}

export const CourseExplorer: React.FC<CourseExplorerProps> = ({
  onSelectCourseDetail,
  initialPathwayFilter = 'all'
}) => {
  const { isCourseSaved, saveCourse, removeCourse } = useStudent();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPathway, setSelectedPathway] = useState<PathwayType | 'all'>(initialPathwayFilter);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'duration-asc' | 'duration-desc'>('relevance');

  const categories = [
    'all',
    'Engineering & Tech',
    'Medical & Life Sciences',
    'Business & Commerce',
    'Humanities & Law',
    'Vocational & Trades'
  ];

  const filteredCourses = useMemo(() => {
    return coursesData
      .filter((course) => {
        // Pathway filter
        if (selectedPathway !== 'all' && course.pathway !== selectedPathway) {
          return false;
        }

        // Category filter
        if (selectedCategory !== 'all' && course.category !== selectedCategory) {
          return false;
        }

        // Search Query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = course.name.toLowerCase().includes(q);
          const matchDesc = course.description.toLowerCase().includes(q);
          const matchSubjects = course.keySubjects.some((s) => s.toLowerCase().includes(q));
          const matchRoles = course.careerRoles.some((r) => r.toLowerCase().includes(q));
          const matchTags = course.tags.some((t) => t.toLowerCase().includes(q));
          return matchName || matchDesc || matchSubjects || matchRoles || matchTags;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'duration-asc') {
          return a.duration.localeCompare(b.duration);
        }
        if (sortBy === 'duration-desc') {
          return b.duration.localeCompare(a.duration);
        }
        return 0;
      });
  }, [searchQuery, selectedPathway, selectedCategory, sortBy]);

  const handleToggleBookmark = (e: React.MouseEvent, courseId: string) => {
    e.stopPropagation();
    if (isCourseSaved(courseId)) {
      removeCourse(courseId);
    } else {
      saveCourse(courseId);
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Comprehensive Course Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Course & Career Explorer
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl leading-relaxed">
              Search and filter authentic courses across Polytechnic Diplomas, 11th-12th Senior Secondary streams, and ITI Trades.
            </p>
          </div>

          <div className="text-xs text-slate-400 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 shrink-0">
            Showing <strong className="text-white">{filteredCourses.length}</strong> verified courses
          </div>
        </div>

        {/* Search Bar & Primary Filters */}
        <div className="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by course name, branch, trade, or job role (e.g., Computer, Electrician, CA, Civil)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Pathway Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedPathway}
                onChange={(e) => setSelectedPathway(e.target.value as PathwayType | 'all')}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Pathways (Diploma, 11/12th, ITI)</option>
                <option value="diploma">Polytechnic Diploma</option>
                <option value="intermediate">11th & 12th (HSC)</option>
                <option value="iti">ITI Vocational Trade</option>
              </select>
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="relevance">Sort by: Recommended</option>
                <option value="duration-asc">Duration: Shortest First (1-2 Yrs)</option>
                <option value="duration-desc">Duration: Longest First (3+ Yrs)</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-slate-800/80">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2 shrink-0">
              Domain:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Fields' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const bookmarked = isCourseSaved(course.id);

              return (
                <div
                  key={course.id}
                  onClick={() => onSelectCourseDetail(course)}
                  className="rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 transition-all duration-200 p-6 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-xl"
                >
                  <div>
                    {/* Top Meta Line */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-blue-600/10 text-blue-300 border-blue-500/30">
                          {course.pathway.toUpperCase()}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {course.category}
                        </span>
                      </div>

                      <button
                        onClick={(e) => handleToggleBookmark(e, course.id)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          bookmarked
                            ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                            : 'border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-900'
                        }`}
                        title={bookmarked ? 'Remove from bookmarks' : 'Bookmark this course'}
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                      {course.name}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                      {course.description}
                    </p>

                    {/* Key Attributes */}
                    <div className="space-y-2 py-3 border-y border-slate-800/60 text-xs">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-blue-400" />
                          <span>Duration:</span>
                        </span>
                        <span className="font-semibold text-slate-200">{course.duration}</span>
                      </div>

                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Next Step:</span>
                        </span>
                        <span className="font-medium text-emerald-400 max-w-[170px] truncate text-right">
                          {course.furtherStudy[0]}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {course.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                    <span>View Syllabus & Roles</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-950/40 rounded-2xl border border-slate-800 p-8">
            <Filter className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No courses match your active search filters</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-4">
              Try adjusting your keyword query or resetting the category and pathway selections.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedPathway('all');
                setSelectedCategory('all');
              }}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
