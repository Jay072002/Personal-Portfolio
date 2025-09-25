import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
            >
              Jay Panchal
            </button>
            <p className="text-foreground-muted">
              Full Stack Software Engineer crafting scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:text-center">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col md:items-center space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const section = document.querySelector(link.href);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-foreground-muted hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:text-right">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3 md:justify-end">
              <a
                href="https://github.com/Jay072002"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-card-border rounded-lg transition-colors hover-lift"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jay-panchal-b7592b213/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-card-border rounded-lg transition-colors hover-lift"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:jay.panchal0704@gmail.com"
                className="p-2 bg-card hover:bg-card-border rounded-lg transition-colors hover-lift"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground-muted">
              © {currentYear} Jay Panchal. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-sm text-foreground-muted">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}