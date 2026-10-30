export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Diploma' | '11th-12th' | 'ITI' | 'Admissions & Scholarships';
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How do I choose between Diploma (Polytechnic) and 11th & 12th?',
    answer: 'The primary decision factor is your preferred learning style and career certainty. If you are 100% sure you want to pursue Engineering or Technology and prefer hands-on labs and practical machines over rote theory, Diploma (Polytechnic) is excellent. It allows you to enter the 2nd year of B.Tech/B.E. directly without appearing for high-stress entrance exams like JEE. However, if you are undecided between Engineering, Medicine, Commerce, Law, or Civil Services, or if you dream of studying at premier institutes like IITs, NITs, AIIMS, or Delhi University, then 11th & 12th is the recommended path because it keeps all degree avenues open.'
  },
  {
    id: 'faq-2',
    category: 'Diploma',
    question: 'Can I do B.Tech / B.E. after completing a 3-Year Polytechnic Diploma?',
    answer: 'Yes! Under AICTE regulations, all state technical boards offer "Direct Second Year" (Lateral Entry - DSE) engineering admissions. A diploma holder enters directly into the 3rd semester (2nd year) of a 4-year B.Tech program. The total time taken is 6 years (3 yrs Diploma + 3 yrs B.Tech), which is exactly identical to the 11th-12th route (2 yrs 12th + 4 yrs B.Tech).'
  },
  {
    id: 'faq-3',
    category: 'ITI',
    question: 'Is ITI certificate recognized for government jobs and Indian Railways?',
    answer: 'Absolutely. In fact, ITI certification under NCVT (National Council for Vocational Training) is a mandatory eligibility qualification for thousands of technical government posts every year, most notably in the Ministry of Railways (Assistant Loco Pilot - ALP and Technician Grade III), State Electricity Boards (Lineman, Substation Attendants), Indian Army (Technical Corps), DRDO, ISRO, and Ordnance Factories.'
  },
  {
    id: 'faq-4',
    category: '11th-12th',
    question: 'Can a student who chose Science in 11th & 12th switch to Commerce or Arts in college?',
    answer: 'Yes. One of the greatest advantages of 12th Science is stream flexibility. A 12th Science graduate is legally eligible to pursue B.Com, BBA, B.A., Law (5-Year Integrated LLB), Hotel Management, Fashion Design, or Journalism. However, the reverse is not possible: a student who completes 12th Commerce or Arts cannot pursue MBBS or B.Tech (except select emerging computer application programs).'
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'What if my 10th standard board percentage is between 45% and 60%?',
    answer: 'Marks do not define your potential. Many thriving engineering careers start through Polytechnic Diplomas where eligibility in most states starts at 35% to 50% in SSC. Similarly, Government and Private ITIs welcome students with basic 10th pass certificates and provide immediate employable skills. In 11th standard, Commerce and Arts streams frequently have accessible cutoffs. What matters most after 10th is selecting a discipline aligned with your actual strengths.'
  },
  {
    id: 'faq-6',
    category: 'Admissions & Scholarships',
    question: 'Where and when do scholarship applications open for 10th pass students?',
    answer: 'The primary central portal is the National Scholarship Portal (scholarships.gov.in), along with respective State Social Welfare Portals (such as MahaDBT in Maharashtra, UP Scholarship Portal, SSP in Karnataka, etc.). Applications typically open between July and October every year after board results are declared. Key documents to keep ready are: 10th Mark Sheet, Domicile Certificate, Caste Certificate (if applicable), Non-Creamy Layer Certificate, and an updated Family Income Certificate from the Tehsildar/Revenue Officer.'
  },
  {
    id: 'faq-7',
    category: 'Diploma',
    question: 'Can I do an engineering diploma in Computer Science without scoring high in 10th Maths?',
    answer: 'While AICTE requires passing Mathematics in 10th, specific cutoffs vary widely between government and private polytechnic institutions. Top government polytechnics often have high cutoffs (80%+ aggregate), but numerous recognized private and aided polytechnics offer admissions to students with moderate scores. You will study basic applied engineering mathematics in the 1st year, which covers practical calculus and matrices.'
  },
  {
    id: 'faq-8',
    category: 'ITI',
    question: 'Can an ITI student pursue a Polytechnic Diploma or Degree later?',
    answer: 'Yes! Under the CTS to Diploma progression policy, ITI pass-outs who have completed a 2-year engineering trade (such as Electrician or Fitter) are eligible for direct lateral entry into the 2nd year of a Polytechnic Diploma in the corresponding branch. From there, they can even proceed to 2nd year B.Tech, ensuring a complete educational ladder from trade skill to university degree.'
  }
];
