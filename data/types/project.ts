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
