import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Users,
  Globe,
  Gamepad2,
  ArrowRight,
  Phone,
  Shield,
} from "lucide-react";

const projects = [
  {
    title: "Flexwork - Freelancing Platform",
    description:
      "A comprehensive freelancing platform connecting clients with freelancers. Features user registration, project management, Bid Proposals",
    image: "",
    technologies: ["Node.js", "React.js", "MongoDB", "AWS"],
    features: [
      "User Authentication & Authorization",
      "Client & Freelancer Dashboards",
      "Project Management System",
      "File Upload & Management",
      "Bid Management"
    ],
    type: "Full Stack",
    status: "Completed",
    icon: Users,
    links: {
      github: "https://github.com/Jay072002/flexwork",
      live: "#",
    },
  },
  {
    title: "Blog Website Platform",
    description:
      "Blog platform with content management system, user engagement features, and comprehensive admin dashboard for analytics and content moderation.",
    image: "",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux"],
    features: [
      "User Registration & Authentication",
      "Content Management System",
      "Admin Analytics Dashboard",
    ],
    type: "Full Stack",
    status: "Completed",
    icon: Globe,
    links: {
      github: "https://github.com/Jay072002/blog_app_assignment",
      live: "#",
    },
  },
  {
    title: "Real-Time Multiplayer Tic-Tac-Toe",
    description:
      "Interactive multiplayer game with real-time gameplay, room-based matchmaking, and live score tracking. Built with modern web technologies for smooth gaming experience.",
    image: "",
    technologies: ["Node.js", "Socket.IO", "React.js", "Redis", "WebSockets"],
    features: [
      "Real-time Multiplayer Gameplay",
      "Room-based Matchmaking",
      "Live Score Tracking",
      "Game State Synchronization",
    ],
    type: "Real-time App",
    status: "Completed",
    icon: Gamepad2,
    links: {
      github: "https://github.com/Jay072002/tic-tac-toe",
      live: "#",
    },
  },
  {
    title: "Fancall",
    description:
      "A Platform Where Creators Grow, Viewers Engage, and Brands Thrive. Fancall connects content creators directly with the viewers through personalized video calls",
    image: "",
    technologies: [
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "AWS (EC2, RDS, CloudTrail, Load Balancer)",
      "RabbitMQ"
    ],
    features: [
      "Real-time voice & video calling",
      "Multi-user chat rooms",
      "Socket.IO-based communication",
      "Admin & user management",
      "Brand Campaigns"
    ],
    type: "Real-time App",
    status: "Live",
    icon: Phone,
    links: {
      live: "https://www.fancall.in/",
    },
  },
  {
    title: "PES (Premium Environmental Service)",
    description:
      "US-based environmental service platform providing premium solutions to manage and monitor environmental operations efficiently.",
    image: "/api/placeholder/400/250",
    technologies: [
      "Node.js",
      "React.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Tailwind CSS",
    ],
    features: [
      "Enterprise-grade dashboards",
      "Data tracking & reporting",
      "User role-based access",
      "Integration with third-party environmental APIs",
    ],
    type: "Enterprise App",
    status: "Live",
    icon: Globe,
    links: {
      live: "https://www.premiumenvironmentalservices.com/home/",
    },
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Showcase of notable projects demonstrating backend expertise and
            full-stack capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-card-border hover-lift"
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-card rounded-lg overflow-hidden">
                    {/* Placeholder for project screenshot */}
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-foreground-muted" />
                    </div>
                  </div>

                  {/* Project Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-foreground-muted">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4 pt-4">
                      {/* Show "View Code" only if github link exists */}
                      {project.links.github && project.links.github !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}

                      {/* Show "Live Demo" only if live link exists */}
                      {project.links.live && project.links.live !== "#" && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-primary hover:shadow-button"
                        >
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-card border-card-border inline-block">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Want to See More Projects?
              </h3>
              <p className="text-foreground-muted max-w-md">
                Check out my GitHub profile for more projects and open-source
                contributions.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-primary hover:shadow-button font-medium group"
              >
                <a
                  href="https://github.com/Jay072002?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  Visit GitHub
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
