import React, { useState } from 'react';
import { faqData, FAQItem } from '../data/faqData';
import { useStudent } from '../context/StudentContext';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const FAQAndContact: React.FC = () => {
  const { addToast } = useStudent();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqCategory, setFaqCategory] = useState<string>('All');

  // Contact Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subjectTopic, setSubjectTopic] = useState('Choosing between Diploma & 11th Science');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; time: string } | null>(null);

  const categories = ['All', 'General', 'Diploma', '11th-12th', 'ITI', 'Admissions & Scholarships'];

  const filteredFaqs = faqData.filter((item) => {
    if (faqCategory === 'All') return true;
    return item.category === faqCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      addToast('Please fill all required fields.', 'warning');
      return;
    }

    setIsSubmitting(true);
    // Simulate real request turnaround
    setTimeout(() => {
      const ticketId = 'SP-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedTicket({
        id: ticketId,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setIsSubmitting(false);
      addToast('Inquiry submitted! Counselor ticket registered.', 'success');
      // Reset form
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 600);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers to Frequent 10th Standard Dilemmas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Clear, honest answers to the most common queries students and parents ask after 10th standard results.
          </p>
        </div>

        {/* Category Tabs for FAQs */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFaqCategory(cat)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                faqCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 mb-16">
          {filteredFaqs.map((item) => {
            const isOpen = openFaqId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 bg-slate-950/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Counseling & Direct Inquiry Form */}
        <div id="contact" className="max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl scroll-mt-14">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Info Column */}
            <div className="md:col-span-5 p-8 bg-gradient-to-br from-blue-950/80 to-slate-950 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider mb-3">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Student & Parent Helpdesk</span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  Have a Specific Question?
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Need personalized advice on state diploma merit cutoffs, stream choice, or scholarship eligibility? Send your query to our voluntary educational guidance team.
                </p>

                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Response Time: Typically within 24-48 hours</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Free Guidance — No Commercial Spam</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 text-[11px] text-slate-500">
                Data provided is strictly utilized to respond to your specific academic inquiry under our student privacy charter.
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:col-span-7 p-8 bg-slate-900">
              {submittedTicket ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Inquiry Received</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Your guidance request has been registered with Reference ID:{' '}
                    <strong className="text-blue-400">{submittedTicket.id}</strong> at {submittedTicket.time}.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    A response will be prepared and routed to your email address.
                  </p>
                  <button
                    onClick={() => setSubmittedTicket(null)}
                    className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Patil"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Mobile / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Doubt Category
                      </label>
                      <select
                        value={subjectTopic}
                        onChange={(e) => setSubjectTopic(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                      >
                        <option value="Choosing between Diploma & 11th Science">Choosing between Diploma & 11th Science</option>
                        <option value="Polytechnic Lateral Entry to B.Tech">Polytechnic Lateral Entry to B.Tech</option>
                        <option value="ITI Trades & Railway Employment">ITI Trades & Railway Employment</option>
                        <option value="Scholarship Application Help">Scholarship Application Help</option>
                        <option value="Commerce with or without Maths">Commerce with or without Maths</option>
                        <option value="Low 10th Marks Guidance">Low 10th Marks Guidance</option>
                        <option value="Other Educational Dilemma">Other Educational Dilemma</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Your Question or Situation Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your current 10th marks/expected percentage, subjects you like, and your dilemma..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Registering Inquiry...' : 'Submit Guidance Request'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
