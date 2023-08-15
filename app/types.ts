export interface Project {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
}

export interface ProjectImage {
  project: string;
  images: string[];
}
