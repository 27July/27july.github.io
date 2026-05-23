export type Project = {
  slug: string;
  title: string;
  year: string;
  status: string;
  featured?: boolean;
  summary: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
  technologies: string[];
};
