import { useState } from "react";
import { Link } from "react-router-dom";
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
    title: "React Fundamentals",
    description:
      "Master React hooks, components, and modern React development patterns",
    category: "Frontend Development",
    level: "Beginner",
    duration: "8 weeks",
    students: 2400,
    rating: 4.9,
    price: "$79",
    image: "/placeholder.svg",
    instructor: "Sarah Johnson",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Node.js Backend Development",
    description:
      "Build scalable APIs and backend services with Node.js and Express",
    category: "Backend Development",
    level: "Intermediate",
    duration: "10 weeks",
    students: 1800,
    rating: 4.8,
    price: "$99",
    image: "/placeholder.svg",
    instructor: "Mike Chen",
    icon: <Server className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Full-Stack MERN Development",
    description:
      "Complete web applications using MongoDB, Express, React, and Node.js",
    category: "Fullstack Development",
    level: "Advanced",
    duration: "14 weeks",
    students: 3200,
    rating: 4.9,
    price: "$149",
    image: "/placeholder.svg",
    instructor: "Alex Rodriguez",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "PostgreSQL Database Design",
    description: "Master database design, queries, and optimization techniques",
    category: "Database",
    level: "Intermediate",
    duration: "6 weeks",
    students: 1200,
    rating: 4.7,
    price: "$69",
    image: "/placeholder.svg",
    instructor: "Emma Thompson",
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Python Data Analysis",
    description: "Analyze data with pandas, NumPy, and create visualizations",
    category: "Data Analysis",
    level: "Beginner",
    duration: "8 weeks",
    students: 2800,
    rating: 4.8,
    price: "$89",
    image: "/placeholder.svg",
    instructor: "David Park",
    icon: <ChartBar className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Machine Learning with Python",
    description: "Build and deploy ML models using scikit-learn and TensorFlow",
    category: "Machine Learning & AI",
    level: "Advanced",
    duration: "12 weeks",
    students: 1900,
    rating: 4.9,
    price: "$159",
    image: "/placeholder.svg",
    instructor: "Dr. Lisa Wang",
    icon: <Brain className="w-5 h-5" />,
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

export default function Courses() {
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
                className="group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {course.category}
                    </Badge>
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
                  <CardTitle className="text-xl line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">{course.instructor}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold brand-gradient-text">
                        {course.price}
                      </span>
                      <Button className="brand-gradient">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Enroll Now
                      </Button>
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
