export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectGalleryItem = {
  label: string;
  src?: string;
  alt?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  organization: string;
  platform: string;
  scope: string;
  summary: string;
  challenge: string;
  context: string;
  role: string;
  process: string[];
  keyDecisions: string[];
  outcome: string[];
  lessons: string[];
  tags: string[];
  metrics: ProjectMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery: ProjectGalleryItem[];
  thumbnail?: string;
  demoUrl?: string;
  sourceUrl: string;
  isPrivate?: boolean;
};

const legacyProjectSlugMap: Record<string, string> = {
  "revenue-intelligence-copilot": "insights-and-reporting",
  "clinical-triage-assistant": "payer-solutions",
  "knowledge-ops-command-center": "developer-portal",
  "personalization-engine-studio": "zivame-com-ecommerce-store",
  "executive-insight-briefing": "user-journey-framework",
  "vision-%3A-platform-and-data-services": "vision-platform-and-data-services",
  "vision-%3a-platform-and-data-services": "vision-platform-and-data-services",
  "zivame-champions---b2b-trade-portal": "zivame-champions-b2b-trade-portal",
  "zivame.com-ecommerce-store": "zivame-com-ecommerce-store",
  "ceo's-keynote-2015": "ceos-keynote-2015"
};

export const projects: Project[] = [
  {
    "id": "42a706b1-4fba-4324-80eb-eff13fb70394",
    "slug": "360x-closed-loop-referrals",
    "title": "360X Closed Loop Referrals",
    "category": "Strategy, Direction & Research",
    "year": "2024",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "Strategy, Direction & Research",
    "summary": "360X Closed Loop Referrals case study.",
    "challenge": "360X Closed Loop Referrals required a focused redesign to improve outcomes.",
    "context": "Year: 2024 | Organization: athenahealth | Scope: Strategy, Direction & Research | Platform: Cloud App",
    "role": "Zone Lead | at athenahealth",
    "process": [
      "360X Closed Loop Referrals case study."
    ],
    "keyDecisions": [
      "360X Closed Loop Referrals case study."
    ],
    "outcome": [
      "360X Closed Loop Referrals shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy",
      "Direction & Research",
      "Cloud App",
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2024"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/360x-closed-loop-referrals",
    "isPrivate": false
  },
  {
    "id": "183c33fe-3009-4952-b061-51697542bd72",
    "slug": "data-exports",
    "title": "Data Exports",
    "category": "Strategy & Direction",
    "year": "2024",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "Strategy & Direction",
    "summary": "Data Exports case study.",
    "challenge": "Data Exports required a focused redesign to improve outcomes.",
    "context": "Year: 2024 | Organization: athenahealth | Scope: Strategy & Direction | Platform: Cloud App",
    "role": "Zone Lead | at athenahealth",
    "process": [
      "Data Exports case study."
    ],
    "keyDecisions": [
      "Data Exports case study."
    ],
    "outcome": [
      "Data Exports shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy & Direction",
      "Cloud App",
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2024"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/data-exports",
    "isPrivate": false
  },
  {
    "id": "8fc9266d-ff2d-4047-a819-5b20b78a033f",
    "slug": "data-imports-self-service",
    "title": "Data Imports Self-service",
    "category": "Strategy & Direction",
    "year": "2024",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "Strategy & Direction",
    "summary": "Data Imports Self-service case study.",
    "challenge": "Data Imports Self-service required a focused redesign to improve outcomes.",
    "context": "Year: 2024 | Organization: athenahealth | Scope: Strategy & Direction | Platform: Cloud App",
    "role": "Zone Lead | at athenahealth",
    "process": [
      "Data Imports Self-service case study."
    ],
    "keyDecisions": [
      "Data Imports Self-service case study."
    ],
    "outcome": [
      "Data Imports Self-service shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy & Direction",
      "Cloud App",
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2024"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/data-imports-self-service",
    "isPrivate": false
  },
  {
    "id": "eb4ea815-85f2-441a-a283-731e8f6676f6",
    "slug": "insights-and-reporting",
    "title": "Insights and Reporting",
    "category": "UX Design & Strategy",
    "year": "2024",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "UX Design & Strategy",
    "summary": "Analytics platform for practice performance insights and strategies to boost revenue and clinical outcomes",
    "challenge": "Analytics platform for practice performance insights and strategies to boost revenue and clinical outcomes",
    "context": "Year: 2024 | Organization: athenahealth | Scope: UX Design & Strategy | Platform: Cloud App",
    "role": "Zone Lead | at athenahealth",
    "process": [
      "Analytics platform for practice performance insights and strategies to boost revenue and clinical outcomes"
    ],
    "keyDecisions": [
      "Analytics platform for practice performance insights and strategies to boost revenue and clinical outcomes"
    ],
    "outcome": [
      "Analytics platform for practice performance insights and strategies to boost revenue and clinical outcomes"
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "Cloud App",
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2024"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/insights-and-reporting",
    "isPrivate": false
  },
  {
    "id": "c849c3c9-ceb2-4ac0-a72f-a09d79359407",
    "slug": "payer-solutions",
    "title": "Payer Solutions",
    "category": "Case Study",
    "year": "2024",
    "organization": "athenahealth",
    "platform": "Product",
    "scope": "Design and Delivery",
    "summary": "Payer Solutions case study.",
    "challenge": "Payer Solutions required a focused redesign to improve outcomes.",
    "context": "Year: 2024 | Organization: athenahealth",
    "role": "Zone Lead | at athenahealth",
    "process": [
      "Payer Solutions case study."
    ],
    "keyDecisions": [
      "Payer Solutions case study."
    ],
    "outcome": [
      "Payer Solutions shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2024"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/payer-solutions",
    "isPrivate": false
  },
  {
    "id": "8461a4b9-7e5f-4440-9dc3-0ed946d8072e",
    "slug": "unified-rollout-flags",
    "title": "Unified Rollout Flags",
    "category": "Strategy & Direction",
    "year": "2023",
    "organization": "athenahealth",
    "platform": "Responsive Web",
    "scope": "Strategy & Direction",
    "summary": "End-to-end feature release management using unified rollout flags powered by LaunchDarkly",
    "challenge": "End-to-end feature release management using unified rollout flags powered by LaunchDarkly",
    "context": "Year: 2023 | Organization: athenahealth | Scope: Strategy & Direction | Platform: Responsive Web",
    "role": "Zone Lead | at athenahealth",
    "process": [
      "End-to-end feature release management using unified rollout flags powered by LaunchDarkly"
    ],
    "keyDecisions": [
      "End-to-end feature release management using unified rollout flags powered by LaunchDarkly"
    ],
    "outcome": [
      "End-to-end feature release management using unified rollout flags powered by LaunchDarkly"
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy & Direction",
      "Responsive Web",
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2023"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Responsive Web"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/unified-rollout-flags",
    "isPrivate": false
  },
  {
    "id": "8ee92ffe-e72d-467a-b9ac-d66c97a5ad0a",
    "slug": "user-journey-framework",
    "title": "User Journey Framework",
    "category": "Strategy & Direction",
    "year": "2023",
    "organization": "athenahealth",
    "platform": "Reference Framework",
    "scope": "Strategy & Direction",
    "summary": "User Journey Framework case study.",
    "challenge": "User Journey Framework required a focused redesign to improve outcomes.",
    "context": "Year: 2023 | Organization: athenahealth | Scope: Strategy & Direction | Platform: Reference Framework",
    "role": "Zone Lead | at athenahealth",
    "process": [
      "User Journey Framework case study."
    ],
    "keyDecisions": [
      "User Journey Framework case study."
    ],
    "outcome": [
      "User Journey Framework shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy & Direction",
      "Reference Framework",
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2023"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Reference Framework"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/user-journey-framework",
    "isPrivate": false
  },
  {
    "id": "1eb75715-5fef-4dcd-87b7-5a38c04cfd95",
    "slug": "vision-platform-and-data-services",
    "title": "Vision : Platform and Data Services",
    "category": "Strategy",
    "year": "2023",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "Strategy",
    "summary": "5 years Vision for 70+ products under the Platform Umbrella",
    "challenge": "5 years Vision for 70+ products under the Platform Umbrella",
    "context": "Year: 2023 | Organization: athenahealth | Scope: Strategy | Platform: Cloud App",
    "role": "Director | Project Lead | Hands-on | at athenahealth",
    "process": [
      "5 years Vision for 70+ products under the Platform Umbrella"
    ],
    "keyDecisions": [
      "5 years Vision for 70+ products under the Platform Umbrella"
    ],
    "outcome": [
      "5 years Vision for 70+ products under the Platform Umbrella"
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy",
      "Cloud App",
      "athenahealth",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2023"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [
      {
        "label": "Vision : Platform and Data Services cover",
        "src": "https://static.wixstatic.com/media/bc4f65_d90f299fac3c4b57a3fecb08af05730e~mv2.png",
        "alt": "Vision : Platform and Data Services"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_d90f299fac3c4b57a3fecb08af05730e~mv2.png",
    "sourceUrl": "https://www.notuser.com/portfolio/vision-%3A-platform-and-data-services",
    "isPrivate": true
  },
  {
    "id": "d44760b6-ac36-4f22-89d7-8c43f67772d8",
    "slug": "design-quality",
    "title": "Design Quality",
    "category": "Strategy, Design & Development",
    "year": "2021",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "Strategy, Design & Development",
    "summary": "Design Quality case study.",
    "challenge": "Design Quality required a focused redesign to improve outcomes.",
    "context": "Year: 2021 | Organization: athenahealth | Scope: Strategy, Design & Development | Platform: Cloud App",
    "role": "Zone Lead | Hands-on | at athenahealth",
    "process": [
      "Design Quality case study."
    ],
    "keyDecisions": [
      "Design Quality case study."
    ],
    "outcome": [
      "Design Quality shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy",
      "Design & Development",
      "Cloud App",
      "athenahealth",
      "Zone Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2021"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/design-quality",
    "isPrivate": false
  },
  {
    "id": "3c058292-cc6b-49ba-98f4-258e094b991d",
    "slug": "data-migration-mapping-self-service",
    "title": "Data Migration Mapping Self-service",
    "category": "UX Design & Research",
    "year": "2020",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "UX Design & Research",
    "summary": "Data Migration Mapping Self-service case study.",
    "challenge": "Data Migration Mapping Self-service required a focused redesign to improve outcomes.",
    "context": "Year: 2020 | Organization: athenahealth | Scope: UX Design & Research | Platform: Cloud App",
    "role": "Project Lead | Hands-on | at athenahealth",
    "process": [
      "Data Migration Mapping Self-service case study."
    ],
    "keyDecisions": [
      "Data Migration Mapping Self-service case study."
    ],
    "outcome": [
      "Data Migration Mapping Self-service shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Research",
      "Cloud App",
      "athenahealth",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2020"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/data-migration-mapping-self-service",
    "isPrivate": false
  },
  {
    "id": "c5ca3d13-5ed8-4eaf-81c7-9c439bce11a6",
    "slug": "developer-portal",
    "title": "Developer Portal",
    "category": "UX Design & Strategy",
    "year": "2020",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "UX Design & Strategy",
    "summary": "A set of microsites that provide a comprehensive guide to athenahealth's technical products, which are used to integrate with the platform.",
    "challenge": "A set of microsites that provide a comprehensive guide to athenahealth's technical products, which are used to integrate with the platform.",
    "context": "Year: 2020 | Organization: athenahealth | Scope: UX Design & Strategy | Platform: Cloud App",
    "role": "Sr Manager UX | Project Lead | Hands-on | at athenahealth",
    "process": [
      "A set of microsites that provide a comprehensive guide to athenahealth's technical products, which are used to integrate with the platform."
    ],
    "keyDecisions": [
      "A set of microsites that provide a comprehensive guide to athenahealth's technical products, which are used to integrate with the platform."
    ],
    "outcome": [
      "A set of microsites that provide a comprehensive guide to athenahealth's technical products, which are used to integrate with the platform."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "Cloud App",
      "athenahealth",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2020"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [
      {
        "label": "Developer Portal cover",
        "src": "https://static.wixstatic.com/media/bc4f65_8b3702af1d204a82b1b487a1a4ef98a5~mv2.jpg",
        "alt": "Developer Portal"
      },
      {
        "label": "bc4f65_fff263152d524304bf2c9d0b4ccab7f2~mv2.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_fff263152d524304bf2c9d0b4ccab7f2~mv2.jpg",
        "alt": "Developer Portal"
      },
      {
        "label": "bc4f65_fd58b487aafa40c2834ed53dd6a38c9c~mv2.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_fd58b487aafa40c2834ed53dd6a38c9c~mv2.jpg",
        "alt": "Developer Portal"
      },
      {
        "label": "bc4f65_d5982f81bd3f40a3be8a33f40865ec30~mv2.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_d5982f81bd3f40a3be8a33f40865ec30~mv2.jpg",
        "alt": "Developer Portal"
      },
      {
        "label": "bc4f65_020bbfaf193747bdbd3dc630b30e03b6~mv2.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_020bbfaf193747bdbd3dc630b30e03b6~mv2.jpg",
        "alt": "Developer Portal"
      },
      {
        "label": "bc4f65_faa70b940631481ebf1cfccf0f788f1f~mv2.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_faa70b940631481ebf1cfccf0f788f1f~mv2.jpg",
        "alt": "Developer Portal"
      },
      {
        "label": "bc4f65_27510c656d974c668848b509983e6ce9~mv2.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_27510c656d974c668848b509983e6ce9~mv2.jpg",
        "alt": "Developer Portal"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_8b3702af1d204a82b1b487a1a4ef98a5~mv2.jpg",
    "demoUrl": "https://athenaps.firebaseapp.com/",
    "sourceUrl": "https://www.notuser.com/portfolio/developer-portal",
    "isPrivate": false
  },
  {
    "id": "eacb796c-6838-47ae-8e0a-9dfab89388e1",
    "slug": "marketplace",
    "title": "Marketplace",
    "category": "Strategy & Direction",
    "year": "2020",
    "organization": "athenahealth",
    "platform": "Responsive Web",
    "scope": "Strategy & Direction",
    "summary": "Marketplace case study.",
    "challenge": "Marketplace required a focused redesign to improve outcomes.",
    "context": "Year: 2020 | Organization: athenahealth | Scope: Strategy & Direction | Platform: Responsive Web",
    "role": "Zone Lead | at athenahealth",
    "process": [
      "Marketplace case study."
    ],
    "keyDecisions": [
      "Marketplace case study."
    ],
    "outcome": [
      "Marketplace shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy & Direction",
      "Responsive Web",
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2020"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Responsive Web"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/marketplace",
    "isPrivate": false
  },
  {
    "id": "26b7d67c-672a-47d6-9601-cb6d4fe165ec",
    "slug": "athenanet-device-manager",
    "title": "athenaNet Device Manager",
    "category": "UX Design & Strategy",
    "year": "2019",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "UX Design & Strategy",
    "summary": "athenaNet Device Manager case study.",
    "challenge": "athenaNet Device Manager required a focused redesign to improve outcomes.",
    "context": "Year: 2019 | Organization: athenahealth | Scope: UX Design & Strategy | Platform: Cloud App",
    "role": "Project Lead | Hands-on | at athenahealth",
    "process": [
      "athenaNet Device Manager case study."
    ],
    "keyDecisions": [
      "athenaNet Device Manager case study."
    ],
    "outcome": [
      "athenaNet Device Manager shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "Cloud App",
      "athenahealth",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2019"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/athenanet-device-manager",
    "isPrivate": false
  },
  {
    "id": "e70e2f02-6d49-4cdb-b538-8f364a5c7a93",
    "slug": "athenahealth-corporate-website",
    "title": "athenahealth Corporate Website",
    "category": "UX Design & Strategy",
    "year": "2018",
    "organization": "athenahealth",
    "platform": "Responsive Web",
    "scope": "UX Design & Strategy",
    "summary": "Corporate website to refresh brand and boost lead collection from Medical Groups and Hospitals.",
    "challenge": "In 2017, I was brought in to lead the redesign of the athenahealth corporate website, a project that had seen two years of stalled progress. The goal was to align the website with updated brand guidelines while improving lead collection by delivering personalized experiences for prospects in Medical Groups and Hospitals. The project's strategy had shifted frequently, so my first task was to provide clear direction and a user-centered design focus. To inform our approach, we conducted extensive research, including competitive analysis, industry benchmarking, and web analytics.",
    "context": "Over the course of a year, I collaborated closely with cross-functional teams across various geographies. Together, we developed and refined two distinct design concepts—one focused on creating an engaging, animation-heavy experience, and the other prioritizing simplicity and ease of use. My responsibilities spanned product strategy, information architecture, and interaction design, helping us craft a site that not only reflected the refreshed brand but also improved user engagement and lead conversion.",
    "role": "UX Manager | Project Lead | Hands-on | at athenahealth",
    "process": [
      "Product Strategy",
      "Information Architecture",
      "Interaction Design"
    ],
    "keyDecisions": [
      "Product Strategy",
      "Information Architecture",
      "Interaction Design"
    ],
    "outcome": [
      "One of the first big projects delivered from athenahealth India Provided a solid foundation for the brand"
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "Responsive Web",
      "athenahealth",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2018"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Responsive Web"
      }
    ],
    "gallery": [
      {
        "label": "athenahealth Corporate Website cover",
        "src": "https://static.wixstatic.com/media/bc4f65_d95e8808d0994f47a1a28c3feb5eab45~mv2.jpg",
        "alt": "athenahealth Corporate Website"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_d95e8808d0994f47a1a28c3feb5eab45~mv2.jpg",
    "demoUrl": "https://youtu.be/_gxlpgNmJq4",
    "sourceUrl": "https://www.notuser.com/portfolio/athenahealth-corporate-website",
    "isPrivate": false
  },
  {
    "id": "75400bf8-8435-4ad7-b876-5e56164d6ab9",
    "slug": "fine-grained-access-control",
    "title": "Fine Grained Access Control",
    "category": "UX Design",
    "year": "2018",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "UX Design",
    "summary": "Fine Grained Access Control case study.",
    "challenge": "Fine Grained Access Control required a focused redesign to improve outcomes.",
    "context": "Year: 2018 | Organization: athenahealth | Scope: UX Design | Platform: Cloud App",
    "role": "Hands-on | at athenahealth",
    "process": [
      "Fine Grained Access Control case study."
    ],
    "keyDecisions": [
      "Fine Grained Access Control case study."
    ],
    "outcome": [
      "Fine Grained Access Control shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design",
      "Cloud App",
      "athenahealth",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2018"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/fine-grained-access-control",
    "isPrivate": false
  },
  {
    "id": "3a60c36d-791d-4960-ac32-adc7a98fe2f8",
    "slug": "go-quality",
    "title": "Go Quality",
    "category": "UX Design & Strategy",
    "year": "2018",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "UX Design & Strategy",
    "summary": "Go Quality case study.",
    "challenge": "Go Quality required a focused redesign to improve outcomes.",
    "context": "Year: 2018 | Organization: athenahealth | Scope: UX Design & Strategy | Platform: Cloud App",
    "role": "Hands-on | at athenahealth",
    "process": [
      "Go Quality case study."
    ],
    "keyDecisions": [
      "Go Quality case study."
    ],
    "outcome": [
      "Go Quality shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "Cloud App",
      "athenahealth",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2018"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/go-quality",
    "isPrivate": false
  },
  {
    "id": "650b6bb3-22a5-4f66-a0b1-fdbab7a410e1",
    "slug": "quick-pay",
    "title": "Quick Pay",
    "category": "UX Design & Strategy",
    "year": "2018",
    "organization": "athenahealth",
    "platform": "Responsive Web",
    "scope": "UX Design & Strategy",
    "summary": "Quick Pay case study.",
    "challenge": "Quick Pay required a focused redesign to improve outcomes.",
    "context": "Year: 2018 | Organization: athenahealth | Scope: UX Design & Strategy | Platform: Responsive Web",
    "role": "Hands-on | at athenahealth",
    "process": [
      "Quick Pay case study."
    ],
    "keyDecisions": [
      "Quick Pay case study."
    ],
    "outcome": [
      "Quick Pay shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "Responsive Web",
      "athenahealth",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2018"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Responsive Web"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/quick-pay",
    "isPrivate": false
  },
  {
    "id": "15734054-db02-4230-8f8c-2b09d7f9107c",
    "slug": "content-led-commerce-at-zivame",
    "title": "Content Led Commerce at Zivame",
    "category": "Strategy, Design, Development",
    "year": "2017",
    "organization": "Zivame",
    "platform": "Responsive Web",
    "scope": "Strategy, Design, Development",
    "summary": "Lifestyle blog platform, driving organic traffic and enhancing engagement through strategic content integration.",
    "challenge": "Zivame's content-led commerce initiative was a game-changer in driving organic traffic and boosting engagement. What started as a pilot within the Zivame.com framework quickly evolved into an independent platform on WordPress, and I had the privilege of leading this effort from start to finish. Collaborating with multiple teams, I conceptualized the strategy and oversaw everything from design to execution, ensuring we brought the project live within a month. The seamless teamwork allowed us to create a system where content played a crucial role in shaping user experience and driving transactions.",
    "context": "The impact was significant—content efforts resulted in 1.9x higher conversions and contributed to 5.1% of all transactions. By developing custom templates and smart UX solutions, I made it easy for the content team to publish engaging material without needing technical expertise. The numbers from our pilot in February 2017 were promising, with 69% new sessions and a total add-to-cart value of ₹5.35 lakh. Following the official blog launch in April, we saw even more impressive results, with 6.78% of blog sessions driving traffic to the site and generating ₹1.86 lakh in revenue. My role spanned across content strategy, WordPress setup, and the design of product and content infusion, contributing to a successful and sustainable content-driven model for Zivame.",
    "role": "Director UX | Project Lead | Hands-on | at Zivame",
    "process": [
      "The impact was significant—content efforts resulted in 1.9x higher conversions and contributed to 5.1% of all transactions.",
      "By developing custom templates and smart UX solutions, I made it easy for the content team to publish engaging material without needing technical expertise.",
      "The numbers from our pilot in February 2017 were promising, with 69% new sessions and a total add-to-cart value of ₹5.35 lakh.",
      "Following the official blog launch in April, we saw even more impressive results, with 6.78% of blog sessions driving traffic to the site and generating ₹1.86 lakh in revenue."
    ],
    "keyDecisions": [
      "The impact was significant—content efforts resulted in 1.9x higher conversions and contributed to 5.1% of all transactions.",
      "By developing custom templates and smart UX solutions, I made it easy for the content team to publish engaging material without needing technical expertise.",
      "The numbers from our pilot in February 2017 were promising, with 69% new sessions and a total add-to-cart value of ₹5.35 lakh."
    ],
    "outcome": [
      "The engagement with content boosted conversions by 1.9x and contributing 5.1% of transactions"
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Strategy",
      "Design",
      "Development",
      "Responsive Web",
      "Zivame",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2017"
      },
      {
        "label": "Organization",
        "value": "Zivame"
      },
      {
        "label": "Platform",
        "value": "Responsive Web"
      }
    ],
    "gallery": [
      {
        "label": "Content Led Commerce at Zivame cover",
        "src": "https://static.wixstatic.com/media/bc4f65_0953f050ad0d42be8dda4a0e44ebf218~mv2.jpg",
        "alt": "Content Led Commerce at Zivame"
      },
      {
        "label": "zivame-blog-posts-category.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_af8ffe0796a84020a7e843ffab06e6a6~mv2.jpg",
        "alt": "zivame-blog-posts-category.jpg"
      },
      {
        "label": "zivame-blog-shortcode-editing.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_5840b2a9fd7148bcb98904329a286c48~mv2.jpg",
        "alt": "zivame-blog-shortcode-editing.jpg"
      },
      {
        "label": "zivame-blog-product-wall.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_60f2dc9af8364111a60e83b6ec3cc445~mv2.jpg",
        "alt": "zivame-blog-product-wall.jpg"
      },
      {
        "label": "zivame-blog-product-infusion.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_ba40f67b2cd845d08905a69429b11393~mv2.jpg",
        "alt": "zivame-blog-product-infusion.jpg"
      },
      {
        "label": "zivame-blog-listicle.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_69aa9b5816c94d42a40b58afb2a2eb70~mv2.jpg",
        "alt": "zivame-blog-listicle.jpg"
      },
      {
        "label": "zivame-blog-alternating-list-layout.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_ed255b49f4ba4c8ea702964e86ba1037~mv2.jpg",
        "alt": "zivame-blog-alternating-list-layout.jpg"
      },
      {
        "label": "zivame-blog-live-collection.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_6a5e619c4e194ef7b89550e8dab065d2~mv2.jpg",
        "alt": "zivame-blog-live-collection.jpg"
      },
      {
        "label": "zivame-blog-form-based-input.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_856b74c5ae8e46bf88acfee978b9a558~mv2.jpg",
        "alt": "zivame-blog-form-based-input.jpg"
      },
      {
        "label": "zivame-blog-custom-shortcodes.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_baba279971c14955af3e41e065af95d7~mv2.jpg",
        "alt": "zivame-blog-custom-shortcodes.jpg"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_0953f050ad0d42be8dda4a0e44ebf218~mv2.jpg",
    "sourceUrl": "https://www.notuser.com/portfolio/content-led-commerce-at-zivame",
    "isPrivate": false
  },
  {
    "id": "e599789b-eb9d-469e-943b-df699e86bf60",
    "slug": "old-developer-portal",
    "title": "Old Developer Portal",
    "category": "UX Design & Strategy",
    "year": "2017",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "UX Design & Strategy",
    "summary": "Old Developer Portal case study.",
    "challenge": "Old Developer Portal required a focused redesign to improve outcomes.",
    "context": "Year: 2017 | Organization: athenahealth | Scope: UX Design & Strategy | Platform: Cloud App",
    "role": "Hands-on | at athenahealth",
    "process": [
      "Old Developer Portal case study."
    ],
    "keyDecisions": [
      "Old Developer Portal case study."
    ],
    "outcome": [
      "Old Developer Portal shipped with measurable product improvements."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "Cloud App",
      "athenahealth",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2017"
      },
      {
        "label": "Organization",
        "value": "athenahealth"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [],
    "thumbnail": "",
    "sourceUrl": "https://www.notuser.com/portfolio/old-developer-portal",
    "isPrivate": false
  },
  {
    "id": "2faf8e22-2844-474c-a0ca-561ae78a7f3c",
    "slug": "zivame-apps-for-android-and-ios",
    "title": "Zivame Apps For Android and iOS",
    "category": "UX Design & Strategy",
    "year": "2017",
    "organization": "Zivame",
    "platform": "iOS & Android Apps",
    "scope": "UX Design & Strategy",
    "summary": "Revamping Zivame’s mobile-first experience boosting engagement and conversion",
    "challenge": "Our goal was to create a Big, Bold, Beautiful brand that not only looked great but functioned with engineering efficiency, delivering a five-month turnaround. To boost engagement and conversion by 20%, we focused on a mobile-first design approach, ensuring the experience was seamless across devices. Using atomic design principles, we built the UI in layers—molecules, components, and surfaces—to deliver a clean and focused user interface that presented one task at a time. Data-driven iteration guided the process, with every change grounded in user feedback and performance metrics.",
    "context": "Innovation was at the heart of this project. We introduced real-world mirroring to let users shop based on experience and implemented a multi-tier product page that gave shoppers three lenses to view products. The FitCode™ recommendation system offered personalized fit suggestions, and content-led commerce infused editorial content directly into the shopping experience. Our cross-functional collaboration spanned tech, UX, marketing, and more, ensuring every team was aligned. The result? See highlights below.",
    "role": "Director UX | Project Lead | Hands-on | at Zivame",
    "process": [
      "Overall UX design strategy across platforms",
      "US Research",
      "Wireframes",
      "Supervision of Visual Design",
      "Supervision of Interaction Design",
      "Usability Testing",
      "User Acceptance Testing",
      "Monitoring Metrics",
      "Incremental Enhancements"
    ],
    "keyDecisions": [
      "Overall UX design strategy across platforms",
      "US Research",
      "Wireframes"
    ],
    "outcome": [
      "Significant conversion improvements—overall web conversions jumped by 9%, with direct and organic web conversions increasing by 19%. Engagement also rose by 17% during the peak months of November and December 2016."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "iOS & Android Apps",
      "Zivame",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2017"
      },
      {
        "label": "Organization",
        "value": "Zivame"
      },
      {
        "label": "Platform",
        "value": "iOS & Android Apps"
      }
    ],
    "gallery": [
      {
        "label": "Zivame Apps For Android and iOS cover",
        "src": "https://static.wixstatic.com/media/bc4f65_20ae40140b56434a9de75c176a4a59df~mv2.jpg",
        "alt": "Zivame Apps For Android and iOS"
      },
      {
        "label": "zivame-android-app-product.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_ce4047f690ed4eaead8776774fe8ff71~mv2.jpg",
        "alt": "zivame-android-app-product.jpg"
      },
      {
        "label": "zivame-android-app-solutions-filter.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_2191f1b592d04793a24b6869874c224d~mv2.jpg",
        "alt": "zivame-android-app-solutions-filter.jpg"
      },
      {
        "label": "zivame-android-app-styles-filter.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_7c1a96b6e3cf4cb09e7ee5a4412acdc2~mv2.jpg",
        "alt": "zivame-android-app-styles-filter.jpg"
      },
      {
        "label": "zivame-adroid-app-article.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_35e484dae55d4c9ca5d747a21f0a2e0b~mv2.jpg",
        "alt": "zivame-adroid-app-article.jpg"
      },
      {
        "label": "zivame-android-app-catalog.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_bb1094139e4e4e6aa250b47eee5608a0~mv2.jpg",
        "alt": "zivame-android-app-catalog.jpg"
      },
      {
        "label": "zivame-android-app-menu.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_b856c8c73bca4d4bb3a5346085829115~mv2.jpg",
        "alt": "zivame-android-app-menu.jpg"
      },
      {
        "label": "zivame-android-app-offers.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_1186f7f55c064f209056f141f6775329~mv2.jpg",
        "alt": "zivame-android-app-offers.jpg"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_20ae40140b56434a9de75c176a4a59df~mv2.jpg",
    "sourceUrl": "https://www.notuser.com/portfolio/zivame-apps-for-android-and-ios",
    "isPrivate": false
  },
  {
    "id": "5aaedb90-b06a-4e34-8fee-a81c53883790",
    "slug": "zivame-champions-b2b-trade-portal",
    "title": "Zivame Champions - B2B Trade Portal",
    "category": "UX Design",
    "year": "2017",
    "organization": "Zivame",
    "platform": "Responsive Web",
    "scope": "UX Design",
    "summary": "Bulk-ordering web app for Zivame's merchants",
    "challenge": "When Zivame entered the B2B trade market, traders like Manoj Babu (the trader persona) faced a time-consuming challenge. Ordering products in bulk was difficult because the platform wasn’t optimized for adding multiple sizes at once. Additionally, determining the availability of specific size ranges was nearly impossible, frustrating users who needed efficiency. I stepped in to address these pain points with a fresh design that simplified bulk orders and streamlined product selection.",
    "context": "The redesigned experience featured a bulk add option, allowing traders to quickly select multiple sizes of a product. A single category page was introduced to highlight stock availability, whether in popular, all, or fast-moving sizes. I also integrated automatic trader margins into the cart and checkout process, making pricing more transparent. Enhancing the order review at checkout ensured accuracy, while restricting B2B users from accessing the consumer site with the same login added an extra layer of security. These changes made bulk ordering faster and more intuitive, ultimately improving the user experience for traders.",
    "role": "Director UX | Project Lead | Hands-on | at Zivame",
    "process": [
      "UX Research",
      "Stakeholder Envisioning & UX Strategy",
      "Product Roadmap",
      "Design and Prototyping",
      "Development Collaboration",
      "User Acceptance Testing (limited)"
    ],
    "keyDecisions": [
      "UX Research",
      "Stakeholder Envisioning & UX Strategy",
      "Product Roadmap"
    ],
    "outcome": [
      "Bulk-ordering web app for Zivame's merchants"
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design",
      "Responsive Web",
      "Zivame",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2017"
      },
      {
        "label": "Organization",
        "value": "Zivame"
      },
      {
        "label": "Platform",
        "value": "Responsive Web"
      }
    ],
    "gallery": [
      {
        "label": "Zivame Champions - B2B Trade Portal cover",
        "src": "https://static.wixstatic.com/media/bc4f65_39dbc9c22c48437988df6be48d8f8fac~mv2.jpg",
        "alt": "Zivame Champions - B2B Trade Portal"
      },
      {
        "label": "zivame-champion-catalog.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_d30b0784dc974740b0429d91b04cf825~mv2.jpg",
        "alt": "zivame-champion-catalog.jpg"
      },
      {
        "label": "zivame-champion-size-error.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_bb2f4d0c43cb461d95bf695fe704eb72~mv2.jpg",
        "alt": "zivame-champion-size-error.jpg"
      },
      {
        "label": "zivame-champion-home.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_ba71963dbb2440f281983b58c0099fd7~mv2.jpg",
        "alt": "zivame-champion-home.jpg"
      },
      {
        "label": "zivame-champion-cart.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_494912ef22084fbf9420691b9a9478c2~mv2.jpg",
        "alt": "zivame-champion-cart.jpg"
      },
      {
        "label": "zivam-champion-size-select.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_880c0e65087245439ae8261e118d2f43~mv2.jpg",
        "alt": "zivam-champion-size-select.jpg"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_39dbc9c22c48437988df6be48d8f8fac~mv2.jpg",
    "sourceUrl": "https://www.notuser.com/portfolio/zivame-champions---b2b-trade-portal",
    "isPrivate": false
  },
  {
    "id": "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5",
    "slug": "zivame-com-ecommerce-store",
    "title": "Zivame.com eCommerce Store",
    "category": "UX Design & Strategy",
    "year": "2016",
    "organization": "Zivame",
    "platform": "Responsive Web",
    "scope": "UX Design & Strategy",
    "summary": "ecommerce website for India's largest online lingerie store",
    "challenge": "Zivame’s e-commerce redesign aimed to embody the brand's bold and beautiful identity while driving a significant boost in engagement and conversion. The challenge was to deliver a mobile-first, visually engaging experience that balanced engineering efficiency with a focus on conversion. Working within a 5-month timeline, the team implemented an atomic design approach, breaking down the UI into components and surfaces that prioritized one task at a time. The result was a streamlined, image-driven platform that seduced users with visuals while ensuring a smooth and intuitive shopping experience.",
    "context": "My contributions were part of a larger cross-functional effort that brought together teams from tech, UX, marketing, and merchandising. With innovations like FitCode™ for personalized recommendations, multi-tier product pages, and real-world shopping mirroring, we focused on creating meaningful product discovery experiences. Through continuous monitoring and data-driven iterations, we achieved a 9% overall web conversion improvement and a 17% increase in user engagement by the end of the year. This project reinforced the value of collaboration and data in driving both brand expression and business growth.",
    "role": "Director UX | Project Lead | Hands-on | at Zivame",
    "process": [
      "UX Research",
      "Stakeholder Envisioning & UX Strategy",
      "Product Roadmap",
      "Design and Prototyping",
      "Development Collaboration",
      "User Acceptance Testing",
      "Usability Testing"
    ],
    "keyDecisions": [
      "UX Research",
      "Stakeholder Envisioning & UX Strategy",
      "Product Roadmap"
    ],
    "outcome": [
      "I was awarded ‘spot award’ for this project."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design & Strategy",
      "Responsive Web",
      "Zivame",
      "Project Lead",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2016"
      },
      {
        "label": "Organization",
        "value": "Zivame"
      },
      {
        "label": "Platform",
        "value": "Responsive Web"
      }
    ],
    "gallery": [
      {
        "label": "Zivame.com eCommerce Store cover",
        "src": "https://static.wixstatic.com/media/bc4f65_98578fc960874555987d46765b776726~mv2.png",
        "alt": "Zivame.com eCommerce Store"
      },
      {
        "label": "zivame-ecommerce-user-account.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_3c36b7c8eea04c969f2d1057d13ec680~mv2.jpg",
        "alt": "zivame-ecommerce-user-account.jpg"
      },
      {
        "label": "zivame-ecommerce-product-firstfold.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_d5acf876dcdd4e219555234b90d00c36~mv2.jpg",
        "alt": "zivame-ecommerce-product-firstfold.jpg"
      },
      {
        "label": "zivame-ecommerce-submenu.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_1337402979e24efc9e29191e1d76f4cf~mv2.jpg",
        "alt": "zivame-ecommerce-submenu.jpg"
      },
      {
        "label": "zivame-ecommerce-sizes-filter.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_c256c71b81f043abac368b56610147c2~mv2.jpg",
        "alt": "zivame-ecommerce-sizes-filter.jpg"
      },
      {
        "label": "zivame-ecommerce-styles-filter.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_ed2a1c28639d4fa9ba9681f5a707952a~mv2.jpg",
        "alt": "zivame-ecommerce-styles-filter.jpg"
      },
      {
        "label": "zivame-ecommerce-reviews.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_f5a56cd43d1044da955497c57922521a~mv2.jpg",
        "alt": "zivame-ecommerce-reviews.jpg"
      },
      {
        "label": "zivame-ecommerce-more-like-this-listview.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_b46b52f80e8c4b2ca2affc8c03c818ba~mv2.jpg",
        "alt": "zivame-ecommerce-more-like-this-listview.jpg"
      },
      {
        "label": "zivame-ecommerce-orders.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_d548b1bafa654f83b67ad9d061af863f~mv2.jpg",
        "alt": "zivame-ecommerce-orders.jpg"
      },
      {
        "label": "zivame-ecommerce-product-attributes.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_e52b24414f554b9f87e6c99ed7189986~mv2.jpg",
        "alt": "zivame-ecommerce-product-attributes.jpg"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_98578fc960874555987d46765b776726~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=0vB8mn7a_c8",
    "sourceUrl": "https://www.notuser.com/portfolio/zivame.com-ecommerce-store",
    "isPrivate": false
  },
  {
    "id": "e07c7462-f1d8-49f4-938c-01b4f09434db",
    "slug": "ceos-keynote-2015",
    "title": "CEO's Keynote 2015",
    "category": "Visual Design & Animation",
    "year": "2015",
    "organization": "Kaseya",
    "platform": "Keynote",
    "scope": "Visual Design & Animation",
    "summary": "CEO’s Keynote Presentation Design for KaseyaConnect 2015",
    "challenge": "KaseyaConnect is an annual event organized by Kaseya, a prominent provider of IT management and security software. The event gathers IT professionals, MSPs, industry experts, and partners to explore emerging trends and showcase the latest technologies. A key highlight is the CEO’s keynote, which sets the stage for the entire event. It outlines Kaseya’s strategic direction, product plans, and major announcements, aiming to inspire and align the audience with the company’s vision.",
    "context": "For KaseyaConnect 2015, I had the opportunity to work directly with CEO Yogesh Gupta on crafting the keynote presentation. Starting from scratch, I collaborated with the CEO to develop a cohesive storyline and source key data points. Through several phases—design exploration, template creation, and meticulous review with team members Loren and Yogesh—I created an engaging presentation. The final touches included integrating “magic” animations that brought the story to life. The presentation was very well received, and I was honored with a spot award for my contributions in animation, art concepts, and compiling the final artwork.",
    "role": "Sr. UX Designer | Hands-on | at Kaseya",
    "process": [
      "For KaseyaConnect 2015, I had the opportunity to work directly with CEO Yogesh Gupta on crafting the keynote presentation.",
      "Starting from scratch, I collaborated with the CEO to develop a cohesive storyline and source key data points.",
      "Through several phases—design exploration, template creation, and meticulous review with team members Loren and Yogesh—I created an engaging presentation.",
      "The final touches included integrating “magic” animations that brought the story to life."
    ],
    "keyDecisions": [
      "For KaseyaConnect 2015, I had the opportunity to work directly with CEO Yogesh Gupta on crafting the keynote presentation.",
      "Starting from scratch, I collaborated with the CEO to develop a cohesive storyline and source key data points.",
      "Through several phases—design exploration, template creation, and meticulous review with team members Loren and Yogesh—I created an engaging presentation."
    ],
    "outcome": [
      "The presentation was very well received, and I was honored with a spot award for my contributions in animation, art concepts, and compiling the final artwork."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Visual Design & Animation",
      "Keynote",
      "Kaseya",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2015"
      },
      {
        "label": "Organization",
        "value": "Kaseya"
      },
      {
        "label": "Platform",
        "value": "Keynote"
      }
    ],
    "gallery": [
      {
        "label": "CEO's Keynote 2015 cover",
        "src": "https://static.wixstatic.com/media/bc4f65_c7082175a319453fbebdd60f4231ab52~mv2.jpg",
        "alt": "CEO's Keynote 2015"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_c7082175a319453fbebdd60f4231ab52~mv2.jpg",
    "demoUrl": "https://www.youtube.com/watch?v=fJdIrk9RIMo",
    "sourceUrl": "https://www.notuser.com/portfolio/ceo's-keynote-2015",
    "isPrivate": false
  },
  {
    "id": "8321bb2e-a0ea-4ddc-afd2-7e45e1a6179b",
    "slug": "kaseya-corporate-website",
    "title": "Kaseya Corporate Website",
    "category": "UX Design",
    "year": "2015",
    "organization": "Kaseya",
    "platform": "Responsive Web",
    "scope": "UX Design",
    "summary": "All new website for Kaseya, launched in June 2015",
    "challenge": "In June 2015, Kaseya launched a completely revamped website aimed at improving user engagement and driving conversions. The goal was to create a responsive, modern web experience that not only looked great but also performed efficiently across all devices. Built on a Drupal backend, the website was designed to be robust and scalable, offering an enhanced browsing experience for users while meeting Kaseya’s business goals of reducing bounce rates and increasing conversions.",
    "context": "The redesign focused on making the site more user-friendly and intuitive, allowing visitors to easily navigate through content and find the information they needed. The result was a notable decrease in bounce rates and a boost in conversion rates, thanks to a streamlined interface that catered to both desktop and mobile users. This project demonstrated the impact of thoughtful design and technical execution in delivering a site that supports business growth while providing an exceptional user experience.",
    "role": "Sr. UX Designer | Hands-on | at Kaseya",
    "process": [
      "Information Architecture – Wireframes and Task Flows in Balsamiq",
      "Visual Design – for all 3 form factors, in Illustrator",
      "User Testing – Affordance Test, Free Exploration Test, Performance Test"
    ],
    "keyDecisions": [
      "Information Architecture – Wireframes and Task Flows in Balsamiq",
      "Visual Design – for all 3 form factors, in Illustrator",
      "User Testing – Affordance Test, Free Exploration Test, Performance Test"
    ],
    "outcome": [
      "All new website for Kaseya, launched in June 2015"
    ],
    "lessons": [
      "<ul class=\"font_8\"> <li><p class=\"font_8\">Fast-paced iterations in wireframes</p></li> <li><p class=\"font_8\">Solving interaction usability issues</p></li> <li><p class=\"font_8\">Graceful degradation from tablet to mobile</p></li> <li><p class=\"font_8\">Working with the grid</p></li> </ul>"
    ],
    "tags": [
      "UX Design",
      "Responsive Web",
      "Kaseya",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2015"
      },
      {
        "label": "Organization",
        "value": "Kaseya"
      },
      {
        "label": "Platform",
        "value": "Responsive Web"
      }
    ],
    "gallery": [
      {
        "label": "Kaseya Corporate Website cover",
        "src": "https://static.wixstatic.com/media/bc4f65_3ec8eed653f34c3bb817d37f6bb84686~mv2.png",
        "alt": "Kaseya Corporate Website"
      },
      {
        "label": "kaseya-corporate-website-wires-all.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_2ab243959ea74f4c93bfedef4ddf76de~mv2.jpg",
        "alt": "kaseya-corporate-website-wires-all.jpg"
      },
      {
        "label": "kaseya-corporate-website-trial.png",
        "src": "https://static.wixstatic.com/media/bc4f65_74d5a22138434425a9308546b846b0fe~mv2.png",
        "alt": "kaseya-corporate-website-trial.png"
      },
      {
        "label": "kaseya-corporate-website-task-flow.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_978dec49f7ef4d209b919e212bc0a5e0~mv2.jpg",
        "alt": "kaseya-corporate-website-task-flow.jpg"
      },
      {
        "label": "kaseya-corporate-website-product.png",
        "src": "https://static.wixstatic.com/media/bc4f65_b40132fcb9b045da8d7b53aba99caff6~mv2.png",
        "alt": "kaseya-corporate-website-product.png"
      },
      {
        "label": "kaseya-corporate-website-services.png",
        "src": "https://static.wixstatic.com/media/bc4f65_84f82836060f408ab94c93f31d98e04d~mv2.png",
        "alt": "kaseya-corporate-website-services.png"
      },
      {
        "label": "kaseya-corporate-website-sample-wire.jpg",
        "src": "https://static.wixstatic.com/media/bc4f65_8073435b5f064a6bbc1b7ea5ddc38871~mv2.jpg",
        "alt": "kaseya-corporate-website-sample-wire.jpg"
      },
      {
        "label": "kaseya-corporate-website-resources.png",
        "src": "https://static.wixstatic.com/media/bc4f65_5c8279ee781849b6a120f0ce8bd23f97~mv2.png",
        "alt": "kaseya-corporate-website-resources.png"
      },
      {
        "label": "kaseya-corporate-website-customer-success.png",
        "src": "https://static.wixstatic.com/media/bc4f65_d1630aaddc7e4f3083b112581df9141a~mv2.png",
        "alt": "kaseya-corporate-website-customer-success.png"
      },
      {
        "label": "kaseya-corporate-website-it-executive.png",
        "src": "https://static.wixstatic.com/media/bc4f65_d37443e996544b3e86c0fe1b788335ff~mv2.png",
        "alt": "kaseya-corporate-website-it-executive.png"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_3ec8eed653f34c3bb817d37f6bb84686~mv2.png",
    "sourceUrl": "https://www.notuser.com/portfolio/kaseya-corporate-website",
    "isPrivate": false
  },
  {
    "id": "e0fbb326-4979-4d7a-93ef-b29506201468",
    "slug": "enterprise-mobility-management",
    "title": "Enterprise Mobility Management",
    "category": "UX Design",
    "year": "2014",
    "organization": "Kaseya",
    "platform": "Cloud App",
    "scope": "UX Design",
    "summary": "Enables organizations to secure mobile devices and data on the devices, whether company-owned or employee-owned.",
    "challenge": "In this project, we focused on enhancing Kaseya’s Enterprise Mobility Management (EMM) platform to better secure both company-owned and personal mobile devices. With the platform already widely used by organizations, the challenge was to design new screens for upcoming features without disrupting the established user experience. Working within the constraints of a legacy framework, I collaborated with a team of six to create intuitive designs that streamlined how users interacted with data-heavy screens.",
    "context": "I contributed to the project by restructuring the information architecture and creating wireframes using Balsamiq, ensuring the designs met the platform’s usability needs. For the visual design, I refreshed legacy screens in Illustrator, maintaining consistency while improving clarity. Through this experience, I learned how to address interaction usability issues and effectively balance functionality with an aging interface.",
    "role": "Sr. UX Designer | Hands-on | at Kaseya",
    "process": [
      "I contributed to the project by restructuring the information architecture and creating wireframes using Balsamiq, ensuring the designs met the platform’s usability needs.",
      "For the visual design, I refreshed legacy screens in Illustrator, maintaining consistency while improving clarity.",
      "Through this experience, I learned how to address interaction usability issues and effectively balance functionality with an aging interface."
    ],
    "keyDecisions": [
      "I contributed to the project by restructuring the information architecture and creating wireframes using Balsamiq, ensuring the designs met the platform’s usability needs.",
      "For the visual design, I refreshed legacy screens in Illustrator, maintaining consistency while improving clarity.",
      "Through this experience, I learned how to address interaction usability issues and effectively balance functionality with an aging interface."
    ],
    "outcome": [
      "Enables organizations to secure mobile devices and data on the devices, whether company-owned or employee-owned."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "UX Design",
      "Cloud App",
      "Kaseya",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2014"
      },
      {
        "label": "Organization",
        "value": "Kaseya"
      },
      {
        "label": "Platform",
        "value": "Cloud App"
      }
    ],
    "gallery": [
      {
        "label": "Enterprise Mobility Management cover",
        "src": "https://static.wixstatic.com/media/bc4f65_daa4d9fcc52445b2a2a8706be67faf55~mv2.jpg",
        "alt": "Enterprise Mobility Management"
      },
      {
        "label": "Bird Eye View",
        "src": "https://static.wixstatic.com/media/bc4f65_8f581422e88d43198f86c6902f7b09d6~mv2.jpg",
        "alt": "Bird Eye View"
      },
      {
        "label": "Screen 3",
        "src": "https://static.wixstatic.com/media/bc4f65_88c764ab99954ec2bf84e03e0da55767~mv2.jpg",
        "alt": "Screen 3"
      },
      {
        "label": "Screen 2",
        "src": "https://static.wixstatic.com/media/bc4f65_3d16be9021d74d40ba8ebaa8f8f59c7d~mv2.jpg",
        "alt": "Screen 2"
      },
      {
        "label": "Screen 1",
        "src": "https://static.wixstatic.com/media/bc4f65_a84e19c8771345b792afce6fec06da53~mv2.jpg",
        "alt": "Screen 1"
      },
      {
        "label": "Wireframe",
        "src": "https://static.wixstatic.com/media/bc4f65_27db51b5fcec46f9b1af4c69d5c6dc30~mv2.png",
        "alt": "Wireframe"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_daa4d9fcc52445b2a2a8706be67faf55~mv2.jpg",
    "sourceUrl": "https://www.notuser.com/portfolio/enterprise-mobility-management",
    "isPrivate": false
  },
  {
    "id": "aec8eca8-6239-4595-86bb-dec0cc9342d6",
    "slug": "video-on-demand-catalog",
    "title": "Video On Demand Catalog",
    "category": "Interactive Prototype",
    "year": "2014",
    "organization": "Cisco",
    "platform": "Set-top Box",
    "scope": "Interactive Prototype",
    "summary": "Video library for set top boxes, featuring thousands of movies and assets",
    "challenge": "The Video-On-Demand (VOD) project aimed to transform how users interact with large content catalogs on set-top boxes, tackling the complexity of navigating vast movie and TV show collections. Our team’s goal was to streamline access to relevant content and make browsing a more intuitive, visually appealing experience. By flattening the category hierarchy, we reduced the clicks needed to access content, making it quicker for users to jump into the catalog. The multi-line scroll design, with rows of posters stacked vertically, allowed for efficient browsing while minimizing performance issues on low-end hardware.",
    "context": "I contributed to this project by gathering customer requirements and developing multiple prototypes in Flash, refining the user experience across several iterations. Key features like curated content and express lanes for recent purchases or wish lists personalized the experience, while semantic search made finding specific titles, actors, or genres quick and easy. I also suggested context menus and in-place expansions, solving usability challenges within the constrained real estate of set-top boxes. Through collaborative design efforts and continuous user feedback, we delivered a simplified VOD experience that catered to user needs while optimizing performance.",
    "role": "UX Designer | Hands-on | at Cisco",
    "process": [
      "I contributed to this project by gathering customer requirements and developing multiple prototypes in Flash, refining the user experience across several iterations.",
      "Key features like curated content and express lanes for recent purchases or wish lists personalized the experience, while semantic search made finding specific titles, actors, or genres quick and easy.",
      "I also suggested context menus and in-place expansions, solving usability challenges within the constrained real estate of set-top boxes.",
      "Through collaborative design efforts and continuous user feedback, we delivered a simplified VOD experience that catered to user needs while optimizing performance."
    ],
    "keyDecisions": [
      "I contributed to this project by gathering customer requirements and developing multiple prototypes in Flash, refining the user experience across several iterations.",
      "Key features like curated content and express lanes for recent purchases or wish lists personalized the experience, while semantic search made finding specific titles, actors, or genres quick and easy.",
      "I also suggested context menus and in-place expansions, solving usability challenges within the constrained real estate of set-top boxes."
    ],
    "outcome": [
      "Video library for set top boxes, featuring thousands of movies and assets"
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Interactive Prototype",
      "Set-top Box",
      "Cisco",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2014"
      },
      {
        "label": "Organization",
        "value": "Cisco"
      },
      {
        "label": "Platform",
        "value": "Set-top Box"
      }
    ],
    "gallery": [
      {
        "label": "Video On Demand Catalog cover",
        "src": "https://static.wixstatic.com/media/bc4f65_248066218ff64c728706f77f50b312c0~mv2.png",
        "alt": "Video On Demand Catalog"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_248066218ff64c728706f77f50b312c0~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=T12QBAZqcAk",
    "sourceUrl": "https://www.notuser.com/portfolio/video-on-demand-catalog",
    "isPrivate": false
  },
  {
    "id": "8b4956ed-a62a-4890-9b73-c844bb8810a7",
    "slug": "evo-12-for-television",
    "title": "Evo 12 for Television",
    "category": "Interactive Prototype",
    "year": "2012",
    "organization": "Cisco",
    "platform": "Set-top Box",
    "scope": "Interactive Prototype",
    "summary": "End-to-end solution for high quality set-top boxes",
    "challenge": "Evo 12 was designed to revolutionize the user experience for high-quality set-top boxes by simplifying complex features into an intuitive interface. My role in the project was to help streamline navigation and functionality, ensuring users could access all the powerful tools without frustration. With a focus on improving usability, I worked closely with a large team over an 18-month period, solving key challenges such as search functionality and recording conflict resolution. These refinements enhanced how users interacted with the system, making it easier to navigate, find content, and resolve common issues.",
    "context": "A major part of my contribution was developing a reskinnable prototype in Flash, allowing the UI to be easily adapted for different brands. I also helped redesign global search, ensuring users could efficiently find content with advanced filters and suggestions. In addition, I tackled interaction design issues in features like conflict resolution, which gave users more flexibility when managing recordings. Throughout the project, I gained valuable insights into handling large-scale designs and learned how to create effective fixed-focus solutions in complex scenarios, helping establish Evo 12 as a leading choice in the set-top box market.",
    "role": "UX Designer | Hands-on | at Cisco",
    "process": [
      "A major part of my contribution was developing a reskinnable prototype in Flash, allowing the UI to be easily adapted for different brands.",
      "I also helped redesign global search, ensuring users could efficiently find content with advanced filters and suggestions.",
      "In addition, I tackled interaction design issues in features like conflict resolution, which gave users more flexibility when managing recordings.",
      "Throughout the project, I gained valuable insights into handling large-scale designs and learned how to create effective fixed-focus solutions in complex scenarios, helping establish Evo 12 as a leading choice in the set-top box market."
    ],
    "keyDecisions": [
      "A major part of my contribution was developing a reskinnable prototype in Flash, allowing the UI to be easily adapted for different brands.",
      "I also helped redesign global search, ensuring users could efficiently find content with advanced filters and suggestions.",
      "In addition, I tackled interaction design issues in features like conflict resolution, which gave users more flexibility when managing recordings."
    ],
    "outcome": [
      "Was sold to key customers like DBS, Astro, Tata Sky"
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Interactive Prototype",
      "Set-top Box",
      "Cisco",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2012"
      },
      {
        "label": "Organization",
        "value": "Cisco"
      },
      {
        "label": "Platform",
        "value": "Set-top Box"
      }
    ],
    "gallery": [
      {
        "label": "Evo 12 for Television cover",
        "src": "https://static.wixstatic.com/media/bc4f65_ecb3641fb25744bd8ce58f42e7b9664a~mv2.png",
        "alt": "Evo 12 for Television"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_ecb3641fb25744bd8ce58f42e7b9664a~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=JS_tVu_GCVg",
    "sourceUrl": "https://www.notuser.com/portfolio/evo-12-for-television",
    "isPrivate": false
  },
  {
    "id": "190f8108-b015-4a96-b6e7-7e13b8c595c2",
    "slug": "evo-3d-for-television",
    "title": "Evo 3D for Television",
    "category": "Interactive Prototype",
    "year": "2012",
    "organization": "Cisco",
    "platform": "Set-top Box",
    "scope": "Interactive Prototype",
    "summary": "Evo 3D was an experimental UI for Set-top Boxes. The prototype was developed by me to showcase the 3D animation effects on TV.",
    "challenge": "Evo 3D was an experimental UI prototype designed to bring immersive 3D animation effects to set-top boxes. The goal was to explore the possibilities of 3D interfaces on TV, creating a visually dynamic experience for users. I developed the prototype in Flash using Papervision 3D, incorporating features like poster list animations and cube transitions to showcase how 3D elements could enhance navigation and interactivity. While the concept showed promise, the set-top box hardware struggled to handle the performance demands, and the experiment was ultimately shelved.",
    "context": "Despite the project not moving forward, it was a valuable learning experience. I reused my 3D poster-list component from a previous project and set a benchmark for the engineering team to explore. Through this work, I deepened my understanding of 3D animations and honed my skills in Papervision 3D, an exciting new tool at the time. Though Evo 3D didn’t make it to production, the project demonstrated the potential of 3D UI on TV and provided insights for future explorations in set-top box design.",
    "role": "UX Designer | Hands-on | at Cisco",
    "process": [
      "Despite the project not moving forward, it was a valuable learning experience.",
      "I reused my 3D poster-list component from a previous project and set a benchmark for the engineering team to explore.",
      "Through this work, I deepened my understanding of 3D animations and honed my skills in Papervision 3D, an exciting new tool at the time.",
      "Though Evo 3D didn’t make it to production, the project demonstrated the potential of 3D UI on TV and provided insights for future explorations in set-top box design."
    ],
    "keyDecisions": [
      "Despite the project not moving forward, it was a valuable learning experience.",
      "I reused my 3D poster-list component from a previous project and set a benchmark for the engineering team to explore.",
      "Through this work, I deepened my understanding of 3D animations and honed my skills in Papervision 3D, an exciting new tool at the time."
    ],
    "outcome": [
      "Evo 3D was an experimental UI for Set-top Boxes. The prototype was developed by me to showcase the 3D animation effects on TV."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Interactive Prototype",
      "Set-top Box",
      "Cisco",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2012"
      },
      {
        "label": "Organization",
        "value": "Cisco"
      },
      {
        "label": "Platform",
        "value": "Set-top Box"
      }
    ],
    "gallery": [
      {
        "label": "Evo 3D for Television cover",
        "src": "https://static.wixstatic.com/media/bc4f65_2d215cfe8e0d4e38908c0122e9a68f4f~mv2.png",
        "alt": "Evo 3D for Television"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_2d215cfe8e0d4e38908c0122e9a68f4f~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=Y25uFQv5MF4",
    "sourceUrl": "https://www.notuser.com/portfolio/evo-3d-for-television",
    "isPrivate": false
  },
  {
    "id": "ee6ac60e-e16a-4ac4-89ef-f0e94a8f05d2",
    "slug": "evo-lite-for-television",
    "title": "Evo Lite for Television",
    "category": "Interactive Prototype",
    "year": "2012",
    "organization": "Cisco",
    "platform": "Set-top Box",
    "scope": "Interactive Prototype",
    "summary": "An EPG (Electronic Program Guide) software specifically designed for low-end set-top boxes.",
    "challenge": "Evo Lite was developed as an Electronic Program Guide (EPG) software specifically tailored for low-end set-top boxes, where limited processing power and memory posed unique challenges. Our mission was to create a simple, functional UI that performed efficiently on these devices while providing an intuitive user experience. With heavy animations and complex visuals off the table due to hardware limitations, we focused on optimizing basic elements like colors, fonts, and simple images to create a realistic prototype that mirrored the actual user experience.",
    "context": "The Evo Lite prototype featured a straightforward design with minimal transitions. For instance, instead of animations like fading, we used timed appearances and disappearances to move between screens and menus. Highlights and navigation within the guide screen were designed to convey information clearly without relying on resource-heavy animations. We also added subtle fly-in animations for banners and transitions, injecting a sense of dynamism without overwhelming the device’s limited capabilities. By balancing simplicity with thoughtful design, we were able to demonstrate that even low-end set-top boxes could offer a seamless and visually appealing EPG experience.",
    "role": "UX Designer | Hands-on | at Cisco",
    "process": [
      "The Evo Lite prototype featured a straightforward design with minimal transitions.",
      "For instance, instead of animations like fading, we used timed appearances and disappearances to move between screens and menus.",
      "Highlights and navigation within the guide screen were designed to convey information clearly without relying on resource-heavy animations.",
      "We also added subtle fly-in animations for banners and transitions, injecting a sense of dynamism without overwhelming the device’s limited capabilities."
    ],
    "keyDecisions": [
      "The Evo Lite prototype featured a straightforward design with minimal transitions.",
      "For instance, instead of animations like fading, we used timed appearances and disappearances to move between screens and menus.",
      "Highlights and navigation within the guide screen were designed to convey information clearly without relying on resource-heavy animations."
    ],
    "outcome": [
      "An EPG (Electronic Program Guide) software specifically designed for low-end set-top boxes."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Interactive Prototype",
      "Set-top Box",
      "Cisco",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2012"
      },
      {
        "label": "Organization",
        "value": "Cisco"
      },
      {
        "label": "Platform",
        "value": "Set-top Box"
      }
    ],
    "gallery": [
      {
        "label": "Evo Lite for Television cover",
        "src": "https://static.wixstatic.com/media/bc4f65_b6d5c27a90594b6d912d9b0e480f9db1~mv2.png",
        "alt": "Evo Lite for Television"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_b6d5c27a90594b6d912d9b0e480f9db1~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=k-m4ZP5pGYk",
    "sourceUrl": "https://www.notuser.com/portfolio/evo-lite-for-television",
    "isPrivate": false
  },
  {
    "id": "61d4a3f3-3497-4288-8318-8420427c4e0a",
    "slug": "express-branding-tool",
    "title": "Express Branding Tool",
    "category": "Product Design & Development",
    "year": "2012",
    "organization": "Cisco",
    "platform": "Desktop app for Set-top Box",
    "scope": "Product Design & Development",
    "summary": "UI solution designed specifically for low-end set-top boxes",
    "challenge": "The Express Branding Tool for Evo Lite was developed to simplify and streamline the rebranding process for low-end set-top boxes, where traditional efforts involved significant time and resources. Our goal was to create a solution that focused on the most impactful branding elements—colors and logos—allowing operators to refresh the UI without the high costs and complexities of full-scale rebranding. The UI of Evo Lite was designed with color panels, simple fonts, and images, providing an ideal foundation for this streamlined branding approach.",
    "context": "I contributed to the inception and development of this tool, playing a key role in designing a fully functional prototype in Flash that could communicate directly with set-top boxes. The tool allowed users to customize the UI using a color editor and select a brand \"mood\" that aligned with their logo. Thanks to the algorithm we developed, changes were applied across all screens, ensuring a cohesive and visually appealing brand experience. The tool's success was recognized with a Spot Award at Cisco and a Best Demo Award at an international conference, highlighting its effectiveness in solving rebranding challenges quickly and efficiently.",
    "role": "UX Designer | Hands-on | at Cisco",
    "process": [
      "I contributed to the inception and development of this tool, playing a key role in designing a fully functional prototype in Flash that could communicate directly with set-top boxes.",
      "The tool allowed users to customize the UI using a color editor and select a brand \"mood\" that aligned with their logo.",
      "Thanks to the algorithm we developed, changes were applied across all screens, ensuring a cohesive and visually appealing brand experience.",
      "The tool's success was recognized with a Spot Award at Cisco and a Best Demo Award at an international conference, highlighting its effectiveness in solving rebranding challenges quickly and efficiently."
    ],
    "keyDecisions": [
      "I contributed to the inception and development of this tool, playing a key role in designing a fully functional prototype in Flash that could communicate directly with set-top boxes.",
      "The tool allowed users to customize the UI using a color editor and select a brand \"mood\" that aligned with their logo.",
      "Thanks to the algorithm we developed, changes were applied across all screens, ensuring a cohesive and visually appealing brand experience."
    ],
    "outcome": [
      "I was awarded spot award at Cisco for development of this tool. We presented this tool in an international conference, where it won the best demo award."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Product Design & Development",
      "Desktop app for Set-top Box",
      "Cisco",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2012"
      },
      {
        "label": "Organization",
        "value": "Cisco"
      },
      {
        "label": "Platform",
        "value": "Desktop app for Set-top Box"
      }
    ],
    "gallery": [
      {
        "label": "Express Branding Tool cover",
        "src": "https://static.wixstatic.com/media/bc4f65_2af9b26ab6fe429c8ba27e2d303d0e2e~mv2.png",
        "alt": "Express Branding Tool"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_2af9b26ab6fe429c8ba27e2d303d0e2e~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=TU9c6soAUxI",
    "sourceUrl": "https://www.notuser.com/portfolio/express-branding-tool",
    "isPrivate": false
  },
  {
    "id": "f2bd21fc-5e31-47f2-b902-b34f5736bd74",
    "slug": "free-hand-animation-tool",
    "title": "Free Hand Animation Tool",
    "category": "Product Design and Development",
    "year": "2012",
    "organization": "Cisco",
    "platform": "Desktop app for Set-top Box",
    "scope": "Product Design and Development",
    "summary": "A tool for set-top box designers, enabling them to create and implement high-quality animations seamlessly",
    "challenge": "The Freehand Animation Tool was developed to solve a long-standing challenge in set-top box design: the gap between designers' creative vision and the final animation implementation. Traditionally, designers communicated animations through sketches or prototypes, which often led to misinterpretation and suboptimal results. To bridge this gap, we created a tool that allowed designers to directly animate set-top box interfaces, ensuring the final output matched their vision. The prototype, demonstrated on Astro's home screen, showcased seamless scrolling, screen transitions, and dynamic menu interactions, dramatically improving the user experience.",
    "context": "I played a key role in conceptualizing and developing this tool. By researching and modifying Robert Penner’s easing equations, I enabled designers to manipulate animation curves and directly implement them on set-top boxes. This innovation allowed for precise control over the flow and timing of animations, eliminating miscommunication and ensuring smooth, cohesive transitions. The tool's success was recognized with an Innovation Excellence Award at Cisco and a Best Demo Award at an international conference, highlighting its impact on the design process and user experience for set-top boxes.",
    "role": "UX Designer | Hands-on | Project Lead | at Cisco",
    "process": [
      "I played a key role in conceptualizing and developing this tool.",
      "By researching and modifying Robert Penner’s easing equations, I enabled designers to manipulate animation curves and directly implement them on set-top boxes.",
      "This innovation allowed for precise control over the flow and timing of animations, eliminating miscommunication and ensuring smooth, cohesive transitions.",
      "The tool's success was recognized with an Innovation Excellence Award at Cisco and a Best Demo Award at an international conference, highlighting its impact on the design process and user experience for set-top boxes."
    ],
    "keyDecisions": [
      "I played a key role in conceptualizing and developing this tool.",
      "By researching and modifying Robert Penner’s easing equations, I enabled designers to manipulate animation curves and directly implement them on set-top boxes.",
      "This innovation allowed for precise control over the flow and timing of animations, eliminating miscommunication and ensuring smooth, cohesive transitions."
    ],
    "outcome": [
      "I was awarded spot award at Cisco for development of this tool. We presented this tool in an international conference, where it won the best demo award."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Product Design and Development",
      "Desktop app for Set-top Box",
      "Cisco",
      "Hands-on",
      "Project Lead"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2012"
      },
      {
        "label": "Organization",
        "value": "Cisco"
      },
      {
        "label": "Platform",
        "value": "Desktop app for Set-top Box"
      }
    ],
    "gallery": [
      {
        "label": "Free Hand Animation Tool cover",
        "src": "https://static.wixstatic.com/media/bc4f65_d359b22f55c545a3845861d6ef4f56e5~mv2.png",
        "alt": "Free Hand Animation Tool"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_d359b22f55c545a3845861d6ef4f56e5~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=1QMRJ496zX8",
    "sourceUrl": "https://www.notuser.com/portfolio/free-hand-animation-tool",
    "isPrivate": false
  },
  {
    "id": "a4168cb6-9246-4881-8fec-4d1b5eacc68a",
    "slug": "hungry-lion-game",
    "title": "Hungry Lion Game",
    "category": "Product Design & Development",
    "year": "2012",
    "organization": "CodeMyCode",
    "platform": "Android and iOS App",
    "scope": "Product Design & Development",
    "summary": "Hungry lion is a puzzle game full of action and adventure. You play as unicorns and your aim is to capture the lion.",
    "challenge": "Hungry Lion is an action-packed puzzle game where players take on the role of magical unicorns with the mission to capture a ferocious, hungry lion before it strikes. The game features five diverse maps—Water of Life, Heat of Desert, Ruins of Temple, Gates of Castle, and Mystery of Caves—each containing six challenging levels. As players progress, they can unlock powerful, colorful unicorns that enhance gameplay. The balance of strategy, adventure, and unlocking magical upgrades keeps players engaged across increasingly difficult levels.",
    "context": "I contributed to the game's entire development cycle, from conceptualizing the gameplay and defining the graphic assets to designing the user interface and analyzing its usability. My role also extended to sound design, optimizing the game's performance in Adobe Flash/ActionScript, and managing its launch on the PlayStore. Through collaboration with a small team of developers and a freelance graphic design team, we brought *Hungry Lion* to life. The game received a positive reception, earning a 4.5-star rating on the PlayStore. This project taught me the intricacies of game development, especially working with heavy graphics on mobile devices while optimizing memory and CPU usage.",
    "role": "Founder | Hands-on | at CodeMyCode",
    "process": [
      "I contributed to the game's entire development cycle, from conceptualizing the gameplay and defining the graphic assets to designing the user interface and analyzing its usability.",
      "My role also extended to sound design, optimizing the game's performance in Adobe Flash/ActionScript, and managing its launch on the PlayStore.",
      "Through collaboration with a small team of developers and a freelance graphic design team, we brought *Hungry Lion* to life.",
      "The game received a positive reception, earning a 4.5-star rating on the PlayStore."
    ],
    "keyDecisions": [
      "I contributed to the game's entire development cycle, from conceptualizing the gameplay and defining the graphic assets to designing the user interface and analyzing its usability.",
      "My role also extended to sound design, optimizing the game's performance in Adobe Flash/ActionScript, and managing its launch on the PlayStore.",
      "Through collaboration with a small team of developers and a freelance graphic design team, we brought *Hungry Lion* to life."
    ],
    "outcome": [
      "Hungry lion is a puzzle game full of action and adventure. You play as unicorns and your aim is to capture the lion."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Product Design & Development",
      "Android and iOS App",
      "CodeMyCode",
      "Founder",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Year",
        "value": "2012"
      },
      {
        "label": "Organization",
        "value": "CodeMyCode"
      },
      {
        "label": "Platform",
        "value": "Android and iOS App"
      }
    ],
    "gallery": [
      {
        "label": "Hungry Lion Game cover",
        "src": "https://static.wixstatic.com/media/bc4f65_5c14a962bd7b444d8f5297cb06197470~mv2.png",
        "alt": "Hungry Lion Game"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_5c14a962bd7b444d8f5297cb06197470~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=5j2QWdgPKxo",
    "sourceUrl": "https://www.notuser.com/portfolio/hungry-lion-game",
    "isPrivate": false
  },
  {
    "id": "41ab1a86-7673-428f-86db-96201f004a6e",
    "slug": "slidemaker-app",
    "title": "Slidemaker App",
    "category": "Product Design & Development",
    "year": "2010",
    "organization": "CodeMyCode",
    "platform": "Android and iOS App",
    "scope": "Product Design & Development",
    "summary": "Slide Maker is a wonderful application designed and developed to create amazing slideshows.",
    "challenge": "Slide Maker is a fun and intuitive application that allows users to create beautiful, personalized slideshows with ease. Whether selecting images from their gallery, capturing new photos, or incorporating videos, users have a range of exciting options to craft their perfect slideshow. The app features customizable entry and exit effects, slide animations, and color adjustments, along with the ability to set focus points for each slide. One of the standout features is the use of themes, which adds a unique and creative touch to every slideshow. Users can also enhance their creations with audio effects and captions, giving them full control over the look and feel of their presentations.",
    "context": "My contributions to the project spanned the full development lifecycle, from concept creation and determining graphic asset requirements to designing the user interface and optimizing the user experience. I was also involved in the development using Adobe Flash/ActionScript, ensuring smooth performance and seamless functionality. With easy sharing options and the ability to preview creations live, Slide Maker offers a fun, engaging way to turn everyday photos and videos into visually stunning slideshows, available for free on the Android market.",
    "role": "Founder | Hands-on | at CodeMyCode",
    "process": [
      "My contributions to the project spanned the full development lifecycle, from concept creation and determining graphic asset requirements to designing the user interface and optimizing the user experience.",
      "I was also involved in the development using Adobe Flash/ActionScript, ensuring smooth performance and seamless functionality.",
      "With easy sharing options and the ability to preview creations live, Slide Maker offers a fun, engaging way to turn everyday photos and videos into visually stunning slideshows, available for free on the Android market."
    ],
    "keyDecisions": [
      "My contributions to the project spanned the full development lifecycle, from concept creation and determining graphic asset requirements to designing the user interface and optimizing the user experience.",
      "I was also involved in the development using Adobe Flash/ActionScript, ensuring smooth performance and seamless functionality.",
      "With easy sharing options and the ability to preview creations live, Slide Maker offers a fun, engaging way to turn everyday photos and videos into visually stunning slideshows, available for free on the Android market."
    ],
    "outcome": [
      "100",
      "Slidemaker has been downloaded over 100k times on the Google Play Store."
    ],
    "lessons": [
      "Cross-functional alignment is critical for durable product outcomes.",
      "Scoping decisions early helps teams ship with confidence."
    ],
    "tags": [
      "Product Design & Development",
      "Android and iOS App",
      "CodeMyCode",
      "Founder",
      "Hands-on"
    ],
    "metrics": [
      {
        "label": "Metric 1",
        "value": "100"
      },
      {
        "label": "Year",
        "value": "2010"
      },
      {
        "label": "Organization",
        "value": "CodeMyCode"
      }
    ],
    "gallery": [
      {
        "label": "Slidemaker App cover",
        "src": "https://static.wixstatic.com/media/bc4f65_a3461b49564745129e2cdfab1b76de98~mv2.png",
        "alt": "Slidemaker App"
      }
    ],
    "thumbnail": "https://static.wixstatic.com/media/bc4f65_a3461b49564745129e2cdfab1b76de98~mv2.png",
    "demoUrl": "https://www.youtube.com/watch?v=bM5XiwG2BoM",
    "sourceUrl": "https://www.notuser.com/portfolio/slidemaker-app",
    "isPrivate": false
  }
];

export function resolveProjectSlug(slug: string) {
  return legacyProjectSlugMap[slug] ?? slug;
}

export function getProjectBySlug(slug: string) {
  const resolved = resolveProjectSlug(slug);
  return projects.find((project) => project.slug === resolved);
}
