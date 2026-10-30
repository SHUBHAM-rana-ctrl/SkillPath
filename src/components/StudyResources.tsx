import React, { useState } from 'react';
import { resourcesData } from '../data/resourcesData';
import { StudyResourceItem } from '../types';
import { useStudent } from '../context/StudentContext';
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  Bookmark, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Eye,
  X
} from 'lucide-react';

export const StudyResources: React.FC = () => {
  const { isResourceSaved, saveResource, removeResource, addToast } = useStudent();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewResource, setPreviewResource] = useState<StudyResourceItem | null>(null);

  const categories = [
    'all',
    'Science',
    'Commerce',
    'Diploma Engineering',
    'ITI Trades',
    'Career Guidance'
  ];

  const filteredResources = resourcesData.filter((res) => {
    if (selectedCategory !== 'all' && res.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = res.title.toLowerCase().includes(q);
      const matchDesc = res.description.toLowerCase().includes(q);
      const matchPub = res.publisher.toLowerCase().includes(q);
      const matchTopics = res.topicsCovered.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchPub || matchTopics;
    }
    return true;
  });

  const toggleBookmark = (id: string) => {
    if (isResourceSaved(id)) {
      removeResource(id);
    } else {
      saveResource(id);
    }
  };

  return (
    <section id="resources" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Official Academic Repository</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Study Materials & Resources
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl leading-relaxed">
              Curated official syllabi, bridge books, and sample question blueprints directly verified from NCERT, DGT Bharat Skills, and AICTE.
            </p>
          </div>

          <div className="text-xs text-slate-400 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 shrink-0">
            Official Public Portals & Free Open Resources
          </div>
        </div>

        {/* Search & Categories Bar */}
        <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search study materials, textbooks, question blueprints, or topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-slate-800/80">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2 shrink-0">
              Discipline:
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
                {cat === 'all' ? 'All Resources' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item) => {
            const bookmarked = isResourceSaved(item.id);

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-xl group"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30">
                      {item.type}
                    </span>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        bookmarked
                          ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                          : 'border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-900'
                      }`}
                      title={bookmarked ? 'Remove bookmark' : 'Bookmark resource'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4 space-y-1 text-xs">
                    <div className="text-slate-400 text-[11px]">
                      Source: <span className="text-slate-200 font-medium">{item.publisher}</span>
                    </div>
                    <div className="text-slate-500 text-[10px]">
                      Format: {item.pagesOrSize}
                    </div>
                  </div>

                  {/* Topics Covered Preview */}
                  <div className="space-y-1 text-xs text-slate-400">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 block">
                      Key Highlights:
                    </span>
                    {item.topicsCovered.slice(0, 2).map((t, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-sky-400 font-bold">•</span>
                        <span className="line-clamp-1">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => setPreviewResource(item)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Blueprint</span>
                  </button>

                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-App Preview Modal */}
        {previewResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative">
              <button
                onClick={() => setPreviewResource(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  {previewResource.type} • {previewResource.category}
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {previewResource.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Published by {previewResource.publisher}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-300">
                <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">
                  Curriculum & Blueprint Coverage:
                </h4>
                <ul className="space-y-1.5">
                  {previewResource.topicsCovered.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs text-slate-300 flex items-center justify-between">
                <span>Access full digital edition on public repository:</span>
                <a
                  href={previewResource.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sky-400 hover:underline flex items-center gap-1"
                >
                  <span>Open {previewResource.publisher.split(' ')[0]}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setPreviewResource(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
