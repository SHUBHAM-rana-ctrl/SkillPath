import React, { useState } from 'react';
import { assessmentQuestions, calculateAssessmentResult } from '../data/assessmentData';
import { AssessmentResult } from '../types';
import { useStudent } from '../context/StudentContext';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Printer, 
  Bookmark, 
  RotateCcw,
  AlertCircle,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPathwayFromTest?: (pathwayKey: 'diploma' | 'intermediate' | 'iti') => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onSelectPathwayFromTest
}) => {
  const { saveAssessmentResult, addToast } = useStudent();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  if (!isOpen) return null;

  const totalQuestions = assessmentQuestions.length;
  const currentQ = assessmentQuestions[currentStep];
  const selectedOptionId = answers[currentQ?.id];

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const handleNext = () => {
    if (!selectedOptionId) {
      addToast('Please select one option to proceed.', 'warning');
      return;
    }

    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Complete test
      const computed = calculateAssessmentResult(answers);
      const fullResult: AssessmentResult = {
        ...computed,
        answersSummary: answers,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      };
      setResult(fullResult);
      setIsCompleted(true);
      saveAssessmentResult(fullResult);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    setResult(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const progressPercent = Math.round(((currentStep + 1) / totalQuestions) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">
                SkillPath Career-Interest Assessment
              </h2>
              <p className="text-[11px] text-slate-400">
                Rule-based guidance engine for 10th standard students
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!isCompleted ? (
          <div className="p-6 md:p-8 space-y-6">
            
            {/* Progress Header */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                <span className="uppercase tracking-wider text-blue-400">
                  Question {currentStep + 1} of {totalQuestions}
                </span>
                <span>{progressPercent}% Complete</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Category: {currentQ.category}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                {currentQ.question}
              </h3>
              <p className="text-xs text-slate-400">
                {currentQ.description}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-150 flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-blue-600/15 border-blue-500 text-white shadow-md shadow-blue-500/10 ring-1 ring-blue-500'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'border-blue-400 bg-blue-500 text-white'
                          : 'border-slate-600 bg-slate-800'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>

                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white leading-snug">
                        {opt.text}
                      </div>
                      {opt.subtext && (
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {opt.subtext}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border transition-colors ${
                  currentStep === 0
                    ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 text-xs font-semibold px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all"
              >
                <span>{currentStep === totalQuestions - 1 ? 'Generate Recommendations' : 'Next Question'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ) : (
          /* Assessment Results Screen */
          <div className="p-6 md:p-8 space-y-6 print:p-0 print:text-black">
            
            {/* Result Header Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 via-slate-900 to-emerald-950/30 border border-blue-500/30">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Top Suggested Pathway ({result?.scorePercentage}% Match)</span>
                </span>
                <span className="text-[11px] text-slate-400">{result?.date}</span>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight">
                {result?.topPathway}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                <span className="text-slate-400">Viable Alternative:</span>
                <span className="font-semibold text-blue-400">{result?.alternativeOption}</span>
              </div>
            </div>

            {/* Why This Suits You (Rationale) */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Why This Direction Suits Your Answers:</span>
              </h4>
              <ul className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
                {result?.rationale.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Streams / Branches */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                Suggested Specific Streams / Trades to Target:
              </h4>
              <div className="flex flex-wrap gap-2">
                {result?.suggestedStreams.map((stream, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/30"
                  >
                    {stream}
                  </span>
                ))}
              </div>
            </div>

            {/* Immediate Next Action Steps */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                Recommended Immediate Next Steps:
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                {result?.recommendedImmediateSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-400 flex items-center justify-center shrink-0 font-bold text-[11px]">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Guidance Disclaimer */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Important Ethical Guidance:</strong> This assessment is an indicative decision-support tool based on your self-reported preferences. It does not replace psychometric evaluation or direct counseling with school teachers, parents, and licensed educational advisors.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 print:hidden">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Assessment</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-300" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={() => {
                    if (result && onSelectPathwayFromTest) {
                      onSelectPathwayFromTest(result.topPathwayKey);
                    }
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all"
                >
                  <span>Explore {result?.topPathwayKey.toUpperCase()} Courses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
