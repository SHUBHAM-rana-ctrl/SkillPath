import React, { useState } from 'react';
import { StudentProvider } from './context/StudentContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickDiscovery } from './components/QuickDiscovery';
import { PathwaysSection } from './components/PathwaysSection';
import { CourseExplorer } from './components/CourseExplorer';
import { ComparisonTool } from './components/ComparisonTool';
import { ScholarshipFinder } from './components/ScholarshipFinder';
import { StudyResources } from './components/StudyResources';
import { FAQAndContact } from './components/FAQAndContact';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { AuthModal } from './components/AuthModal';
import { StudentDashboardModal } from './components/StudentDashboardModal';
import { DetailModal } from './components/DetailModal';
import { ToastContainer } from './components/ToastContainer';
import { CourseItem, EducationalPathway, PathwayType } from './types';

export default function App() {
  // Modal states
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // Selected Detail Modal states
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [selectedPathwayDetail, setSelectedPathwayDetail] = useState<EducationalPathway | null>(null);

  // Active pathway selection for comparison/highlighter
  const [selectedPathwayId, setSelectedPathwayId] = useState<PathwayType>('diploma');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPathway = (id: PathwayType) => {
    setSelectedPathwayId(id);
  };

  const handleOpenCourseDetail = (course: CourseItem) => {
    setSelectedPathwayDetail(null);
    setSelectedCourse(course);
  };

  const handleOpenPathwayDetail = (pathway: EducationalPathway) => {
    setSelectedCourse(null);
    setSelectedPathwayDetail(pathway);
  };

  const handleCloseDetailModal = () => {
    setSelectedCourse(null);
    setSelectedPathwayDetail(null);
  };

  return (
    <StudentProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
        
        {/* Sticky Header with Navigation & Profile */}
        <Header
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenDashboard={() => setIsDashboardOpen(true)}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* Main Content Area */}
        <main>
          {/* Hero Section */}
          <Hero
            onOpenAssessment={() => setIsAssessmentOpen(true)}
            onSelectPathway={handleSelectPathway}
          />

          {/* Quick Discovery Dashboard ("What Are You Looking For?") */}
          <QuickDiscovery
            onOpenAssessment={() => setIsAssessmentOpen(true)}
            onNavigateSection={scrollToSection}
          />

          {/* Core Educational Pathways (Diploma, 11th/12th, ITI) */}
          <PathwaysSection
            selectedPathwayId={selectedPathwayId}
            onSelectPathway={handleSelectPathway}
            onOpenDetailModal={handleOpenPathwayDetail}
            onNavigateToCompare={() => scrollToSection('compare')}
          />

          {/* Course and Career Explorer */}
          <CourseExplorer
            onSelectCourseDetail={handleOpenCourseDetail}
            initialPathwayFilter="all"
          />

          {/* Side-by-Side Pathway Comparator */}
          <ComparisonTool />

          {/* Verified Scholarship Finder */}
          <ScholarshipFinder />

          {/* Curated Study Resources & Syllabi */}
          <StudyResources />

          {/* FAQ & Counseling Inquiry Helpdesk */}
          <FAQAndContact />

          {/* About, Principles & Admissions Disclaimers */}
          <AboutSection />
        </main>

        {/* Polished Footer */}
        <Footer />

        {/* Interactive Assessment Modal */}
        <AssessmentModal
          isOpen={isAssessmentOpen}
          onClose={() => setIsAssessmentOpen(false)}
          onSelectPathwayFromTest={(key) => {
            setSelectedPathwayId(key);
            scrollToSection('courses');
          }}
        />

        {/* Student Auth Modal */}
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
        />

        {/* Student Profile & Bookmarks Dashboard */}
        <StudentDashboardModal
          isOpen={isDashboardOpen}
          onClose={() => setIsDashboardOpen(false)}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onSelectCourseDetail={handleOpenCourseDetail}
        />

        {/* Deep Detail Modal (Course / Pathway) */}
        <DetailModal
          course={selectedCourse}
          pathway={selectedPathwayDetail}
          onClose={handleCloseDetailModal}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* Actionable Toast Notifications */}
        <ToastContainer />

      </div>
    </StudentProvider>
  );
}
