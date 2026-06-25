export type NavItem = {
  label: string;
  icon: string;
  href: string;
};

export type ProjectArchitectureNode = {
  name: string;
  detail: string;
};

export type ProjectCard = {
  name: string;
  status: string;
  stack: string[];
  features: string[];
  architecture: ProjectArchitectureNode[];
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export type CommitItem = {
  year: string;
  message: string;
  detail: string;
  challenge: string;
  learning: string;
};