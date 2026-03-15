export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  sourceUrl: string;
  thumbnail: string;
  author: string;
  category: string;
  tags: string[];
  date: string;
  updatedAt: string;
  readTime: string;
  sections: BlogSection[];
};
