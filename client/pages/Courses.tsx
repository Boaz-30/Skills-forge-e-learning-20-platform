import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Code2,
  Database,
  Server,
  Brain,
  ChartBar,
  Layers,
  Search,
  Clock,
  Users,
  Star,
  BookOpen,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "React Fundamentals & Hooks",
    description:
      "Master React hooks, components, context API, and modern React development patterns with real-world projects",
    category: "Frontend Development",
    level: "Beginner",
    duration: "8 weeks",
    students: 2400,
    rating: 4.9,
    price: "$79",
    originalPrice: "$129",
    image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg",
    instructor: "Sarah Johnson",
    instructorTitle: "Senior React Developer at Meta",
    icon: <Code2 className="w-5 h-5" />,
    lessons: 42,
    projects: 8,
    certificate: true,
    tags: ["React", "JavaScript", "Hooks", "JSX", "Components"],
    what_you_learn: [
      "React fundamentals and component architecture",
      "State management with hooks and context",
      "Building interactive user interfaces",
      "React Router for navigation",
      "Performance optimization techniques",
      "Testing React applications",
    ],
    prerequisites: ["Basic JavaScript knowledge", "HTML & CSS fundamentals"],
    difficulty: "Beginner to Intermediate",
  },
  {
    id: 2,
    title: "Node.js Backend Development",
    description:
      "Build scalable REST APIs, microservices, and backend applications with Node.js, Express, and MongoDB",
    category: "Backend Development",
    level: "Intermediate",
    duration: "10 weeks",
    students: 1800,
    rating: 4.8,
    price: "$99",
    originalPrice: "$159",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    instructor: "Mike Chen",
    instructorTitle: "Backend Architect at Google",
    icon: <Server className="w-5 h-5" />,
    lessons: 56,
    projects: 12,
    certificate: true,
    tags: ["Node.js", "Express", "MongoDB", "API", "Authentication"],
    what_you_learn: [
      "Node.js fundamentals and ecosystem",
      "Building RESTful APIs with Express",
      "Database integration with MongoDB",
      "Authentication and authorization",
      "Error handling and validation",
      "API testing and documentation",
    ],
    prerequisites: ["JavaScript ES6+", "Basic understanding of databases"],
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Full-Stack MERN Development",
    description:
      "Build complete web applications from scratch using MongoDB, Express, React, and Node.js with deployment",
    category: "Fullstack Development",
    level: "Advanced",
    duration: "14 weeks",
    students: 3200,
    rating: 4.9,
    price: "$149",
    originalPrice: "$249",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    instructor: "Alex Rodriguez",
    instructorTitle: "Full-Stack Lead at Netflix",
    icon: <Layers className="w-5 h-5" />,
    lessons: 78,
    projects: 15,
    certificate: true,
    tags: ["MERN", "React", "Node.js", "MongoDB", "Full-Stack"],
    what_you_learn: [
      "Complete MERN stack development",
      "Frontend and backend integration",
      "State management with Redux",
      "Real-time applications with Socket.io",
      "Deployment to AWS and Heroku",
      "DevOps and CI/CD pipelines",
    ],
    prerequisites: ["React knowledge", "Node.js basics", "JavaScript ES6+"],
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "PostgreSQL Database Design & Optimization",
    description:
      "Master database design, complex queries, indexing, and performance optimization for enterprise applications",
    category: "Database",
    level: "Intermediate",
    duration: "6 weeks",
    students: 1200,
    rating: 4.7,
    price: "$69",
    originalPrice: "$119",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    instructor: "Emma Thompson",
    instructorTitle: "Database Architect at Amazon",
    icon: <Database className="w-5 h-5" />,
    lessons: 34,
    projects: 6,
    certificate: true,
    tags: ["PostgreSQL", "SQL", "Database Design", "Optimization", "Indexing"],
    what_you_learn: [
      "Advanced SQL queries and functions",
      "Database design and normalization",
      "Indexing and query optimization",
      "Stored procedures and triggers",
      "Database security and backup",
      "Performance monitoring and tuning",
    ],
    prerequisites: [
      "Basic SQL knowledge",
      "Understanding of relational databases",
    ],
    difficulty: "Intermediate to Advanced",
  },
  {
    id: 5,
    title: "Python Data Analysis & Visualization",
    description:
      "Analyze data, create insights, and build interactive visualizations using pandas, NumPy, and Matplotlib",
    category: "Data Analysis",
    level: "Beginner",
    duration: "8 weeks",
    students: 2800,
    rating: 4.8,
    price: "$89",
    originalPrice: "$149",
    image: "https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg",
    instructor: "David Park",
    instructorTitle: "Data Scientist at Microsoft",
    icon: <ChartBar className="w-5 h-5" />,
    lessons: 48,
    projects: 10,
    certificate: true,
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    what_you_learn: [
      "Python fundamentals for data science",
      "Data manipulation with pandas",
      "Statistical analysis and hypothesis testing",
      "Data visualization with matplotlib and seaborn",
      "Working with APIs and web scraping",
      "Real-world data analysis projects",
    ],
    prerequisites: ["Basic programming knowledge", "High school mathematics"],
    difficulty: "Beginner to Intermediate",
  },
  {
    id: 6,
    title: "Machine Learning & AI with Python",
    description:
      "Build intelligent systems using scikit-learn, TensorFlow, and PyTorch with hands-on AI projects",
    category: "Machine Learning & AI",
    level: "Advanced",
    duration: "12 weeks",
    students: 1900,
    rating: 4.9,
    price: "$159",
    originalPrice: "$259",
    image:
      "https://images.pexels.com/photos/18068747/pexels-photo-18068747.png",
    instructor: "Dr. Lisa Wang",
    instructorTitle: "AI Research Scientist at OpenAI",
    icon: <Brain className="w-5 h-5" />,
    lessons: 72,
    projects: 18,
    certificate: true,
    tags: [
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
      "Neural Networks",
      "AI",
    ],
    what_you_learn: [
      "Machine learning algorithms and theory",
      "Deep learning with neural networks",
      "Computer vision and NLP projects",
      "Model training and optimization",
      "MLOps and model deployment",
      "AI ethics and responsible AI development",
    ],
    prerequisites: [
      "Python programming",
      "Statistics",
      "Linear algebra basics",
    ],
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Vue.js Complete Guide",
    description:
      "Master Vue.js 3 with Composition API, Pinia state management, and build modern single-page applications",
    category: "Frontend Development",
    level: "Intermediate",
    duration: "9 weeks",
    students: 1650,
    rating: 4.8,
    price: "$85",
    originalPrice: "$139",
    image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg",
    instructor: "Sophie Martin",
    instructorTitle: "Frontend Engineer at Spotify",
    icon: <Code2 className="w-5 h-5" />,
    lessons: 54,
    projects: 9,
    certificate: true,
    tags: ["Vue.js", "Composition API", "Pinia", "JavaScript", "SPA"],
    what_you_learn: [
      "Vue.js 3 fundamentals and Composition API",
      "Component communication and props",
      "State management with Pinia",
      "Vue Router for routing",
      "Building and deploying Vue applications",
      "Testing Vue components",
    ],
    prerequisites: [
      "JavaScript ES6+",
      "HTML & CSS",
      "Basic component concepts",
    ],
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Angular Enterprise Development",
    description:
      "Build large-scale enterprise applications with Angular, RxJS, NgRx, and enterprise-grade architecture",
    category: "Frontend Development",
    level: "Advanced",
    duration: "11 weeks",
    students: 980,
    rating: 4.7,
    price: "$129",
    originalPrice: "$199",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    instructor: "James Wilson",
    instructorTitle: "Senior Angular Developer at IBM",
    icon: <Code2 className="w-5 h-5" />,
    lessons: 68,
    projects: 12,
    certificate: true,
    tags: ["Angular", "TypeScript", "RxJS", "NgRx", "Enterprise"],
    what_you_learn: [
      "Angular architecture and best practices",
      "Reactive programming with RxJS",
      "State management with NgRx",
      "Angular Material and UI components",
      "Testing strategies for Angular apps",
      "Performance optimization techniques",
    ],
    prerequisites: [
      "TypeScript",
      "JavaScript ES6+",
      "Object-oriented programming",
    ],
    difficulty: "Advanced",
  },
];

const categories = [
  "All Categories",
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "Database",
  "Data Analysis",
  "Machine Learning & AI",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

// Mock enrollment status - In a real app, this would come from your backend/auth system
const mockUserEnrollments = [1, 3, 5]; // User is enrolled in courses 1, 3, and 5

export default function Courses() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

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
              <Link to="/courses" className="text-primary font-medium">
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

      {/* Header */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Explore Our <span className="brand-gradient-text">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our extensive library of courses designed to advance
              your tech career
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full lg:w-40">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs bg-white/90">
                      {course.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={
                        course.level === "Beginner"
                          ? "default"
                          : course.level === "Intermediate"
                            ? "secondary"
                            : "destructive"
                      }
                      className="text-xs"
                    >
                      {course.level}
                    </Badge>
                  </div>
                  {course.certificate && (
                    <div className="absolute bottom-3 left-3">
                      <Badge className="text-xs bg-green-600 text-white">
                        Certificate
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">
                        {course.instructor}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {course.instructorTitle}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.tags.slice(0, 3).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {course.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {course.rating}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          ({course.students.toLocaleString()} students)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold brand-gradient-text">
                          {course.price}
                        </span>
                        {course.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {course.originalPrice}
                          </span>
                        )}
                      </div>
                      {mockUserEnrollments.includes(course.id) ? (
                        <Link to={`/course/${course.id}`}>
                          <Button className="brand-gradient">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Continue Learning
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          className="brand-gradient"
                          onClick={() => navigate("/pricing")}
                        >
                          Enroll Now
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
