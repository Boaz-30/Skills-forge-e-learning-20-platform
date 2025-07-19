import { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import {
  CheckCircle,
  X,
  Users,
  GraduationCap,
  Briefcase,
  Crown,
  Zap,
  Shield,
  Heart,
  Globe,
  Award,
  BookOpen,
  MessageCircle,
  Video,
  Download,
  Clock,
  Target,
} from "lucide-react";

const pricingPlans = [
  {
    id: "student",
    name: "Student",
    description: "Perfect for students and learners just getting started",
    icon: <GraduationCap className="w-6 h-6" />,
    monthlyPrice: 29,
    yearlyPrice: 290,
    popular: false,
    features: [
      "Access to all course content",
      "Basic project assignments",
      "Community forum access",
      "Email support",
      "Basic certificates",
      "Mobile app access",
      "Offline video downloads",
      "Student verification required",
    ],
    limitations: [
      "No 1-on-1 mentoring",
      "Limited career services",
      "No priority support",
    ],
    cta: "Start Learning",
    benefits: [
      "Save 50% with student discount",
      "Full access to learning materials",
      "Join a community of learners",
    ],
  },
  {
    id: "individual",
    name: "Individual",
    description: "Ideal for professionals advancing their careers",
    icon: <Briefcase className="w-6 h-6" />,
    monthlyPrice: 79,
    yearlyPrice: 790,
    popular: true,
    features: [
      "Everything in Student plan",
      "Advanced project portfolio",
      "1-on-1 monthly mentoring",
      "Priority email & chat support",
      "Industry-recognized certificates",
      "Career coaching sessions",
      "Job placement assistance",
      "Interview preparation",
      "Coding challenges & assessments",
      "Networking event invitations",
      "Resume review service",
      "LinkedIn profile optimization",
    ],
    limitations: ["No team collaboration tools"],
    cta: "Advance Your Career",
    benefits: [
      "95% job placement rate",
      "Average 40% salary increase",
      "Personalized learning path",
      "Direct industry connections",
    ],
  },
  {
    id: "organization",
    name: "Organization",
    description: "Comprehensive solution for teams and enterprises",
    icon: <Users className="w-6 h-6" />,
    monthlyPrice: 199,
    yearlyPrice: 1990,
    popular: false,
    features: [
      "Everything in Individual plan",
      "Team management dashboard",
      "Bulk user management",
      "Custom learning paths",
      "Advanced analytics & reporting",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom integrations (SSO, LMS)",
      "White-label options",
      "On-site training sessions",
      "Team collaboration tools",
      "Progress tracking & reporting",
      "Custom certificate branding",
      "Volume discounts available",
      "Flexible billing options",
    ],
    limitations: [],
    cta: "Transform Your Team",
    benefits: [
      "Upskill entire teams efficiently",
      "Reduce hiring costs by 60%",
      "Custom enterprise solutions",
      "Dedicated success manager",
    ],
    note: "Price per user. Minimum 5 users. Contact us for volume discounts.",
  },
];

const features = [
  {
    name: "Course Access",
    student: "Full access to all courses",
    individual: "Full access + advanced tracks",
    organization: "Full access + custom tracks",
  },
  {
    name: "Projects",
    student: "Basic projects",
    individual: "Portfolio projects",
    organization: "Team projects + custom",
  },
  {
    name: "Mentoring",
    student: false,
    individual: "1-on-1 monthly sessions",
    organization: "Dedicated team mentoring",
  },
  {
    name: "Support",
    student: "Email only",
    individual: "Email + Chat priority",
    organization: "24/7 phone + dedicated",
  },
  {
    name: "Certificates",
    student: "Basic completion",
    individual: "Industry-recognized",
    organization: "Custom branded",
  },
  {
    name: "Career Services",
    student: false,
    individual: "Full career support",
    organization: "Team career planning",
  },
  {
    name: "Analytics",
    student: "Personal progress",
    individual: "Detailed analytics",
    organization: "Team & enterprise analytics",
  },
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a 7-day free trial for all plans. No credit card required to start your trial.",
  },
  {
    question: "What's included in the student discount?",
    answer:
      "Students get 50% off the Individual plan price. You'll need to verify your student status with a valid .edu email or student ID.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied, we'll provide a full refund.",
  },
  {
    question: "Can I pay monthly instead of yearly?",
    answer:
      "Absolutely! While yearly plans offer significant savings, monthly billing is available for all plans.",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

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
              <Link to="/pricing" className="text-primary font-medium">
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
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="brand-gradient-text">Learning Path</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Flexible pricing plans designed for every learner, from students to
            enterprise teams
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span
              className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly
            </span>
            <Badge variant="secondary" className="ml-2">
              Save 17%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="brand-gradient text-white px-3 py-1">
                      <Crown className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 mx-auto mb-4 brand-gradient rounded-xl flex items-center justify-center text-white">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>

                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold brand-gradient-text">
                        $
                        {isYearly
                          ? Math.round(plan.yearlyPrice / 12)
                          : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Billed yearly (${plan.yearlyPrice})
                      </p>
                    )}
                    {plan.note && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {plan.note}
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Benefits:</h4>
                    {plan.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">
                      Features Included:
                    </h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground">
                        Not Included:
                      </h4>
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-start">
                          <X className="w-4 h-4 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/register" className="block">
                    <Button
                      className={`w-full ${plan.popular ? "brand-gradient" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-muted-foreground">
              See what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 pr-8">Feature</th>
                  <th className="text-center py-4 px-4">Student</th>
                  <th className="text-center py-4 px-4">Individual</th>
                  <th className="text-center py-4 px-4">Organization</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 pr-8 font-medium">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.student === "boolean" ? (
                        feature.student ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.student}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.individual === "boolean" ? (
                        feature.individual ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.individual}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.organization === "boolean" ? (
                        feature.organization ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.organization}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of learners and start your journey today with our
            7-day free trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="brand-gradient text-lg px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Contact Sales
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Cancel anytime • 30-day money-back
            guarantee
          </p>
        </div>
      </section>
    </div>
  );
}
