export interface Case {
  id: string;
  slug: string;
  title: string;
  category: string;
  caseType: string;
  state: string;
  year: number;
  outcome: string;
  summary: string;
  clientChallenge: string;
  legalStrategy: string;
  investigation: string;
  documentation: string;
  proceedings: string;
  resolution: string;
  outcome_detail: string;
  lessonsLearned: string;
  clientFeedback: string;
  tags: string[];
  featured: boolean;
  duration: string;
  court: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  caseType: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  source: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  subServices: string[];
  color: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  src: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  legalIssue: string;
  message: string;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  preferredTime: string;
}
