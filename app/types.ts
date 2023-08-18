export interface Project {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  authors: string;
}

export interface ProjectImage {
  project: string;
  images: string[];
}
