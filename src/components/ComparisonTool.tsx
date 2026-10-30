import React, { useState } from 'react';
import { GitCompare, CheckCircle2, AlertCircle, Sparkles, Plus, X } from 'lucide-react';

interface CompareProfile {
  id: string;
  name: string;
  category: string;
  duration: string;
  eligibility: string;
  learningStyle: string;
  practicalRatio: string;
  approxGovtFee: string;
  approxPrivateFee: string;
  directJobReadiness: string;
  furtherEducation: string;
  careerFlexibility: string;
  entranceExams: string;
  majorPros: string;
  majorCons: string;
}

const comparisonOptions: CompareProfile[] = [
  {
    id: 'diploma',
    name: 'Polytechnic Diploma in Engg',
    category: 'Technical Vocational',
    duration: '3 Years (6 Semesters)',
    eligibility: '10th pass with Maths & Science (35% - 50% min)',
    learningStyle: 'Heavy laboratory experiments, CAD workshops, applied technical formulas',
    practicalRatio: '60% Practical / 40% Theory',
    approxGovtFee: '₹6,000 - ₹18,000 / yr',
    approxPrivateFee: '₹40,000 - ₹95,000 / yr',
    directJobReadiness: 'High: Eligible for Junior Engineer (JE), Technical Assistant, and PSU roles at age 19',
    furtherEducation: 'Direct 2nd Year B.Tech / B.E. (Lateral Entry DSE) - Saves 1 Year',
    careerFlexibility: 'Moderate: Specializes early in engineering; difficult to shift to commerce or medicine later',
    entranceExams: 'State Polytechnic CET (in select states) or 10th Board Merit CAP rounds',
    majorPros: 'Early practical engineering exposure; skips 12th competitive stress for lateral entry B.Tech',
    majorCons: 'Direct 2nd year B.Tech seats are limited to 10% lateral quota'
  },
  {
    id: 'intermediate-pcm',
    name: '11th & 12th Science (PCM)',
    category: 'Academic Higher Secondary',
    duration: '2 Years (Class 11 + 12)',
    eligibility: '10th pass with strong Science and Mathematics aptitude',
    learningStyle: 'Intense theoretical study, mathematical derivations, physics problem solving',
    practicalRatio: '25% Practical Lab / 75% Theory',
    approxGovtFee: '₹3,000 - ₹15,000 / yr',
    approxPrivateFee: '₹35,000 - ₹1,40,000 / yr (+ coaching)',
    directJobReadiness: 'Low: Pure academic qualification; bachelor’s degree is essential for employment',
    furtherEducation: '4-Year B.Tech / B.E. at IITs, NITs; B.Arch; NDA; B.Sc. Pure Science',
    careerFlexibility: 'High: Eligible for Engineering, Defense, Aviation, B.Com, Law, or Design',
    entranceExams: 'JEE Main, JEE Advanced, State CET, BITSAT, NDA, NATA',
    majorPros: 'Gateway to premier national institutes (IIT/NIT) and keeps almost all university streams open',
    majorCons: 'Extreme competitive pressure in entrance tests; coaching expenses can be substantial'
  },
  {
    id: 'intermediate-pcb',
    name: '11th & 12th Science (PCB)',
    category: 'Medical / Life Sciences',
    duration: '2 Years (Class 11 + 12)',
    eligibility: '10th pass with interest in Biology and Chemistry',
    learningStyle: 'Conceptual biology, anatomical systems, taxonomy, organic reaction mechanisms',
    practicalRatio: '30% Practical Lab / 70% Theory',
    approxGovtFee: '₹3,000 - ₹15,000 / yr',
    approxPrivateFee: '₹35,000 - ₹1,50,000 / yr (+ coaching)',
    directJobReadiness: 'Low: Foundation phase; professional degree (MBBS/B.Pharm/B.Sc) required',
    furtherEducation: 'MBBS, BDS, BAMS, B.Pharm, B.Sc. Nursing, Physiotherapy, Biotechnology',
    careerFlexibility: 'Moderate: Direct gateway to all medical/health sciences; eligible for Arts/Law degrees',
    entranceExams: 'NEET-UG (National Eligibility cum Entrance Test)',
    majorPros: 'Sole pathway for becoming a doctor, dentist, pharmacist, or clinical healthcare leader',
    majorCons: 'Only ~5% of NEET applicants secure government medical seats; long study duration'
  },
  {
    id: 'intermediate-commerce',
    name: '11th & 12th Commerce',
    category: 'Business & Finance',
    duration: '2 Years (Class 11 + 12)',
    eligibility: '10th pass from any recognized board',
    learningStyle: 'Financial accounting ledgers, economic principles, commercial law, and trade analysis',
    practicalRatio: '15% Practical Project / 85% Theory',
    approxGovtFee: '₹2,500 - ₹10,000 / yr',
    approxPrivateFee: '₹25,000 - ₹1,10,000 / yr',
    directJobReadiness: 'Low to Moderate: Junior bookkeeping/tally roles possible, but degree recommended',
    furtherEducation: 'CA (Chartered Accountancy), CS, CMA, B.Com (Hons), BBA, IPM (IIMs)',
    careerFlexibility: 'Moderate: Gateway to finance, banking, corporate law, business entrepreneurship',
    entranceExams: 'CA Foundation, IPMAT (for IIMs), CUET (for central universities)',
    majorPros: 'Lucrative corporate careers (CA/CFA/Banking) with lower institutional fees than private engineering',
    majorCons: 'Professional exams like CA have historically rigorous single-digit pass percentages'
  },
  {
    id: 'intermediate-arts',
    name: '11th & 12th Arts / Humanities',
    category: 'Social Sciences & Law',
    duration: '2 Years (Class 11 + 12)',
    eligibility: '10th pass from any recognized board',
    learningStyle: 'Qualitative analysis, essay writing, historical critique, political theories, literature',
    practicalRatio: '10% Project / 90% Theory & Discussion',
    approxGovtFee: '₹2,000 - ₹8,000 / yr',
    approxPrivateFee: '₹20,000 - ₹90,000 / yr',
    directJobReadiness: 'Low: Pure academic base; requires degree or professional training',
    furtherEducation: 'B.A. (Hons), 5-Year Integrated LLB (National Law Universities), B.Des, Journalism',
    careerFlexibility: 'High: Ideal for Civil Services (UPSC), Judiciary, Policy Research, Design, Media',
    entranceExams: 'CLAT (for Law), CUET, NID-DAT / UCEED (for Design)',
    majorPros: 'Fosters critical thinking and reading; prime foundational grounding for UPSC civil services and law',
    majorCons: 'Corporate campus placements are fewer compared to engineering and commerce degrees'
  },
  {
    id: 'iti',
    name: 'ITI (Industrial Training Institute)',
    category: 'Vocational Technical Trade',
    duration: '1 Year or 2 Years',
    eligibility: '10th pass (Maths & Science for technical trades like Electrician/Fitter)',
    learningStyle: 'Intensive hands-on workshop machining, tools, welding, wiring, assembly',
    practicalRatio: '70% Workshop Practical / 30% Theory',
    approxGovtFee: '₹1,500 - ₹4,500 / yr (Subsidized)',
    approxPrivateFee: '₹15,000 - ₹38,000 / yr',
    directJobReadiness: 'Extremely High: Direct recruitment as industrial technician or Railway ALP at age 18',
    furtherEducation: 'Apprenticeship (NAC), Lateral Entry to 2nd Year Polytechnic Diploma, CITS Instructor',
    careerFlexibility: 'Focused: High specialized craftsmanship; moving to desk/corporate requires upgrading',
    entranceExams: 'State ITI Merit Admission Portal',
    majorPros: 'Fastest route to financial independence; large reserved government vacancies in Indian Railways',
    majorCons: 'Starting salaries can be modest initially; physical workshop labor required'
  }
];

export const ComparisonTool: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['diploma', 'intermediate-pcm', 'iti']);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length <= 2) {
        return; // Keep at least 2 for comparison
      }
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      if (selectedIds.length >= 3) {
        // Replace the last one
        setSelectedIds([selectedIds[0], selectedIds[1], id]);
      } else {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const selectedProfiles = comparisonOptions.filter((opt) => selectedIds.includes(opt.id));

  return (
    <section id="compare" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GitCompare className="w-3.5 h-3.5" />
            <span>Side-by-Side Decision Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Compare Educational Pathways
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Select 2 or 3 pathways to inspect differences across fees, duration, practical exposure, and long-term career growth.
          </p>
        </div>

        {/* Selection Bar */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 mb-8">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-semibold text-slate-300">
              Select 2 to 3 Options to Compare ({selectedIds.length}/3 selected):
            </span>
            <span className="text-slate-500 hidden sm:inline">Click any badge to toggle</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {comparisonOptions.map((opt) => {
              const isChecked = selectedIds.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  onClick={() => toggleSelect(opt.id)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                    isChecked
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span>{opt.name}</span>
                  {isChecked ? (
                    <X className="w-3.5 h-3.5 text-blue-200" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                  Feature / Parameter
                </th>
                {selectedProfiles.map((p) => (
                  <th key={p.id} className="p-4 sm:p-5 text-sm font-extrabold text-white border-l border-slate-800">
                    <div className="text-blue-400 text-[11px] font-semibold uppercase tracking-wider block mb-0.5">
                      {p.category}
                    </div>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm text-slate-300">
              {/* Duration */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-slate-400 bg-slate-950/30">
                  Course Duration
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 font-bold text-white border-l border-slate-800">
                    {p.duration}
                  </td>
                ))}
              </tr>

              {/* Eligibility */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-slate-400 bg-slate-950/30">
                  Eligibility from 10th
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 border-l border-slate-800">
                    {p.eligibility}
                  </td>
                ))}
              </tr>

              {/* Learning Style */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-slate-400 bg-slate-950/30">
                  Learning Methodology
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 border-l border-slate-800 leading-relaxed text-xs">
                    {p.learningStyle}
                  </td>
                ))}
              </tr>

              {/* Practical Ratio */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-slate-400 bg-slate-950/30">
                  Practical vs Theory Ratio
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 border-l border-slate-800 font-semibold text-emerald-400">
                    {p.practicalRatio}
                  </td>
                ))}
              </tr>

              {/* Fees */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-slate-400 bg-slate-950/30">
                  Approx Annual Tuition
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 border-l border-slate-800 text-xs space-y-1">
                    <div><span className="text-slate-500">Govt:</span> <span className="text-emerald-400 font-semibold">{p.approxGovtFee}</span></div>
                    <div><span className="text-slate-500">Pvt:</span> <span className="text-slate-300 font-medium">{p.approxPrivateFee}</span></div>
                  </td>
                ))}
              </tr>

              {/* Direct Job Readiness */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-slate-400 bg-slate-950/30">
                  Direct Job Readiness
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 border-l border-slate-800 leading-relaxed text-xs">
                    {p.directJobReadiness}
                  </td>
                ))}
              </tr>

              {/* Further Education */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-slate-400 bg-slate-950/30">
                  Higher Education Progression
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 border-l border-slate-800 leading-relaxed text-xs text-blue-300 font-medium">
                    {p.furtherEducation}
                  </td>
                ))}
              </tr>

              {/* Major Advantages */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-emerald-400 bg-slate-950/30">
                  Key Distinct Advantage
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 border-l border-slate-800 leading-relaxed text-xs text-slate-200">
                    <span className="text-emerald-400 font-bold mr-1">✓</span>
                    {p.majorPros}
                  </td>
                ))}
              </tr>

              {/* Major Considerations */}
              <tr className="hover:bg-slate-900/50">
                <td className="p-4 font-semibold text-rose-400 bg-slate-950/30">
                  Limitation to Consider
                </td>
                {selectedProfiles.map((p) => (
                  <td key={p.id} className="p-4 border-l border-slate-800 leading-relaxed text-xs text-slate-300">
                    <span className="text-rose-400 font-bold mr-1">⚠</span>
                    {p.majorCons}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500 italic">
            *No single pathway is universally superior. The ideal option depends on whether your priority is early employment, theoretical mastery, or university degrees.
          </p>
        </div>

      </div>
    </section>
  );
};
