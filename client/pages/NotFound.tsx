import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
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

      {/* 404 Content */}
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader className="pb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <CardTitle className="text-3xl brand-gradient-text">404</CardTitle>
            <p className="text-xl font-semibold">Page Not Found</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved, deleted, or the URL might be incorrect.
            </p>
            <div className="space-y-3">
              <Link to="/">
                <Button className="w-full brand-gradient">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="w-full">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
