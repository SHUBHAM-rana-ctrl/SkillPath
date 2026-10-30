import { EducationalPathway } from '../types';

export const pathwaysData: EducationalPathway[] = [
  {
    id: 'diploma',
    title: 'Diploma in Engineering (Polytechnic)',
    badge: 'Technical & Professional',
    tagline: 'Practical engineering foundation with direct lateral entry into 2nd year B.Tech/B.E.',
    duration: '3 Years (6 Semesters)',
    eligibility: '10th Standard (SSC/CBSE/ICSE) with Mathematics & Science (typically minimum 35% - 50% depending on state regulations and category)',
    approxFees: {
      govt: '₹6,000 - ₹18,000 / year',
      private: '₹40,000 - ₹1,10,000 / year (Indicative state estimates)'
    },
    overview: 'A 3-year technical education program focused on hands-on practical skills and laboratory work. Governed by AICTE and State Technical Boards (e.g. MSBTE, DTE, BTEUP). Graduates can either enter technical industry roles immediately as Junior Engineers or take direct lateral admission into the 2nd year (3rd semester) of a 4-year B.E. / B.Tech degree.',
    admissionProcess: [
      'State-level Centralized Admission Process (CAP) based on 10th Board merit (Maths + Science + Aggregate).',
      'In select states (e.g., Delhi, UP, Bihar, AP, Telangana), admission is through a Polytechnic Common Entrance Test (CET/JEECUP/POLYCET).',
      'Document verification followed by online option form filling and merit rounds.'
    ],
    keyBranchesOrStreams: [
      'Computer Engineering / IT',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electrical Engineering',
      'Electronics & Telecommunication',
      'Automobile Engineering',
      'Chemical Engineering',
      'Architecture Assistantship'
    ],
    furtherEducation: [
      'Direct Second Year B.Tech / B.E. (Lateral Entry - DSE) without repeating 11th & 12th.',
      'Post Diploma specialized certificates (Tool Design, CAD/CAM, Embedded Systems).',
      'Advanced Diploma from National Skill Training Institutes (NSTI).',
      'AMIE (Associate Member of the Institution of Engineers) equivalent to B.E.'
    ],
    careerOpportunities: [
      'Junior Engineer (JE) in state PWD, Water Resources, and Electricity Distribution Boards.',
      'Technical Assistant / Sub-Inspector (Technical) in Central PSUs (BHEL, NTPC, ONGC, SAIL).',
      'Railway Junior Engineer (RRB JE) and Loco Pilot technical supervisor roles.',
      'Junior Software Developer, Network Engineer, QA Tester in private IT firms.',
      'Plant Maintenance Technician & Quality Control Inspector in manufacturing units.'
    ],
    pros: [
      'Heavy focus on practical laboratory and workshop training compared to traditional schooling.',
      'Saves 1 year if pursuing B.Tech (3 yrs Diploma + 3 yrs B.Tech = 6 yrs, identical to 2 yrs 12th + 4 yrs B.Tech).',
      'Early industry job eligibility at age 18-19.',
      'Exempt from 12th standard high-stress competitive entrance exams (JEE Main) for direct lateral entry seats.'
    ],
    cons: [
      'Direct 2nd year engineering college seats through lateral entry are limited (typically 10% supernumerary quota).',
      'Limits career flexibility early on to technical engineering domains; switching to commerce or medicine is difficult.',
      'Diploma holders often face a salary ceiling in private corporate jobs without completing a bachelor’s degree.'
    ],
    idealFor: 'Students who enjoy applied science, machinery, coding, or practical tools, and prefer hands-on learning over purely theoretical exams.',
    officialRegulatoryBody: 'All India Council for Technical Education (AICTE) & Respective State Directorate of Technical Education (DTE)',
    colorScheme: {
      primary: '#0284c7',
      accent: '#0369a1',
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
      badgeText: 'text-sky-700'
    }
  },
  {
    id: 'intermediate',
    title: '11th & 12th (HSC / Junior College / Senior Secondary)',
    badge: 'Universal Academic Route',
    tagline: 'The traditional foundation keeping all degree streams, competitive exams, and university paths wide open.',
    duration: '2 Years (Class 11 & Class 12)',
    eligibility: '10th Standard pass from any recognized Central (CBSE, ICSE) or State Board.',
    approxFees: {
      govt: '₹2,000 - ₹12,000 / year',
      private: '₹25,000 - ₹1,50,000+ / year (excluding external coaching)'
    },
    overview: 'The standard 2-year higher secondary education spanning three foundational streams: Science, Commerce, and Arts/Humanities. It prepares students for degree programs across all universities and is the mandatory pathway for national professional entrance examinations such as NEET (Medical), JEE (Engineering), CLAT (Law), and CUET (Central Universities).',
    admissionProcess: [
      'Online centralized admission system in major metropolitan areas or school/college direct merit lists based on 10th percentage.',
      'Cutoffs for Science stream with Mathematics are usually highest, followed by Commerce and Arts depending on college reputation.',
      'Choice of Board: State Board (HSC), CBSE (AISSC), or CISCE (ISC).'
    ],
    keyBranchesOrStreams: [
      'Science - PCM (Physics, Chemistry, Mathematics): For Engineering, Architecture, Physical Sciences, Defense (NDA).',
      'Science - PCB (Physics, Chemistry, Biology): For Medicine (MBBS/BDS/BAMS), Pharmacy, Nursing, Biotechnology.',
      'Science - PCMB (Both Math & Bio): Keeps both engineering and medical avenues open.',
      'Commerce: Accountancy, Business Studies, Economics, Mathematics / Informatics Practices.',
      'Arts & Humanities: History, Political Science, Psychology, Sociology, Literature, Economics, Fine Arts.'
    ],
    furtherEducation: [
      'Professional Degrees: B.Tech, MBBS, BDS, B.Pharm, B.Arch, LLB (5-Year Integrated), B.Des.',
      'Commerce Degrees: B.Com, BBA, BMS, CA (Chartered Accountancy), CS, CMA, Actuarial Science.',
      'Humanities Degrees: B.A. (Honours), B.Des, Journalism & Mass Communication, B.Ed.',
      'Defense: National Defence Academy (NDA) entrance exam for Army, Navy, Air Force.'
    ],
    careerOpportunities: [
      'Doctors, Surgeons, Dentists, Clinical Pharmacists, Biomedical Scientists.',
      'Software Engineers, Aerospace Engineers, Data Analysts, Research Scientists.',
      'Chartered Accountants, Investment Bankers, Corporate Finance Managers, Economists.',
      'Civil Servants (UPSC / State PSC), Corporate Lawyers, Judicial Officers, Journalists.',
      'Product Designers, Psychologists, Professors, Policy Analysts.'
    ],
    pros: [
      'Maximum career flexibility—keeps almost every undergraduate university degree open.',
      'Allows students 2 additional years of maturity to decide on a specialized career.',
      'Direct gateway to premier institutions (IITs, NITs, AIIMS, NLUs, IIM IPM, Delhi University).',
      'Widespread college availability in every town and rural district.'
    ],
    cons: [
      'High academic pressure and intense competition in entrance tests (JEE, NEET, CUET).',
      'No immediate job qualification after 12th—a bachelor’s degree is almost mandatory for formal employment.',
      'High cost if enrolled in parallel competitive coaching institutes.'
    ],
    idealFor: 'Students aiming for medicine, research, civil services, corporate finance, or those who prefer keeping their options open before specializing.',
    officialRegulatoryBody: 'CBSE, CISCE, or Respective State Secondary & Higher Secondary Education Boards',
    colorScheme: {
      primary: '#2563eb',
      accent: '#1d4ed8',
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
      badgeText: 'text-blue-700'
    }
  },
  {
    id: 'iti',
    title: 'ITI (Industrial Training Institutes)',
    badge: 'Vocational & Fast Employment',
    tagline: 'Practical job-oriented trade skills certified by NCVT for rapid employment and government technician roles.',
    duration: '1 Year to 2 Years (depending on trade)',
    eligibility: '10th Standard pass (Some non-engineering trades also accept 8th pass). Science & Math preferred for technical trades.',
    approxFees: {
      govt: '₹1,500 - ₹5,000 / year (Nominal or subsidized)',
      private: '₹15,000 - ₹45,000 / year (Indicative state estimates)'
    },
    overview: 'Industrial Training Institutes operate under the Directorate General of Training (DGT), Ministry of Skill Development and Entrepreneurship. They provide job-specific craftsmanship training in engineering and non-engineering trades under the Craftsmen Training Scheme (CTS). ITI certification by NCVT (National Council for Vocational Training) has nationwide and international industrial recognition.',
    admissionProcess: [
      'State-level online ITI admission portal or direct merit admissions at local Government/Private ITIs.',
      'Seats allotted strictly on the basis of 10th standard marks and category reservations.',
      'Counseling rounds conducted between June and August in most states.'
    ],
    keyBranchesOrStreams: [
      'Electrician (2 Years - Engineering Trade)',
      'Fitter (2 Years - Engineering Trade)',
      'COPA (Computer Operator & Programming Assistant - 1 Year)',
      'Welder (1 Year - Engineering Trade)',
      'Machinist & Turner (2 Years - Engineering Trade)',
      'Draughtsman Civil / Mechanical (2 Years)',
      'Mechanic Diesel / Motor Vehicle (1 - 2 Years)',
      'Refrigeration and Air Conditioning Technician (2 Years)'
    ],
    furtherEducation: [
      'Apprenticeship Training (1-2 years) leading to National Apprenticeship Certificate (NAC).',
      'Lateral entry into 2nd year of Polytechnic Diploma (CTS to Diploma scheme).',
      'Craft Instructor Training Scheme (CITS) at National Skill Training Institutes (NSTI) to become an ITI Instructor.',
      'Advanced Diploma in IT, Networking & Cloud Computing from NSTI.'
    ],
    careerOpportunities: [
      'Indian Railways: Assistant Loco Pilot (ALP), Technician Grade III (one of the largest employers of ITI graduates).',
      'Public Sector Undertakings: BHEL, Ordnance Factories, DRDO, ISRO, BPCL, SAIL, Metro Rail Corporations.',
      'State Electricity Boards (DISCOMs) as Lineman, Wireman, Substation Attendant.',
      'Automotive assembly and maintenance (Tata Motors, Maruti Suzuki, Hero, Bajaj).',
      'Self-employment: Licensed electrical contractor, fabrication workshop, HVAC repair enterprise.'
    ],
    pros: [
      'Shortest route to financial independence and job-readiness (18-19 months).',
      'Extremely affordable government fees with substantial state stipends and tool-kit grants.',
      'Tremendous reserved vacancies in Indian Railways and state power utilities for ITI holders.',
      'High hands-on practical ratio (70% workshop practical, 30% theory).'
    ],
    cons: [
      'Initial entry-level industrial wages can be modest (₹12,000 - ₹22,000/month).',
      'Moving up into managerial or high engineering positions requires further qualifications (Diploma or B.Tech).',
      'Social perception often mistakenly undervalues vocational craftsmanship despite high industrial demand.'
    ],
    idealFor: 'Students who want fast, practical job placement, hands-on workshop work, railway technician careers, or have family financial constraints.',
    officialRegulatoryBody: 'Directorate General of Training (DGT), Ministry of Skill Development & Entrepreneurship & NCVT/SCVT',
    colorScheme: {
      primary: '#0d9488',
      accent: '#0f766e',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      badgeText: 'text-emerald-700'
    }
  }
];
