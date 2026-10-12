export const profile = {
  name: 'Imtiyaz Hoque Hazari',
  title: 'Lead .NET / C# Software Engineer',
  headline: 'Architecting high-traffic microservices on .NET, Azure and AWS, and leading international Agile teams.',
  location: 'Dhaka, Bangladesh',
  email: 'imtiyaz.h.h.moon@gmail.com',
  linkedin: 'https://linkedin.com/in/imtiyaz-hoque-hazari',
  github: 'https://github.com/ImsMoon',
  hackerrank: 'https://hackerrank.com/profile/imtiyaz_h_h_moon',
};

export const highlights = [
  { value: '7+', label: 'years building production systems' },
  { value: '10', label: 'engineers led across UK, Norway & Belgium' },
  { value: '20k+', label: 'concurrent ticket generations supported' },
  { value: '2x', label: 'faster ticket printing after redesign' },
];

export const currentRole = {
  company: 'Brain Station 23',
  companyUrl: 'https://brainstation-23.com/',
  role: 'Lead Software Engineer',
  period: 'Nov 2021 – Present',
  points: [
    'Lead 9–10 engineers on international Agile teams delivering public-facing apps for e-commerce, food delivery and booking.',
    'Built a high-throughput ticket generation service (MassTransit, AWS SQS, Redis): batch capacity 2,000 → 5,000.',
    'Integrated payment gateways (VIPPS, Swedbank, Adyen) and Azure B2C authentication.',
  ],
};

export const experience = [
  {
    company: 'Brain Station 23',
    url: 'https://brainstation-23.com/',
    role: 'Lead Software Engineer',
    period: 'Nov 2021 – Present',
    location: 'Dhaka',
    points: [
      'Led a team of 9–10 engineers across international, cross-functional Agile teams (UK, Norway, Belgium), building microservices on .NET 8/10 with EF Core for Peppes Pizza, Deltagar and Digifactuur.',
      'Architected scalable microservices using Clean Architecture and DDD, modernizing legacy ERP integrations and reducing technical debt.',
      'Designed a ticket generation service with MassTransit, AWS SQS and Redis, scaling batch capacity from 2,000 to 5,000 and supporting 20,000+ concurrent generations.',
      'Implemented secure authentication (Azure B2C, Keycloak) and payment integrations (VIPPS, Swedbank, Adyen), resolving critical transaction edge cases.',
      'Added OpenTelemetry distributed tracing across microservices, reducing production debugging time.',
      'Built a custom payment wallet plugin for nopCommerce, adopted across multiple client deployments.',
    ],
  },
  {
    company: 'Insightin Technology',
    url: 'https://insightintechnology.com/',
    role: 'Software Engineer',
    period: 'Jun 2020 – Nov 2021',
    location: 'Dhaka',
    points: [
      'Worked with US-based product owners to turn healthcare client requirements into data-processing workflows using Agile/Scrum.',
      'Migrated legacy ASP.NET applications to ASP.NET Core 5, improving maintainability.',
      'Designed MongoDB data models and optimized SQL stored procedures for high-volume healthcare data.',
    ],
  },
  {
    company: 'Global Software Architect',
    url: 'https://www.globalsoftwarearchitects.net/',
    role: 'Junior Software Engineer',
    period: 'May 2019 – May 2020',
    location: 'Dhaka',
    points: [
      'Developed APIs and background services for TrackYourTruck, a real-time vehicle tracking system.',
      'Integrated a payment gateway for a device-purchasing platform and optimized complex SQL stored procedures.',
    ],
  },
];

export const projects = [
  {
    name: 'FleetCheck: Quarterly Random Selection',
    url: 'https://github.com/ImsMoon/FleetCheck_Audacity_CaseStudy',
    live: null,
    stack: ['TypeScript', 'Node.js', 'HMAC-SHA256', 'PostgreSQL'],
    description:
      'Selects a fair, reproducible random sample of fleet vehicles each quarter. Every vehicle has equal odds, an auditor can verify any result, and repeat runs return the stored selection. Covered by 27 tests, including a 200,000-vehicle fairness check.',
  },
  {
    name: 'MoodFlix',
    url: 'https://github.com/ImsMoon/MovieMoodTracker',
    live: 'https://moviemoodtracker.imtiyaz-moon.workers.dev/',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers'],
    description:
      'A movie and series tracker that records how you felt while watching, then surfaces mood patterns across months and genres.',
  },
  {
    name: 'EndToEnd Food Delivery',
    url: 'https://github.com/ImsMoon/EndToEndFoodDelivery',
    live: null,
    stack: ['TypeScript'],
    description: 'An end-to-end pizza, burger and coffee delivery app.',
  },
  {
    name: 'PDF Password Remover',
    url: 'https://github.com/ImsMoon/Pdf-Password-Remover',
    live: 'https://pdf-password-remover-dvae9gifwaonpbcqf2vyjd.streamlit.app/',
    stack: ['Python', 'Streamlit'],
    description: 'A web tool that removes password protection from PDF files.',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages & Frameworks', items: ['C#', '.NET 8/10', 'ASP.NET Core', 'EF Core', 'LINQ', 'xUnit', 'TypeScript', 'Angular'] },
  { group: 'Architecture', items: ['Microservices', 'Clean Architecture', 'DDD', 'REST APIs', 'SOLID'] },
  { group: 'Data & Messaging', items: ['SQL Server', 'MongoDB', 'Redis', 'MassTransit', 'AWS SQS', 'Stored Procedure Tuning'] },
  { group: 'Cloud & DevOps', items: ['Azure', 'Azure DevOps', 'Docker', 'CI/CD', 'OpenTelemetry', 'Git'] },
  { group: 'Practices', items: ['Agile / Scrum', 'Trunk-Based Development', 'AI-assisted development'] },
];

export const education = {
  degree: 'BSc. in Computer Science & Engineering',
  school: 'American International University-Bangladesh (AIUB)',
  period: 'May 2014 – Apr 2018',
};
