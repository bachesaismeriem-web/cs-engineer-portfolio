export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillsData = {
  sectionTitle: "SKILLS",
  heading: "My Technical Skills",
  subtitle: "Technologies and tools I work with",
  quote: "Technology is not just about code, it's about solving real problems.",
  categories: [
    {
      title: "Languages",
      icon: "⟨/⟩",
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "React", "Next.js", "Astro", "Tailwind CSS"]
    },
    {
      title: "Backend & Databases",
      icon: "🗄️",
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Networking",
      icon: "📡",
      skills: ["Cisco", "TCP/IP", "DNS", "DHCP", "Firewall"]
    },
    {
      title: "Tools & DevOps",
      icon: "⚙️",
      skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"]
    },
    {
      title: "Other",
      icon: "🔧",
      skills: ["REST APIs", "Postman", "Figma", "Cloud", "Linux"]
    },
    // Added Soft Skills Category as requested
    {
      title: "Soft Skills",
      icon: "🧠",
      skills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability"]
    }
  ] as SkillCategory[]
};