import { ScholarshipItem } from '../types';

export const scholarshipsData: ScholarshipItem[] = [
  {
    id: 'aicte-pragati',
    title: 'AICTE Pragati Scholarship for Girl Students (Technical Diploma)',
    provider: 'All India Council for Technical Education (AICTE), Ministry of Education, Govt of India',
    level: ['Diploma'],
    category: 'Girl Child',
    awardAmount: '₹50,000 per annum (towards college fee, books, equipment & laptop)',
    eligibilityCriteria: [
      'Female student admitted to 1st year of AICTE-approved Polytechnic Diploma course or 2nd year (lateral entry).',
      'Maximum two girl children per family.',
      'Family annual income from all sources must not exceed ₹8,00,000 per annum.'
    ],
    familyIncomeCeiling: 'Up to ₹8,00,000 / year',
    applicationPeriod: 'Usually opens in August - October annually on National Scholarship Portal (NSP)',
    officialPortal: 'National Scholarship Portal (NSP)',
    portalUrl: 'https://scholarships.gov.in',
    documentsRequired: [
      '10th Standard Marksheet / Passing Certificate',
      'Admission allotment letter for AICTE approved Diploma institution',
      'Tuition fee receipt of the current academic year',
      'Valid Annual Family Income Certificate issued by competent Revenue Authority (Tehsildar/SDM)',
      'Aadhaar card linked with active bank account (DBT enabled)',
      'Parental affidavit certifying single/two girl children in family'
    ],
    verifiedDate: 'Academic Session 2024-2025 (Official AICTE Guidelines)'
  },
  {
    id: 'aicte-saksham',
    title: 'AICTE Saksham Scholarship for Specially-Abled Students (Diploma)',
    provider: 'AICTE, Ministry of Education, Govt of India',
    level: ['Diploma'],
    category: 'Specially Abled',
    awardAmount: '₹50,000 per annum (fee support, assistive devices, stationery)',
    eligibilityCriteria: [
      'Specially-abled student having disability not less than 40%.',
      'Admitted to 1st year of AICTE approved Diploma or lateral entry 2nd year.',
      'Family annual income must not exceed ₹8 Lakhs.'
    ],
    familyIncomeCeiling: 'Up to ₹8,00,000 / year',
    applicationPeriod: 'August - October annually via National Scholarship Portal',
    officialPortal: 'National Scholarship Portal (NSP)',
    portalUrl: 'https://scholarships.gov.in',
    documentsRequired: [
      'Disability Certificate issued by Competent Medical Authority (min 40%)',
      '10th Standard Marksheet',
      'Diploma College Allotment Order and Fee Receipt',
      'Valid Income Certificate issued by Tehsildar',
      'Aadhaar seeded bank account passbook copy'
    ],
    verifiedDate: 'Academic Session 2024-2025'
  },
  {
    id: 'post-matric-sc-st',
    title: 'Post-Matric Scholarship for SC / ST Students',
    provider: 'Ministry of Social Justice & Empowerment / Ministry of Tribal Affairs (State Implemented)',
    level: ['10th', 'Diploma', '11th-12th', 'ITI'],
    category: 'Need-based',
    awardAmount: '100% Non-refundable Compulsory Tuition Fee reimbursement + Monthly Maintenance Allowance',
    eligibilityCriteria: [
      'Belonging to Scheduled Caste (SC) or Scheduled Tribe (ST).',
      'Pursuing post-matriculation studies (11th, 12th, Polytechnic Diploma, or ITI).',
      'Total annual family income must not exceed ₹2,50,000 per annum.'
    ],
    familyIncomeCeiling: 'Up to ₹2,50,000 / year',
    applicationPeriod: 'Varies by state portal (e.g. MahaDBT, NSP, UP Scholarship, SSP Karnataka) usually July to November',
    officialPortal: 'National Scholarship Portal & Respective State Social Welfare Portals',
    portalUrl: 'https://scholarships.gov.in',
    documentsRequired: [
      'Cast Certificate issued by competent Sub-Divisional Officer (SDO/Tehsildar)',
      'Income Certificate (current financial year)',
      '10th Standard Board Marksheet',
      'College Bonafide Certificate & Fee Structure Slip',
      'Aadhaar card seeded with NPCI / DBT bank account'
    ],
    verifiedDate: 'Centrally Sponsored Scheme (Updated 2024)'
  },
  {
    id: 'post-matric-obc-ebc',
    title: 'Post-Matric Scholarship for OBC / EBC Students',
    provider: 'Ministry of Social Justice and Empowerment, Govt of India',
    level: ['Diploma', '11th-12th', 'ITI'],
    category: 'Need-based',
    awardAmount: 'Tuition fee concession / reimbursement + monthly study maintenance stipend',
    eligibilityCriteria: [
      'Candidate must belong to Other Backward Classes (OBC) or Economically Backward Classes (EBC).',
      'Enrolled in recognized 11th, 12th, ITI, or Diploma institute.',
      'Annual family income ceiling is typically ₹1,50,000 to ₹2,50,000 (varies slightly by state policy).'
    ],
    familyIncomeCeiling: 'Up to ₹2,50,000 / year',
    applicationPeriod: 'August - December via State Scholarship Portals',
    officialPortal: 'Respective State Scholarship Portal & NSP',
    portalUrl: 'https://scholarships.gov.in',
    documentsRequired: [
      'Non-Creamy Layer (NCL) / OBC Certificate',
      'Annual Family Income Certificate',
      'Previous Year 10th Passing Certificate',
      'College Admission Fee receipt',
      'Bank passbook copy linked to Aadhaar'
    ],
    verifiedDate: 'Verified 2024-2025'
  },
  {
    id: 'begum-hazrat-mahal',
    title: 'Begum Hazrat Mahal National Scholarship for Minority Girls',
    provider: 'Maulana Azad Education Foundation, Ministry of Minority Affairs',
    level: ['11th-12th'],
    category: 'Girl Child',
    awardAmount: '₹6,000 per annum for Class 11 and Class 12',
    eligibilityCriteria: [
      'Exclusively for female students belonging to notified minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi).',
      'Secured at least 50% marks or equivalent in 10th Standard Board Exam.',
      'Annual family income from all sources not exceeding ₹2,00,000.'
    ],
    familyIncomeCeiling: 'Up to ₹2,00,000 / year',
    applicationPeriod: 'August - November through National Scholarship Portal',
    officialPortal: 'National Scholarship Portal (NSP)',
    portalUrl: 'https://scholarships.gov.in',
    documentsRequired: [
      '10th Standard Marksheet self-attested',
      'Self-declaration of Minority Community certificate',
      'Income Certificate issued by Revenue Authority',
      'Institution Verification Certificate signed by School/College Principal',
      'Aadhaar card copy'
    ],
    verifiedDate: 'Ministry of Minority Affairs Portal Verified'
  },
  {
    id: 'naps-iti-stipend',
    title: 'National Apprenticeship Promotion Scheme (NAPS) - ITI Monthly Stipend',
    provider: 'Ministry of Skill Development and Entrepreneurship (MSDE), Govt of India',
    level: ['ITI'],
    category: 'Merit-based',
    awardAmount: '₹7,000 to ₹12,000 / month during apprenticeship (partially reimbursed by Govt of India)',
    eligibilityCriteria: [
      'Candidates who have passed 10th Standard and completed an ITI course in any engineering or non-engineering trade.',
      'Minimum age 14 years (no upper age limit for most designated trades).',
      'Registered on official Apprenticeship Portal (apprenticeshipindia.gov.in).'
    ],
    familyIncomeCeiling: 'No income ceiling (Skill-based industry stipend)',
    applicationPeriod: 'Open throughout the year as industries release apprenticeship apprentice openings',
    officialPortal: 'Apprenticeship India Portal (MSDE)',
    portalUrl: 'https://www.apprenticeshipindia.gov.in',
    documentsRequired: [
      '10th Standard Marksheet & Board Certificate',
      'ITI Provisional / NCVT Trade Certificate & Consolidated Marksheet',
      'Aadhaar verification with active mobile number',
      'Bank Account details with IFSC for direct DBT stipend transfer'
    ],
    verifiedDate: 'Active MSDE Notification 2024'
  }
];
