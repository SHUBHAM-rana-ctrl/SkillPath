import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, User, Bookmark, ArrowRight, Sparkles } from 'lucide-react';
import { useStudent } from '../context/StudentContext';

interface HeaderProps {
  onOpenAuth: () => void;
  onOpenDashboard: () => void;
  onOpenAssessment: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAuth,
  onOpenDashboard,
  onOpenAssessment
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { student, isAuthenticated } = useStudent();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Pathways', href: '#pathways' },
    { label: 'Courses', href: '#courses' },
    { label: 'Compare', href: '#compare' },
    { label: 'Scholarships', href: '#scholarships' },
    { label: 'Study Resources', href: '#resources' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
    { label: 'About', href: '#about' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section spy
      const sections = ['home', 'pathways', 'courses', 'compare', 'scholarships', 'resources', 'faq', 'contact', 'about'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const savedTotal = (student?.savedCourses.length || 0) + (student?.savedScholarships.length || 0);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-md py-3'
          : 'bg-slate-950/75 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white">SkillPath</span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  After 10th
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Career & Education Guidance</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive
                      ? 'text-white bg-blue-600/20 text-blue-400 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAssessment}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Take Assessment</span>
            </button>

            {isAuthenticated && student ? (
              <button
                onClick={onOpenDashboard}
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                  {student.name.charAt(0).toUpperCase()}
                </div>
                <span className="max-w-[100px] truncate">{student.name}</span>
                {savedTotal > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500 text-white">
                    {savedTotal}
                  </span>
                )}
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenAuth}
                  className="text-xs font-semibold px-3.5 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Log In
                </button>
                <button
                  onClick={onOpenAuth}
                  className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/30 transition-all hover:shadow-blue-600/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAssessment}
              className="text-xs font-medium px-2.5 py-1.5 rounded-md bg-blue-600/20 text-blue-400 border border-blue-500/30 sm:hidden"
            >
              Assessment
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-1 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-blue-600/20 text-blue-400 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-600 text-white font-medium text-sm shadow hover:bg-blue-500 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Career Interest Assessment</span>
            </button>

            {isAuthenticated && student ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDashboard();
                }}
                className="w-full flex items-center justify-between py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 text-white font-medium text-sm"
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-400" />
                  <span>Student Dashboard ({student.name})</span>
                </div>
                <Bookmark className="w-4 h-4 text-amber-400" />
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="py-2 px-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
