import { StudyResourceItem } from '../types';

export const resourcesData: StudyResourceItem[] = [
  {
    id: 'res-ncert-11-science',
    title: 'NCERT Class 11 Physics, Chemistry & Mathematics Official Textbooks',
    category: 'Science',
    type: 'Official Syllabus',
    description: 'Complete digital textbooks published by the National Council of Educational Research and Training (NCERT). Foundational reading for 11th Science and national entrance exams (JEE & NEET).',
    publisher: 'National Council of Educational Research and Training (NCERT)',
    officialUrl: 'https://ncert.nic.in/textbook.php',
    topicsCovered: [
      'Kinematics, Laws of Motion & Thermodynamics (Physics Part 1 & 2)',
      'Structure of Atom, Chemical Bonding & Hydrocarbons (Chemistry)',
      'Sets, Relations, Trigonometry & Limits and Derivatives (Maths)',
      'Free, authoritative public access without registration fees'
    ],
    isVerified: true,
    pagesOrSize: 'Official NCERT e-Textbooks (PDF Chapters)'
  },
  {
    id: 'res-ncert-11-commerce',
    title: 'NCERT Class 11 Accountancy & Business Studies Official e-Books',
    category: 'Commerce',
    type: 'Official Syllabus',
    description: 'Introductory foundation for commerce students covering debit-credit balance, journalizing, ledger posting, trial balance, and enterprise structures.',
    publisher: 'NCERT Official Portal',
    officialUrl: 'https://ncert.nic.in/textbook.php',
    topicsCovered: [
      'Financial Accounting - Part 1 (Accounting principles, vouchers, cash book)',
      'Business Studies: Nature & purpose of business, forms of business organization',
      'Introductory Microeconomics & Statistics for Economics',
      'Completely aligned with National Curriculum Framework (NCF)'
    ],
    isVerified: true,
    pagesOrSize: 'Complete NCERT Curriculum'
  },
  {
    id: 'res-polytechnic-cet-syllabus',
    title: 'Polytechnic Diploma Entrance Exam (CET / JEECUP) Syllabus & Question Blueprint',
    category: 'Diploma Engineering',
    type: 'Handbook',
    description: 'Detailed blueprint of state Polytechnic entrance examinations based on 10th standard Mathematics and Physical Sciences. Includes chapter-wise weightage and sample problem types.',
    publisher: 'Directorate of Technical Education (State Boards Reference)',
    officialUrl: 'https://jeecup.admissions.nic.in',
    topicsCovered: [
      'Arithmetic, Quadratic Equations, Coordinate Geometry & Trigonometry',
      'Light Reflection & Refraction, Electricity & Magnetic Effects of Electric Current',
      'Chemical Reactions, Acids & Bases, Metals & Non-metals',
      'Negative marking scheme breakdown and time management strategy'
    ],
    isVerified: true,
    pagesOrSize: '16-Page Comprehensive Blueprint'
  },
  {
    id: 'res-bharat-skills-iti',
    title: 'Bharat Skills ITI Trade Theory & Practical Instructional Modules',
    category: 'ITI Trades',
    type: 'Portal Link',
    description: 'The official digital learning repository developed by the Directorate General of Training (DGT) and Ministry of Skill Development. Free access to trade theory, mock tests, and question banks.',
    publisher: 'Directorate General of Training (DGT), Govt of India',
    officialUrl: 'https://bharatskills.gov.in',
    topicsCovered: [
      'Electrician, Fitter, Welder, Machinist & COPA trade instructional books',
      'Workshop Calculation & Science digitized NIMI curriculum',
      'Engineering Drawing standard blueprints',
      'Bilingual learning material in English, Hindi, and regional languages'
    ],
    isVerified: true,
    pagesOrSize: 'Official Central Repository'
  },
  {
    id: 'res-10th-bridge-maths',
    title: '10th to 11th Bridge Notes: Essential Trigonometry & Algebra Fundamentals',
    category: 'Science',
    type: 'Bridge Notes',
    description: 'Curated bridge material summarizing formulas, algebraic identities, graph drawing, and coordinate geometry vital for students transitioning from 10th to 11th Science or Polytechnic.',
    publisher: 'SkillPath Academic Council',
    officialUrl: 'https://ncert.nic.in',
    topicsCovered: [
      'Trigonometric identities: sin, cos, tan angle conversions and compound angles',
      'Factoring polynomials, quadratic formula and parabola graphs',
      'Basic differentiation and integration intuition for physics kinematics',
      'Logarithms and scientific notation for chemistry calculations'
    ],
    isVerified: true,
    pagesOrSize: 'Curated 14-Page Reference Guide'
  },
  {
    id: 'res-polytechnic-curriculum-msbte',
    title: 'AICTE Model Curriculum for 3-Year Diploma Programs',
    category: 'Diploma Engineering',
    type: 'Official Syllabus',
    description: 'National curriculum guidelines prescribed by AICTE for Diploma in Engineering, detailing the credit distribution between workshops, theory, and industrial internships.',
    publisher: 'All India Council for Technical Education (AICTE)',
    officialUrl: 'https://www.aicte-india.org',
    topicsCovered: [
      'First-year common foundational curriculum (Basic Science & Workshop Practical)',
      'Core discipline specialization credit systems (Semesters 3 through 6)',
      'Mandatory 6-week summer industrial training guidelines',
      'Direct Second Year engineering diploma eligibility regulations'
    ],
    isVerified: true,
    pagesOrSize: 'Official AICTE Document'
  },
  {
    id: 'res-cuet-clat-guide',
    title: 'Introductory Primer on National Undergrad Entrances (CUET, CLAT, NID)',
    category: 'Career Guidance',
    type: 'Handbook',
    description: 'Orientation guide for 10th standard students explaining how 11th-12th subject choices impact eligibility for central universities (CUET), National Law Universities (CLAT), and design schools.',
    publisher: 'National Testing Agency (NTA) & Consortium of NLUs Informative Digest',
    officialUrl: 'https://cuet.samarth.ac.in',
    topicsCovered: [
      'General Test format: Logical Reasoning, General Knowledge & Current Affairs',
      'Domain-specific subjects mapping with 12th board subjects',
      'Timelines and registration prerequisites after 10th standard'
    ],
    isVerified: true,
    pagesOrSize: '12-Page Student Orientation'
  }
];
