# SkillForge - Modern eLearning Platform

![SkillForge Logo](public/placeholder.svg)

SkillForge is a comprehensive eLearning platform designed to teach modern tech skills including Frontend, Backend, Fullstack Development, Database Management, Data Analysis, Machine Learning, and AI. Built with cutting-edge technologies and focused on the Ghanaian market.

## 🚀 Features

### Core Platform Features

- **Course Management**: Browse and enroll in comprehensive tech courses
- **User Authentication**: Secure authentication powered by Clerk
- **Protected Content**: Course content accessible only to authenticated users
- **User Dashboard**: Personalized learning progress tracking
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with shadcn/ui components and TailwindCSS

### Course Categories

- 🎨 **Frontend Development**: React, Vue, Angular, and modern frontend technologies
- 🔧 **Backend Development**: APIs, microservices, and server-side technologies
- 🌐 **Fullstack Development**: Complete web development from frontend to backend
- 🗄️ **Database**: SQL, NoSQL, database design and optimization
- 📊 **Data Analysis**: Python, R, statistics, and data visualization
- 🤖 **Machine Learning & AI**: Deep learning, neural networks, and AI applications

### User Features

- **Course Enrollment**: Smart enrollment system with authentication checks
- **Progress Tracking**: Monitor learning progress across all courses
- **Interactive Learning**: Hands-on coding exercises and real-world projects
- **Certificates**: Earn certificates upon course completion
- **Community Access**: Connect with fellow learners

### Business Features

- **Ghana-Centric Pricing**: All pricing in Ghana Cedis (₵)
- **Mobile Money Support**: Accept MTN, Vodafone, AirtelTigo payments
- **Student Discounts**: Special pricing for Ghanaian university students
- **Contact Sales**: Direct communication channel for enterprise clients

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router 6** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations

### Authentication

- **Clerk** - Complete authentication solution
- **Modal-based Auth** - Seamless sign-in/sign-up experience

### Backend & Deployment

- **Express.js** - Node.js web framework
- **Netlify Functions** - Serverless API endpoints
- **Netlify** - Static site hosting and deployment

### Development Tools

- **Prettier** - Code formatting
- **Vitest** - Unit testing framework
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** or **yarn**
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skillforge.git
cd skillforge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Clerk Configuration
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

### 4. Get Clerk Keys

1. Visit [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Copy your publishable key to `.env.local`

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
skillforge/
├── client/                 # Frontend React application
│   ├── components/         # Reusable UI components
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # React entry point
│   └── global.css         # Global styles
├── server/                # Backend Express server
│   ├── routes/            # API routes
│   └── index.ts           # Server entry point
├── netlify/               # Netlify functions
│   └── functions/         # Serverless functions
├── shared/                # Shared utilities
├── public/                # Static assets
├── .env.local            # Environment variables
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start development server

# Building
npm run build           # Build for production
npm run build:client    # Build client only
npm run build:server    # Build server only

# Testing
npm run test            # Run tests
npm run typecheck       # TypeScript type checking

# Code Quality
npm run format.fix      # Format code with Prettier

# Production
npm start              # Start production server
```

## 🔐 Authentication Setup

SkillForge uses Clerk for authentication. Here's how to set it up:

### 1. Clerk Dashboard Setup

1. Create account at [clerk.com](https://clerk.com)
2. Create a new application
3. Configure sign-in/sign-up options
4. Copy your publishable key

### 2. Environment Configuration

Add your Clerk key to `.env.local`:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

### 3. Authentication Features

- **Modal Authentication**: Sign-in/sign-up modals
- **Protected Routes**: Course content requires authentication
- **User Management**: Automatic user profile management
- **Session Handling**: Persistent login sessions

## 🎨 Styling Guide

### TailwindCSS Classes

The project uses custom brand gradients:

```css
.brand-gradient          /* Purple to blue gradient background */
.brand-gradient-text     /* Purple to blue gradient text */
```

### Component Usage

```jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Usage
<Button className="brand-gradient">Get Started</Button>
<Card>
  <CardHeader>
    <CardTitle>Course Title</CardTitle>
  </CardHeader>
  <CardContent>
    Course content here...
  </CardContent>
</Card>
```

## 🌍 Localization (Ghana)

The platform is specifically tailored for the Ghanaian market:

- **Currency**: All prices in Ghana Cedis (₵)
- **Payment Methods**: Mobile Money (MTN, Vodafone, AirtelTigo)
- **Student Verification**: .edu.gh email support
- **Local Banking**: Bank transfer support for refunds

## 🚀 Deployment

### Netlify Deployment (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/spa`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Manual Build

```bash
npm run build
```

The built files will be in `dist/spa/` directory.

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

Run type checking:

```bash
npm run typecheck
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing component patterns
- Write tests for new features
- Use Prettier for code formatting
- Follow semantic commit messages

## 📝 API Routes

### Available Endpoints

- `GET /api/demo` - Demo endpoint
- More endpoints coming soon...

### Adding New Routes

Create new routes in `server/routes/` directory:

```typescript
import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
  res.json({ message: "Hello from API" });
}
```

## 🔧 Configuration

### Vite Configuration

The project uses custom Vite configuration for:

- React SWC for fast compilation
- Path aliases (`@/` for `client/`)
- Development server proxy

### TailwindCSS Configuration

Custom configuration includes:

- Brand color palette
- Custom animations
- Extended spacing scale
- Typography plugin

## 📱 Browser Support

SkillForge supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Security

- **Authentication**: Handled by Clerk with industry-standard security
- **Environment Variables**: Sensitive data stored securely
- **HTTPS**: All production traffic encrypted
- **Input Validation**: All user inputs validated

## 📈 Performance

- **Vite Build**: Optimized production builds
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Optimized asset loading
- **Caching**: Proper cache headers for static assets

## 🐛 Troubleshooting

### Common Issues

**Dev server not starting:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Clerk authentication errors:**

- Verify your publishable key in `.env.local`
- Check Clerk dashboard configuration
- Ensure environment variables are properly loaded

**Build errors:**

```bash
# Run type checking
npm run typecheck

# Check for linting errors
npm run format.fix
```

## 📞 Support

For support and questions:

- **Email**: support@skillforge.com
- **GitHub Issues**: [Create an issue](https://github.com/your-username/skillforge/issues)
- **Documentation**: [Visit our docs](https://docs.skillforge.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) for authentication
- [shadcn/ui](https://ui.shadcn.com) for beautiful components
- [TailwindCSS](https://tailwindcss.com) for styling
- [Lucide](https://lucide.dev) for icons
- [Netlify](https://netlify.com) for hosting

---

**Made with ❤️ for the Ghanaian tech community**

Transform your career with SkillForge - where modern tech skills meet African innovation.
