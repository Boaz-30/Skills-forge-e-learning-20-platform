import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
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

      {/* Content */}
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader className="pb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Construction className="w-8 h-8 text-muted-foreground" />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{description}</p>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                This page is currently under development. Please check back
                later or continue exploring other parts of SkillForge.
              </p>
              <Link to="/">
                <Button className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
