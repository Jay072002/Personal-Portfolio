import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Database, 
  Zap, 
  Network, 
  Cloud, 
  Monitor,
  Code,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Monitor,
    color: "orange",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Redux", level: 80 },
      { name: "HTML/CSS/SCSS", level: 75 },
      { name: "Responsive & Tailwind Design", level: 70 },
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "primary",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "TypeScript", level: 50 },
      { name: "JavaScript (ES6+)", level: 80 },
    ]
  },
  {
    title: "Databases & Caching",
    icon: Database,
    color: "accent",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 60 },
      { name: "Redis", level: 70 },
    ]
  },
  {
    title: "Real-Time Systems",
    icon: Zap,
    color: "orange",
    skills: [
      { name: "WebSockets", level: 85 },
      { name: "Socket.IO", level: 85 },
      { name: "Agora Integration", level: 60 },
    ]
  },
  {
    title: "Distributed & Microservices",
    icon: Network,
    color: "teal",
    skills: [
      { name: "Microservices Architecture", level: 80 },
      { name: "RabbitMQ / Event Queues", level: 70 },
      { name: "API Versioning & Gateway", level: 85 },
      { name: "Load Balancing Strategies", level: 60 },
    ]
  },
  {
    title: "Cloud, DevOps & Monitoring",
    icon: Cloud,
    color: "primary",
    skills: [
      { name: "AWS (EC2, RDS, S3, Load Balancer)", level: 65 },
      { name: "Docker / Containerization", level: 60 },
      { name: "CI/CD Pipelines", level: 55 },
      { name: "Grafana & Prometheus Monitoring", level: 50 },
    ]
  },
  {
    title: "System Design & Performance",
    icon: Layers,
    color: "accent",
    skills: [
      { name: "Scalability Strategies", level: 80 },
      { name: "Database Design & Optimization", level: 90 },
      { name: "Caching & Performance Tuning", level: 85 },
      { name: "Secure & Robust Architecture", level: 85 },
    ]
  },
  {
    title: "Development Tools & Best Practices",
    icon: Code,
    color: "teal",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "REST API Design", level: 95 },
      { name: "Testing (Jest)", level: 70 },
      { name: "Documentation & Code Quality", level: 85 },
    ]
  }
];


const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{skill.name}</span>
      <span className="text-foreground-muted">{skill.level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Comprehensive backend technologies and tools I use to build scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-card-border hover-lift group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {category.skills.length} skills
                  </Badge>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Full Stack Development",
              "Scalable Architecture",
              "API & Microservices",
              "Database Optimization",
              "Real-time Applications",
              "Cloud Infrastructure (AWS, Docker)",
              "System Design & Integration",
              "Performance Monitoring (Grafana, Prometheus)",
              "Authentication & Security",
              "CI/CD Automation"
            ].map((competency, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {competency}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}