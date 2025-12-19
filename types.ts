
export interface Feature {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  longDesc: string[];
  highlights: { title: string; desc: string; icon?: string }[];
}

export interface Internship {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface Innovation {
  id: string;
  title: string;
  icon: string;
  description: string;
  techStack: string[];
}

export interface DemoFormData {
  name: string;
  email: string;
  restaurant: string;
  message: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  skills: string;
  coverLetter: string;
  portfolio: string;
}
