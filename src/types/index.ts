export type PathwayType = 'diploma' | 'intermediate' | 'iti';

export interface EducationalPathway {
  id: PathwayType;
  title: string;
  badge: string;
  tagline: string;
  duration: string;
  eligibility: string;
  approxFees: {
    govt: string;
    private: string;
  };
  overview: string;
  admissionProcess: string[];
  keyBranchesOrStreams: string[];
  furtherEducation: string[];
  careerOpportunities: string[];
  pros: string[];
  cons: string[];
  idealFor: string;
  officialRegulatoryBody: string;
  colorScheme: {
    primary: string;
    accent: string;
    badgeBg: string;
    badgeText: string;
  };
}

export interface CourseItem {
  id: string;
  name: string;
  pathway: PathwayType;
  category: 'Engineering & Tech' | 'Medical & Life Sciences' | 'Business & Commerce' | 'Humanities & Law' | 'Vocational & Trades';
  duration: string;
  eligibility: string;
  description: string;
  keySubjects: string[];
  careerRoles: string[];
  furtherStudy: string[];
  keySkills: string[];
  regulatoryAuthority: string;
  estimatedFeeRange: string;
  tags: string[];
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  description: string;
  category: string;
  options: {
    id: string;
    text: string;
    subtext?: string;
    weights: {
      diploma: number;
      intermediate_science_pcm: number;
      intermediate_science_pcb: number;
      intermediate_commerce: number;
      intermediate_arts: number;
      iti: number;
    };
  }[];
}

export interface AssessmentResult {
  topPathway: string;
  topPathwayKey: PathwayType;
  scorePercentage: number;
  rationale: string[];
  suggestedStreams: string[];
  recommendedImmediateSteps: string[];
  alternativeOption: string;
  answersSummary: Record<number, string>;
  date: string;
}

export interface ScholarshipItem {
  id: string;
  title: string;
  provider: string;
  level: ('10th' | 'Diploma' | '11th-12th' | 'ITI')[];
  category: 'All' | 'Merit-based' | 'Need-based' | 'Girl Child' | 'Minority' | 'Specially Abled';
  awardAmount: string;
  eligibilityCriteria: string[];
  familyIncomeCeiling: string;
  applicationPeriod: string;
  officialPortal: string;
  portalUrl: string;
  documentsRequired: string[];
  verifiedDate: string;
}

export interface StudyResourceItem {
  id: string;
  title: string;
  category: 'Science' | 'Commerce' | 'Arts & Humanities' | 'Diploma Engineering' | 'ITI Trades' | 'Career Guidance' | 'Entrance Exams';
  type: 'Official Syllabus' | 'Sample Paper' | 'Handbook' | 'Bridge Notes' | 'Portal Link';
  description: string;
  publisher: string;
  officialUrl: string;
  topicsCovered: string[];
  isVerified: boolean;
  pagesOrSize: string;
}

export interface StudentProfile {
  name: string;
  email: string;
  phone?: string;
  currentStatus: '10th Studying' | '10th Passed' | 'Parent/Guardian';
  state: string;
  interestedStream?: string;
  savedCourses: string[];
  savedScholarships: string[];
  savedResources: string[];
  assessmentHistory: AssessmentResult[];
  checklistItems: { id: string; text: string; completed: boolean }[];
}
