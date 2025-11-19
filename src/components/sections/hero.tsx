import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import jayProfile from "@/assets/Jay-profile.jpg";
import cvFile from "@/assets/Jay-Panchal-Resume.pdf";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 bg-dots opacity-50"></div>

      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div
            className="space-y-8 animate-slideInLeft animate-fadeInUp"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium">Hi there, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Jay Panchal</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground-muted">
                Full Stack Software Engineer
              </h2>
              <p className="text-lg text-foreground-muted max-w-xl leading-relaxed">
                Crafting scalable backend systems and distributed architectures.
                Passionate about Node.js, cloud infrastructure, and building
                high-performance applications that power modern businesses.
              </p>
            </div>

            {/* Quick highlights */}
            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "React.js",
                "PostgreSQL",
                "AWS",
                "System Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-card-border rounded-full text-sm font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="group bg-gradient-primary hover:shadow-button font-medium"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-foreground-muted">
                Connect with me:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/jay-panchal-b7592b213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card hover:bg-card-border rounded-lg transition-colors hover-lift"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Jay072002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card hover:bg-card-border rounded-lg transition-colors hover-lift"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:jay.panchal0704@gmail.com"
                  className="p-2 bg-card hover:bg-card-border rounded-lg transition-colors hover-lift"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div
            className="relative animate-slideInRight animate-fadeInUp"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 scale-105"></div>

              {/* Profile image container */}
              <div className="relative bg-gradient-card rounded-2xl p-1 glow-border">
                <div className="relative overflow-hidden rounded-xl bg-card">
                  <img
                    src={jayProfile}
                    alt="Jay Panchal - Backend Software Engineer"
                    className="w-full h-auto object-cover"
                  />

                  {/* Overlay with download CV */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full bg-background/80 backdrop-blur-sm border border-card-border hover:bg-background/90"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = cvFile; // the imported PDF
                        link.download = "Jay-Panchal-Resume.pdf"; // filename for download
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse-glow">
                Available for hire
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-card-border px-4 py-2 rounded-xl">
                <p className="text-sm font-medium">3+ Years Experience</p>
                <p className="text-xs text-foreground-muted">
                  Full Stack Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
