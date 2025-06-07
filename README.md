# 🏫 School Management System

[![Deployment Status](https://img.shields.io/badge/deployment-active-brightgreen)](https://mgmt-sys.vercel.app/dashboard/admin)

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

3. Start the development server:

```bash
npm run dev
#or
yarn dev
```

4. Open http://localhost:3000 in your browser to see the application.

## 📁 Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # Pages and layouts
│   │   ├── dashboard/  # Dashboard pages for different user roles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Homepage
│   ├── components/     # Reusable UI components
│   │   ├── Menu.tsx    # Navigation menu
│   │   ├── Charts/     # Data visualization components
│   │   └── ...
│   ├── lib/            # Utility functions and data
│   └── styles/         # Global CSS and styling
└── package.json        # Project dependencies and scripts
```

## 👥 User Roles

The system supports the following user roles:

- **Administrator:** Complete access to all system features
- **Teacher:** Access to class management, student data, and teaching resources
- **Student:** View assignments, timetable, results, and communicate with teachers
- **Parent:** Monitor child's progress, attendance, and communicate with teachers

## 🔒 Environment Variables

Create a .env.local file with the following variables

```bash
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_connection_string
```

## 🧪 Testing

```bash
# Run tests
npm test
# or
yarn test
```

## 🤝 Contributing

* Fork the repository
* Create a new branch (git checkout -b feature/amazing-feature)
* Make your changes
* Commit your changes (git commit -m 'Add some amazing feature')
* Push to the branch (git push origin feature/amazing-feature)
* Open a Pull Request

## 📜 License

Distributed under the MIT License. See LICENSE for more information.

## 📞 Contact

Project Link: https://github.com/andricolae/school-mgmt

## 🙏 Acknowledgements

[Next.js](https://nextjs.org/)<br>
[Tailwind CSS](https://tailwindcss.com/)
[Recharts](https://recharts.org/)
[React Big Calendar](https://github.com/jquense/react-big-calendar)
