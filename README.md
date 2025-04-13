# 🏫 School Management System

[![Deployment Status](https://img.shields.io/badge/deployment-active-brightgreen)](https://mgmt-sys.vercel.app/dashboard/admin)

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

A comprehensive school management application built with Next.js and TypeScript, designed to streamline administrative tasks, enhance communication between teachers, students, and parents, and improve overall efficiency in educational institutions.

## 📋 Overview

This School Management System provides different interfaces for administrators, teachers, students, and parents, each with access to relevant features and information tailored to their role.

## ✨ Features

- **Role-Based Dashboards:** Separate dashboards for administrators, teachers, students, and parents
- **User Management:**
  - Track and manage students, teachers, and parents information
  - User profiles with contact details and personal information
- **Academic Management:**
  - Subject management and curriculum planning
  - Class organization and management
  - Lesson scheduling and tracking
  - Exam and assignment creation and grading
- **Attendance System:** Record and visualize student attendance patterns
- **Events & Calendar:** Schedule and manage school events with an interactive calendar
- **Communication:**
  - Announcement system for important notifications
  - Messaging system between users
- **Results & Reports:** Track and display academic performance and results
- **Finance Tracking:** Visualize income and expenses with interactive charts
- **Responsive Design:** Optimized for both desktop and mobile devices

## 🛠️ Technology Stack

- **Frontend:** React, NextJS
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Charts & Visualization:** Recharts
- **Calendar:** React-Big-Calendar, React-Calendar
- **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

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

[Next.js](https://nextjs.org/)`<br>`
[Tailwind CSS](https://tailwindcss.com/)`<br>`
[Recharts](https://recharts.org/)`<br>`
[React Big Calendar](https://github.com/jquense/react-big-calendar)`<br>`
