# Overview

Gifted Tech Website is a modern, responsive portfolio and business website for Gifted Tech Nexus, a digital solutions company. The website showcases services, projects, and expertise in web development, mobile app development, UI/UX design, and other tech solutions. Built as a single-page application with multiple routes, it features an animated interface, interactive components, dark/light theme support, and a comprehensive blog system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router DOM for client-side navigation with multiple pages
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component system for accessible, customizable components
- **Animations**: Framer Motion for smooth transitions and interactive animations
- **State Management**: React Context for theme and authentication state management

## Component Structure
- **Layout Components**: Reusable Header and Footer components with responsive navigation
- **UI Components**: Comprehensive set of reusable components (buttons, cards, forms, etc.) following shadcn/ui patterns
- **Page Components**: Individual pages for different routes (Home, Services, Projects, Blogs, Contact, etc.)
- **Context Providers**: Theme context for dark/light mode switching and Auth context for user management

## Styling and Theming
- **Design System**: HSL-based color system with CSS custom properties for dynamic theming
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Dark Mode**: Built-in dark/light theme switching with system preference detection
- **Typography**: Consistent font scaling and spacing using Tailwind's typography system

## Authentication System
- **Mock Authentication**: Demo authentication system for user login/registration functionality
- **User Management**: Context-based user state management with localStorage persistence
- **Protected Routes**: Authentication-aware routing (currently commented out for demo purposes)

## Content Management
- **Static Content**: Blog posts and project data stored in JSON files for easy management
- **Dynamic Content**: Contact forms and user interactions handled through service layer
- **Image Assets**: External image hosting via Supabase for optimized loading

## Performance Optimizations
- **Code Splitting**: Dynamic imports for better bundle optimization
- **Image Optimization**: Responsive images with proper loading strategies
- **Animation Performance**: Optimized Framer Motion configurations for smooth animations
- **Component Memoization**: Strategic use of React.memo and optimization techniques

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React Router DOM, React Hook Form for form management
- **TypeScript**: Full TypeScript integration for type safety
- **Build Tools**: Vite with SWC for fast compilation, ESLint for code quality

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Accessible component primitives for complex UI elements
- **Framer Motion**: Animation library for interactive user experiences
- **Lucide React**: Icon library for consistent iconography

## Content and Data
- **React Markdown**: Markdown rendering for blog content with syntax highlighting
- **Syntax Highlighting**: Prism.js integration for code block rendering
- **Date Handling**: date-fns for date formatting and manipulation

## External Services
- **Supabase**: Image storage and hosting for static assets
- **Vercel**: Deployment platform with custom domain support
- **Social Media Integration**: Links to various social platforms (GitHub, Twitter, Instagram, etc.)

## Development Tools
- **TypeScript Configuration**: Strict type checking with custom path aliases
- **ESLint**: Code linting with React and TypeScript rules
- **Component Tagging**: Development-only component identification system

## Additional Utilities
- **Class Management**: clsx and tailwind-merge for conditional styling
- **Toast Notifications**: React Toastify for user feedback
- **Carousel Components**: Embla Carousel for interactive content sliders
- **Query Management**: TanStack Query for potential future API integration