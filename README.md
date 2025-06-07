# 🏫 School Management System

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

A comprehensive school management application built with modern web technologies, featuring role-based dashboards, real-time data management, and advanced authentication. Designed to streamline administrative tasks and enhance communication between teachers, students, and parents.

## 📋 Overview

This School Management System provides distinct interfaces for administrators, teachers, students, and parents, each with access to relevant features and information tailored to their role and permissions.

## ✨ Key Features

### 🔐 Authentication & Authorization

- **Clerk Authentication**: Complete user authentication with social sign-on support
- **Role-Based Access Control**: Differentiated permissions for admin, teacher, student, and parent roles
- **Secure Route Protection**: Middleware-based route protection with automatic redirects
- **Session Management**: Persistent sessions with automatic token refresh

### 👥 User Management

- **Multi-Role System**: Comprehensive user profiles for all educational stakeholders
- **Bulk Operations**: Mass attendance marking and data export capabilities
- **Profile Management**: Image uploads with Cloudinary integration
- **Parent-Student Relationships**: Hierarchical user relationships and permissions

### 📚 Academic Management

- **Curriculum Planning**: Subject creation and teacher assignment
- **Class Organization**: Capacity management with enrollment limits
- **Lesson Scheduling**: Dynamic scheduling with day-based organization
- **Assessment Tools**: Exam and assignment creation with automated grading
- **Results Tracking**: Comprehensive performance analytics and reporting

### 📊 Data Visualization & Analytics

- **Interactive Charts**: Student demographics and attendance visualization using Recharts
- **Financial Tracking**: Revenue and expense monitoring with seasonal analysis
- **Performance Metrics**: Real-time KPIs and academic progress indicators
- **Attendance Analytics**: Weekly attendance patterns and trend analysis

### 📅 Event & Communication System

- **Interactive Calendar**: Event scheduling with react-big-calendar integration
- **Announcements**: Targeted messaging system with class-specific notifications
- **Event Management**: School-wide and class-specific event coordination
- **Real-time Updates**: Automatic data refresh with revalidation

### 🎨 Modern UI/UX

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Theme switching capability
- **Intuitive Navigation**: Role-based menu systems
- **Form Validation**: Client and server-side validation with Zod schemas

### ⚡ Performance & Infrastructure

- **Server Actions**: Direct server function calls without API routes
- **Static Site Generation**: Optimized build times and SEO
- **Image Optimization**: Cloudinary integration for media management
- **Database Optimization**: Connection pooling and query optimization

## 🛠️ Technology Stack

### Frontend & Framework

- **Next.js 14.2.5**: App Router with Server Components and Server Actions
- **React 18**: Modern React with concurrent features
- **TypeScript 5**: Full type safety across the application
- **Tailwind CSS 3.4.1**: Utility-first CSS framework with custom design system

### Backend & Database

- **Prisma ORM 6.7.0**: Type-safe database client with PostgreSQL
- **PostgreSQL 15**: Robust relational database with advanced features
- **Server Actions**: Next.js server-side functions for data mutations
- **API Routes**: RESTful endpoints for complex operations

### Authentication & Security

- **Clerk 6.21.0**: Complete authentication solution with social providers
- **Middleware Protection**: Route-level security with role-based access
- **Environment Security**: Secure environment variable management
- **CSRF Protection**: Built-in security measures

### Media & File Management

- **Cloudinary Integration**: Image upload, optimization, and transformation
- **next-cloudinary**: React components for seamless media handling
- **File Validation**: Secure upload restrictions and processing

### Data Visualization

- **Recharts**: Interactive charts and data visualization
- **React Big Calendar**: Advanced calendar functionality
- **Custom Analytics**: Financial and academic performance metrics

### Development Tools

- **ESLint**: Code quality and consistency
- **Docker Support**: Containerized development and deployment
- **Hot Reloading**: Instant development feedback
- **TypeScript Configuration**: Strict type checking and modern features

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v18.17 or higher)
- npm or yarn package manager
- PostgreSQL database (local or cloud)
- Cloudinary account for media management
- Clerk account for authentication

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/school-management-system.git
cd school-management-system
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. 🔒 Environment Configuration
Create a .env file in the root directory

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/school_mgmt"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
NEXT_PUBLIC_CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Application Security
NEXTAUTH_SECRET="your_nextauth_secret"
```

5. Database setup:

```bash
# Generate prisma client
npx prisma generate

# Run database migration
npx prisma migrate dev --[name] init

# Seed the database with sample data
npx prisma db seed
```

5. Start the development server:

```bash
npm run dev
#or
yarn dev
```

6. Access the application by visiting http://localhost:3000 in your browser.

## 📁 Project Structure

```
school-management-system/
├── prisma/                    # Database configuration
│   ├── migrations/           # Database migration files
│   ├── schema.prisma        # Database schema definition
│   └── seed.ts              # Database seeding script
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (dashboard)/     # Protected dashboard routes
│   │   │   ├── admin/      # Admin-specific pages
│   │   │   ├── teacher/    # Teacher-specific pages
│   │   │   ├── student/    # Student-specific pages
│   │   │   ├── parent/     # Parent-specific pages
│   │   │   ├── list/       # CRUD operations for entities
│   │   │   └── layout.tsx  # Dashboard layout component
│   │   ├── api/            # API route handlers
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   └── layout.tsx      # Root layout with providers
│   ├── components/         # Reusable UI components
│   │   ├── forms/         # Form components with validation
│   │   ├── charts/        # Data visualization components
│   │   └── ui/           # Base UI components
│   ├── lib/               # Utility functions and configurations
│   │   ├── actions.ts     # Server actions for data mutations
│   │   ├── prisma.ts      # Prisma client configuration
│   │   ├── utils.ts       # Helper functions
│   │   └── validations.ts # Zod schema definitions
│   └── middleware.ts      # Clerk authentication middleware
├── public/               # Static assets and images
├── docker-compose.yml   # Docker configuration for development
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 👥 User Roles & Permissions

The system supports the following user roles:

### Administrator

- Complete system access and configuration
- User management across all roles
- Financial and academic reporting
- System settings and maintenance

### Teacher

- Class and student management within assigned classes
- Lesson planning and assessment creation
- Attendance tracking and grade management
- Communication with students and parents

### Student

- Personal dashboard with schedule and grades
- Assignment and exam viewing
- Performance tracking and analytics
- Communication with teachers

### Parent

- Child progress monitoring and attendance tracking
- Communication with teachers and school
- Event and announcement viewing
- Academic performance reports

## 🔧 Advanced Configuration

### Database Optimization

The application uses Prisma with PostgreSQL for optimal performance:
```javascript
// Connection pooling configuration
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Optimized queries with relations
include: {
  _count: { select: { students: true } },
  students: { select: { name: true, surname: true } }
}
```

### Authentication Flow

Clerk middleware provides seamless authentication:
```javascript
// Automatic route protection
export default clerkMiddleware((auth, req) => {
  const { sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  
  // Role-based redirects
  if (!allowedRoles.includes(role)) {
    return NextResponse.redirect(new URL(`/${role}`, req.url));
  }
});
```

## Performance Features

- **Image Optimization**: Cloudinary automatic optimization and responsive delivery
- **Caching Strategy**: Next.js static generation with revalidation
- **Bundle Optimization**: Code splitting and lazy loading
- **Database Indexing**: Optimized queries with proper indexing

## 🔒 Security Features

- **Role-Based Access Control**: Granular permissions for different user types
- **Input Validation**: Zod schemas for client and server-side validation
- **CSRF Protection**: Built-in Next.js security measures
- **Secure Authentication**: Clerk-provided security best practices
- **Environment Protection**: Secure environment variable handling

## 🤝 Contributing

* Fork the repository
* Create a new branch (git checkout -b feature/amazing-feature)
* Make your changes
* Commit your changes (git commit -m 'Add some amazing feature')
* Push to the branch (git push origin feature/amazing-feature)
* Open a Pull Request

#### Development Guidelines

Use TypeScript for all new code
Follow the existing component structure
Implement proper error handling
Add appropriate loading states
Ensure responsive design compatibility

## 📜 License

Distributed under the MIT License. See LICENSE for more information.

## 📞 Support & Community

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Comprehensive guides and API documentation
- **Community**: Join our community discussions

## 📞 Contact

Project Link: https://github.com/andricolae/school-mgmt

## 🙏 Acknowledgements

[Next.js](https://nextjs.org/)<br>
[Tailwind CSS](https://tailwindcss.com/)
[Recharts](https://recharts.org/)
[React Big Calendar](https://github.com/jquense/react-big-calendar)
[Clerk Auth](https://clerk.com/)
[Prisma ORM](https://www.prisma.io/)
[Cloudinary](https://cloudinary.com/)

### Built with ❤️ for the education community
