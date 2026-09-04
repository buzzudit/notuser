export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectGalleryItem = {
  label: string;
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
  span?: "default" | "wide";
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

export type CaseStudySectionId =
  | "problem"
  | "context"
  | "role"
  | "process"
  | "decisions"
  | "outcome"
  | "lessons";

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
  /**
   * Per-section subtitles for the case study's section guide. Each key overrides the
   * generic default, so a project can describe what is actually in its own Process or
   * Decisions section instead of restating what those words mean.
   */
  sectionGuide?: Partial<Record<CaseStudySectionId, string>>;
  narrative?: ProjectNarrative;
};
