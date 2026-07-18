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

export type ImpactStat = {
  label: string;
  value: string;
  detail: string;
};

export type ProjectSpotlight = {
  name: string;
  year: string;
  title: string;
  result: string;
  proofImage: string;
};

export type AchievementCard = {
  id: string;
  title: string;
  year: string;
  context: string;
  proofImage: string;
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

export type JourneyCheckpoint = {
  year: string;
  title: string;
  detail: string;
  photo: string;
  tags: string[];
};

export type CollegeYear = {
  year: string;
  title: string;
  summary: string;
  highlights: string[];
  photo: string;
};