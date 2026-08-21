import type { AchievementCard, CollegeYear, CommitItem, ImpactStat, JourneyCheckpoint, NavItem, ProjectCard, ProjectSpotlight, SkillCategory } from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Profile", icon: "🧠", href: "#profile" },
  { label: "Processes", icon: "⚙", href: "#processes" },
  { label: "Skills", icon: "🧩", href: "#skills" },
  { label: "Projects", icon: "📂", href: "#projects" },
  { label: "Achievements", icon: "🏆", href: "#achievements" },
  // { label: "Git Journey", icon: "📜", href: "#journey" },
  { label: "Resume", icon: "📄", href: "#resume" },
  { label: "Contact", icon: "📬", href: "#contact" }
];

export const systemModules = [
  { title: "Curiosity Engine", description: "Every project starts with \"How does this actually work?\"" },
  { title: "Debugging Engine", description: "Break ambiguous work into scoped, shippable slices." },
  { title: "Builder.dll", description: "I learn by building products, not just prototypes." },
  { title: "AutoUpdate Service", description: "Every project teaches something the next one uses." }
];

export const leadershipStats: ImpactStat[] = [
  { label: "Projects", value: "10+", detail: "AI, mobile, and systems with end-to-end ownership." },
  { label: "Problems Solved", value: "500+", detail: "Diverse set of algorithmic and system design challenges." },
  { label: "Core domains", value: "3", detail: "AI, mobile, and systems with end-to-end ownership." },
  { label: "Winning hackathons", value: "5x", detail: "Validated under time pressure with live demos." },
  { label: "Internships", value: "1", detail: "Validated under time pressure with live demos." },
  { label: "Certifications", value: "6", detail: "Validated under time pressure with live demos." },
  { label: "Patents filed", value: "3", detail: "Original ideas pushed beyond the prototype stage." },
  { label: "Operating style", value: "Critical Thinking", detail: "Product thinking, clarity, reliability, and delivery." }
];

export const runningProcesses = [
  { pid: 101, name: "Software Engineer", status: "Running" },
  { pid: 102, name: "Open Source", status: "Initializing" },
  { pid: 103, name: "Building Products", status: "Active" },
  { pid: 104, name: "Continuous Learning", status: "Background" },
  { pid: 106, name: "Backend Development", status: "Running" },
  { pid: 105, name: "AI Systems", status: "Active" },
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
    name: "Rakshak",
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
    name: "TrueVision",
    status: "Production",
    stack: ["PyTorch", "OpenCV", "Flask", "Firebase"],
    features: ["Deepfake Detection", "Video Analysis", "Chrome Extension", "Spatial + Temporal Modeling"],
    architecture: [
      { name: "Browser Extension", detail: "Captures suspicious media for analysis" },
      { name: "Vision Pipeline", detail: "Spatial + temporal inference across frames" },
      { name: "Model Service", detail: "PyTorch-backed detector and scoring service" },
      { name: "Evidence Store", detail: "Results persisted for inspection and review" }
    ]
  },
  {
    name: "Query Wizard",
    status: "Pre-production",
    stack: ["Streamlit", "Gemini", "MYSQL", "Python"],
    features: ["Executive dashboard", "Role-based access", "NLP to SQL", "Data visualization"],
    architecture: [
      { name: "Command UI", detail: " Service that converts multilingual natural language queries into optimized SQL statements " },
      { name: "Insight Layer", detail: " Designed a context-aware session management system to preserve conversational history" },
      { name: "Workflow Engine", detail: "Optimized backend request flow and database interactions, reducing redundant processing" },
      { name: "Audit Trail", detail: " Enable iterative query refinement." }
    ]
  }
];

export const projectSpotlights: ProjectSpotlight[] = [
  {
    name: "Rakshak",
    year: "2025",
    title: "Emergency response flow",
    result: "Low-friction SOS activation, navigation, and AI-assisted escalation in one app.",
    proofImage: "/placeholders/rakshak_logo.png",
    archImage: "/placeholders/rakshak_Arch.png"
  },
  {
    name: "TrueVision",
    year: "2025",
    title: "Deepfake detection pipeline",
    result: "Browser capture, model inference, and evidence review packaged as one service.",
    proofImage: "/placeholders/project-truevision.svg",
    archImage: "/placeholders/project-truevision.svg",
  },
  {
    name: "Query Wizard",
    year: "2026",
    title: "Leadership dashboard concept",
    result: "A product-style control surface that shows how I design for clarity and scale.",
    proofImage: "/placeholders/project-nexus.svg",
    archImage: "/placeholders/project-nexus.svg"
  }
];

export const achievementCards: AchievementCard[] = [
  {
    id: "bharat-shiksha-expo-1",
    title: "Bharat Shiksha Expo Hackathon Winner",
    year: "2024",
    context: "Fast execution, demo clarity, and a solution that could be explained to non-technical judges.",
    proofImage: "/placeholders/achievement-bharat-shiksha.svg"
  },
  {
    id: "bharat-shiksha-expo-2",
    title: "Bharat Shiksha Expo Hackathon Winner",
    year: "2024",
    context: "Second win from the same event track, reinforcing consistency under pressure.",
    proofImage: "/placeholders/achievement-bharat-shiksha-2.svg"
  },
  {
    id: "up-international-trade-show",
    title: "UP International Trade Show Winner",
    year: "2024",
    context: "A market-facing win that proves the product story lands outside the dev room.",
    proofImage: "/placeholders/achievement-trade-show.svg"
  },
  {
    id: "patent-filed-1",
    title: "Patent Filed - Problem Space 01",
    year: "2025",
    context: "An original idea documented with enough rigor to defend in a formal process.",
    proofImage: "/placeholders/achievement-patent-1.svg"
  },
  {
    id: "patent-filed-2",
    title: "Patent Filed - Problem Space 02",
    year: "2025",
    context: "A second filing showing repeatable invention, not one-off luck.",
    proofImage: "/placeholders/achievement-patent-2.svg"
  },
  {
    id: "technical-events-organizer",
    title: "Technical Events Organizer",
    year: "2025",
    context: "Owned execution, logistics, and communication for teams across the event lifecycle.",
    proofImage: "/placeholders/achievement-organizer.svg"
  }
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
  { label: "LinkedIn", value: "Reachable", href: "https://www.linkedin.com/in/satyam-jaiswal-1ab701259/" },
  { label: "GitHub", value: "Reachable", href: "https://github.com/SG-CLUB-045" },
  { label: "Email", value: "Reachable", href: "mailto:jsatyam045@gmail.com" },
  { label: "Location", value: "India", href: "#contact" }
];