import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Server, 
  Layers, 
  Zap, 
  Database, 
  Cloud,
  ArrowRight,
  Layout,
  ShieldCheck
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Scalable Backend Systems",
    description: "Design and develop secure, high-performance backends using Node.js, Express, and modern frameworks. Optimized for high traffic and real-time use cases.",
    features: [
      "High-concurrency API Development",
      "Event-driven Architecture (Redis, RabbitMQ)",
      "Load Balancing & Horizontal Scaling",
      "Performance Monitoring & Optimization"
    ],
    color: "blue"
  },
  {
    icon: Layout,
    title: "Full Stack Web Applications",
    description: "End-to-end development of responsive and interactive web applications using React.js, Redux, and modern UI libraries combined with scalable backend APIs.",
    features: [
      "Responsive UI/UX with React & Tailwind",
      "State Management with Redux Toolkit",
      "Secure Authentication & Authorization",
      "Integration with Scalable APIs"
    ],
    color: "green"
  },
  {
    icon: Zap,
    title: "Real-time Applications",
    description: "Build real-time, interactive platforms such as chat apps, multiplayer games, live dashboards, and collaborative tools powered by WebSockets.",
    features: [
      "Real-time Messaging & Notifications",
      "Live Dashboards & Analytics",
      "Multiplayer Game Backends",
      "Collaboration Tools with Socket.IO"
    ],
    color: "orange"
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description: "Efficient database solutions ensuring fast query performance, proper schema design, and scalable data handling across SQL and NoSQL databases.",
    features: [
      "Schema Design (PostgreSQL, MySQL, MongoDB)",
      "Query Optimization & Indexing",
      "Caching with Redis",
      "Data Migration & Backup Solutions"
    ],
    color: "teal"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Deployment and automation of scalable infrastructure with AWS, Docker, CI/CD pipelines, and modern monitoring tools for seamless delivery and observability.",
    features: [
      "AWS Infrastructure Setup & Scaling",
      "Docker & Container Orchestration",
      "CI/CD Pipeline Automation",
      "Monitoring & Observability with Grafana & Prometheus"
    ],
    color: "purple"
  }
];

export function ServicesSection() {
  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Services
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Comprehensive backend development services to build scalable and robust applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-card-border hover-lift group h-full flex flex-col"
            >
              {/* Service Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-foreground-muted leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground-muted">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToContact}
                className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-card border-card-border inline-block">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-foreground-muted">
                Let's discuss your project requirements and create a scalable solution 
                that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-primary hover:shadow-button font-medium"
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.location.href =
                      "mailto:jay.panchal0704@gmail.com?subject=Portfolio Inquiry - Request to Schedule a Call&body=Hello Jay,%0D%0A%0D%0AI visited your portfolio website and would like to schedule a call with you.%0D%0A%0D%0APlease find my details below:%0D%0A- Name: [Your Name]%0D%0A- Company/Organization: [Your Company]%0D%0A- Preferred Date/Time: [Your Availability]%0D%0A- Purpose of Call: [Brief about the discussion]%0D%0A%0D%0ALooking forward to your confirmation.%0D%0A%0D%0ABest Regards,%0D%0A[Your Name]"
                  }
                >
                  Schedule a Call
                </Button>

              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}