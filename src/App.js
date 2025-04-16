import './App.css';
import { Navigate } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// ProtectedRoute to handle authentication
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    // If user is authenticated, render the children
    return children;
  }
  // If not authenticated, redirect to login page
  return <Navigate to="/login" replace />;
};

// Define the router with all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

]);

function App() {
  return (
    <div className="App">
      {/* Use RouterProvider to render the router */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;