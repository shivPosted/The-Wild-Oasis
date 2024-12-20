import styled, { css } from "styled-components";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import GlobalStyles from "./styles/globalStyles";
import Users from "./pages/Users";
import { Toaster } from "react-hot-toast";

//NOTE: using StyledApp to apply styles to main element of App component
const StyledApp = styled.main`
  padding: 2rem 4rem;
  max-width: 60%;
  margin: 0 auto;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, //NOTE: time it takes for the data to become stale
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        element: <Dashboard />,
        path: "dashboard",
      },
      {
        element: <Users />,
        path: "users",
      },
      {
        element: <Account />,
        path: "account",
      },
      {
        element: <Settings />,
        path: "settings",
      },
      {
        element: <Cabins />,
        path: "cabins",
      },
      {
        element: <Bookings />,
        path: "bookings",
      },
    ],
  },
  {
    element: <PageNotFound />,
    path: "*",
  },
  {
    element: <Login />,
    path: "login",
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster //NOTE: toast component imported from third pary lib
        gutter={16}
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "400px",
            padding: "16px 24px",
            color: "var(--color-grey-700)",
            backgroundColor: "var(--color--brand)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
export default App;
