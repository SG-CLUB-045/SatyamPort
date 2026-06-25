import type { CollegeYear, CommitItem, JourneyCheckpoint, NavItem, ProjectCard, SkillCategory } from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Profile", icon: "🧠", href: "#profile" },
  { label: "Processes", icon: "⚙", href: "#processes" },
  { label: "Projects", icon: "📂", href: "#projects" },
  { label: "Achievements", icon: "🏆", href: "#achievements" },
  { label: "Skills", icon: "🧩", href: "#skills" },
  { label: "Git Journey", icon: "📜", href: "#journey" },
  { label: "Resume", icon: "📄", href: "#resume" },
  { label: "Contact", icon: "📬", href: "#contact" }
];

export const systemModules = [
  { title: "Curiosity Engine", description: "Always exploring how systems work." },
  { title: "Problem Solving Module", description: "Break complex problems into scalable solutions." },
  { title: "Builder Mode", description: "I learn by building." },
  { title: "Continuous Upgrade Service", description: "Every project is a new version release." }
];

export const runningProcesses = [
  { pid: 101, name: "Student", status: "Running" },
  { pid: 102, name: "Flutter Developer", status: "Active" },
  { pid: 103, name: "AI Engineer", status: "Active" },
  { pid: 104, name: "Hackathon Competitor", status: "Active" },
  { pid: 105, name: "System Design Learner", status: "Running" }
];

export const skillCategories: SkillCategory[] = [
  { name: "Languages", items: ["C++", "Python", "JavaScript", "SQL"] },
  { name: "Frontend", items: ["Flutter", "React", "Tailwind"] },
  { name: "Backend", items: ["Flask", "Firebase", "REST APIs"] },
  { name: "AI/ML", items: ["PyTorch", "OpenCV", "TensorFlow", "Scikit-Learn"] },
  { name: "Database", items: ["MySQL", "MongoDB", "Firebase"] },
  { name: "Concepts", items: ["System Design", "OOP", "Operating Systems", "Computer Networks", "Distributed Systems"] }
];

export const projects: ProjectCard[] = [
  {
    name: "Rakshak Service",
    status: "Production",
    stack: ["Flutter", "Firebase", "Gemini AI", "Google Maps"],
    features: ["Voice Detection", "Fall Detection", "SOS Alerts", "Fake Call Simulation", "Safety Navigation"],
    architecture: [
      { name: "Flutter App", detail: "Emergency-first mobile interface with fast actions" },
      { name: "Safety Engine", detail: "Rules and detection pipeline for threat events" },
      { name: "AI Layer", detail: "Gemini-assisted intelligence for context-aware help" },
      { name: "Map & Alert Relay", detail: "Location awareness and alert fan-out" }
    ]
  },
  {
    name: "TrueVision Service",
    status: "Production",
    stack: ["PyTorch", "OpenCV", "Flask", "Firebase"],
    features: ["Deepfake Detection", "Video Analysis", "Chrome Extension", "Spatial + Temporal Modeling"],
    architecture: [
      { name: "Browser Extension", detail: "Captures suspicious media for analysis" },
      { name: "Vision Pipeline", detail: "Spatial + temporal inference across frames" },
      { name: "Model Service", detail: "PyTorch-backed detector and scoring service" },
      { name: "Evidence Store", detail: "Results persisted for inspection and review" }
    ]
  }
];

export const achievements = [
  "2× Bharat Shiksha Expo Hackathon Winner",
  "UP International Trade Show Winner",
  "Patent Filed #1",
  "Patent Filed #2",
  "Technical Events Organizer"
];

export const journeyCheckpoints: JourneyCheckpoint[] = [
  {
    year: "2022",
    title: "First lines of code",
    detail: "The beginning was about learning logic, staying patient, and becoming comfortable with failing forward.",
    photo: "/placeholders/journey-2022.svg",
    tags: ["Curiosity", "C++", "Foundations"]
  },
  {
    year: "2023",
    title: "Mobile apps and UI craft",
    detail: "Flutter became the first place where code felt like a product, not just an exercise.",
    photo: "/placeholders/journey-2023.svg",
    tags: ["Flutter", "Product thinking", "Motion"]
  },
  {
    year: "2024",
    title: "Hackathon momentum",
    detail: "Fast iterations, teamwork, and demos turned skill growth into visible outcomes.",
    photo: "/placeholders/journey-2024.svg",
    tags: ["Hackathons", "Execution", "Pitching"]
  },
  {
    year: "2025",
    title: "AI systems and trust",
    detail: "TrueVision and related AI work made the stack feel larger than a model and more like an end-to-end service.",
    photo: "/placeholders/journey-2025.svg",
    tags: ["AI", "Computer Vision", "Reliability"]
  },
  {
    year: "2026",
    title: "Production-ready story",
    detail: "The portfolio itself becomes the final product that ties the story together for recruiters.",
    photo: "/placeholders/journey-2026.svg",
    tags: ["Systems", "Product", "Hiring"]
  }
];

export const collegeJourney: CollegeYear[] = [
  {
    year: "Year 1",
    title: "Learning the basics",
    summary: "Built the habit of learning daily, explored programming fundamentals, and understood how to break down problems.",
    highlights: ["Programming fundamentals", "C++ practice", "First projects"],
    photo: "/placeholders/college-year-1.svg"
  },
  {
    year: "Year 2",
    title: "Finding my stack",
    summary: "Shifted toward mobile development, explored collaboration, and started turning assignments into real mini-products.",
    highlights: ["Flutter UI work", "Team collaboration", "Mini apps"],
    photo: "/placeholders/college-year-2.svg"
  },
  {
    year: "Year 3",
    title: "Shipping and competing",
    summary: "Joined hackathons, expanded into AI/ML, and started working on solutions that needed a clear demo story.",
    highlights: ["Hackathons", "AI projects", "Demos"],
    photo: "/placeholders/college-year-3.svg"
  },
  {
    year: "Year 4",
    title: "Ready for product teams",
    summary: "Focused on architecture, reliability, and packaging the work into a recruiter-friendly portfolio narrative.",
    highlights: ["System design", "Production polish", "Portfolio storytelling"],
    photo: "/placeholders/college-year-4.svg"
  }
];

export const commits: CommitItem[] = [
  { year: "2022", message: "init: Started programming journey", detail: "The first commit that turned curiosity into a habit.", challenge: "Finding a learning path that felt sustainable.", learning: "Small daily reps create real momentum." },
  { year: "2022", message: "feat: Learned C++", detail: "Built the foundation for thinking about systems, speed, and control.", challenge: "Translating logic into code without fear of syntax.", learning: "Debugging is a skill, not a setback." },
  { year: "2023", message: "feat: Started Flutter development", detail: "Entered mobile development and started shipping polished interfaces.", challenge: "Balancing UI polish with architecture discipline.", learning: "A great experience needs both design and structure." },
  { year: "2023", message: "feat: Built AI projects", detail: "Moved from curiosity to applied machine learning systems.", challenge: "Making models useful beyond demo notebooks.", learning: "The real win is deployment, not just training." },
  { year: "2024", message: "feat: Won first hackathon", detail: "Validated the builder mindset under time pressure.", challenge: "Shipping something valuable before the clock ran out.", learning: "Speed improves when the problem is framed well." },
  { year: "2024", message: "feat: Built Rakshak", detail: "A safety-focused mobile product designed for real impact.", challenge: "Combining voice, alerts, maps, and AI into one flow.", learning: "Useful products emerge when empathy drives the architecture." },
  { year: "2025", message: "feat: Built TrueVision", detail: "A deepfake detection system for integrity and trust.", challenge: "Combining browser, backend, and vision inference pipelines.", learning: "System design matters even more when the model is only one part." },
  { year: "2025", message: "feat: Filed patents", detail: "Pushed ideas from prototype territory into protected innovation.", challenge: "Documenting original ideas with enough rigor to defend them.", learning: "Innovation gets stronger when paired with ownership." },
  { year: "2026", message: "release: Preparing for Software Engineering roles", detail: "Turning experience into a production-ready profile for recruiters.", challenge: "Condensing the story without losing the depth.", learning: "Clear narrative is part of strong engineering communication." }
];

export const releases = [
  { version: "v1.0", title: "Learning to Code" },
  { version: "v2.0", title: "Mobile Development Era" },
  { version: "v3.0", title: "AI Exploration" },
  { version: "v4.0", title: "Innovation and Hackathons" },
  { version: "v5.0", title: "Production Ready Engineer" }
];

export const contactEntries = [
  { label: "LinkedIn", value: "Reachable", href: "https://linkedin.com" },
  { label: "GitHub", value: "Reachable", href: "https://github.com" },
  { label: "Email", value: "Reachable", href: "mailto:hello@satyamos.dev" },
  { label: "Location", value: "India", href: "#contact" }
];