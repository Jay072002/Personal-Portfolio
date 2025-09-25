import { Card } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const workExperience = [
  {
    title: "Node.js Developer",
    company: "Fancall Pvt Ltd",
    period: "May 2024 – Jun 2025",
    type: "Backend Focused",
    description: "Leading backend development for scalable communication platforms, implementing real-time features and optimizing system performance.",
    icon: Briefcase,
  },
  {
    title: "MERN Stack Developer",
    company: "Webs Optimization Software Solution",
    period: "Aug 2023 – May 2024",
    type: "Full Stack",
    description: "Developed full-stack web applications with focus on backend architecture, database optimization, and API design.",
    icon: Briefcase,
  },
  {
    title: "Jr. Software Developer",
    company: "Lucent Innovation Pvt Ltd",
    period: "Jun 2022 – Aug 2023",
    type: "Backend Focus",
    description: "Started my professional journey focusing on backend development, learning distributed systems and cloud technologies.",
    icon: Briefcase,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Passionate backend engineer with a drive for continuous learning and knowledge sharing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              <p className="text-lg text-foreground-muted leading-relaxed">
                I'm a Full Stack Software Engineer with over 3 years of experience 
                building scalable web applications and distributed systems. My passion lies 
                in creating robust, high-performance backend architectures that can handle 
                real-world challenges.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                I specialize in Node.js ecosystem, database optimization, and cloud 
                infrastructure. I'm constantly learning new technologies and sharing my 
                knowledge with the developer community through mentoring and open-source 
                contributions.
              </p>
            </div>

            {/* Education */}
            <Card className="p-6 bg-card border-card-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Education</h4>
                  <p className="text-primary font-medium">Integrated Master of Science in IT (I-MScIT)</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-foreground-muted">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Silver Oak University
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2021-2024
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Continuous Learning", value: "Always Improving" },
                { label: "Knowledge Sharing", value: "Community First" },
                { label: "Code Quality", value: "Best Practices" },
                { label: "Problem Solving", value: "Analytical Thinking" },
              ].map((item, index) => (
                <Card key={index} className="p-4 text-center bg-card border-card-border hover-lift">
                  <p className="text-sm text-foreground-muted">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Work Experience Timeline */}
          <div className="space-y-6 animate-slideInRight">
            <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="p-6 bg-card border-card-border hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                      <job.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-3 text-sm text-foreground-muted">
                        <Calendar className="h-4 w-4" />
                        {job.period}
                      </div>
                      <p className="text-foreground-muted leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}