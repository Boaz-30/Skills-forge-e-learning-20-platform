import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Play,
  CheckCircle,
  Lock,
  Clock,
  Users,
  Star,
  Download,
  BookOpen,
  Code,
  FileText,
  Award,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Volume2,
  Maximize,
  Settings,
  AlertCircle,
} from "lucide-react";

// Mock enrollment status - In a real app, this would come from your backend/auth system
const mockUserEnrollments = [1, 3, 5]; // User is enrolled in courses 1, 3, and 5

const courseData: { [key: string]: any } = {
  "1": {
    id: 1,
    title: "React Fundamentals & Hooks",
    instructor: "Sarah Johnson",
    instructorTitle: "Senior React Developer at Meta",
    duration: "8 weeks",
    totalLessons: 42,
    completedLessons: 15,
    rating: 4.9,
    students: 2400,
    description:
      "Master React hooks, components, context API, and modern React development patterns with real-world projects",
    modules: [
      {
        id: 1,
        title: "Introduction to React",
        lessons: [
          {
            id: 1,
            title: "What is React?",
            duration: "12:30",
            type: "video",
            completed: true,
            preview: true,
          },
          {
            id: 2,
            title: "Setting up Development Environment",
            duration: "15:45",
            type: "video",
            completed: true,
            preview: false,
          },
          {
            id: 3,
            title: "Your First React App",
            duration: "18:20",
            type: "video",
            completed: true,
            preview: false,
          },
          {
            id: 4,
            title: "Lab: Create a Hello World App",
            duration: "30:00",
            type: "lab",
            completed: false,
            preview: false,
          },
        ],
      },
      {
        id: 2,
        title: "Components and JSX",
        lessons: [
          {
            id: 5,
            title: "Understanding Components",
            duration: "14:15",
            type: "video",
            completed: true,
            preview: false,
          },
          {
            id: 6,
            title: "JSX Syntax and Best Practices",
            duration: "16:30",
            type: "video",
            completed: true,
            preview: false,
          },
          {
            id: 7,
            title: "Props and Component Communication",
            duration: "22:45",
            type: "video",
            completed: false,
            preview: false,
          },
          {
            id: 8,
            title: "Exercise: Building a Card Component",
            duration: "25:00",
            type: "exercise",
            completed: false,
            preview: false,
          },
        ],
      },
      {
        id: 3,
        title: "State and Event Handling",
        lessons: [
          {
            id: 9,
            title: "Introduction to State",
            duration: "13:20",
            type: "video",
            completed: false,
            preview: false,
          },
          {
            id: 10,
            title: "Event Handling in React",
            duration: "17:15",
            type: "video",
            completed: false,
            preview: false,
          },
          {
            id: 11,
            title: "Building Interactive Components",
            duration: "19:30",
            type: "video",
            completed: false,
            preview: false,
          },
        ],
      },
    ],
  },
  "3": {
    id: 3,
    title: "Full-Stack MERN Development",
    instructor: "Alex Rodriguez",
    instructorTitle: "Full-Stack Lead at Netflix",
    duration: "14 weeks",
    totalLessons: 78,
    completedLessons: 8,
    rating: 4.9,
    students: 3200,
    description:
      "Build complete web applications from scratch using MongoDB, Express, React, and Node.js with deployment",
    modules: [
      {
        id: 1,
        title: "MERN Stack Overview",
        lessons: [
          {
            id: 1,
            title: "Introduction to MERN Stack",
            duration: "15:30",
            type: "video",
            completed: true,
            preview: true,
          },
          {
            id: 2,
            title: "Setting up Development Environment",
            duration: "25:45",
            type: "video",
            completed: true,
            preview: false,
          },
        ],
      },
    ],
  },
  "4": {
    id: 4,
    title: "PostgreSQL Database Design & Optimization",
    instructor: "Emma Thompson",
    instructorTitle: "Database Architect at Amazon",
    duration: "6 weeks",
    totalLessons: 34,
    completedLessons: 0,
    rating: 4.7,
    students: 1200,
    description:
      "Master database design, complex queries, indexing, and performance optimization for enterprise applications",
    modules: [
      {
        id: 1,
        title: "Database Fundamentals",
        lessons: [
          {
            id: 1,
            title: "Introduction to PostgreSQL",
            duration: "15:30",
            type: "video",
            completed: false,
            preview: true,
          },
        ],
      },
    ],
  },
};

export default function CourseContent() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // Check if user is enrolled in this course
    const enrolled = mockUserEnrollments.includes(Number(courseId));
    setIsEnrolled(enrolled);

    if (!enrolled) {
      // If not enrolled, redirect to course enrollment
      return;
    }

    // Set the first lesson as current lesson if enrolled
    const course = courseData[courseId || ""];
    if (course && course.modules[0] && course.modules[0].lessons[0]) {
      setCurrentLesson(course.modules[0].lessons[0]);
    }
  }, [courseId]);

  if (!courseId || !courseData[courseId]) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <CardTitle>Course Not Found</CardTitle>
            <CardDescription>
              The course you're looking for doesn't exist.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/courses">
              <Button className="w-full">Browse All Courses</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const course = courseData[courseId];

  if (!isEnrolled) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-orange-600" />
            </div>
            <CardTitle>Enrollment Required</CardTitle>
            <CardDescription>
              You need to enroll in this course to access the content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                This course requires an active subscription. Please choose a
                plan and enroll to start learning.
              </AlertDescription>
            </Alert>
            <div className="space-y-2">
              <Link to="/pricing">
                <Button className="w-full brand-gradient">Choose a Plan</Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="w-full">
                  Back to Courses
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const progress = (course.completedLessons / course.totalLessons) * 100;

  const handleLessonClick = (lesson: any) => {
    if (!lesson.preview && !isEnrolled) {
      return; // Don't allow access to non-preview lessons if not enrolled
    }
    setCurrentLesson(lesson);
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="w-4 h-4" />;
      case "lab":
        return <Code className="w-4 h-4" />;
      case "exercise":
        return <FileText className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold brand-gradient-text">
                  SkillForge
                </span>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center space-x-2">
                <Link
                  to="/courses"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <span className="text-sm font-medium truncate max-w-xs">
                  {course.title}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                {course.completedLessons}/{course.totalLessons} lessons
              </div>
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player & Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-900 rounded-t-lg relative overflow-hidden">
                  {currentLesson ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-white">
                        <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <h3 className="text-xl font-semibold mb-2">
                          {currentLesson.title}
                        </h3>
                        <p className="text-gray-300">
                          Duration: {currentLesson.duration}
                        </p>
                        <Button className="mt-4 brand-gradient">
                          <Play className="w-4 h-4 mr-2" />
                          Play Video
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-white">
                      <div className="text-center">
                        <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <h3 className="text-xl font-semibold">
                          Select a lesson to start learning
                        </h3>
                      </div>
                    </div>
                  )}
                </div>

                {currentLesson && (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">
                          {currentLesson.type.charAt(0).toUpperCase() +
                            currentLesson.type.slice(1)}
                        </Badge>
                        {currentLesson.completed && (
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Resources
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-2">
                      {currentLesson.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Learn the fundamentals and best practices in this
                      comprehensive lesson.
                    </p>

                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button size="sm" className="brand-gradient">
                        Next Lesson
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {course.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{course.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {course.rating} rating
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.totalLessons} lessons
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Course Progress</span>
                      <span>{Math.round(progress)}% complete</span>
                    </div>
                    <Progress value={progress} />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-semibold text-sm">
                          {course.instructor
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{course.instructor}</p>
                        <p className="text-sm text-muted-foreground">
                          {course.instructorTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Curriculum */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Course Curriculum
                </CardTitle>
                <CardDescription>
                  {course.totalLessons} lessons across {course.modules.length}{" "}
                  modules
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="multiple" defaultValue={["module-1"]}>
                  {course.modules.map((module: any, moduleIndex: number) => (
                    <AccordionItem
                      key={module.id}
                      value={`module-${module.id}`}
                      className="border-0"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                        <div className="flex items-center justify-between w-full">
                          <div className="text-left">
                            <h4 className="font-medium">{module.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {module.lessons.length} lessons
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-0 pb-0">
                        <div className="space-y-0">
                          {module.lessons.map(
                            (lesson: any, lessonIndex: number) => (
                              <button
                                key={lesson.id}
                                onClick={() => handleLessonClick(lesson)}
                                className={`w-full text-left px-6 py-3 hover:bg-muted/50 transition-colors ${
                                  currentLesson?.id === lesson.id
                                    ? "bg-muted"
                                    : ""
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2">
                                      {lesson.completed ? (
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                      ) : lesson.preview ? (
                                        getLessonIcon(lesson.type)
                                      ) : (
                                        <Lock className="w-4 h-4 text-muted-foreground" />
                                      )}
                                      <span
                                        className={`text-sm ${
                                          lesson.completed
                                            ? "line-through text-muted-foreground"
                                            : ""
                                        }`}
                                      >
                                        {lesson.title}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {lesson.preview && (
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Free
                                      </Badge>
                                    )}
                                    <span className="text-xs text-muted-foreground">
                                      {lesson.duration}
                                    </span>
                                  </div>
                                </div>
                              </button>
                            ),
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resources
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
                <Link to="/dashboard">
                  <Button variant="outline" className="w-full justify-start">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
