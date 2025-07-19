import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Server,
  Brain,
  ChartBar,
  Layers,
  Users,
  BookOpen,
  Trophy,
  Target,
  Globe,
  Heart,
  CheckCircle,
  Star,
  Award,
  Zap,
} from "lucide-react";

const courseCategories = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    description:
      "Master modern frontend technologies and create stunning user interfaces",
    courses: [
      "React Fundamentals & Hooks",
      "Vue.js Complete Guide",
      "Angular Development",
      "JavaScript ES6+",
      "TypeScript Mastery",
      "CSS Grid & Flexbox",
      "Responsive Web Design",
      "Frontend Testing",
    ],
    skills: [
      "React",
      "Vue",
      "Angular",
      "JavaScript",
      "TypeScript",
      "CSS",
      "HTML",
      "Testing",
    ],
    duration: "6-12 weeks per course",
    projects:
      "Build 15+ real-world projects including e-commerce sites, dashboards, and mobile apps",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Development",
    description: "Build robust server-side applications and APIs",
    courses: [
      "Node.js & Express Mastery",
      "Python Django Framework",
      "RESTful API Design",
      "GraphQL Development",
      "Microservices Architecture",
      "Server Security & Auth",
      "API Testing & Documentation",
      "Cloud Services Integration",
    ],
    skills: [
      "Node.js",
      "Python",
      "Express",
      "Django",
      "GraphQL",
      "REST",
      "Security",
      "AWS",
    ],
    duration: "8-14 weeks per course",
    projects:
      "Create APIs, microservices, and backend systems used by thousands of users",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Fullstack Development",
    description: "Complete web development from frontend to backend",
    courses: [
      "MERN Stack Development",
      "MEAN Stack Complete",
      "Next.js Full-Stack",
      "Django + React",
      "Laravel + Vue",
      "DevOps for Developers",
      "Full-Stack Testing",
      "Deployment & Scaling",
    ],
    skills: [
      "Full-Stack",
      "MERN",
      "MEAN",
      "Next.js",
      "DevOps",
      "Docker",
      "CI/CD",
      "Scaling",
    ],
    duration: "12-20 weeks per course",
    projects:
      "Build complete applications from scratch including social platforms and marketplaces",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database",
    description: "Master database design, optimization, and management",
    courses: [
      "SQL Fundamentals",
      "PostgreSQL Advanced",
      "MongoDB & NoSQL",
      "Database Design & Modeling",
      "Query Optimization",
      "Database Security",
      "Data Warehousing",
      "Database Administration",
    ],
    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Design",
      "Optimization",
      "Security",
      "Admin",
    ],
    duration: "6-10 weeks per course",
    projects: "Design and optimize databases for high-traffic applications",
  },
  {
    icon: <ChartBar className="w-8 h-8" />,
    title: "Data Analysis",
    description: "Analyze data and create insights with modern tools",
    courses: [
      "Python for Data Analysis",
      "R Programming & Statistics",
      "Data Visualization",
      "Pandas & NumPy Mastery",
      "Excel Advanced Techniques",
      "Business Intelligence",
      "Statistical Analysis",
      "Data Storytelling",
    ],
    skills: [
      "Python",
      "R",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Tableau",
      "Excel",
      "Statistics",
    ],
    duration: "8-12 weeks per course",
    projects:
      "Analyze real datasets and create compelling data stories for business decisions",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning & AI",
    description: "Build intelligent systems and AI applications",
    courses: [
      "Machine Learning Fundamentals",
      "Deep Learning with TensorFlow",
      "Natural Language Processing",
      "Computer Vision",
      "Neural Networks",
      "AI Ethics & Bias",
      "MLOps & Model Deployment",
      "Reinforcement Learning",
    ],
    skills: [
      "ML",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "Neural Networks",
      "MLOps",
      "AI Ethics",
    ],
    duration: "10-16 weeks per course",
    projects:
      "Create AI models for image recognition, chatbots, and predictive systems",
  },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence in Education",
    description:
      "We're committed to providing the highest quality tech education with industry-relevant content.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Accessibility",
    description:
      "Making world-class tech education accessible to learners everywhere, regardless of location.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Student Success",
    description:
      "Your success is our mission. We provide comprehensive support throughout your learning journey.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Driven",
    description:
      "Building a supportive community where learners and experts collaborate and grow together.",
  },
];

const achievements = [
  {
    number: "50,000+",
    label: "Students Graduated",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    number: "95%",
    label: "Job Placement Rate",
    icon: <Award className="w-5 h-5" />,
  },
  {
    number: "4.9/5",
    label: "Average Rating",
    icon: <Star className="w-5 h-5" />,
  },
  {
    number: "200+",
    label: "Industry Partners",
    icon: <Zap className="w-5 h-5" />,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold brand-gradient-text">
                SkillForge
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/courses"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Courses
              </Link>
              <Link to="/about" className="text-primary font-medium">
                About
              </Link>
              <Link
                to="/pricing"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Log In</Button>
              </Link>
              <Link to="/register">
                <Button className="brand-gradient">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="brand-gradient-text">SkillForge</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're on a mission to democratize tech education and empower the
            next generation of developers, data scientists, and AI engineers
            with cutting-edge skills.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 brand-gradient rounded-full flex items-center justify-center text-white mr-2">
                    {achievement.icon}
                  </div>
                  <span className="text-2xl font-bold brand-gradient-text">
                    {achievement.number}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              Founded by industry veterans who saw the gap between traditional
              education and industry needs
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              SkillForge was born from a simple observation: the tech industry
              was evolving faster than traditional education could keep up. Our
              founders, having worked at leading tech companies like Google,
              Microsoft, and Netflix, witnessed firsthand the skills gap that
              exists between what students learn and what the industry actually
              needs.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In 2020, we set out to bridge this gap by creating a learning
              platform that combines academic rigor with practical, hands-on
              experience. Our curriculum is designed by industry experts and
              updated regularly to reflect the latest trends and technologies.
            </p>
            <p className="text-lg leading-relaxed">
              Today, SkillForge has helped over 50,000 students transition into
              successful tech careers, with a 95% job placement rate. We're
              proud to be trusted by both learners and employers worldwide as
              the go-to platform for modern tech education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 brand-gradient rounded-xl flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="brand-gradient-text">Course Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive programs designed to take you from beginner to
              industry professional
            </p>
          </div>

          <div className="space-y-16">
            {courseCategories.map((category, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center text-white mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-muted-foreground">
                        {category.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {category.projects}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to="/courses">
                    <Button className="brand-gradient">
                      Explore {category.title} Courses
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Courses in this Track
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers who are advancing their careers with
            SkillForge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="brand-gradient text-lg px-8">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Courses
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
