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
  Star,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

const courseCategories = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    description: "Master React, Vue, Angular, and modern frontend technologies",
    courses: 12,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Fullstack Development",
    description: "Complete web development from frontend to backend",
    courses: 8,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Development",
    description: "APIs, microservices, and server-side technologies",
    courses: 10,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database",
    description: "SQL, NoSQL, database design and optimization",
    courses: 6,
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <ChartBar className="w-8 h-8" />,
    title: "Data Analysis",
    description: "Python, R, statistics, and data visualization",
    courses: 7,
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning & AI",
    description: "Deep learning, neural networks, and AI applications",
    courses: 9,
    color: "from-pink-500 to-rose-500",
  },
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Interactive Lessons",
    description: "Hands-on coding exercises and real-world projects",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals and experienced developers",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Certificates",
    description:
      "Earn certificates upon course completion to showcase your skills",
  },
];

const stats = [
  { label: "Active Students", value: "50,000+" },
  { label: "Expert Instructors", value: "200+" },
  { label: "Courses Available", value: "150+" },
  { label: "Success Rate", value: "95%" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold brand-gradient-text">
                SkillForge
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/courses"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
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
              <SignedOut>
                <Link to="/sign-in">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="brand-gradient">Get Started</Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-1" />
              Trusted by 50,000+ developers
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Master Modern
              <span className="brand-gradient-text"> Tech Skills</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn Frontend, Backend, Fullstack, Database, Data Analysis,
              Machine Learning, and AI from industry experts. Build real
              projects and advance your career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/courses">
                <Button size="lg" className="brand-gradient text-lg px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Watch Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold brand-gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive courses designed for every skill level,
              from beginner to advanced.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-background"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.courses} courses
                    </span>
                    <Link to="/courses">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose SkillForge?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the tools, resources, and community you need to succeed
              in your tech career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 brand-gradient rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
            <Link to="/register">
              <Button size="lg" className="brand-gradient text-lg px-8">
                <CheckCircle className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold brand-gradient-text">
                  SkillForge
                </span>
              </div>
              <p className="text-muted-foreground">
                Empowering developers with cutting-edge skills and knowledge.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/courses/frontend"
                    className="hover:text-foreground transition-colors"
                  >
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/backend"
                    className="hover:text-foreground transition-colors"
                  >
                    Backend
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/fullstack"
                    className="hover:text-foreground transition-colors"
                  >
                    Fullstack
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/data"
                    className="hover:text-foreground transition-colors"
                  >
                    Data Science
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/help"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SkillForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
