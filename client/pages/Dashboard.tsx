import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  useAuth,
  useUser,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Clock,
  Trophy,
  Target,
  Play,
  CheckCircle,
  Calendar,
  TrendingUp,
  Users,
  Star,
  Award,
} from "lucide-react";

const enrolledCourses = [
  {
    id: 1,
    title: "React Fundamentals & Hooks",
    progress: 65,
    nextLesson: "State Management with Context",
    instructor: "Sarah Johnson",
    totalLessons: 42,
    completedLessons: 27,
    estimatedTime: "3 hours remaining",
  },
  {
    id: 2,
    title: "Python Data Analysis",
    progress: 30,
    nextLesson: "Data Visualization with Matplotlib",
    instructor: "David Park",
    totalLessons: 48,
    completedLessons: 15,
    estimatedTime: "8 hours remaining",
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    progress: 85,
    nextLesson: "API Testing & Documentation",
    instructor: "Mike Chen",
    totalLessons: 56,
    completedLessons: 48,
    estimatedTime: "2 hours remaining",
  },
];

const achievements = [
  {
    title: "First Course Completed",
    description: "Completed your first SkillForge course",
    icon: <Trophy className="w-6 h-6" />,
    earned: true,
  },
  {
    title: "Week Streak",
    description: "Learn for 7 consecutive days",
    icon: <Target className="w-6 h-6" />,
    earned: true,
  },
  {
    title: "Code Master",
    description: "Complete 10 coding challenges",
    icon: <Award className="w-6 h-6" />,
    earned: false,
  },
];

const stats = [
  {
    label: "Courses Enrolled",
    value: "3",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    label: "Hours Learned",
    value: "47",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    label: "Certificates Earned",
    value: "1",
    icon: <Award className="w-5 h-5" />,
  },
  {
    label: "Learning Streak",
    value: "12 days",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

export default function Dashboard() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  // Show loading state while Clerk is loading
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Redirect to sign in if not authenticated
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Access Restricted</h1>
          <p className="text-muted-foreground mb-6">
            Please sign in to access your learning dashboard.
          </p>
          <div className="space-y-2">
            <Link to="/sign-in">
              <Button className="w-full brand-gradient">Sign In</Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
              <Link to="/dashboard" className="text-primary font-medium">
                Dashboard
              </Link>
              <Link
                to="/courses"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/community"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Community
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost">Profile</Button>
              <Button variant="outline">Log Out</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">
            Continue your learning journey and achieve your goals.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Current Courses */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Courses</h2>
                <Link to="/courses">
                  <Button variant="outline">Browse More Courses</Button>
                </Link>
              </div>

              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            with {course.instructor}
                          </p>
                        </div>
                        <Badge variant="secondary">
                          {course.progress}% complete
                        </Badge>
                      </div>

                      <Progress value={course.progress} className="mb-4" />

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Next: </span>
                          {course.nextLesson}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {course.completedLessons}/{course.totalLessons}{" "}
                          lessons
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.estimatedTime}
                        </div>
                        <Button size="sm" className="brand-gradient">
                          <Play className="w-4 h-4 mr-2" />
                          Continue Learning
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          Completed lesson "React Hooks in Practice"
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          Started "Python Data Analysis" course
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Yesterday
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          Earned "Week Streak" achievement
                        </p>
                        <p className="text-xs text-muted-foreground">
                          3 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            {/* Learning Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Learning Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Weekly Goal</span>
                      <span className="text-sm text-muted-foreground">
                        12/15 hrs
                      </span>
                    </div>
                    <Progress value={80} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Monthly Goal</span>
                      <span className="text-sm text-muted-foreground">
                        47/60 hrs
                      </span>
                    </div>
                    <Progress value={78} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 ${!achievement.earned ? "opacity-50" : ""}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          achievement.earned
                            ? "brand-gradient text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {achievement.earned ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          achievement.icon
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {achievement.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/courses">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Browse Courses
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Learning
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Join Study Group
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
