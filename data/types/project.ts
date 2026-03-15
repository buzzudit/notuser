export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectGalleryItem = {
  label: string;
  src?: string;
  alt?: string;
};

export type NarrativeCallout = {
  label: string;
  text: string;
};

export type NarrativeOption = {
  label: string;
  detail: string;
};

export type NarrativeAct = {
  id: string;
  chapter: string;
  title: string;
  prose: string[];
  callout?: NarrativeCallout;
  options?: NarrativeOption[];
};

export type ProjectNarrative = {
  hook: string;
  acts: NarrativeAct[];
  pivot: {
    chapter: string;
    title: string;
    prose: string[];
    callout?: NarrativeCallout;
  };
  resolution: {
    prose: string[];
    highlight: string;
  };
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
  narrative?: ProjectNarrative;
};
