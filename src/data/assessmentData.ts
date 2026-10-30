import { AssessmentQuestion } from '../types';

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: 'Which subjects did you genuinely enjoy most in 9th and 10th standard?',
    description: 'Think about where you enjoyed understanding concepts, solving problems, or doing activities.',
    category: 'Subject Aptitude',
    options: [
      {
        id: 'opt_1a',
        text: 'Mathematics and Physical Sciences',
        subtext: 'Algebra, physics experiments, electricity, formulas, and solving numerical problems.',
        weights: { diploma: 4, intermediate_science_pcm: 5, intermediate_science_pcb: 1, intermediate_commerce: 2, intermediate_arts: 0, iti: 3 }
      },
      {
        id: 'opt_1b',
        text: 'Biology, Human Anatomy & Natural Sciences',
        subtext: 'Plants, human body systems, animals, health, environmental cycles, and chemistry.',
        weights: { diploma: 0, intermediate_science_pcm: 1, intermediate_science_pcb: 5, intermediate_commerce: 0, intermediate_arts: 1, iti: 0 }
      },
      {
        id: 'opt_1c',
        text: 'Social Sciences, History, Politics & Languages',
        subtext: 'World events, governance, society, reading literature, essay writing, and debating.',
        weights: { diploma: 0, intermediate_science_pcm: 0, intermediate_science_pcb: 0, intermediate_commerce: 2, intermediate_arts: 5, iti: 0 }
      },
      {
        id: 'opt_1d',
        text: 'Economics, Business, Trade & Managing Money',
        subtext: 'Profit and loss, banking, markets, business ideas, and practical calculations.',
        weights: { diploma: 1, intermediate_science_pcm: 1, intermediate_science_pcb: 0, intermediate_commerce: 5, intermediate_arts: 2, iti: 1 }
      },
      {
        id: 'opt_1e',
        text: 'Computers, Workshop Work, Drawing or Fixing Gadgets',
        subtext: 'Using software, disassembling electronics, craft, drawing, or repairing household appliances.',
        weights: { diploma: 5, intermediate_science_pcm: 2, intermediate_science_pcb: 0, intermediate_commerce: 1, intermediate_arts: 1, iti: 5 }
      }
    ]
  },
  {
    id: 2,
    question: 'How do you prefer to learn new concepts?',
    description: 'Your preferred style helps determine whether vocational, polytechnic, or academic schooling is best.',
    category: 'Learning Style',
    options: [
      {
        id: 'opt_2a',
        text: 'By doing hands-on experiments, handling tools & building real projects',
        subtext: 'I learn 10x faster when I touch machines, assemble parts, write code, or see physical results.',
        weights: { diploma: 5, intermediate_science_pcm: 2, intermediate_science_pcb: 2, intermediate_commerce: 1, intermediate_arts: 1, iti: 5 }
      },
      {
        id: 'opt_2b',
        text: 'By studying deep theoretical textbooks, understanding abstract concepts & taking exams',
        subtext: 'I am comfortable with long study hours, theory derivations, and intense competitive tests.',
        weights: { diploma: 2, intermediate_science_pcm: 5, intermediate_science_pcb: 5, intermediate_commerce: 3, intermediate_arts: 4, iti: 0 }
      },
      {
        id: 'opt_2c',
        text: 'By analyzing real-world cases, market data, and business problem scenarios',
        subtext: 'I enjoy logical trade-offs, financial balances, and structured commercial rules.',
        weights: { diploma: 1, intermediate_science_pcm: 1, intermediate_science_pcb: 0, intermediate_commerce: 5, intermediate_arts: 3, iti: 1 }
      },
      {
        id: 'opt_2d',
        text: 'By reading diverse viewpoints, creative expression, writing, and social discussions',
        subtext: 'I prefer subjective analysis, empathy, human stories, and philosophical exploration.',
        weights: { diploma: 0, intermediate_science_pcm: 0, intermediate_science_pcb: 1, intermediate_commerce: 2, intermediate_arts: 5, iti: 0 }
      }
    ]
  },
  {
    id: 3,
    question: 'What type of daily work environment appeals to you most?',
    description: 'Envision where you see yourself spending your working hours after graduating.',
    category: 'Work Environment',
    options: [
      {
        id: 'opt_3a',
        text: 'Modern technology desk, software lab, or engineering design office',
        subtext: 'Computers, CAD software, coding terminals, high-tech engineering setups.',
        weights: { diploma: 4, intermediate_science_pcm: 5, intermediate_science_pcb: 0, intermediate_commerce: 2, intermediate_arts: 1, iti: 2 }
      },
      {
        id: 'opt_3b',
        text: 'Hospital, clinical laboratory, pharmacy, or diagnostic center',
        subtext: 'Caring for patients, conducting biochemical tests, or dispensing health treatments.',
        weights: { diploma: 0, intermediate_science_pcm: 0, intermediate_science_pcb: 5, intermediate_commerce: 0, intermediate_arts: 0, iti: 0 }
      },
      {
        id: 'opt_3c',
        text: 'Industrial plant, manufacturing factory, field site, or technical workshop',
        subtext: 'Machinery, power substations, construction sites, railway workshops, physical infrastructure.',
        weights: { diploma: 5, intermediate_science_pcm: 2, intermediate_science_pcb: 0, intermediate_commerce: 0, intermediate_arts: 0, iti: 5 }
      },
      {
        id: 'opt_3d',
        text: 'Corporate headquarters, banking office, consultancy, or investment firm',
        subtext: 'Financial ledgers, business meetings, commercial audits, and management strategies.',
        weights: { diploma: 0, intermediate_science_pcm: 1, intermediate_science_pcb: 0, intermediate_commerce: 5, intermediate_arts: 1, iti: 0 }
      },
      {
        id: 'opt_3e',
        text: 'Government administrative secretariat, courtroom, news studio, or creative agency',
        subtext: 'Policy administration, legal drafting, advocacy, media, public welfare.',
        weights: { diploma: 0, intermediate_science_pcm: 0, intermediate_science_pcb: 0, intermediate_commerce: 2, intermediate_arts: 5, iti: 0 }
      }
    ]
  },
  {
    id: 4,
    question: 'What is your preferred study duration before starting your career or earning?',
    description: 'Being realistic about your family timeline helps select the most practical pathway.',
    category: 'Study Duration',
    options: [
      {
        id: 'opt_4a',
        text: 'Fast track (1 to 2 Years): Want to acquire a trade skill and get a job quickly',
        subtext: 'Need financial independence soonest via government technician vacancies or skilled private trades.',
        weights: { diploma: 2, intermediate_science_pcm: 0, intermediate_science_pcb: 0, intermediate_commerce: 1, intermediate_arts: 1, iti: 5 }
      },
      {
        id: 'opt_4b',
        text: 'Medium track (3 Years): Practical Diploma with the option to work or join 2nd year B.Tech',
        subtext: '3 years of focused technical training; can earn as Junior Engineer or directly enter 2nd year degree.',
        weights: { diploma: 5, intermediate_science_pcm: 1, intermediate_science_pcb: 0, intermediate_commerce: 1, intermediate_arts: 1, iti: 2 }
      },
      {
        id: 'opt_4c',
        text: 'Standard academic track (5 to 6 Years): 2 years of 11th-12th + 3 or 4-year Bachelor’s degree',
        subtext: 'Ready to dedicate 5+ years to earn a degree (B.Tech, B.Com, BBA, B.A., LLB).',
        weights: { diploma: 2, intermediate_science_pcm: 4, intermediate_science_pcb: 3, intermediate_commerce: 5, intermediate_arts: 5, iti: 0 }
      },
      {
        id: 'opt_4d',
        text: 'Long professional dedication (6 to 7+ Years): Ready for rigorous medical or specialized studies',
        subtext: 'MBBS, BDS, Super-specialty surgery, advanced scientific research, or competitive Civil Services.',
        weights: { diploma: 0, intermediate_science_pcm: 3, intermediate_science_pcb: 5, intermediate_commerce: 2, intermediate_arts: 4, iti: 0 }
      }
    ]
  },
  {
    id: 5,
    question: 'How comfortable and confident are you with Mathematics?',
    description: 'Mathematics is central to engineering and commerce, while optional in arts and medicine.',
    category: 'Mathematical Affinity',
    options: [
      {
        id: 'opt_5a',
        text: 'Very comfortable: I love calculus, complex problem-solving, and numerical logic',
        subtext: 'Confident in cracking high-level math in competitive exams like JEE or B.Tech engineering maths.',
        weights: { diploma: 4, intermediate_science_pcm: 5, intermediate_science_pcb: 0, intermediate_commerce: 3, intermediate_arts: 0, iti: 2 }
      },
      {
        id: 'opt_5b',
        text: 'Practical math is good: I can do applied calculations, workshop math, and algebra',
        subtext: 'Good at applied technical formulas and practical numbers, but don’t want pure abstract theoretical proofs.',
        weights: { diploma: 5, intermediate_science_pcm: 2, intermediate_science_pcb: 2, intermediate_commerce: 4, intermediate_arts: 2, iti: 4 }
      },
      {
        id: 'opt_5c',
        text: 'Business calculations only: I like percentages, accounting, and financial math',
        subtext: 'Prefer commercial arithmetic, profit/loss, simple/compound interest over trigonometry and geometry.',
        weights: { diploma: 1, intermediate_science_pcm: 1, intermediate_science_pcb: 0, intermediate_commerce: 5, intermediate_arts: 2, iti: 1 }
      },
      {
        id: 'opt_5d',
        text: 'Prefer minimal math: I prefer verbal reasoning, descriptive reading, and biology/arts',
        subtext: 'Math causes high stress; I excel at reading, human biology, memorization, or creative subjects.',
        weights: { diploma: 0, intermediate_science_pcm: 0, intermediate_science_pcb: 4, intermediate_commerce: 1, intermediate_arts: 5, iti: 1 }
      }
    ]
  },
  {
    id: 6,
    question: 'What is your family’s approximate education budget consideration?',
    description: 'Understanding tuition affordability and scholarship needs ensures feasible guidance.',
    category: 'Budget & Financial Planning',
    options: [
      {
        id: 'opt_6a',
        text: 'Need minimal expense & quick earning: Low-fee government institutes or subsidized training',
        subtext: 'Annual budget under ₹15,000; government subsidies, stipends, or fast job placement are crucial.',
        weights: { diploma: 3, intermediate_science_pcm: 1, intermediate_science_pcb: 0, intermediate_commerce: 2, intermediate_arts: 3, iti: 5 }
      },
      {
        id: 'opt_6b',
        text: 'Moderate budget with scholarship assistance: Can manage ₹20,000 to ₹60,000 / year',
        subtext: 'Comfortable with government polytechnic or state-aided colleges with post-matric scholarship support.',
        weights: { diploma: 5, intermediate_science_pcm: 3, intermediate_science_pcb: 2, intermediate_commerce: 4, intermediate_arts: 4, iti: 3 }
      },
      {
        id: 'opt_6c',
        text: 'Flexible / Standard budget: Open to regular college fees and entrance coaching',
        subtext: 'Can invest in private junior colleges, competitive coaching (JEE/NEET/CA), or private degree colleges.',
        weights: { diploma: 3, intermediate_science_pcm: 5, intermediate_science_pcb: 5, intermediate_commerce: 4, intermediate_arts: 3, iti: 1 }
      }
    ]
  },
  {
    id: 7,
    question: 'What is your ultimate dream or highest career aspiration?',
    description: 'Choose the destination that inspires you most when you picture your future.',
    category: 'Aspiration',
    options: [
      {
        id: 'opt_7a',
        text: 'Becoming a Technology Specialist, Software Architect, or Core Engineer',
        subtext: 'Designing smart software, robots, machines, bridges, or electronics systems.',
        weights: { diploma: 4, intermediate_science_pcm: 5, intermediate_science_pcb: 0, intermediate_commerce: 0, intermediate_arts: 0, iti: 2 }
      },
      {
        id: 'opt_7b',
        text: 'Becoming a Doctor, Surgeon, Healthcare Professional, or Pharmacist',
        subtext: 'Saving lives, medical practice, clinical diagnosis, biomedical advancement.',
        weights: { diploma: 0, intermediate_science_pcm: 0, intermediate_science_pcb: 5, intermediate_commerce: 0, intermediate_arts: 0, iti: 0 }
      },
      {
        id: 'opt_7c',
        text: 'Chartered Accountant (CA), Business Founder, Financial Leader, or Banker',
        subtext: 'Running enterprises, auditing corporations, investing capital, driving commerce.',
        weights: { diploma: 0, intermediate_science_pcm: 0, intermediate_science_pcb: 0, intermediate_commerce: 5, intermediate_arts: 1, iti: 0 }
      },
      {
        id: 'opt_7d',
        text: 'Civil Services Officer (IAS/IPS), Judge, Lawyer, Diplomat, or Policy Journalist',
        subtext: 'Administering public welfare, upholding the constitution, legal advocacy.',
        weights: { diploma: 0, intermediate_science_pcm: 1, intermediate_science_pcb: 0, intermediate_commerce: 2, intermediate_arts: 5, iti: 0 }
      },
      {
        id: 'opt_7e',
        text: 'Railway Technical Officer, PSU Specialist, Skilled Industrialist, or Own Workshop',
        subtext: 'Practical craftsmanship, secure government technician career, electrical/mechanical enterprise.',
        weights: { diploma: 4, intermediate_science_pcm: 1, intermediate_science_pcb: 0, intermediate_commerce: 1, intermediate_arts: 0, iti: 5 }
      }
    ]
  }
];

export function calculateAssessmentResult(answers: Record<number, string>): {
  topPathway: string;
  topPathwayKey: 'diploma' | 'intermediate' | 'iti';
  scorePercentage: number;
  rationale: string[];
  suggestedStreams: string[];
  recommendedImmediateSteps: string[];
  alternativeOption: string;
} {
  const scores = {
    diploma: 0,
    intermediate_science_pcm: 0,
    intermediate_science_pcb: 0,
    intermediate_commerce: 0,
    intermediate_arts: 0,
    iti: 0
  };

  assessmentQuestions.forEach((q) => {
    const selectedOptionId = answers[q.id];
    if (selectedOptionId) {
      const option = q.options.find((o) => o.id === selectedOptionId);
      if (option) {
        scores.diploma += option.weights.diploma;
        scores.intermediate_science_pcm += option.weights.intermediate_science_pcm;
        scores.intermediate_science_pcb += option.weights.intermediate_science_pcb;
        scores.intermediate_commerce += option.weights.intermediate_commerce;
        scores.intermediate_arts += option.weights.intermediate_arts;
        scores.iti += option.weights.iti;
      }
    }
  });

  // Calculate highest scoring channel
  const aggregated = [
    { key: 'diploma' as const, name: 'Polytechnic Diploma in Engineering', score: scores.diploma, streamType: 'Technical Diploma' },
    { key: 'intermediate' as const, name: '11th & 12th Science (PCM Stream)', score: scores.intermediate_science_pcm, streamType: 'Higher Secondary Science' },
    { key: 'intermediate' as const, name: '11th & 12th Science (PCB / Medical Stream)', score: scores.intermediate_science_pcb, streamType: 'Higher Secondary Medical' },
    { key: 'intermediate' as const, name: '11th & 12th Commerce Stream', score: scores.intermediate_commerce, streamType: 'Higher Secondary Commerce' },
    { key: 'intermediate' as const, name: '11th & 12th Arts / Humanities Stream', score: scores.intermediate_arts, streamType: 'Higher Secondary Humanities' },
    { key: 'iti' as const, name: 'Industrial Training Institute (ITI Technical Trade)', score: scores.iti, streamType: 'Vocational Technical Trade' }
  ];

  aggregated.sort((a, b) => b.score - a.score);

  const top = aggregated[0];
  const second = aggregated[1];

  // Calculate percentage relative to max possible points (approx 35)
  const scorePercentage = Math.min(98, Math.max(72, Math.round((top.score / 35) * 100)));

  // Build transparent rationale based on top selection
  const rationale: string[] = [];
  const suggestedStreams: string[] = [];
  const steps: string[] = [];

  if (top.name.includes('Diploma')) {
    rationale.push('Strong preference for practical, laboratory, and project-based engineering over purely theoretical board exams.');
    rationale.push('Clear affinity for applied mathematics and technology without wanting to spend 2 full years in high-stress intermediate coaching.');
    rationale.push('Direct eligibility for 2nd Year B.Tech/B.E. (Lateral Entry) or early entry as a Junior Engineer (JE).');
    suggestedStreams.push('Diploma in Computer Engineering / IT', 'Diploma in Mechanical Engineering', 'Diploma in Civil or Electrical Engineering');
    steps.push('Check your state DTE Polytechnic Centralized Admission Process (CAP) dates.', 'Review minimum 10th Maths & Science cutoff trends in local government polytechnics.', 'Keep your 10th mark sheet, school leaving certificate, and income/domicile documents verified.');
  } else if (top.name.includes('PCM')) {
    rationale.push('High comfort with abstract mathematical logic, calculus, and physical science fundamentals.');
    rationale.push('Ambitious long-term career goals in prestigious engineering, technology architecture, or physical science research (IIT/NIT/IIIT).');
    rationale.push('Keeps all options open including defense (NDA) and premier national university degree entrances.');
    suggestedStreams.push('11th Science PCM with Computer Science', '11th Science PCM with Information Practices or Engineering Graphics');
    steps.push('Decide between State Board (HSC) or CBSE/ISC depending on your college preference and exam focus.', 'Begin reviewing basic 11th calculus and NCERT Physics mechanics concepts.', 'Evaluate whether you will self-study or join competitive entrance test mentorship (JEE Main).');
  } else if (top.name.includes('PCB')) {
    rationale.push('Passionate interest in human biology, anatomical systems, and healthcare service.');
    rationale.push('Readiness for deep academic dedication across medicine, dentistry, pharmacy, or biomedical sciences.');
    rationale.push('Comfort with extensive reading, descriptive recall, and conceptual organic chemistry.');
    suggestedStreams.push('11th Science PCB with Psychology or Biotechnology', '11th Science PCMB (if keeping engineering/math-based tech backup open)');
    steps.push('Download NCERT Class 11 Biology and Chemistry textbooks and begin familiarizing with key chapters.', 'Review the NEET-UG examination structure and eligibility regulations.', 'Verify caste, income, or state quota certificates early to facilitate future medical counseling.');
  } else if (top.name.includes('Commerce')) {
    rationale.push('Natural curiosity about commercial markets, banking, corporate business, and monetary calculations.');
    rationale.push('Preference for practical economic logic and accounting rules over physical science and lab work.');
    rationale.push('Direct progression toward prestigious certifications like CA, CS, CMA, or executive degrees like BBA/IPM.');
    suggestedStreams.push('11th Commerce with Mathematics (Recommended for CA/Finance/Data analytics)', '11th Commerce with Information Technology / Secretarial Practice');
    steps.push('Understand the foundational difference between single and double-entry bookkeeping.', 'Look into ICAI CA Foundation registration guidelines after 10th standard.', 'Explore integrated 5-year management programs (such as IPMAT at IIM Indore/Rohtak).');
  } else if (top.name.includes('Arts')) {
    rationale.push('High verbal expression, interest in history, social structures, psychology, and public policy.');
    rationale.push('Aspiration toward civil services, judiciary, constitutional law, media, or creative design.');
    rationale.push('Strength in qualitative analysis, essay writing, and critical social reasoning.');
    suggestedStreams.push('11th Arts with Political Science, Psychology, and Economics', '11th Arts with History, Sociology, and Literature');
    steps.push('Start regular habit of reading quality national editorials for current affairs and analytical reading.', 'Research CLAT (Common Law Admission Test) syllabus for 5-year BA LLB at National Law Universities.', 'Check CUET undergraduate subject requirements for premier universities (Delhi University, JNU, BHU).');
  } else {
    // ITI
    rationale.push('Highest valuation for fast, direct, hands-on workshop skill training leading to employment in 1 to 2 years.');
    rationale.push('Strong industrial interest in electrical, mechanical, or computer automation trades.');
    rationale.push('Desire to minimize educational expenses while accessing high-volume railway technician and PSU recruitment.');
    suggestedStreams.push('ITI Electrician (2-Year Engineering Trade)', 'ITI Fitter (2-Year Mechanical Trade)', 'ITI COPA (1-Year Computer Trade)');
    steps.push('Locate your nearest Government ITI and check state ITI online admission registration dates.', 'Register your profile on the Apprenticeship India portal (apprenticeshipindia.gov.in).', 'Ensure your 10th mark sheet and Aadhaar card name match perfectly for NCVT registration.');
  }

  return {
    topPathway: top.name,
    topPathwayKey: top.key,
    scorePercentage,
    rationale,
    suggestedStreams,
    recommendedImmediateSteps: steps,
    alternativeOption: `${second.name} (${Math.round((second.score / top.score) * 100)}% match)`
  };
}
