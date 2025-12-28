# Zap Shift Client

A modern parcel delivery and logistics management platform built with React, Vite, and Firebase. This application provides a comprehensive solution for users to send parcels, track deliveries, manage their accounts, and for admins/riders to manage operations.

## Overview

Zap Shift is a delivery management system that connects customers, riders, and administrators in a seamless ecosystem for efficient parcel delivery services across multiple coverage areas.

### Key Features

- **User Parcel Management**: Send and track parcels in real-time
- **Rider Dashboard**: View assigned deliveries and manage delivery status
- **Admin Dashboard**: Approve riders, assign deliveries, and manage users
- **User Authentication**: Secure login/register with Firebase
- **Payment Processing**: Integrated payment gateway for parcel services
- **Real-time Tracking**: Track parcel locations using maps
- **Role-based Access Control**: Different dashboards for users, riders, and admins

## Tech Stack

- **Frontend Framework**: [React 19](https://react.dev)
- **Build Tool**: [Vite 7](https://vitejs.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- **State Management**: [TanStack Query (React Query)](https://tanstack.com/query)
- **Routing**: [React Router 7](https://reactrouter.com)
- **Form Handling**: [React Hook Form](https://react-hook-form.com)
- **HTTP Client**: [Axios](https://axios-http.com)
- **Backend Services**: [Firebase](https://firebase.google.com)
- **Maps**: [Leaflet](https://leafletjs.com) + [React Leaflet](https://react-leaflet.dev)
- **Charts**: [Recharts](https://recharts.org)
- **UI Components**: [React Icons](https://react-icons.github.io/react-icons), [Swiper](https://swiperjs.com), [Carousel](https://github.com/leandrowd/react-responsive-carousel)
- **Notifications**: [SweetAlert2](https://sweetalert2.github.io)
- **Date Utilities**: [date-fns](https://date-fns.org)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Forbidden/       # Forbidden access component
│   └── Logo/           # Logo component
├── contexts/           # React Context (Auth)
├── Firebase/           # Firebase configuration
├── hooks/              # Custom React hooks
│   ├── useAuth.jsx     # Authentication hook
│   ├── useAxios.jsx    # HTTP client hook
│   ├── useAxiosSecure.jsx # Secure HTTP client
│   └── useRole.jsx     # User role hook
├── layouts/            # Layout components
│   ├── AuthLayout.jsx
│   ├── DashboardLayout.jsx
│   └── RootLayout.jsx
├── pages/              # Page components
│   ├── Auth/           # Login, Register, Social Login
│   ├── Dashboard/      # Admin, Rider, User dashboards
│   ├── home/           # Home page sections
│   ├── ParcelTrack/    # Parcel tracking
│   ├── Rider/          # Rider information
│   ├── SendParcel/     # Send parcel form
│   ├── Coverage/       # Coverage information
│   └── shared/         # NavBar, Footer
├── routes/             # Route definitions
│   ├── AdminRoute.jsx
│   ├── PrivateRoute.jsx
│   ├── RiderRoute.jsx
│   └── routes.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jihanurrahman33/zap-shift-client.git
   cd zap-shift-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a `.env.local` file in the root directory
   - Add your Firebase credentials:
     ```
     VITE_API_KEY=your_api_key
     VITE_AUTH_DOMAIN=your_auth_domain
     VITE_PROJECT_ID=your_project_id
     VITE_STORAGE_BUCKET=your_storage_bucket
     VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_APP_ID=your_app_id
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## Project Features

### Authentication & Authorization
- Firebase-based authentication (Email/Password + Social Login)
- Role-based access control (User, Rider, Admin)
- Protected routes for different user types
- AuthContext for global authentication state

### Dashboard Pages
- **User Dashboard**: Track personal parcels, payment history, send new parcels
- **Rider Dashboard**: View assigned deliveries, completed deliveries, approve status
- **Admin Dashboard**: Approve riders, assign deliveries, manage users, view analytics

### Core Functionality
- **Parcel Management**: Send parcels with pickup/delivery details
- **Payment Processing**: Integrated payment gateway with success/cancellation handling
- **Real-time Tracking**: Map-based parcel tracking with Leaflet
- **User Management**: Admin controls for user approval and management

### Data & Analytics
- Service center and warehouse information from JSON files
- Review and rating system
- Charts and analytics using Recharts
- Real-time data fetching with React Query

## Styling

The project uses Tailwind CSS with DaisyUI for pre-built, styled components. All styling follows the utility-first approach:

```jsx
<div className="card bg-white shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-4">Title</h2>
</div>
```

## State Management

- **Authentication**: AuthContext (Provider pattern)
- **Server State**: TanStack React Query for caching and synchronization
- **Local State**: React hooks (useState, useReducer)

## HTTP Requests

Two axios instances are available through custom hooks:
- `useAxios()` - Public API requests
- `useAxiosSecure()` - Authenticated API requests with token handling

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.
