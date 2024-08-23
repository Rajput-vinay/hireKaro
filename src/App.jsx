import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import AppLayout from "./layouts/app-layout";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";
import "./App.css";

// Lazy load components
const LandingPage = React.lazy(() => import("./pages/landing"));
const Onboarding = React.lazy(() => import("./pages/onboarding"));
const PostJob = React.lazy(() => import("./pages/post-job"));
const JobListing = React.lazy(() => import("./pages/jobListing"));
const MyJobs = React.lazy(() => import("./pages/my-jobs"));
const SavedJobs = React.lazy(() => import("./pages/saved-jobs"));
const JobPage = React.lazy(() => import("./pages/job"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <Onboarding />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <JobListing />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <PostJob />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <MyJobs />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <SavedJobs />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <JobPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
