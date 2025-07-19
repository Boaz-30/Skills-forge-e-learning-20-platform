import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import ClerkSignIn from "./pages/ClerkSignIn";
import ClerkSignUp from "./pages/ClerkSignUp";
import Dashboard from "./pages/Dashboard";
import CourseContent from "./pages/CourseContent";
import ContactSales from "./pages/ContactSales";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseContent />} />

        {/* Authentication Routes */}
        <Route path="/sign-in/*" element={<ClerkSignIn />} />
        <Route path="/sign-up/*" element={<ClerkSignUp />} />

        {/* Legacy routes for backward compatibility */}
        <Route path="/login" element={<ClerkSignIn />} />
        <Route path="/register" element={<ClerkSignUp />} />

        {/* Fallback auth for development without Clerk */}
        <Route
          path="/sign-in-fallback"
          element={
            <PlaceholderPage
              title="Sign In"
              description="Clerk authentication is not configured. Please set up your Clerk keys to enable login functionality."
            />
          }
        />
        <Route
          path="/sign-up-fallback"
          element={
            <PlaceholderPage
              title="Create Account"
              description="Clerk authentication is not configured. Please set up your Clerk keys to enable registration functionality."
            />
          }
        />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <PlaceholderPage
              title="Admin Dashboard"
              description="Manage courses, users, and platform content from the admin panel."
            />
          }
        />
        <Route
          path="/admin/login"
          element={
            <PlaceholderPage
              title="Admin Login"
              description="Secure access for SkillForge administrators to manage the platform."
            />
          }
        />

        {/* Course Categories */}
        <Route
          path="/courses/frontend"
          element={
            <PlaceholderPage
              title="Frontend Development"
              description="Master React, Vue, Angular, and modern frontend technologies with our comprehensive courses."
            />
          }
        />
        <Route
          path="/courses/backend"
          element={
            <PlaceholderPage
              title="Backend Development"
              description="Build robust APIs and server-side applications with Node.js, Python, and more."
            />
          }
        />
        <Route
          path="/courses/fullstack"
          element={
            <PlaceholderPage
              title="Fullstack Development"
              description="Complete web development from frontend to backend with our fullstack courses."
            />
          }
        />
        <Route
          path="/courses/data"
          element={
            <PlaceholderPage
              title="Data Science & Analysis"
              description="Learn data analysis, machine learning, and AI with Python, R, and industry tools."
            />
          }
        />

        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactSales />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route
          path="/careers"
          element={
            <PlaceholderPage
              title="Careers"
              description="Join our team and help us build the future of online tech education."
            />
          }
        />
        <Route
          path="/blog"
          element={
            <PlaceholderPage
              title="Blog"
              description="Stay updated with the latest tech trends, tutorials, and insights from our experts."
            />
          }
        />

        {/* Support Pages */}
        <Route
          path="/help"
          element={
            <PlaceholderPage
              title="Help Center"
              description="Find answers to common questions and get support for your SkillForge experience."
            />
          }
        />
        <Route
          path="/community"
          element={
            <PlaceholderPage
              title="Community"
              description="Connect with fellow learners, share knowledge, and grow together in our community."
            />
          }
        />
        <Route
          path="/privacy"
          element={
            <PlaceholderPage
              title="Privacy Policy"
              description="Learn how we protect your privacy and handle your personal information."
            />
          }
        />
        <Route
          path="/terms"
          element={
            <PlaceholderPage
              title="Terms of Service"
              description="Review the terms and conditions for using the SkillForge platform."
            />
          }
        />

        {/* Demo and Marketing Pages */}
        <Route
          path="/demo"
          element={
            <PlaceholderPage
              title="Platform Demo"
              description="Watch a demo of our platform to see how SkillForge can transform your learning experience."
            />
          }
        />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
