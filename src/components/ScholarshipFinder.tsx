import React, { useState } from 'react';
import { scholarshipsData } from '../data/scholarshipsData';
import { ScholarshipItem } from '../types';
import { useStudent } from '../context/StudentContext';
import { 
  Award, 
  Search, 
  ExternalLink, 
  Bookmark, 
  CheckCircle2, 
  FileText, 
  IndianRupee, 
  Calendar, 
  ShieldCheck,
  X,
  Filter
} from 'lucide-react';

export const ScholarshipFinder: React.FC = () => {
  const { isScholarshipSaved, saveScholarship, removeScholarship } = useStudent();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [detailItem, setDetailItem] = useState<ScholarshipItem | null>(null);

  const categories = [
    'All',
    'Merit-based',
    'Need-based',
    'Girl Child',
    'Specially Abled'
  ];

  const filteredScholarships = scholarshipsData.filter((item) => {
    if (selectedLevel !== 'all' && !item.level.includes(selectedLevel as any)) {
      return false;
    }
    if (selectedCategory !== 'All' && item.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchProvider = item.provider.toLowerCase().includes(q);
      const matchAmount = item.awardAmount.toLowerCase().includes(q);
      const matchCrit = item.eligibilityCriteria.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchProvider || matchAmount || matchCrit;
    }
    return true;
  });

  const toggleBookmark = (id: string) => {
    if (isScholarshipSaved(id)) {
      removeScholarship(id);
    } else {
      saveScholarship(id);
    }
  };

  return (
    <section id="scholarships" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Government & Institutional Aid</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Scholarship Finder
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl leading-relaxed">
              Discover authentic central and state scholarship programs for 10th pass students pursuing Polytechnic Diplomas, Higher Secondary, and ITI trades.
            </p>
          </div>

          <div className="text-xs text-slate-400 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 shrink-0">
            Direct Portals: National Scholarship Portal (NSP) & AICTE
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scholarship name, girl child schemes, SC/ST aid, or provider..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Level Selector */}
            <div className="md:col-span-4">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Education Levels</option>
                <option value="Diploma">Polytechnic Diploma Only</option>
                <option value="11th-12th">11th & 12th Standard Only</option>
                <option value="ITI">ITI Vocational Trades Only</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-slate-800/80">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2 shrink-0">
              Target Beneficiary:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((item) => {
            const bookmarked = isScholarshipSaved(item.id);

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-xl group"
              >
                <div>
                  {/* Card Meta */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30">
                      {item.category}
                    </span>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        bookmarked
                          ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                          : 'border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-950'
                      }`}
                      title={bookmarked ? 'Remove from bookmarks' : 'Bookmark this scholarship'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-1 mb-3">
                    {item.provider}
                  </p>

                  {/* Award Amount Pill */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 mb-4 space-y-1">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                      Financial Benefit / Grant:
                    </div>
                    <div className="text-xs font-bold text-blue-400">
                      {item.awardAmount}
                    </div>
                  </div>

                  {/* Eligibility Preview */}
                  <div className="space-y-2 text-xs text-slate-300 mb-4">
                    <div className="text-slate-400">
                      <strong className="text-slate-200">Income Limit:</strong> {item.familyIncomeCeiling}
                    </div>
                    <div className="text-slate-400">
                      <strong className="text-slate-200">Applicable For:</strong>{' '}
                      {item.level.join(', ')}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => setDetailItem(item)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Checklist</span>
                  </button>

                  <a
                    href={item.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                  >
                    <span>NSP Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal */}
        {detailItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative my-8">
              <button
                onClick={() => setDetailItem(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30">
                  {detailItem.category} • Verified Central Scheme
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {detailItem.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Offered by {detailItem.provider}
                </p>
              </div>

              {/* Award Amount */}
              <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-blue-300 block">Grant Value:</span>
                  <span className="text-sm font-bold text-blue-400">{detailItem.awardAmount}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Income Ceiling:</span>
                  <span className="text-xs font-semibold text-white">{detailItem.familyIncomeCeiling}</span>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Full Eligibility Conditions:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {detailItem.eligibilityCriteria.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents Required */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Mandatory Document Checklist for Application:
                </h4>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {detailItem.documentsRequired.map((doc, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500">
                  {detailItem.verifiedDate}
                </span>

                <a
                  href={detailItem.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
                >
                  <span>Open {detailItem.officialPortal}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
